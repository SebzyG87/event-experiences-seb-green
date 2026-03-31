interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
}

export const ServiceCard = ({ title, description, image, onClick }: ServiceCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl border border-neon-pink/30 bg-card cursor-pointer transition-all duration-500 hover:border-neon-pink hover:neon-border-pink"
    >
      {/* Image Slice */}
      {image && (
        <div className="h-32 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 h-32 bg-gradient-to-b from-transparent to-card" />
        </div>
      )}

      {/* Ticket Stub Effect */}
      <div className="absolute top-0 left-0 right-0 h-1 gradient-neon" />
      
      {/* Content */}
      <div className="p-6">
        <h3 className="font-playfair text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        
        {/* Ticket Corner */}
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-neon-green/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Perforated Edge */}
      <div className="absolute -left-1 top-1/2 w-2 h-4 bg-background rounded-r-full" />
      <div className="absolute -right-1 top-1/2 w-2 h-4 bg-background rounded-l-full" />
    </div>
  );
};
