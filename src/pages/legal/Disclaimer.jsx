import React from 'react';
import LegalPage from './LegalPage';

const Disclaimer = () => {
  const content = [
    {
      heading: "1. Medical Disclaimer",
      paragraphs: [
        "The content provided on the Wellviva Organics website, including text, graphics, images, and other materials, is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.",
        "Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website."
      ]
    },
    {
      heading: "2. Product Claims",
      paragraphs: [
        "The statements made regarding our products have not been evaluated by the Food and Drug Administration (FDA) or any other regulatory authority. The efficacy of these products has not been confirmed by FDA-approved research.",
        "Our products are not intended to diagnose, treat, cure, or prevent any disease. All information presented here is not meant as a substitute for or alternative to information from healthcare practitioners."
      ]
    },
    {
      heading: "3. Accuracy of Information",
      paragraphs: [
        "While we strive to provide accurate and up-to-date information, Wellviva Organics makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.",
        "Any reliance you place on such information is therefore strictly at your own risk."
      ]
    }
  ];

  return <LegalPage title="Disclaimer" lastUpdated="September 15, 2026" sections={content} />;
};

export default Disclaimer;
