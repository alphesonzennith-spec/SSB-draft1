export default function About() {
  return (
    <div className="flex flex-col w-full bg-[#121212] text-zinc-200 min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <span className="text-gold font-medium tracking-[0.2em] text-xs uppercase mb-8 block">
          About Us
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight leading-[1.1]">
          Architectural rigor meets <span className="font-serif italic text-gold">uncompromising execution.</span>
        </h1>
        
        <div className="space-y-12 text-lg text-zinc-300 font-light leading-relaxed">
          <p>
            SSB Structural Engineering Pte Ltd is a premier construction and engineering firm specializing in complex Addition & Alteration (A&A) and Redecoration & Remodeling (R&R) works. Based in Singapore, we serve discerning clients across industrial, commercial, and high-end residential sectors.
          </p>
          <div className="w-12 h-px bg-gold/50 my-12 hidden md:block"></div>
          <p>
            Our philosophy is built on precision and performance. We do not rely entirely on sub-contracted labor; instead, we maintain robust in-house teams dedicated to wet works, finishing works, and roofing. This deep operational control allows us to dictate the pace, quality, and structural integrity of every project we undertake.
          </p>
          <p>
            For specialized Mechanical & Electrical (M&E) requirements, we coordinate seamlessly with verified specialist engineers to ensure technical installations respect the architectural fabric of the environment. The result is a frictionless execution that elevates the final space.
          </p>
        </div>
      </div>
    </div>
  );
}
