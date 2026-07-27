/**
 * Applies the Message table migration to a remote Turso database.
 *
 * Usage (from project root):
 *   npm run db:turso
 *
 * Requires TURSO_DATABASE_URL and TURSO_AUTH_TOKEN in .env
 */
import "dotenv/config";
import { createClient } from "@libsql/client";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url || !authToken) {
  console.error(
    "Missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN.\n" +
      "Create a free DB at https://app.turso.tech then add both vars to .env"
  );
  process.exit(1);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const migrationPath = resolve(
  __dirname,
  "../prisma/migrations/20260722024845_add_message/migration.sql"
);
const sql = readFileSync(migrationPath, "utf8");

const client = createClient({ url, authToken });

try {
  await client.executeMultiple(sql);
  console.log("✓ Turso schema applied (Message table ready).");
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  // Re-running is fine if the table already exists
  if (/already exists/i.test(message)) {
    console.log("✓ Message table already exists on Turso.");
  } else {
    console.error("Failed to apply schema:", message);
    process.exit(1);
  }
} finally {
  client.close();
}
