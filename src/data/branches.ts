export type Branch = {
  slug: string;
  name: string;
  shortName: string;
  addressLines: string[];
  postcode: string;
  phone: string;
  email: string;
  mapsQuery: string;
  /** Opening times — edit here to update them everywhere on the site. */
  hours: { day: string; time: string }[];
  /** Online ordering link for this branch. Leave null until Aysu provides one. */
  orderUrl: string | null;
  parking?: string;
  accessibility?: string;
  facilities: string[];
};

/**
 * Branch details. Addresses and phone numbers are taken from Aysu's own menu.
 * Opening hours are indicative and should be replaced with the restaurant's
 * confirmed times — edit the `hours` arrays below.
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
      { day: "Friday – Saturday", time: "11:00 – 23:30" },
      { day: "Sunday", time: "11:00 – 22:30" },
    ],
    orderUrl: null,
    parking:
      "Street parking along Queensbury Station Parade. Queensbury Underground (Jubilee line) is a short walk away.",
    accessibility: "Ground-floor dining. Please call ahead and we will reserve a suitable table.",
    facilities: ["Dine-in", "Takeaway", "Family friendly", "Halal"],
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
      { day: "Friday – Saturday", time: "11:00 – 23:30" },
      { day: "Sunday", time: "11:00 – 22:30" },
    ],
    orderUrl: null,
    facilities: ["Dine-in", "Takeaway", "Family friendly", "Halal"],
  },
];

export const getBranch = (slug: string) => branches.find((b) => b.slug === slug);

export const mapsEmbedUrl = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

export const mapsDirectionsUrl = (query: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;
