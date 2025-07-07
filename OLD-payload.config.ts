import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import path from "path";
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";
import { Pages } from "./collections/Pages";
import { Navigation } from "./collections/Navigation";

export default buildConfig({
  admin: {
    user: "users",
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "mongodb://localhost:27017/analytix-pro",
  }),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3000",
  collections: [
    Users,
    Media,
    Pages,
    Navigation,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
