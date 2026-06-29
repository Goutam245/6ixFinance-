export const Ticker = () => {
  const items = [
    "TSX-V Listed", "CSE Listed", "NEO Listed",
    "SEDAR+ Reporting", "NI 52-109 Compliance",
    "MD&A Preparation", "AIF Filing",
    "Board Reporting", "PCAOB Ready",
    "CEO/CFO Certification", "Audit Committee Support",
    "Investor Relations",
  ];
  const row = (
    <div className="flex items-center gap-10 px-5 shrink-0">
      {items.map((t, i) => (
        <span key={i} className="font-mono text-[12px] text-blue-300 whitespace-nowrap">
          {t} <span className="text-teal/30 ml-10">·</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="ticker-strip border-y border-white/5 bg-background/60 backdrop-blur-sm py-3 overflow-hidden">
      <div className="ticker-track">
        {row}{row}
      </div>
    </div>
  );
};
