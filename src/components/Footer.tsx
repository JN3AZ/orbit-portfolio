export function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-10">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-slate-500">
        <p>Built with Next.js, Prisma & a little help from Grok.</p>
        <p className="mt-1">© {new Date().getFullYear()} Orbit</p>
      </div>
    </footer>
  );
}