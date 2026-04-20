import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white pt-20 pb-8 border-t border-white/5 relative z-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Main Brand Column */}
          <div className="md:col-span-5 pr-4 md:pr-12">
            <h3 className="text-2xl font-semibold mb-2 tracking-tight text-[#FAFAF9]">SSB Structural</h3>
            <p className="text-stone font-serif italic mb-6 text-lg">Engineering Elegance.</p>
            <p className="text-zinc-400 max-w-sm leading-relaxed mb-6 font-light text-sm">
              Specialist firm dedicated to practical structural solutions and architectural refinement across residential, commercial, and industrial sectors.
            </p>
            <p className="text-zinc-500 text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="w-2 h-px bg-zinc-600 inline-block"></span> UEN: 2022 41904 Z
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-xs font-bold tracking-widest text-stone mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-4 text-zinc-300 font-light text-sm">
              <li><Link href="/" className="hover:text-gold hover:translate-x-1 inline-block transition-all">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold hover:translate-x-1 inline-block transition-all">About Company</Link></li>
              <li><Link href="/services" className="hover:text-gold hover:translate-x-1 inline-block transition-all">Capabilities</Link></li>
              <li><Link href="/projects" className="hover:text-gold hover:translate-x-1 inline-block transition-all">Project Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-gold hover:translate-x-1 inline-block transition-all">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Colunn */}
          <div className="md:col-span-4 lg:col-span-5">
            <h4 className="text-xs font-bold tracking-widest text-stone mb-6 uppercase">Get In Touch</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5 block font-semibold border-b border-white/5 pb-1 w-max">Corporate Email</span>
                  <a href="mailto:enquiry@ssbstruc.com" className="text-sm text-zinc-300 hover:text-white transition-colors">enquiry@ssbstruc.com</a>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5 block font-semibold border-b border-white/5 pb-1 w-max">Direct Telephone</span>
                  <span className="text-sm text-zinc-300 hover:text-white transition-colors">+65 9100 7619</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5 block font-semibold border-b border-white/5 pb-1 w-max">Registered Office</span>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  Blk 3023 Ubi Road 3<br />
                  #03-12 Ubiplex 1<br />
                  Singapore 408663
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Polished Brand Ending */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 font-light">
          <p>&copy; {new Date().getFullYear()} SSB Structural Engineering Pte Ltd. All rights reserved.</p>
          <p className="mt-4 md:mt-0 tracking-widest text-zinc-400 font-medium">Designed and developed by AZ</p>
        </div>
      </div>
    </footer>
  );
}
