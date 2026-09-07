export type Branch = {
  slug: string;
  name: string;
  shortName: string;
  addressLines: string[];
  postcode: string;
  phone: string;
  email: string;
  mapsQuery: string;
  /** Online ordering link for this branch. Leave null until Aysu provides one. */
  orderUrl: string | null;
  facilities: string[];
};

/**
 * Branch details. Addresses and phone numbers are taken from Aysu's own menu.
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
    orderUrl: null,
    facilities: ["Dine-in", "Takeaway"],
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
    orderUrl: null,
    facilities: ["Dine-in", "Takeaway"],
  },
  {
    slug: "watford",
    name: "Aysu — Watford",
    shortName: "Watford",
    addressLines: ["152–154 High Street", "Watford"],
    postcode: "WD17 2EN",
    phone: "01923 590230",
    email: "info@aysu.uk",
    mapsQuery: "Aysu, 152-154 High Street, Watford WD17 2EN",
    orderUrl: null,
    facilities: ["Dine-in", "Takeaway"],
  },
];

export const getBranch = (slug: string) => branches.find((b) => b.slug === slug);

export const mapsEmbedUrl = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

export const mapsDirectionsUrl = (query: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;
