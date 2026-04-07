// Site footer
export default function Footer() {
  return (
    <footer className="bg-white border-t border-rose-100 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} HerPCOS Expert Portal &mdash; Educational
        use only. Not a substitute for medical advice.
      </div>
    </footer>
  );
}
