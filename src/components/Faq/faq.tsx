export interface FaqItemType {
    question: string;
    answer: string;
  }
  
  export const faqItems: FaqItemType[] = [
    {
        question: "What is Trium Technology?",
        answer: "Trium Technology is a digital solutions provider specializing in website development, AI-driven applications, and secure hosting. We offer tailored web solutions for businesses, e-commerce platforms, and personal projects."
    },
    {
        question: "What services does Trium Technology offer?",
        answer: "We provide website development, app development, data analytics, and custom digital solutions. Our services are designed to help businesses establish and grow their online presence efficiently."
    },
    {
        question: "How much does it cost to build a website with Trium Technology?",
        answer: "Our website development plans start from 399,000 IDR per year, including high-speed hosting, custom domain support, and advanced security features. Contact us for a custom quote based on your business needs."
    },
    {
        question: "Do you offer website customization and maintenance?",
        answer: "Yes! We offer fully customizable website templates and maintenance services, including background and header customization, security updates, and content management support."
    },
    {
        question: "How can I get started with Trium Technology?",
        answer: "Getting started is simple! Click the 'Contact Us' button on our website or message us via WhatsApp for a free consultation. Our team will guide you through the process of building your website or implementing a digital solution tailored to your needs."
    }
];

export default FaqItemType;