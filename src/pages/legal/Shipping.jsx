import React from 'react';
import LegalPage from './LegalPage';

const Shipping = () => {
  const content = [
    {
      heading: "1. Processing Time",
      paragraphs: [
        "All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped."
      ]
    },
    {
      heading: "2. Shipping Rates & Delivery Estimates",
      paragraphs: [
        "Shipping charges for your order will be calculated and displayed at checkout. We offer several shipping options to meet your needs:"
      ],
      list: [
        "Standard Shipping: 5-7 business days",
        "Express Shipping: 2-3 business days",
        "Next Day Delivery: 1 business day (order must be placed before 12 PM EST)"
      ]
    },
    {
      heading: "3. International Shipping",
      paragraphs: [
        "We currently ship to select international countries. Shipping rates and delivery times vary by destination. Please note that your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country.",
        "Wellviva Organics is not responsible for these charges if they are applied and are your responsibility as the customer."
      ]
    },
    {
      heading: "4. How do I check the status of my order?",
      paragraphs: [
        "When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available."
      ]
    }
  ];

  return <LegalPage title="Shipping Policy" lastUpdated="August 20, 2026" sections={content} />;
};

export default Shipping;
