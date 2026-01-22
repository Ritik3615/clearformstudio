import React from "react";
import PageHeader from "../components/layout/PageHeader";
import AudienceCard from "../components/cards/AudienceCard";
import { audiencesData } from "../data/audiences";

export default function AudiencePage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Who We Help"
          subtitle="Tailored solutions for students, designers, architects, and businesses"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {audiencesData.map((audience, index) => (
            <AudienceCard
              key={index}
              Icon={audience.icon}
              title={audience.title}
              color={audience.color}
              problems={audience.problems}
              solutions={audience.solutions}
            />
          ))}
        </div>
      </div>
    </div>
  );
}