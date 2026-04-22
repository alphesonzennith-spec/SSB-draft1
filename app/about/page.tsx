import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  return (
    <div className="flex flex-col w-full bg-[#121212] text-zinc-200 min-h-screen pt-12 pb-40">
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl mb-24 md:mb-32">
        <FadeIn>
          <span className="text-stone font-medium tracking-[0.2em] text-xs uppercase mb-8 block">
            Company Profile
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl">
            Structural integrity meets <span className="font-serif italic text-stone">architectural refinement.</span>
          </h1>
        </FadeIn>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column - Executive Overview */}
          <div className="lg:w-5/12">
            <FadeIn delay={100}>
              <h2 className="text-sm font-bold tracking-widest text-stone mb-6 uppercase">Executive Overview</h2>
              <div className="text-lg text-zinc-300 font-light leading-relaxed space-y-6">
                <p>
                  SSB Structural Engineering Pte. Ltd. is a Singapore-based specialist firm dedicated to the intersection of structural integrity and architectural refinement. We specialize in high-end Addition & Alteration (A&A) and Repair & Redecoration (R&R) works across the residential, commercial, and industrial sectors.
                </p>
                <p>
                  Our philosophy, "Engineering Elegance," reflects our commitment to delivering robust structural solutions that do not compromise on aesthetic sophistication. From complex industrial enhancements to luxury residential finishes, SSB provides the technical precision required for modern urban development.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Grounding Image */}
          <div className="lg:w-7/12 mt-8 lg:mt-0">
            <FadeIn delay={200}>
              <div className="relative aspect-[16/10] w-full bg-[#0a0a0a] rounded-sm overflow-hidden border border-white/5">
                <Image
                  src="/images/projects/interior-finishing-works/interior-finishing-works-8.jpeg"
                  alt="Premium architectural finishing capability"
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="w-full h-px bg-stone/20 my-24"></div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeIn delay={100}>
            <h2 className="text-sm font-bold tracking-widest text-stone mb-8 uppercase">Core Competencies</h2>
            <div className="space-y-6">
              
              <div className="bg-[#181818] p-6 rounded-sm border border-white/5 hover:border-stone/30 transition-colors">
                <h3 className="text-white font-semibold mb-3 tracking-wide">Residential Excellence</h3>
                <p className="text-zinc-400 font-light text-sm mb-4 leading-relaxed">
                  We transform private estates through strategic upgrades that increase both functional value and curb appeal.
                </p>
                <ul className="space-y-3 text-sm text-zinc-300 font-light ml-4 border-l border-stone/30 pl-4">
                  <li><strong className="text-white font-medium">A&A Exterior Upgrades:</strong> Comprehensive structural modifications and facade enhancements.</li>
                  <li><strong className="text-white font-medium">Architectural Timber Integration:</strong> Sophisticated wood-based structural and decorative elements.</li>
                </ul>
              </div>

              <div className="bg-[#181818] p-6 rounded-sm border border-white/5 hover:border-stone/30 transition-colors">
                <h3 className="text-white font-semibold mb-3 tracking-wide">Commercial & Retail Transformation</h3>
                <p className="text-zinc-400 font-light text-sm mb-4 leading-relaxed">
                  Focused on minimizing downtime while maximizing the utility and prestige of professional environments.
                </p>
                <ul className="space-y-3 text-sm text-zinc-300 font-light ml-4 border-l border-stone/30 pl-4">
                  <li><strong className="text-white font-medium">Corporate Office Remodelling:</strong> Structural reconfiguring for modern workplace workflows.</li>
                  <li><strong className="text-white font-medium">Premium Retail Alteration:</strong> High-spec structural adjustments for luxury retail storefronts and interiors.</li>
                </ul>
              </div>

              <div className="bg-[#181818] p-6 rounded-sm border border-white/5 hover:border-stone/30 transition-colors">
                <h3 className="text-white font-semibold mb-3 tracking-wide">Industrial Structural Enhancement</h3>
                <p className="text-zinc-400 font-light text-sm mb-4 leading-relaxed">
                  Heavy-duty engineering solutions designed for longevity and operational safety.
                </p>
                <ul className="space-y-3 text-sm text-zinc-300 font-light ml-4 border-l border-stone/30 pl-4">
                  <li><strong className="text-white font-medium">Warehouse Modernization:</strong> Floor loading enhancements and structural reinforcements.</li>
                  <li><strong className="text-white font-medium">Industrial Strengthening:</strong> Specialized structural support for machinery and logistics infrastructure.</li>
                </ul>
              </div>

            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h2 className="text-sm font-bold tracking-widest text-stone mb-8 uppercase">Technical Specializations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Specialized Wet Work",
                "Premium Finishing",
                "Roofing Systems",
                "Structural Engineering"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-[#181818] p-5 rounded-sm border border-transparent hover:border-stone/30 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone shrink-0"></div>
                  <span className="text-zinc-200 font-light text-sm">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="w-full h-px bg-stone/20 my-24"></div>

        {/* Commitment to Quality Sections */}
        <FadeIn delay={100}>
          <h2 className="text-sm font-bold tracking-widest text-stone mb-10 uppercase text-center md:text-left">Commitment to Quality</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            <div className="bg-[#181818] p-10 border-t-2 border-stone/50 hover:border-stone transition-colors group">
              <h3 className="font-semibold text-white mb-4 text-xl group-hover:text-gold transition-colors">Precision Execution</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Careful planning and steady implementation for all structural and finishing needs.</p>
            </div>
            <div className="bg-[#181818] p-10 border-t-2 border-stone/50 hover:border-stone transition-colors group">
              <h3 className="font-semibold text-white mb-4 text-xl group-hover:text-gold transition-colors">Regulatory Compliance</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Strict adherence to safety standards and building regulations in Singapore.</p>
            </div>
            <div className="bg-[#181818] p-10 border-t-2 border-stone/50 hover:border-stone transition-colors group">
              <h3 className="font-semibold text-white mb-4 text-xl group-hover:text-gold transition-colors">Architectural Quality</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Ensuring completed works meet practical usage and intended design outcomes.</p>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
