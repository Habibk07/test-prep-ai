export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-400">
          AI Test Prep Platform
        </p>

        <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
          Smarter test prep for SAT, ACT, AP, and beyond.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Practice questions, AI tutoring, adaptive learning, and daily study
          plans in one place.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/practice"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-950"
          >
            Start Practice
          </a>

          <a
            href="/dashboard"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white"
          >
            View Dashboard
          </a>
        </div>
      </div>
    </main>
  );
}
