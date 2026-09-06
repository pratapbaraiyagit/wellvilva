import React from 'react';
import LegalPage from './LegalPage';

const Terms = () => {
  const content = [
    {
      heading: "1. Agreement to Terms",
      paragraphs: [
        "By accessing our website at mywellviva.com, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
      ]
    },
    {
      heading: "2. Use License",
      paragraphs: [
        "Permission is granted to temporarily download one copy of the materials (information or software) on Wellviva Organics' website for personal, non-commercial transitory viewing only."
      ],
      list: [
        "Modify or copy the materials.",
        "Use the materials for any commercial purpose, or for any public display.",
        "Attempt to decompile or reverse engineer any software contained on the website.",
        "Remove any copyright or other proprietary notations from the materials."
      ]
    },
    {
      heading: "3. Disclaimer",
      paragraphs: [
        "The materials on Wellviva Organics' website are provided on an 'as is' basis. Wellviva Organics makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
      ]
    },
    {
      heading: "4. Limitations",
      paragraphs: [
        "In no event shall Wellviva Organics or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if Wellviva Organics or an authorized representative has been notified orally or in writing of the possibility of such damage."
      ]
    }
  ];

  return <LegalPage title="Terms & Conditions" lastUpdated="October 10, 2026" sections={content} />;
};

export default Terms;
