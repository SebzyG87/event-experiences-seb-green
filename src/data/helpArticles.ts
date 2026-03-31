export interface HelpArticle {
  slug: string;
  title: string;
  category: string;
  content: string;
}

export const helpArticles: HelpArticle[] = [
  {
    slug: "music-genres",
    title: "What music genres does Seb play",
    category: "DJ Services",
    content: "Seb specialises in Deep House, Afro House and Tech House — sophisticated, floor-filling music that works equally well as background atmosphere during a drinks reception and as peak-time energy on the dance floor. Sets are curated specifically for each event — the vibe, the crowd, and the moment. Three example mixes are available to listen to on this page so you can hear the sound before you book."
  },
  {
    slug: "how-far-advance",
    title: "How far in advance should I book",
    category: "Getting Started",
    content: "Weekend dates in summer and around Christmas fill up 6 to 12 months in advance. For weddings we recommend booking as soon as you have your venue date confirmed. For corporate events and parties 3 to 6 months is usually sufficient. It is always worth checking availability for your date even at short notice — cancellations do happen and we maintain a waiting list."
  },
  {
    slug: "ultimate-bundle",
    title: "What is included in the Ultimate Bundle",
    category: "Pricing",
    content: "The Ultimate Bundle combines full day DJ hosting, full event photography coverage, and a ceremony highlight video into one seamless package from a single team. Bundling saves up to 25 percent compared to booking each service separately. You get one point of contact, one contract, and a team that works together on the day rather than coordinating between separate vendors. Custom quote based on your event."
  },
  {
    slug: "playlist-requests",
    title: "Can I provide my own playlist or requests",
    category: "DJ Services",
    content: "Absolutely. We work from a detailed brief provided in advance covering your must-plays, must-not-plays, and any specific moments that need a particular track — first dance, walking in, cake cutting. The brief is completed via a simple online form sent after booking. On the day there is always room for reasonable requests from guests. The goal is a set that feels personal to you."
  },
  {
    slug: "dj-equipment",
    title: "What equipment is provided for the DJ set",
    category: "DJ Services",
    content: "All professional DJ equipment is provided and included in the price — Pioneer CDJs, DJM mixer, and a full PA system sized appropriately for your venue and guest numbers. We conduct a venue visit or technical consultation in advance to confirm the right setup. Uplighting and additional lighting packages are available as an add-on. We carry full public liability insurance."
  },
  {
    slug: "photo-video-together",
    title: "How does photo and video work together",
    category: "Services",
    content: "When you book the photo and video package together the two teams work in coordination throughout the day. The photographer focuses on stills while the videographer captures motion — they do not get in each other's way and they share the best positions and lighting. The result is a complete visual record of your event that is consistent in style and quality across both formats."
  },
  {
    slug: "addons",
    title: "What are the add-on options and pricing",
    category: "Pricing",
    content: "Available add-ons: Drone Aerial Cinematography at £120 adds aerial footage of your venue and key moments. Second Shooter at £200 provides an additional photographer for full coverage from multiple angles simultaneously. 48-Hour AI Turnaround at £50 delivers a selection of AI-enhanced preview images within 48 hours of your event — ideal for sharing on social media while the full gallery is being edited."
  },
  {
    slug: "check-availability",
    title: "How do I check my date availability",
    category: "Getting Started",
    content: "Click the Check Your Date button on this page to open the booking calendar. Select your date to see real-time availability. If your date is available you can provisionally hold it for 48 hours while we discuss your requirements. A booking is confirmed on receipt of a deposit. If your date is not available we will add you to the waiting list and contact you if a cancellation occurs."
  }
];
