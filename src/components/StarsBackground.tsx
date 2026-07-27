"use client";

export function StarsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Layer 1 - small stars */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-80" />

      {/* Tiny stars using multiple box shadows (lightweight & pretty) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, #e2e8f0, transparent),
            radial-gradient(1px 1px at 40px 70px, #e2e8f0, transparent),
            radial-gradient(1px 1px at 50px 160px, #e2e8f0, transparent),
            radial-gradient(1.5px 1.5px at 90px 40px, #e2e8f0, transparent),
            radial-gradient(1px 1px at 130px 80px, #e2e8f0, transparent),
            radial-gradient(1px 1px at 160px 120px, #e2e8f0, transparent),
            radial-gradient(1.5px 1.5px at 200px 50px, #c7d2fe, transparent),
            radial-gradient(1px 1px at 250px 180px, #e2e8f0, transparent),
            radial-gradient(1px 1px at 300px 20px, #e2e8f0, transparent),
            radial-gradient(1.5px 1.5px at 350px 90px, #e2e8f0, transparent)
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "400px 200px",
          opacity: 0.6,
        }}
      />
    </div>
  );
}