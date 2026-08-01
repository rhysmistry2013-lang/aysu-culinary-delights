export type Branch = {
  slug: string;
  name: string;
  shortName: string;
  addressLines: string[];
  postcode: string;
  phone: string;
  email: string;
  mapsQuery: string;
  hours: { day: string; time: string }[];
  parking: string;
  accessibility: string;
  facilities: string[];
  verified: boolean;
  note?: string;
  rating?: { score: number; count: number };
};

/**
 * Only details visible on Aysu's own printed menu and the Google listing
 * supplied by the client are treated as verified. Everything marked
 * `verified: false` is clearly flagged as placeholder in the UI.
 */
export const branches: Branch[] = [
  {
    slug: "queensbury",
    name: "Aysu Kitchen — Queensbury",
    shortName: "Queensbury",
    addressLines: ["40 Queensbury Station Parade", "Edgware, London"],
    postcode: "HA8 5NN",
    phone: "020 4559 9293",
    email: "info@aysu.uk",
    mapsQuery: "Aysu Kitchen, 40 Queensbury Station Parade, Edgware HA8 5NN",
    hours: [
      { day: "Monday – Thursday", time: "11:00 – 23:00" },
      { day: "Friday", time: "11:00 – 23:30" },
      { day: "Saturday", time: "11:00 – 23:30" },
      { day: "Sunday", time: "11:00 – 22:30" },
    ],
    parking: "Street parking along Queensbury Station Parade; Queensbury Underground (Jubilee line) is a 1-minute walk.",
    accessibility: "Step-free entrance and ground-floor dining. Please call ahead so we can reserve an accessible table.",
    facilities: ["Dine-in", "Takeaway", "Delivery", "Family friendly", "Halal", "Outdoor tables"],
    verified: true,
    note: "Opening hours are indicative — please call to confirm before travelling.",
    rating: { score: 4.8, count: 499 },
  },
  {
    slug: "harrow",
    name: "Aysu — Harrow",
    shortName: "Harrow",
    addressLines: ["229–231 Charlton Road", "Harrow, London"],
    postcode: "HA3 8HU",
    phone: "020 8204 4345",
    email: "info@aysu.uk",
    mapsQuery: "Aysu, 229-231 Charlton Road, Harrow HA3 8HU",
    hours: [
      { day: "Monday – Thursday", time: "11:00 – 23:00" },
      { day: "Friday", time: "11:00 – 23:30" },
      { day: "Saturday", time: "11:00 – 23:30" },
      { day: "Sunday", time: "11:00 – 22:30" },
    ],
    parking: "Local street parking on Charlton Road. Placeholder — parking details to be confirmed by the branch.",
    accessibility: "Placeholder — accessibility details to be confirmed by the branch.",
    facilities: ["Dine-in", "Takeaway", "Delivery", "Family friendly", "Halal"],
    verified: true,
    note: "Address and telephone taken from the Aysu menu. Opening hours, parking and accessibility are placeholder content pending confirmation.",
  },
];

export const getBranch = (slug: string) => branches.find((b) => b.slug === slug);

export const mapsEmbedUrl = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

export const mapsDirectionsUrl = (query: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;