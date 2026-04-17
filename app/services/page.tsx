import servicesData from "@/data/services.json";

export default function Services() {
  return (
    <div className="flex flex-col w-full bg-[#0a0f1d] text-zinc-200 min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="mb-20">
          <span className="text-gold font-medium tracking-[0.2em] text-xs uppercase mb-6 block">
            Capabilities
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Comprehensive <br />
            <span className="font-serif italic text-stone">engineering solutions.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {servicesData.map((service, index) => (
            <div key={service.id} className="bg-[#121212] p-12 rounded-sm border border-white/5 hover:border-gold/30 transition-all duration-500">
              <span className="text-gold text-4xl block mb-6 opacity-60 font-serif italic">0{index + 1}</span>
              <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">{service.title}</h2>
              <p className="text-zinc-200 mb-6 font-medium tracking-tight">
                {service.description}
              </p>
              <div className="w-8 h-px bg-gold/50 mb-6"></div>
              <p className="text-taupe leading-relaxed font-light text-sm">
                {service.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
