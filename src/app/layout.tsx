import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

/* ------------------------------------------------------------------ */
/*  SEO & Open Graph Metadata (per PRD)                                */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "Sree Charan Addala | Fintech Data & Systems Analyst",
  description:
    "Fintech-focused data and systems analyst with experience in SQL, Python, Power BI, financial modelling, automation, dashboards, business analytics, and software engineering.",
  keywords: [
    "Fintech Data Analyst",
    "SQL",
    "Python",
    "Power BI",
    "Financial Modelling",
    "Business Analytics",
    "Systems Analyst",
    "Data Analyst",
  ],
  authors: [{ name: "Sree Charan Addala" }],
  openGraph: {
    title: "Sree Charan Addala — Fintech Data & Systems Analyst",
    description:
      "Portfolio of Sree Charan Addala, focused on SQL, Python, Power BI, financial modelling, automation, reporting, and systems thinking for fintech and business decision-making.",
    url: "https://portfolio-dppm.vercel.app/",
    siteName: "Sree Charan Addala Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sree Charan Addala — Fintech Data & Systems Analyst",
    description:
      "Portfolio of Sree Charan Addala, focused on SQL, Python, Power BI, financial modelling, automation, reporting, and systems thinking for fintech and business decision-making.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ------------------------------------------------------------------ */
/*  JSON-LD Person Schema                                              */
/* ------------------------------------------------------------------ */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sree Charan Addala",
  jobTitle: "Fintech Data & Systems Analyst",
  url: "https://portfolio-dppm.vercel.app/",
  email: "charanaddalaa7@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/sree-charan-addala-a5b51889",
    "https://github.com/sreecharan07",
  ],
  knowsAbout: [
    "SQL",
    "Python",
    "Power BI",
    "Financial Modelling",
    "Data Analysis",
    "Business Analytics",
  ],
};

/* ------------------------------------------------------------------ */
/*  Root Layout                                                        */
/* ------------------------------------------------------------------ */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://portfolio-dppm.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
