// Disclaimer banner shown across all pages
export default function Disclaimer() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800 flex items-start gap-2">
      <span className="mt-0.5 shrink-0" aria-hidden="true">
        ⚠️
      </span>
      <p>
        <strong>Disclaimer:</strong> This is for educational purposes only, not
        medical advice. Always consult a qualified healthcare provider for
        diagnosis and treatment.
      </p>
    </div>
  );
}
