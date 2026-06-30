import Link from "next/link";

interface Props {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  breadcrumbLabel: string;
}

export default function GuideSchema({ title, description, url, datePublished, breadcrumbLabel }: Props) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://herpcos.com/" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://herpcos.com/guides" },
      { "@type": "ListItem", position: 3, name: breadcrumbLabel, item: url },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: "HerPCOS Editorial Team",
      url: "https://herpcos.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "HerPCOS Portal",
      url: "https://herpcos.com",
    },
    about: {
      "@type": "MedicalCondition",
      name: "Polycystic Ovary Syndrome",
      alternateName: "PCOS",
    },
    medicalAudience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-1">
        <ol className="flex items-center gap-1.5 text-xs text-gray-400">
          <li>
            <Link href="/" className="hover:text-pink-600 transition-colors">
              Home
            </Link>
          </li>
          <li>›</li>
          <li>
            <Link href="/guides" className="hover:text-pink-600 transition-colors">
              Guides
            </Link>
          </li>
          <li>›</li>
          <li className="text-gray-600 font-medium">{breadcrumbLabel}</li>
        </ol>
      </nav>
    </>
  );
}
