import { Presentation, FileText, Image, Newspaper, Globe, Zap } from 'lucide-react';

export const servicesData = [
  { icon: Presentation, title: 'Presentation Design', desc: 'Professional slide decks that communicate your ideas clearly', features: ['Custom layouts', 'Visual storytelling', 'Brand consistency'] },
  { icon: FileText, title: 'Project Proposals', desc: 'Compelling proposals that win clients and secure approvals', features: ['Structured flow', 'Persuasive content', 'Professional design'] },
  { icon: Image, title: 'Posters & Creatives', desc: 'Eye-catching visuals for marketing and events', features: ['High-impact design', 'Print-ready files', 'Multiple formats'] },
  { icon: Newspaper, title: 'Brochures & PDFs', desc: 'Informative documents showcasing your work professionally', features: ['Portfolio layouts', 'Case studies', 'Digital & print versions'] },
  { icon: Globe, title: 'Business Websites', desc: 'Clean, modern websites to establish online presence', features: ['Responsive design', 'Fast loading', 'Easy to maintain'] },
  { icon: Zap, title: 'Quick Design', desc: 'Fast-track projects for urgent deadlines', features: ['Rush delivery', 'Premium support', 'Priority queue'] },
];

export const pricingPlans = [
  { name: 'Starter', price: '₹999', items: ['Basic Design', '1 Revision', '24hr Delivery'] },
  { name: 'Professional', price: '₹2,999', items: ['Premium Design', '3 Revisions', '12hr Delivery', 'Priority Support'], featured: true },
  { name: 'Enterprise', price: 'Custom', items: ['Custom Design', 'Unlimited Revisions', 'Dedicated Manager', 'VIP Support'] },
];
