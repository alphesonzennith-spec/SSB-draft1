import Link from "next/link";
import Slideshow from "@/components/ui/Slideshow";
import projectsData from "@/data/projects.json";

export default function Projects() {
  // Define the ordered layout categories mapped from the source of truth
  const categoryOrder = [
    "Interior Finishing Works",
    "Builders Works",
    "Cage Ladder Works",
    "Roofing Works",
    "Self Storage Partition and Doors",
    "Solar Panel and Related Works"
  ];

  // Sort and filter the data strictly against the requested category order
  const orderedProjects = categoryOrder.map((catLabel) => 
    projectsData.find((p) => p.category === catLabel)
  ).filter(Boolean); // removes undefined if a category is missing

  return (
    <div className="flex flex-col w-full bg-[#121212] text-zinc-200 min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="mb-24 max-w-4xl border-b border-white/5 pb-10">
          <span className="text-stone font-medium tracking-[0.2em] text-xs uppercase mb-6 block drop-shadow-sm">
            Curated Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Selected <br />
            <span className="font-serif italic text-stone">project works.</span>
          </h1>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
          {orderedProjects.map((project) => {
            if (!project) return null;

            return (
              <section key={project.id} className="flex flex-col group">
                {/* 1. Slideshow Frame & 2. Dots */}
                <Slideshow images={project.images} altPrefix={project.category} />

                {/* Content Block */}
                <div className="mt-6 md:mt-8">
                  {/* 3. Category Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-px bg-stone/70"></div>
                    <h2 className="text-xl md:text-2xl font-medium tracking-wide text-white drop-shadow-md">
                      {project.category}
                    </h2>
                  </div>

                  {/* 4. Short Description */}
                  <p className="text-zinc-400 font-light leading-relaxed pl-12 pr-4 text-sm md:text-base">
                    {project.description}
                  </p>
                </div>
              </section>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-32 border-t border-white/10 pt-16 flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Ready to discuss your project?</h2>
          <p className="text-zinc-400 max-w-lg mb-10 font-light leading-relaxed">
            Reach out to our engineering team to explore practical solutions and technical support for your structural needs.
          </p>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-gold text-[#0a0a0a] font-bold text-sm tracking-widest uppercase hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-sm"
          >
            Enquire About Similar Works
          </Link>
        </div>

      </div>
    </div>
  );
}
