import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "AVR Digital Infotech (“AVR”, “we”, “us”, or “our”) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or engage with our services.",
      "By using our website or services, you agree to this policy. If you do not agree, please discontinue use.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "We may collect information you provide directly — for example when you contact us, subscribe to updates, request a quote, or work with us on a project. This may include your name, email address, phone number, company details, and project-related information.",
      "When you browse our website, we may automatically collect technical data such as IP address, browser type, device type, general location derived from IP, and pages viewed. We may use cookies and similar technologies as described in applicable cookie notices.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    paragraphs: [
      "We use the information we collect to provide and improve our services, respond to enquiries, communicate with you, send transactional or service-related messages, analyse website usage, protect our legal rights, and comply with applicable law.",
      "Marketing communications will only be sent where permitted by law and, where required, with your consent. You may opt out of marketing emails using the unsubscribe link in those messages.",
    ],
  },
  {
    title: "4. Sharing of Information",
    paragraphs: [
      "We may share information with vendors and partners who assist us in hosting, analytics, email delivery, CRM, or other business operations — under contractual obligations to protect information and use it only for agreed purposes.",
      "We may disclose information if required by law, regulation, legal process, or to protect the rights, property, or safety of AVR, our clients, or others. Business transfers (such as mergers or acquisitions) may also involve lawful transfer of information.",
    ],
  },
  {
    title: "5. Data Retention",
    paragraphs: [
      "We retain information for as long as necessary to fulfil the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Retention periods may vary depending on the nature of the data and our relationship with you.",
    ],
  },
  {
    title: "6. Security",
    paragraphs: [
      "We implement appropriate technical and organisational measures designed to protect your information. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "7. Your Rights",
    paragraphs: [
      "Depending on your location (including where applicable laws such as data protection regimes in India or other jurisdictions apply), you may have rights to access, correct, delete, restrict, or object to certain processing of your personal information, or to request portability.",
      "To exercise applicable rights, contact us using the details in the footer. We may verify your identity before responding.",
    ],
  },
  {
    title: "8. Third-Party Websites",
    paragraphs: [
      "Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites. We encourage you to read their privacy policies.",
    ],
  },
  {
    title: "9. Children’s Privacy",
    paragraphs: [
      "Our services are not directed to children under applicable minimum ages for consent. If you believe we have collected information from a child improperly, please contact us and we will take appropriate steps.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. The “Last updated” date reflects the latest revision. Continued use of our website after changes constitutes acceptance of the revised policy.",
    ],
  },
  {
    title: "11. Contact Us",
    paragraphs: [
      "For privacy-related questions or requests, contact AVR Digital Infotech at info@avrdigitalinfotech.com or using the contact information shown in the website footer.",
    ],
  },
];

const PrivacyPolicy = () => {
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

          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">Privacy Policy</h1>
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
            This document is provided for general information and does not constitute legal advice. You should consult a qualified professional regarding your specific situation.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
