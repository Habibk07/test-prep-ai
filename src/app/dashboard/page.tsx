export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold">Dashboard</h1>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">Accuracy</p>
            <p className="mt-2 text-4xl font-bold">82%</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">Questions Answered</p>
            <p className="mt-2 text-4xl font-bold">24</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">Weakest Topic</p>
            <p className="mt-2 text-4xl font-bold">Algebra</p>
          </div>
        </div>
      </div>
    </main>
  );
}