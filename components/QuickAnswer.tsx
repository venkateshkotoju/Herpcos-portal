interface Props {
  question: string;
  answer: string;
}

export default function QuickAnswer({ question, answer }: Props) {
  return (
    <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6">
      <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-2">
        Quick Answer
      </p>
      <p className="font-semibold text-gray-900 mb-2">{question}</p>
      <p className="text-gray-700 leading-relaxed text-sm">{answer}</p>
    </div>
  );
}
