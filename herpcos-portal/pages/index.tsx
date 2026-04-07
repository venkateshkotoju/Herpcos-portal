import Head from "next/head";
import Link from "next/link";
import Disclaimer from "../components/Disclaimer";

const features = [
  {
    title: "Expert Chat",
    description: "Get answers to your PCOS questions through our interactive AI-powered chat.",
    href: "/chat",
    color: "bg-purple-100 border-purple-300",
    btnColor: "bg-purple-600 hover:bg-purple-800",
    icon: "&#128172;",
  },
  {
    title: "Q&A Library",
    description: "Browse a curated library of frequently asked questions about PCOS.",
    href: "/qa",
    color: "bg-pink-100 border-pink-300",
    btnColor: "bg-pink-500 hover:bg-pink-700",
    icon: "&#10067;",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>HerPCOS Portal - Your PCOS Expert Resource</title>
        <meta name="description" content="Your trusted resource for understanding Polycystic Ovary Syndrome (PCOS)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center py-10">
        <h1 className="text-5xl font-bold text-purple-700 mb-4">
          Welcome to HerPCOS Portal
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-2 text-lg">
          Your trusted resource for understanding Polycystic Ovary Syndrome (PCOS) —
          symptoms, treatments, nutrition, and lifestyle tips.
        </p>
        <p className="text-purple-500 font-medium mb-6">
          You are not alone. We are here to help.
        </p>

        <Disclaimer />

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`border rounded-2xl p-6 text-left shadow-sm ${feature.color}`}
            >
              <div className="text-4xl mb-3" dangerouslySetInnerHTML={{ __html: feature.icon }} />
              <h2 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h2>
              <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
              <Link
                href={feature.href}
                className={`inline-block ${feature.btnColor} text-white px-5 py-2 rounded-xl text-sm font-medium transition-colors`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-lavender rounded-2xl p-8 bg-purple-50 border border-purple-100">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">What is PCOS?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder affecting people with ovaries.
            It involves irregular menstrual cycles, elevated androgen levels, and polycystic ovaries.
            PCOS affects approximately 1 in 10 people of reproductive age and is a leading cause of
            infertility — but with the right knowledge and support, it can be managed effectively.
          </p>
        </div>
      </div>
    </>
  );
}
