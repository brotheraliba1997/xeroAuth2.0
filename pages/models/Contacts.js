/** @format */

import { Schema, model, models } from "mongoose";

const contactSchema = new Schema(
  {
    contactId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    accountNumber: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    contactStatus: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    emailAddress: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    addresses: {
      type: Array,
      required: true,
      trim: true,
    },
    phones: {
      type: Array,
      required: true,
      trim: true,
    },
    contactGroups: {
      type: Array,
      trim: true,
    },
    isSupplier: {
      type: Boolean,
      default: false,
      trim: true,
    },
    isCustomer: {
      type: Boolean,
      default: false,
      trim: true,
    },
    contactPersons: {
      type: Array,
      trim: true,
    },
    hasAttachments: {
      type: Boolean,
      default: false,
      trim: true,
    },
    hasValidationErrors: {
      type: Boolean,
      default: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Contact || model("Contact", contactSchema);
