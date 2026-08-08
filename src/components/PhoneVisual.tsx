export default function PhoneVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] animate-float sm:max-w-[320px]">
      <div className="absolute -inset-8 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -right-6 top-10 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative aspect-[9/19] overflow-hidden rounded-[2.5rem] border border-white/20 bg-gradient-to-b from-ink-600 to-ink-950 shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
        <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-3">
          <div className="h-6 w-24 rounded-full bg-ink-950" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,39,0.25),transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(59,130,246,0.2),transparent_45%)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 font-display text-xl font-bold text-gold">
            AM
          </div>
          <p className="font-display text-lg font-bold text-silver-50">
            Apple Care
          </p>
          <p className="mt-2 text-xs tracking-wide text-silver-300">
            Repair · Parts · Home Service
          </p>
          <div className="mt-8 w-full space-y-2">
            {['Screen fixed', 'Battery fresh', 'Ready to go'].map((t) => (
              <div
                key={t}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-silver-200"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>
    </div>
  )
}
