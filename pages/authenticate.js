// pages/authenticate.js
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { xeroConfig } from "../oauthConfig";

const Authenticate = () => {
  const router = useRouter();

  useEffect(() => {
    const authenticate = async () => {
      const url = `https://login.xero.com/identity/connect/authorize?response_type=code&client_id=${xeroConfig.clientId}&redirect_uri=${xeroConfig.redirectUri}&scope=${xeroConfig.scope}`;

      window.location.href = url;
    };

    authenticate();
  }, []);

  return <div>Redirecting to Xero...</div>;
};

export default Authenticate;
