import React from 'react';
import LegalPage from './LegalPage';

const Privacy = () => {
  const content = [
    {
      heading: "1. Information We Collect",
      paragraphs: [
        "At Wellviva Organics, we collect information that you provide directly to us when you create an account, make a purchase, or communicate with us. This includes your name, email address, shipping address, and payment information.",
        "We also automatically collect certain information about your device and how you interact with our website, such as your IP address, browser type, and browsing behavior."
      ]
    },
    {
      heading: "2. How We Use Your Information",
      paragraphs: [
        "We use the information we collect to provide, maintain, and improve our services. Specifically, we use your information to:",
      ],
      list: [
        "Process your transactions and send related information, including confirmations and receipts.",
        "Send you technical notices, updates, security alerts, and support and administrative messages.",
        "Respond to your comments, questions, and requests, and provide customer service.",
        "Communicate with you about products, services, offers, promotions, and events offered by Wellviva Organics."
      ]
    },
    {
      heading: "3. Sharing of Information",
      paragraphs: [
        "We do not share your personal information with third parties except as necessary to provide our services, such as with payment processors and shipping partners. We may also share information if required by law or to protect our rights."
      ]
    },
    {
      heading: "4. Your Choices",
      paragraphs: [
        "You may update, correct, or delete your account information at any time by logging into your online account. You may also opt out of receiving promotional emails from us by following the instructions in those emails."
      ]
    }
  ];

  return <LegalPage title="Privacy Policy" lastUpdated="October 15, 2026" sections={content} />;
};

export default Privacy;
