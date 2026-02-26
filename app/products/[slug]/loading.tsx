export default function ProductLoading() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <div className="animate-pulse space-y-4">
        <div className="h-80 rounded-xl bg-slate-200" />
        <div className="h-8 w-2/3 rounded bg-slate-200" />
        <div className="h-4 w-full rounded bg-slate-200" />
        <div className="h-4 w-4/5 rounded bg-slate-200" />
      </div>
    </section>
  );
}
