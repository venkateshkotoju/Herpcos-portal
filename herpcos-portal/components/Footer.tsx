export default function Footer() {
  return (
    <footer className="bg-purple-50 border-t border-purple-100 text-center text-sm text-gray-500 py-6 mt-10">
      <p>
        &copy; {new Date().getFullYear()} HerPCOS Portal. All rights reserved.
      </p>
      <p className="mt-1 text-xs text-gray-400">
        Not a substitute for professional medical advice, diagnosis, or treatment.
      </p>
    </footer>
  );
}
