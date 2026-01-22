import { GraduationCap, Building2, Home, HardHat } from 'lucide-react';

export const audiencesData = [
  {
    icon: GraduationCap,
    title: 'College Students',
    color: 'from-blue-600 to-blue-400',
    problems: ['Low marks despite good understanding', 'Confusing slides', 'Last-minute submissions', 'Weak confidence during presentations'],
    solutions: ['Clean & structured designs', 'Logical flow', 'Visual-first approach', 'Fast delivery'],
  },
  {
    icon: Building2,
    title: 'Architects',
    color: 'from-indigo-600 to-indigo-400',
    problems: ['Design logic not clear', 'Technical but confusing', 'Slow approvals', 'Poor client communication'],
    solutions: ['Concept presentations', 'Competition decks', 'Project PDFs', 'Design storytelling'],
  },
  {
    icon: Home,
    title: 'Interior Designers',
    color: 'from-purple-600 to-purple-400',
    problems: ['Basic presentations', 'Poor design explanation', 'Weak client impressions', 'Low conversion rates'],
    solutions: ['Client pitch decks', 'Proposal presentations', 'Premium visuals', 'Portfolio showcases'],
  },
  {
    icon: HardHat,
    title: 'Builders & Contractors',
    color: 'from-orange-600 to-orange-400',
    problems: ['Standard pitches', 'Low investor confidence', 'Unclear project vision', 'Poor branding'],
    solutions: ['Sales pitch decks', 'Investor presentations', 'Project brochures', 'Marketing materials'],
  },
];
