import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-bg))]/90 via-[hsl(var(--hero-bg))]/85 to-[hsl(var(--hero-overlay))]/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">Since 1999</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-white">Complete Solutions in</span>
            <br />
            <span className="text-primary">Hydraulic Equipment</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in">
            Professional hydraulic equipment manufacturing, renovation and testing services. 
            25+ years of industrial excellence.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-gray-400">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">ISO 10100</div>
              <div className="text-sm text-gray-400">Test Protocol</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
