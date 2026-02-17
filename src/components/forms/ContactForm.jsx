import React, { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "sonner";

export default function ContactFormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const submissions = JSON.parse(
        localStorage.getItem("clearform_submissions") || "[]"
      );
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem(
        "clearform_submissions",
        JSON.stringify(submissions)
      );

      toast.success("Thanks! We'll get back to you within one business day.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "",
        requirements: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
    >
      {/* NAME + EMAIL */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-800 font-medium">
            Full Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-800 font-medium">
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* PHONE */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-slate-800 font-medium">
          Phone Number *
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 555 123 4567"
          value={formData.phone}
          onChange={handleChange}
          required
          className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* CATEGORY */}
      <div className="space-y-2">
        <Label htmlFor="category" className="text-slate-800 font-medium">
          What do you need? *
        </Label>
        <Select
          value={formData.category}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, category: value }))
          }
        >
          <SelectTrigger className="w-full bg-white border-slate-300 text-slate-900 focus:border-blue-500">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-white text-slate-900 border-slate-300">
            <SelectItem value="proposal">
              Client Proposal Presentation
            </SelectItem>
            <SelectItem value="pitch">
              Investor / Pitch Deck
            </SelectItem>
            <SelectItem value="sales">
              Sales Presentation
            </SelectItem>
            <SelectItem value="academic">
              Academic Presentation
            </SelectItem>
            <SelectItem value="unsure">
              Not sure yet
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* REQUIREMENTS */}
      <div className="space-y-2">
        <Label htmlFor="requirements" className="text-slate-800 font-medium">
          Project Details *
        </Label>
        <Textarea
          id="requirements"
          name="requirements"
          placeholder="Briefly describe your project, timeline, and goals."
          value={formData.requirements}
          onChange={handleChange}
          required
          rows={5}
          className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 text-lg font-semibold rounded-lg transition disabled:opacity-50 flex items-center justify-center"
      >
        <Send className="mr-2" size={20} />
        {isSubmitting ? "Submitting..." : "Submit Project Details"}
      </button>

      <p className="text-center text-slate-500 text-sm">
        We typically respond within one business day.
      </p>
    </form>
  );
}
