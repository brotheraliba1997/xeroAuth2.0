/** @format */

import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export async function dbConnect() {
  if (conn.isConnected) {
    return;
  }

  const db = await connect(
    process.env.MONGODB_URI || "mongodb+srv://hamzaali1997h:hamza2259@cluster0.uihexd9.mongodb.net/?retryWrites=true&w=majority"
  );
  // console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;
}
// mongodb+srv://hamzaali1997h:<password>@cluster0.uihexd9.mongodb.net/
// connection.on("connected", () => console.log("Mongodb connected to db"));

// connection.on("error", (err) => console.error("Mongodb Errro:", err.message));
