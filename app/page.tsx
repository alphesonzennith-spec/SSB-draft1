import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#121212] text-zinc-200 selection:bg-gold/30 selection:text-white">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/builders-works/builders-works-1.jpeg"
            alt="Premium Residential Exterior"
            fill
            className="object-cover object-center scale-105 animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1d]/95 via-[#121212]/80 to-[#121212]/30" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <FadeIn className="max-w-3xl">
            <span className="text-gold font-medium tracking-[0.25em] text-xs uppercase mb-6 block drop-shadow-md">
              Structural & Building Works
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg tracking-tight">
              Planning.<br />
              Execution.<br />
              <span className="text-white font-serif italic text-6xl md:text-8xl">Delivery.</span>
            </h1>
            <div className="space-y-4 mb-10 max-w-2xl">
              <p className="text-lg md:text-xl text-zinc-100 leading-relaxed drop-shadow-md font-light">
                SSB Structural Engineering Pte Ltd is a Singapore-based specialist firm dedicated to the intersection of structural integrity and architectural refinement. We specialize in high-end Addition & Alteration (A&A) and Repair & Redecoration (R&R) works across the residential, commercial, and industrial sectors.
              </p>
              <p className="text-lg md:text-xl text-zinc-100 leading-relaxed drop-shadow-md font-light">
                Our philosophy, "Engineering Elegance," reflects our commitment to delivering robust structural solutions that do not compromise on aesthetic sophistication. From complex industrial enhancements to luxury residential finishes, SSB provides the technical precision required for modern urban development.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/projects"
                className="bg-gold text-[#0a0a0a] px-8 py-4 rounded-sm font-bold tracking-widest hover:-translate-y-1 hover:shadow-lg hover:bg-white transition-all duration-300 text-center uppercase text-xs"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border border-white/40 text-white px-8 py-4 rounded-sm font-bold tracking-widest hover:-translate-y-1 hover:border-gold hover:text-gold transition-all duration-300 text-center backdrop-blur-sm uppercase text-xs"
              >
                Contact Our Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CORE CAPABILITIES SECTION */}
      <section className="py-32 bg-[#121212]">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-20 flex flex-col items-center">
            <span className="text-gold font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">In-House Capabilities</h2>
            <div className="w-12 h-0.5 bg-gold/70 mb-8"></div>
            <p className="text-zinc-200 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Maintaining strict quality control through our comprehensive in-house architecture and engineering expertise, supplemented by specialist M&E coordination.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={100} className="group bg-[#181818] p-10 rounded-sm border border-white/5 hover:border-stone/40 hover:-translate-y-1 transition-all duration-500">
              <span className="text-gold text-4xl block mb-6 opacity-60 font-serif italic">01</span>
              <h3 className="text-xl font-semibold mb-4 text-white uppercase tracking-wider">Wet Work</h3>
              <p className="text-zinc-300 leading-relaxed font-light">
                Expert execution of structural modifications, foundation works, and masonry, ensuring uncompromising structural integrity for every space.
              </p>
            </FadeIn>

            <FadeIn delay={200} className="group bg-[#181818] p-10 rounded-sm border border-white/5 hover:border-stone/40 hover:-translate-y-1 transition-all duration-500">
              <span className="text-gold text-4xl block mb-6 opacity-60 font-serif italic">02</span>
              <h3 className="text-xl font-semibold mb-4 text-white uppercase tracking-wider">Finishing Works</h3>
              <p className="text-zinc-300 leading-relaxed font-light">
                Flawless execution of premium surfaces, bespoke carpentry, and luxury tiling that define high-end residential and commercial environments.
              </p>
            </FadeIn>

            <FadeIn delay={300} className="group bg-[#181818] p-10 rounded-sm border border-white/5 hover:border-stone/40 hover:-translate-y-1 transition-all duration-500">
              <span className="text-gold text-4xl block mb-6 opacity-60 font-serif italic">03</span>
              <h3 className="text-xl font-semibold mb-4 text-white uppercase tracking-wider">Roofing Services</h3>
              <p className="text-zinc-300 leading-relaxed font-light">
                Comprehensive roofing solutions, from structural frameworks to high-performance weatherproofing, designed for longevity and architectural beauty.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-24 bg-[#0d0d0d] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-stone mb-4 uppercase text-center">Why Choose Us</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Quality Workmanship",
              "Practical Project Execution",
              "Commercial, Industrial & Residential",
              "Safety and Compliance Focus",
              "Responsive Coordination"
            ].map((reason, idx) => (
              <FadeIn key={idx} delay={idx * 100} className="bg-[#121212] border border-white/5 p-6 flex flex-col justify-center items-center text-center hover:bg-[#151515] hover:border-stone/20 transition-all rounded-sm group min-h-[140px]">
                <div className="w-1.5 h-1.5 rounded-full bg-stone mb-4 opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
                <span className="text-sm font-medium text-zinc-300">{reason}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className="py-32 bg-[#0a0f1d] border-t border-white/10 text-white relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <FadeIn className="text-center mb-20 max-w-2xl mx-auto border-b border-white/10 pb-12">
            <span className="text-gold font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-8">
              Uncompromising Quality. <br />
              <span className="font-serif italic text-stone">Engineering Elegance.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <FadeIn delay={100} className="group overflow-hidden rounded-sm relative aspect-[3/4] bg-black">
              <Image 
                src="/images/projects/interior-finishing-works/interior-finishing-works-8.jpeg" 
                alt="Luxury Interior Wood and Marble" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold border border-gold/40 px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 inline-block backdrop-blur-md">Residential</span>
                <h3 className="text-2xl font-semibold text-white drop-shadow-md">Luxury Interior Finishing</h3>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="group overflow-hidden rounded-sm relative aspect-[3/4] bg-black">
              <Image 
                src="/images/projects/builders-works/builders-works-2.jpeg" 
                alt="Premium Bathroom Tiling" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold border border-gold/40 px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 inline-block backdrop-blur-md">Commercial</span>
                <h3 className="text-2xl font-semibold text-white drop-shadow-md">Premium Wet Works</h3>
              </div>
            </FadeIn>

            <FadeIn delay={300} className="group overflow-hidden rounded-sm relative aspect-[3/4] bg-black md:hidden lg:block">
              <Image 
                src="/images/projects/interior-finishing-works/interior-finishing-works-9.jpeg" 
                alt="Architectural Details" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold border border-gold/40 px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 inline-block backdrop-blur-md">Industrial</span>
                <h3 className="text-2xl font-semibold text-white drop-shadow-md">Structural Remodeling</h3>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={100} className="flex justify-center mt-6">
            <Link 
              href="/projects" 
              className="px-8 py-4 border border-white/30 text-white font-medium text-sm tracking-widest uppercase hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-sm"
            >
              View More Projects
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
