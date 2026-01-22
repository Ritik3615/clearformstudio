import { MessageSquare, Layout, RefreshCw, CheckCircle } from 'lucide-react';

export const stepsData = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    description: 'We understand your needs, audience, objectives, and vision clearly',
  },
  {
    number: '02',
    icon: Layout,
    title: 'Design & Structure',
    description: 'We create the framework and beautiful design that tells your story best',
  },
  {
    number: '03',
    icon: RefreshCw,
    title: 'Refinement',
    description: 'We iterate based on your feedback until it\'s absolutely perfect',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Delivery',
    description: 'You receive polished, professional files ready to use immediately',
  },
];

export const timeline = [
  { time: '24 hrs', desc: 'Initial Consultation' },
  { time: '48 hrs', desc: 'First Draft Ready' },
  { time: '72 hrs', desc: 'Revisions Complete' },
  { time: '24 hrs after approval', desc: 'Final Delivery' },
];
