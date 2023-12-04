/** @format */

// pages/api/contacts.js
import axios from "axios";
import Contacts from "../models/Contacts";
export default async (req, res) => {
  try {
    // Get the Xero access token from your authentication flow
    const xeroAuthToken = req.query.access_token; // Replace with your actual implementation

    console.log("access toekn==>", req.query, xeroAuthToken);
    // Make the API request to get contacts
    const { data } = await axios.get(
      "https://api.xero.com/api.xro/2.0/Contacts",
      {
        headers: {
          Authorization: `Bearer ${xeroAuthToken}`,
          "Xero-Tenant-Id": "262f4f14-59d9-45cd-be07-0d363f63df17",
          Accept: "application/json",
        },
      }
    );
    console.log(data);
    for (const e of data.Contacts) {
      // console.log(e, "newContact");
      let contact = await Contacts.findOne({
        contactId: e.ContactID,
      });
      if (!contact) {
        contact = await Contacts.create({
          contactId: e.ContactID,
          accountNumber: e.AccountNumber,
          contactStatus: e.ContactStatus,
          name: e.Name,
          firstName: e.FirstName,
          lastName: e.LastName,
          emailAddress: e.EmailAddress,
          addresses: e.Addresses,
          phones: e.Phones,
          contactGroups: e.ContactGroups,
          isSupplier: e.IsSupplier,
          isCustomer: e.IsCustomer,
          contactPersons: e.ContactPersons,
          hasAttachments: e.HasAttachments,
          hasValidationErrors: e.HasValidationErrors,
        });
        console.log(contact, "newContactCreated");
      }
    }
    res.send(data);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
