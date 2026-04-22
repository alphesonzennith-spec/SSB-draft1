"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you for your inquiry. A member of our executive team will contact you shortly.");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again directly via email.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("A network error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#121212] text-zinc-200 min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Info */}
          <div>
            <span className="text-stone font-medium tracking-[0.2em] text-xs uppercase mb-6 block">
              Inquiries
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-10">
              Let&apos;s discuss your <span className="font-serif italic text-stone">project.</span>
            </h1>
            <p className="text-zinc-300 font-light leading-relaxed mb-12 max-w-md">
              Whether you are planning a residential alteration or a full-scale commercial or industrial remodeling, our team provides reliable support and practical structural works.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-bold tracking-widest text-stone mb-2 uppercase">Head Office</h4>
                <p className="text-zinc-300 font-light">
                  8B Admiralty Street #02-14 S(757440)
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest text-stone mb-2 uppercase">Direct Contact</h4>
                <p className="text-zinc-300 font-light">
                  <a href="mailto:enquiry@ssbstruc.com" className="hover:text-white transition-colors block mb-1">enquiry@ssbstruc.com</a>
                  <span className="hover:text-white transition-colors block">+65 9100 7619</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-[#1a1a1a] p-10 border border-white/5 rounded-sm">
            <h3 className="text-xl font-semibold mb-8 text-white">Send a Message</h3>
            
            {status === "success" ? (
              <div className="bg-stone/10 border border-stone/30 text-zinc-200 p-6 rounded-sm">
                <p className="font-light">{message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-wider text-zinc-400 font-bold">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-stone transition-colors rounded-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-wider text-zinc-400 font-bold">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-stone transition-colors rounded-sm"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="sector" className="text-xs uppercase tracking-wider text-zinc-400 font-bold">Sector Focus</label>
                  <select 
                    id="sector" 
                    name="sector"
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-zinc-300 px-4 py-3 focus:outline-none focus:border-stone transition-colors rounded-sm appearance-none"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="details" className="text-xs uppercase tracking-wider text-zinc-400 font-bold">Project Details</label>
                  <textarea 
                    id="details" 
                    name="details" 
                    rows={5} 
                    required 
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 focus:outline-none focus:border-stone transition-colors rounded-sm resize-none"
                  ></textarea>
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">{message}</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="w-full bg-[#2a2a2a] text-white font-bold tracking-widest uppercase py-4 rounded-sm hover:bg-stone hover:text-[#0a0a0a] transition-all duration-300 disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
