import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import ContactCard from '../components/cards/ContactCard';
import ContactFormComponent from '../components/forms/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title="Get In Touch" 
          subtitle="Let's create something amazing together"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ContactCard
            icon={Mail}
            title="Email"
            value="clearformstudio3@gmail.com"
            link="mailto:clearformstudio3@gmail.com"
          />
          <ContactCard
            icon={Phone}
            title="Phone"
            value="+91 7338493036"
            link="tel:+917338493036"
          />
          <ContactCard
            icon={MessageSquare}
            title="WhatsApp"
            value="Chat with us"
            link="https://wa.me/917338493036"
          />
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-purple-400/30">
            <h2 className="text-3xl font-bold text-black mb-8">
              Send us a Message
            </h2>
            <ContactFormComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
