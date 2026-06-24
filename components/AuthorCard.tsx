interface Props {
  lastUpdated?: string;
}

export default function AuthorCard({ lastUpdated = "June 24, 2025" }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-5">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Avatar + identity */}
        <div className="flex items-center gap-4 flex-1">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-base shrink-0">
            H
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">
              HerPCOS Editorial Team
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              Evidence-based health content for women with PCOS
            </p>
          </div>
        </div>

        {/* Dates */}
        <div className="flex items-center gap-5 text-xs text-gray-500 sm:text-right shrink-0">
          <div>
            <p className="text-gray-400">Last reviewed</p>
            <p className="font-medium text-gray-700 mt-0.5">{lastUpdated}</p>
          </div>
          <div className="h-8 w-px bg-pink-100 hidden sm:block" />
          <div className="flex items-center gap-1.5 bg-pink-50 text-pink-700 px-3 py-1.5 rounded-full">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium text-xs">Evidence-based</span>
          </div>
        </div>
      </div>

      {/* Disclaimer strip */}
      <div className="mt-4 pt-4 border-t border-pink-50 flex items-start gap-2">
        <svg className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <p className="text-xs text-gray-500 leading-relaxed">
          This content is for general informational purposes only and does not constitute medical advice.{" "}
          <span className="text-pink-600 font-medium">
            Always consult a qualified healthcare provider for diagnosis and treatment.
          </span>
        </p>
      </div>
    </div>
  );
}
