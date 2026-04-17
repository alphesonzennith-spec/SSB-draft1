import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/branding/ssb_structural_engineering_logo.png?v=latest"
            alt="SSB Structural Engineering Logo"
            width={160}
            height={50}
            className="object-contain"
            priority
            unoptimized={true}
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-zinc-200">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
          <Link href="/services" className="hover:text-white transition-colors">SERVICES</Link>
          <Link href="/projects" className="hover:text-white transition-colors">PROJECTS</Link>
          <Link
            href="/contact"
            className="bg-gold/90 text-[#0a0a0a] px-6 py-2.5 rounded-sm hover:bg-gold transition-colors font-bold tracking-widest uppercase text-xs"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}
