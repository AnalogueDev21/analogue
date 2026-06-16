export default function AppShell({ children }) {
  return (
    <main className="min-h-screen bg-analogue-paper text-analogue-ink">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-5 py-5 sm:px-8">
        {children}
      </div>
    </main>
  );
}
