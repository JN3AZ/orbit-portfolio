import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function resolveDatabaseUrl() {
  // Prefer Turso when a real URL is set (empty .env values must not win).
  const tursoUrl = process.env.TURSO_DATABASE_URL?.trim();
  if (tursoUrl) return tursoUrl;

  const localUrl = process.env.DATABASE_URL?.trim();
  // Map Prisma's usual "file:./dev.db" (schema-relative) to project-root path for the adapter.
  if (localUrl === "file:./dev.db" || localUrl === "file:dev.db") {
    return "file:./prisma/dev.db";
  }
  if (localUrl) return localUrl;

  return "file:./prisma/dev.db";
}

function createPrismaClient() {
  const url = resolveDatabaseUrl();
  const authToken = process.env.TURSO_AUTH_TOKEN?.trim() || undefined;

  const adapter = new PrismaLibSQL({
    url,
    ...(authToken ? { authToken } : {}),
  });

  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
