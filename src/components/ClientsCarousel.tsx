import logoNovelis from "@/assets/logo-novelis.png";
import logoArcelorMittal from "@/assets/logo-arcelormittal.png";
import logoMetso from "@/assets/logo-metso.png";
import logoFaberCastell from "@/assets/logo-faber-castell.png";
import logoVotorantim from "@/assets/logo-votorantim.png";
import logoEletrobras from "@/assets/logo-eletrobras.png";

const ClientsCarousel = () => {
  const logos = [
    { src: logoNovelis, alt: "Logo Novelis" },
    { src: logoArcelorMittal, alt: "Logo ArcelorMittal" },
    { src: logoMetso, alt: "Logo Metso" },
    { src: logoFaberCastell, alt: "Logo Faber-Castell" },
    { src: logoVotorantim, alt: "Logo Grupo Votorantim" },
    { src: logoEletrobras, alt: "Logo Eletrobrás" },
  ];

  // Duplicate for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-2xl font-bold text-center mb-2">Trusted by Leading Companies</h3>
        <p className="text-center text-muted-foreground">Over 25 years serving industry leaders with excellence</p>
      </div>

      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
