import React from 'react';
import LegalPage from './LegalPage';

const Refund = () => {
  const content = [
    {
      heading: "1. Return Policy",
      paragraphs: [
        "We want you to be completely satisfied with your Wellviva Organics purchase. If you are not entirely happy with your order, you have 30 days from the date of delivery to initiate a return."
      ]
    },
    {
      heading: "2. Eligibility for Returns",
      paragraphs: [
        "To be eligible for a return, your item must be unused, sealed, and in the same condition that you received it. It must also be in the original packaging."
      ],
      list: [
        "Items must be returned within 30 days of delivery.",
        "Opened or partially used products cannot be returned for hygiene and safety reasons.",
        "Gift cards and promotional items are non-refundable."
      ]
    },
    {
      heading: "3. Refunds",
      paragraphs: [
        "Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.",
        "If approved, your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment within 7-10 business days."
      ]
    },
    {
      heading: "4. Shipping Returns",
      paragraphs: [
        "You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund."
      ]
    }
  ];

  return <LegalPage title="Refund Policy" lastUpdated="September 1, 2026" sections={content} />;
};

export default Refund;
