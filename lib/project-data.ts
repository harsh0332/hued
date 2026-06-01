export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  siteArea: string;
  builtUpArea: string;
  category: string;
  story: string;
  philosophy: string;
  materials: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "house-of-whites",
    title: "The House of Whites",
    subtitle: "A Composition of Purity, Clarity & Silence",
    location: "Shivpuri, M.P.",
    year: "2023",
    siteArea: "3,600 Sqft",
    builtUpArea: "4,200 Sqft",
    category: "Residential Architecture & Interiors",
    story: "Commissioned by a visionary brand designer with an absolute affinity for white, this residence stands as a pure architectural study of form, light, and shadow. By stripping away extraneous ornament, the structure explores the delicate shifts in natural lighting throughout the day, where pure white planes act as canvas for the shadows of nearby foliage. Every line has been drawn with rigorous precision, ensuring that the visual silence of the home acts as a soothing sanctuary from the outside world.",
    philosophy: "Architecture is not merely about styling; it is about subtraction. The House of Whites embodies the philosophy of absolute restraint, where silence is elevated to a structural element, allowing the tactile quality of the surfaces and the drama of incoming light to shape the human experience.",
    materials: ["White Travertine", "Polished Gypsum Plaster", "Seamless Microconcrete", "Low-Iron Glazing", "Bleached Oak"],
    images: [
      "/projects/house-of-whites/house-of-whites_4_1.png",
      "/projects/house-of-whites/house-of-whites_4_2.png",
      "/projects/house-of-whites/house-of-whites_4_3.png",
      "/projects/house-of-whites/house-of-whites_5_1.png",
      "/projects/house-of-whites/house-of-whites_5_2.png",
      "/projects/house-of-whites/house-of-whites_5_3.png",
      "/projects/house-of-whites/house-of-whites_5_4.png",
      "/projects/house-of-whites/house-of-whites_6_1.png",
      "/projects/house-of-whites/house-of-whites_6_2.png",
      "/projects/house-of-whites/house-of-whites_6_3.png",
      "/projects/house-of-whites/house-of-whites_6_4.png",
      "/projects/house-of-whites/house-of-whites_6_5.png",
      "/projects/house-of-whites/house-of-whites_6_6.png",
    ]
  },
  {
    slug: "paras-abhushan-bhandar",
    title: "Paras Abhushan Bhandar",
    subtitle: "A Quiet Luxury Retail Sanctuary",
    location: "Kalkaji, Delhi",
    year: "2023",
    siteArea: "600 Sqft",
    builtUpArea: "1,600 Sqft",
    category: "Luxury Retail Design",
    story: "Conceived as a micro-museum rather than a traditional jewelry showroom, this retail space in New Delhi is an exercise in warm minimalism and focused sensory experiences. By deploying a heavily restrained material palette and deeply intentional directional lighting, the architecture recedes into the background, casting the absolute spotlight on the intricate jewelry pieces. Subtle, rich textures on the walls and curved corners guide visitors through a quiet, atmospheric journey of luxury and absolute detail.",
    philosophy: "Retail environments should evoke an emotional response. For Paras Abhushan Bhandar, we designed an atmosphere of absolute intimacy and trust, where raw stone elements meet precisely detailed glass cases, establishing a bridge between ancient craftsmanship and contemporary design.",
    materials: ["Travertine Stone Panels", "Textured Lime Wash", "Bronze Detailing", "Custom Warm LED Glazing", "Plush Bouclé Fabrics"],
    images: [
      "/projects/paras-abhushan-bhandar/paras-abhushan-bhandar_7_1.png",
      "/projects/paras-abhushan-bhandar/paras-abhushan-bhandar_7_2.png",
      "/projects/paras-abhushan-bhandar/paras-abhushan-bhandar_7_3.png",
      "/projects/paras-abhushan-bhandar/paras-abhushan-bhandar_8_1.png",
      "/projects/paras-abhushan-bhandar/paras-abhushan-bhandar_8_2.png",
      "/projects/paras-abhushan-bhandar/paras-abhushan-bhandar_8_3.png",
    ]
  },
  {
    slug: "prana",
    title: "Prana: An Indian Home",
    subtitle: "Distilling Light, Craft & Temporal Geometry",
    location: "Shivpuri, M.P.",
    year: "2024",
    siteArea: "1,250 Sqft",
    builtUpArea: "3,600 Sqft",
    category: "Residential Architecture",
    story: "Prana—meaning the vital breath of life—is a home designed to cultivate wellness, ventilation, and a profound connection to traditional materials. Striking a beautiful balance between raw hand-cast concrete and warm, tactile Indian woods, the spaces are arranged to allow natural air currents and soft light to flow continuously. At its core, the layout references traditional courtyard living, creating intimate pockets of greenery and dedicated meditation spaces that breathe life into the everyday routines of its inhabitants.",
    philosophy: "A home must breathe. Prana is an architectural response to the frantic pace of modern life, offering a quiet, organic sanctuary of materials that age beautifully with time, celebrating the honest beauty of Indian craftsmanship.",
    materials: ["Teak Wood", "Raw Cast Concrete", "Terracotta Tiles", "Brass Inlays", "Hand-woven Cane Panels"],
    images: [
      "/projects/prana/prana_9_1.png",
      "/projects/prana/prana_9_2.png",
      "/projects/prana/prana_9_3.png",
      "/projects/prana/prana_10_1.png",
      "/projects/prana/prana_10_2.png",
      "/projects/prana/prana_10_3.png",
      "/projects/prana/prana_10_4.png",
      "/projects/prana/prana_10_5.png",
    ]
  },
  {
    slug: "goyal-residence",
    title: "Goyal Residence: The Classical Home",
    subtitle: "An Interlocking of Neoclassical Scale & Modern Living",
    location: "Shivpuri, M.P.",
    year: "2024",
    siteArea: "1,800 Sqft",
    builtUpArea: "7,200 Sqft",
    category: "Residential Architecture",
    story: "Spread across an expansive 7,200 square feet, the Goyal Residence is a majestic exploration of European classical proportions adapted for contemporary Indian multi-generational living. The design features soaring double-height volumes, custom stone masonry, and meticulously crafted architectural moldings that pay homage to classical design traditions. Yet, the floor plan remains fluid and open, ensuring that the spaces feel light, expansive, and perfectly integrated with modern family life.",
    philosophy: "We seek to merge history with modernity. The Goyal Residence utilizes historical geometry and classical axial planning to create a timeless architectural language, while utilizing state-of-the-art technological details for absolute spatial comfort.",
    materials: ["Polished Carrara Marble", "Custom Limestone Mouldings", "Forged Wrought Iron", "Warm Walnut Woodwork", "Suede Wall Upholstery"],
    images: [
      "/projects/goyal-residence/goyal-residence_11_1.png",
      "/projects/goyal-residence/goyal-residence_11_2.png",
      "/projects/goyal-residence/goyal-residence_12_1.png",
      "/projects/goyal-residence/goyal-residence_12_2.png",
      "/projects/goyal-residence/goyal-residence_12_3.png",
      "/projects/goyal-residence/goyal-residence_12_4.png",
    ]
  },
  {
    slug: "it-office",
    title: "An IT Office",
    subtitle: "A High-Productivity Architectural Monograph",
    location: "Noida, NCR",
    year: "2023",
    siteArea: "900 Sqft",
    builtUpArea: "900 Sqft",
    category: "Commercial Interiors",
    story: "Designed for a fast-paced technology team, this workspace in Noida redefines commercial interiors through custom acoustics, warm diffused lighting, and clear zoning. Moving away from typical cold corporate cubicles, we utilized raw concrete tones, sleek glass partitions, and ergonomic built-in timber furniture to foster collaboration while maintaining individual acoustic privacy. The result is a highly functional, visually cohesive office that balances technical requirements with rich, human comfort.",
    philosophy: "Workplaces should inspire. By applying architectural principles of light and materiality to commercial spaces, we construct environments that enhance concentration and elevate creative output.",
    materials: ["Acoustic Timber Slats", "Clear Glazed Partitions", "Anodized Aluminum", "Raw Concrete Render", "Ergonomic Custom Oak Desks"],
    images: [
      "/projects/it-office/it-office_13_1.png",
      "/projects/it-office/it-office_13_2.png",
      "/projects/it-office/it-office_13_3.png",
      "/projects/it-office/it-office_14_1.png",
      "/projects/it-office/it-office_14_2.png",
    ]
  },
  {
    slug: "veda-hotel",
    title: "Veda: A Highway Hotel",
    subtitle: "Boutique Hospitality & Classic Monumentality",
    location: "Shivpuri, M.P.",
    year: "2024",
    siteArea: "12,000 Sqft",
    builtUpArea: "—",
    category: "Hospitality Architecture",
    story: "Situated as a striking landmark along the Shivpuri Highway, Veda is a boutique hotel that reimagines roadside hospitality. Blending a monumental, classical facade with modern, warm-toned interiors, the project welcomes travelers with a dramatic high-volume lobby, curved archways, and custom sculptural brass lights. Comprising stately guest suites, curated dining destinations, and an expansive ballroom opening onto landscaped gardens, the property is a peaceful, luxury retreat for weary travelers and grand events alike.",
    philosophy: "Hospitality is the art of storytelling through space. Veda was designed to evoke a sense of arrival and wonder, where classical geometry meets soft, modern textures, providing an exceptional and memorable journey.",
    materials: ["Jodhpur Sandstone Facade", "Beige Marble Floors", "Sculpturesque Brass Fixtures", "Fluted Plaster Arches", "Custom Teak Seating"],
    images: [
      "/projects/veda-hotel/veda-hotel_15_1.png",
      "/projects/veda-hotel/veda-hotel_15_2.png",
      "/projects/veda-hotel/veda-hotel_15_3.png",
      "/projects/veda-hotel/veda-hotel_15_4.png",
      "/projects/veda-hotel/veda-hotel_15_5.png",
      "/projects/veda-hotel/veda-hotel_15_6.png",
      "/projects/veda-hotel/veda-hotel_16_1.png",
      "/projects/veda-hotel/veda-hotel_16_2.png",
      "/projects/veda-hotel/veda-hotel_16_3.png",
      "/projects/veda-hotel/veda-hotel_16_4.png",
      "/projects/veda-hotel/veda-hotel_16_5.png",
      "/projects/veda-hotel/veda-hotel_16_6.png",
    ]
  },
  {
    slug: "facades-collection",
    title: "The Facades Collection",
    subtitle: "A Volumetric Study of Light, Screening & Stone",
    location: "Various Locations",
    year: "2022 - 2025",
    siteArea: "N/A",
    builtUpArea: "N/A",
    category: "Architectural Exterior Portfolio",
    story: "A curated curation of exterior studies exploring the envelope as a dynamic filter between the public and private realms. Through a series of interlocking volumes, custom screens, and thick natural stone cladding, this facades collection demonstrates HUED's commitment to material sensitivity and visual depth. Designed to mitigate heat while maximizing the entry of soft indirect daylight, the facades act as sculptural statements that redefine their streetscapes.",
    philosophy: "The facade is the building's dialogue with the city. We believe in designing volumetric envelopes that respond to local climate conditions and create an ever-changing interplay of natural light and shadow.",
    materials: ["Limestone Cladding", "Perforated Metal Screens", "Exposed Architectural Concrete", "Thermowood Slats", "Structural Glazing"],
    images: [
      "/projects/facades-collection/facades-collection_17_1.png",
      "/projects/facades-collection/facades-collection_17_2.png",
      "/projects/facades-collection/facades-collection_17_3.png",
      "/projects/facades-collection/facades-collection_17_4.png",
      "/projects/facades-collection/facades-collection_17_5.png",
    ]
  }
];

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ar. Kritika Khandelwal",
    role: "Founder & Creative Director",
    image: "/team/team_18_1.png"
  },
  {
    name: "Ar. Ankush Wahane",
    role: "Lead Architect (Architecture & MEP)",
    image: "/team/team_18_2.png"
  },
  {
    name: "Ar. Shakti Gupta",
    role: "Associate Architect (Architecture & MEP)",
    image: "/team/team_18_2.png" // using available extracted team portrait
  },
  {
    name: "Er. Parag Waghela",
    role: "Structural Engineer",
    image: "/team/team_18_2.png"
  }
];
