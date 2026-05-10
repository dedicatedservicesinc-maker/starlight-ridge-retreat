export default function SectionShell({ title, subtitle, hero, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-green-950 px-6 md:px-16 pb-16">
      <div className="max-w-7xl mx-auto">
        {hero}
        <div className="text-center py-12">
          <h1 className="text-5xl md:text-7xl font-serif">{title}</h1>
          <div className="w-48 h-px bg-lime-700 mx-auto my-4"></div>
          <p className="text-lg text-amber-100/80">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
