import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white pt-16 pb-8 border-t border-stone/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-2 tracking-tight text-[#FAFAF9]">SSB Structural Engineering</h3>
            <p className="text-stone font-serif italic mb-6">Uncompromising Quality. Engineering Elegance.</p>
            <p className="text-zinc-400 max-w-sm leading-relaxed mb-6 font-light">
              Specialist firm dedicated to practical structural solutions and architectural refinement across residential, commercial, and industrial sectors.
            </p>
            <p className="text-zinc-500 text-sm">UEN: 2022 41904 Z</p>
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-widest text-stone mb-6 uppercase">Company</h4>
            <ul className="space-y-4 text-zinc-300 font-light">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-widest text-stone mb-6 uppercase">Contact</h4>
            <ul className="space-y-4 text-zinc-300 font-light">
              <li className="flex flex-col">
                <span className="text-xs text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Email</span>
                <a href="mailto:enquiry@ssbstruc.com" className="hover:text-white transition-colors">enquiry@ssbstruc.com</a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-zinc-500 uppercase tracking-wider mb-1 font-semibold">Phone</span>
                <span className="hover:text-white transition-colors">+65 9100 7619</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} SSB Structural Engineering Pte Ltd. All rights reserved.</p>
          <p className="mt-4 md:mt-0 tracking-wide text-zinc-400">Designed and developed by AZ</p>
        </div>
      </div>
    </footer>
  );
}
