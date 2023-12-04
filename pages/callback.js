// pages/callback.js
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { xeroConfig } from "../oauthConfig";

const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    const fetchTokens = async () => {
      const code = router.query.code;

      console.log("code==>", router.query);
      const tokenUrl = "https://identity.xero.com/connect/token";
      const data = new URLSearchParams();
      data.append("grant_type", "authorization_code");
      data.append("code", code);
      data.append("redirect_uri", xeroConfig.redirectUri);

      const response = await axios.post(tokenUrl, data, {
        auth: {
          username: xeroConfig.clientId,
          password: xeroConfig.clientSecret,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      console.log("Tokens:", response.data);
      localStorage.setItem("xero-auth",JSON.stringify(response.data));
      // Store tokens in your app's state or context
      // Redirect to the desired page
      router.push("/dashboard");
    };

    if (router.query.code) {
      fetchTokens();
    }
  }, [router]);

  return <div>Processing...</div>;
};

export default Callback;
