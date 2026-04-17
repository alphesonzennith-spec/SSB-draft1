import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white pt-16 pb-8 border-t border-gold/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4 tracking-tight text-[#FAFAF9]">SSB Structural Engineering</h3>
            <p className="text-beige/70 max-w-sm leading-relaxed mb-6">
              Premium A&A and R&R specialists. Elevating industrial, commercial, and residential spaces with uncompromising architectural quality.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-widest text-gold mb-6 uppercase">Company</h4>
            <ul className="space-y-4 text-beige/80">
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-gold transition-colors">Projects</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-widest text-gold mb-6 uppercase">Contact</h4>
            <ul className="space-y-4 text-beige/80">
              <li className="flex flex-col">
                <span className="text-xs text-stone uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:info@ssb.com.sg" className="hover:text-gold transition-colors">info@ssb.com.sg</a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-stone uppercase tracking-wider mb-1">Phone</span>
                <span className="hover:text-gold transition-colors">+65 6123 4567</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone/60">
          <p>&copy; {new Date().getFullYear()} SSB Structural Engineering Pte Ltd. All rights reserved.</p>
          <p className="mt-4 md:mt-0 tracking-wide text-beige/60">Designed and developed by ALZEN Nexus</p>
        </div>
      </div>
    </footer>
  );
}
