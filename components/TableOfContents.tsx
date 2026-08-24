interface Item {
  id: string;
  label: string;
}

export default function TableOfContents({ items }: { items: Item[] }) {
  return (
    <nav className="bg-white rounded-2xl border border-pink-100 shadow-sm p-6" aria-label="Table of contents">
      <p className="text-xs font-semibold text-pink-600 uppercase tracking-wide mb-3">
        In This Guide
      </p>
      <ol className="space-y-1.5">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm text-gray-600 hover:text-pink-600 transition-colors flex gap-2"
            >
              <span className="text-gray-400">{i + 1}.</span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
