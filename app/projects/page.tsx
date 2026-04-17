import Image from "next/image";
import projectsData from "@/data/projects.json";

export default function Projects() {
  // Define the ordered layout categories
  const categories = [
    "Residential",
    "Commercial",
    "Industrial",
    "Wet Work",
    "Finishing",
    "Roofing"
  ];

  return (
    <div className="flex flex-col w-full bg-[#121212] text-zinc-200 min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-32 max-w-4xl border-b border-white/5 pb-10">
          <span className="text-gold font-medium tracking-[0.2em] text-xs uppercase mb-6 block drop-shadow-sm">
            Curated Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Engineering <br />
            <span className="font-serif italic text-stone">elegance.</span>
          </h1>
        </div>

        <div className="space-y-40">
          {categories.map((category) => {
            const rowProjects = projectsData.filter((p) => p.category === category);
            if (rowProjects.length === 0) return null;

            return (
              <section key={category} className="group">
                <div className="flex items-center gap-6 mb-12">
                  <h2 className="text-2xl font-bold tracking-widest uppercase text-white drop-shadow-md">
                    {category}
                  </h2>
                  <div className="h-px bg-gold/30 flex-1"></div>
                </div>

                <div className={"grid grid-cols-1 " + (rowProjects.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1") + " gap-12"}>
                  {rowProjects.map((project) => (
                    <div key={project.id} className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a0a0a] group/item rounded-sm">
                      <Image 
                        src={project.imageUrl} 
                        alt={project.title} 
                        fill 
                        className="object-cover opacity-80 group-hover/item:opacity-100 group-hover/item:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#0a0a0a]/20 to-transparent pointer-events-none" />
                      <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover/item:translate-y-0 transition-transform duration-700 ease-out">
                        <div className="flex items-center gap-4">
                          <div className="w-6 h-px bg-gold"></div>
                          <h3 className="text-xl font-semibold text-white tracking-wide">{project.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
