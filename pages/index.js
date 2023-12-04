/** @format */

import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { dbConnect } from "./utils/mongoose";

const inter = Inter({ subsets: ["latin"] });
const buttonStyles = {
  display: "inline-block",
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "5px",
  fontWeight: "bold",
};
export default function Home() {
  return (
    <div>
      <Link href="/authenticate" style={buttonStyles}>
        Authenticate with Xero
      </Link>
    </div>
  );
}
