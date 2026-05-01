import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

let client;
let db;

function getDatabase() {
  if (!client) {
    const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/tilecraft";
    client = new MongoClient(uri);
    db = client.db();
  }

  return db;
}

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET || "tilecraft-local-build-secret-change-before-deploy",
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  database: mongodbAdapter(getDatabase()),
  emailAndPassword: {
    enabled: true
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }
  },
  user: {
    additionalFields: {
      image: {
        type: "string",
        required: false
      }
    }
  }
});
