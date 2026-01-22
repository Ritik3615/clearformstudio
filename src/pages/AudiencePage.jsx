import React from "react";
import PageHeader from "../components/layout/PageHeader";
import AudienceCard from "../components/cards/AudienceCard";
import { audiencesData } from "../data/audiences";
import proposalPdf from "../assets/business  proposal 1.pdf";
import profilePdf1 from "../assets/Steadwin group profle.pdf.pdf";
import profilePdf2 from "../assets/steadwin profile RAILING (1).pdf";
import templatePdf from "../assets/template1.pdf";

export default function AudiencePage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Who We Help"
          subtitle="Tailored solutions for students, designers, architects, and businesses"
        />

        {/* Project Section */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Proposal Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Proposal</h3>
              <div className="space-y-3">
                {/* Business Proposal 1 */}
                <div>
                  <p className="text-sm text-gray-700 font-medium mb-2">Business Proposal 1</p>
                  <div className="flex gap-2">
                    <a 
                      href={proposalPdf} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
                    >
                      👁️ View
                    </a>
                    <a 
                      href={proposalPdf} 
                      download
                      className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
                    >
                      ⬇️ Download
                    </a>
                  </div>
                </div>

                {/* Template 1 */}
                <div>
                  <p className="text-sm text-gray-700 font-medium mb-2">Template 1</p>
                  <div className="flex gap-2">
                    <a 
                      href={templatePdf} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
                    >
                      👁️ View
                    </a>
                    <a 
                      href={templatePdf} 
                      download
                      className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
                    >
                      ⬇️ Download
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile PDF Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Profile PDF</h3>
              <div className="space-y-3">
                {/* Steadwin Group Profile */}
                <div>
                  <p className="text-sm text-gray-700 font-medium mb-2">Steadwin Group Profile</p>
                  <div className="flex gap-2">
                    <a 
                      href={profilePdf1} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
                    >
                      👁️ View
                    </a>
                    <a 
                      href={profilePdf1} 
                      download
                      className="flex-1 inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
                    >
                      ⬇️ Download
                    </a>
                  </div>
                </div>

                {/* Steadwin Profile - Railing */}
                <div>
                  <p className="text-sm text-gray-700 font-medium mb-2">Steadwin Profile - Railing</p>
                  <div className="flex gap-2">
                    <a 
                      href={profilePdf2} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
                    >
                      👁️ View
                    </a>
                    <a 
                      href={profilePdf2} 
                      download
                      className="flex-1 inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
                    >
                      ⬇️ Download
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Website Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Website</h3>
              <div className="space-y-3">
                {/* Steadwin.in */}
                <div>
                  <p className="text-sm text-gray-700 font-medium mb-2">Steadwin.in</p>
                  <a 
                    href="https://steadwin.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    🌐 Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

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