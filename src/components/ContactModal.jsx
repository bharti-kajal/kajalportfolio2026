import React, { useState } from 'react';
import { X, Mail, MapPin, Send, CheckCircle2, Linkedin, Github } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#eadfc6]/55 backdrop-blur-xl animate-fadeIn">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white/90 backdrop-blur-2xl border border-white/80 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,10,40,0.35)] text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0f5a43] to-[#c9962b] flex items-center justify-center text-white shadow-md">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Get in Touch</h3>
            <p className="text-xs text-slate-500">I'm open for full-time opportunities & high-impact consulting.</p>
          </div>
        </div>

        {/* Contact Info Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4">
          <a
            href="mailto:kajal.cloudops@gmail.com"
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 hover:bg-blue-100/70 transition-colors"
          >
            <Mail className="w-4 h-4 text-[#0f5a43] flex-shrink-0" />
            <span className="text-xs font-semibold text-slate-800 truncate">kajal.cloudops@gmail.com</span>
          </a>

          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="text-xs font-semibold text-slate-800">New Delhi, India</span>
          </div>

          <a
            href="https://www.linkedin.com/in/kajal-bharti-26a968213/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-[#0a66c2] flex-shrink-0" />
            <span className="text-xs font-semibold text-slate-800">LinkedIn Profile</span>
          </a>

          <a
            href="https://github.com/bharti-kajal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100 transition-colors"
          >
            <Github className="w-4 h-4 text-[#24292f] flex-shrink-0" />
            <span className="text-xs font-semibold text-slate-800">GitHub Profile</span>
          </a>
        </div>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Message Received!</h4>
            <p className="text-xs text-slate-600 max-w-xs">
              Thank you for reaching out. I'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Johnson"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f5a43] shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f5a43] shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project, engineering role, or idea..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f5a43] shadow-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0f5a43] to-[#1b7a5a] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

