import Image from "next/image";
import servicesData from "@/data/services.json";
import FadeIn from "@/components/ui/FadeIn";

export default function Services() {
  return (
    <div className="flex flex-col w-full bg-[#0a0f1d] text-zinc-200 min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <FadeIn>
          <div className="mb-24 md:mb-32">
            <span className="text-gold font-medium tracking-[0.2em] text-xs uppercase mb-6 block">
              Capabilities
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Comprehensive <br />
              <span className="font-serif italic text-stone">engineering solutions.</span>
            </h1>
          </div>
        </FadeIn>

        <div className="flex flex-col space-y-32">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <FadeIn key={service.id} delay={100} className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-20 items-center`}>
                
                {/* Visual Side */}
                <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden border border-white/5 bg-[#121212] group">
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <span className="text-gold text-2xl md:text-4xl block mb-6 opacity-60 font-serif italic">
                    0{index + 1}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white tracking-wide">
                    {service.title}
                  </h2>
                  <p className="text-zinc-200 mb-6 font-medium tracking-tight text-lg">
                    {service.description}
                  </p>
                  <div className="w-8 h-px bg-gold/50 mb-6"></div>
                  <p className="text-taupe leading-relaxed font-light">
                    {service.details}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}
