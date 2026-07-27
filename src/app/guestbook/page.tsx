import { prisma } from "@/lib/db";
import { GuestbookForm } from "@/components/GuestbookForm";
import { formatDistanceToNow } from "date-fns"; // we'll install this next

export const dynamic = "force-dynamic";

export default async function GuestbookPage() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return (
    <div className="min-h-screen border-t border-slate-800/60">
      <div className="mx-auto max-w-2xl px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Guestbook
          </h1>
          <p className="mt-3 text-slate-400">
            Leave a message in orbit. Future visitors will see it.
          </p>
        </div>

        <div className="mt-12">
          <GuestbookForm />
        </div>

        <div className="mt-16">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-indigo-400">
            Recent Messages
          </h2>

          {messages.length === 0 ? (
            <p className="text-center text-slate-500">
              No messages yet. Be the first to leave one.
            </p>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-medium text-indigo-300">
                      {message.name}
                    </span>
                    <span className="text-xs text-slate-500">
                      {formatDistanceToNow(message.createdAt, { addSuffix: true })}
                    </span>
                  </div>
                  <p className="mt-2 text-slate-300">{message.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}