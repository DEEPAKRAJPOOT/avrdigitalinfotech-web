import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Agreement",
    paragraphs: [
      "These Terms and Conditions (“Terms”) govern your access to and use of the website and related communications of AVR Digital Infotech (“AVR”, “we”, “us”, or “our”). By accessing or using our website, you agree to be bound by these Terms.",
      "If you are entering into a separate written agreement with us for services (such as a statement of work or master services agreement), that agreement will prevail over conflicting provisions here to the extent of the conflict.",
    ],
  },
  {
    title: "2. Services & Website Content",
    paragraphs: [
      "Information on this website describes our capabilities in areas such as software development, design, consulting, and related technology services. Descriptions are illustrative and do not constitute an offer binding on AVR unless confirmed in writing.",
      "Project scope, timelines, deliverables, fees, and liabilities for custom work are defined only in discrete contracts between you and AVR.",
    ],
  },
  {
    title: "3. Intellectual Property",
    paragraphs: [
      "Unless otherwise stated, content on this site — including text, graphics, logos, and layout — is owned by AVR or its licensors and is protected by applicable intellectual property laws.",
      "You may view and temporarily download copies of materials for personal, non-commercial use only, without alteration or removal of proprietary notices. Any other use requires our prior written consent.",
    ],
  },
  {
    title: "4. Acceptable Use",
    paragraphs: [
      "You agree not to misuse the website — including probing, disrupting, scraping in violation of robots or rate limits, introducing malware, attempting unauthorised access to systems or data, or using the site in any unlawful manner.",
      "We may suspend or terminate access where we reasonably believe Terms have been breached or where required to protect our systems or clients.",
    ],
  },
  {
    title: "5. Disclaimer of Warranties",
    paragraphs: [
      "The website and its content are provided on an “as is” and “as available” basis. To the fullest extent permitted by law, AVR disclaims all warranties — express or implied — including merchantability, fitness for a particular purpose, and non-infringement.",
      "We do not warrant that the site will be uninterrupted, error-free, or free of harmful components.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by applicable law, AVR and its directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from use of this website.",
      "For direct damages relating solely to website use where liability cannot lawfully be excluded, our aggregate liability shall not exceed the greater of amounts you paid to AVR solely for optional website-specific features in the twelve (12) months preceding the claim, or one hundred (100) Indian Rupees — except where statute requires otherwise.",
    ],
  },
  {
    title: "7. Indemnity",
    paragraphs: [
      "You agree to defend, indemnify, and hold harmless AVR from claims, damages, losses, and expenses (including reasonable legal fees) arising from your misuse of the website or violation of these Terms, except to the extent caused by AVR’s gross negligence or wilful misconduct.",
    ],
  },
  {
    title: "8. Privacy",
    paragraphs: [
      "Our processing of personal information is described in our Privacy Policy. Please review it to understand how we handle your data.",
    ],
  },
  {
    title: "9. Governing Law & Disputes",
    paragraphs: [
      "These Terms are governed by the laws of India, without regard to conflict-of-law principles, subject to mandatory consumer protections in your jurisdiction where they apply.",
      "Courts located in Uttar Pradesh, India shall have exclusive jurisdiction over disputes arising from these Terms or general website use, unless a separate services contract specifies otherwise or mandatory law requires a different venue.",
    ],
  },
  {
    title: "10. Changes",
    paragraphs: [
      "We may modify these Terms at any time by posting an updated version on this page. The “Last updated” date will change accordingly. Continued use after posting constitutes acceptance of the revised Terms where permitted by law.",
    ],
  },
  {
    title: "11. Contact",
    paragraphs: [
      "For questions about these Terms, contact AVR Digital Infotech at info@avrdigitalinfotech.com or the contact details listed in our website footer.",
    ],
  },
];

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10 group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">Terms and Conditions</h1>
          <p className="text-sm text-muted-foreground mb-12 pb-8 border-b border-white/10">
            Last updated: May 20, 2026
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-bold text-white mb-4">{section.title}</h2>
                <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-14 text-xs text-muted-foreground/70 leading-relaxed border-t border-white/10 pt-8">
            This document is provided for general information and does not constitute legal advice. For binding arrangements, rely on signed agreements between the parties.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
