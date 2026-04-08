export default function Disclaimer() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <svg
            className="w-5 h-5 text-amber-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-amber-800 mb-1">
            Medical Disclaimer
          </h4>
          <p className="text-sm text-amber-700 leading-relaxed">
            The information provided on HerPCOS Portal is for general
            informational and educational purposes only. It is not intended to
            be a substitute for professional medical advice, diagnosis, or
            treatment. Always seek the advice of your physician or other
            qualified health provider with any questions you may have regarding
            a medical condition. Never disregard professional medical advice or
            delay seeking it because of something you have read or received from
            this portal.
          </p>
        </div>
      </div>
    </div>
  );
}
