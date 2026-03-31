import { Play } from "lucide-react";

const YOUTUBE_MIXES = [
  {
    id: "SUdXPxv0XkI",
    title: "Deep House Mix",
    url: "https://youtu.be/SUdXPxv0XkI",
  },
  {
    id: "s3HlsqEUg1c",
    title: "Afro House Mix",
    url: "https://youtu.be/s3HlsqEUg1c",
  },
  {
    id: "3DoBM1KoiGw",
    title: "Tech House Mix",
    url: "https://youtu.be/3DoBM1KoiGw",
  },
];

export const AudioZone = () => {
  return (
    <section id="audio-zone" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-pink/5 rounded-full blur-[128px]" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <span className="text-neon-pink text-sm font-semibold uppercase tracking-widest mb-4 block">
            Audio Zone
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-foreground">
            Hear My <span className="gradient-neon-text">Sound</span>
          </h2>
        </div>

        {/* YouTube Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {YOUTUBE_MIXES.map((mix) => (
            <a
              key={mix.id}
              href={mix.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-effect rounded-2xl overflow-hidden hover:border-neon-pink/50 transition-all duration-300"
            >
              {/* YouTube Thumbnail */}
              <div className="relative aspect-video">
                <img
                  src={`https://img.youtube.com/vi/${mix.id}/maxresdefault.jpg`}
                  alt={mix.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-neon-pink/90 flex items-center justify-center shadow-lg shadow-neon-pink/50">
                    <Play size={28} className="text-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              {/* Title */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-neon-pink transition-colors">
                  {mix.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">Mixed by Seb Green</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
