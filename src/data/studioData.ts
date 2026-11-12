export interface TattooWork {
  id: string;
  title: string;
  category: 'Black & Grey' | 'Fine Line' | 'Realism' | 'Hand Poke' | 'Color & Custom' | 'Custom & Color';
  artist: string;
  placement: string;
  duration: string;
  description: string;
  image: string;
  tags?: string[];
  contentSubject?: string;
  complexity?: string;
  aiAnalyzed?: boolean;
}

export interface Artist {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string[];
  bio: string;
  instagram: string;
  avatar: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  priceNote: string;
  priceHighlight: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export const STUDIO_DETAILS = {
  name: "GUNSLINGERS TATTOO SCHOOL & STUDIO",
  shortName: "Gunslingers",
  city: "Kochi, Kerala",
  phone: "+91 8089206216",
  phoneRaw: "8089206216",
  email: "Gunslingerstattoostudio@gmail.com",
  instagramUrl: "https://www.instagram.com/gunslingerstattoostudio?rpxt=dXR0M3A2ZXU3NDhk",
  instagramHandle: "@gunslingerstattoostudio",
  address: "GUNSLINGERS TATTOO SCHOOL & STUDIO, Kochi, Kerala, India",
  mapsEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.7703300906915!2d76.3518809!3d10.108074399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080f20c9352c27%3A0x6124b2f5e5ee405e!2sGUNSLINGERS%20TATTOO%20SCHOOL%20%26%20STUDIO%20KOCHI!5e1!3m2!1sen!2sin!4v1794313693107!5m2!1sen!2sin",
  hours: "Monday – Sunday: 10:30 AM – 9:00 PM (Appointments Preferred)",
  logoAsset: "/gunslingers-logo-transparent.png",
  logoAssetOriginal: "/gunslingers-logo-original.png",
  logoAssetRaw: "/assets/aistudio/721359d3-db01-4f81-b226-2219f438a138_3bf4671b.jpg",
  pricingSummary: [
    { label: "Custom Tattoos", price: "From ₹2k", note: "Bespoke design & sterile execution" },
    { label: "Tattoo Training", price: "Starts ₹50k", note: "Comprehensive master diploma program" },
    { label: "Laser Removal & Other Services", price: "Customized Pricing", note: "Free consultation & session planning" }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "custom-tattoos",
    name: "Custom Tattoos",
    tagline: "Fine-line, Realism, Geometric & Illustrative",
    priceNote: "From ₹2k",
    priceHighlight: "₹2k onwards",
    description: "Every piece is designed bespoke for your anatomy and personal narrative. From delicate minimalist fine-line pieces to full sleeves and back murals.",
    features: [
      "Custom original stencil & anatomy consultation",
      "Hospital-grade single-use needles & vegan ink",
      "Sterile single-session or multi-session planning",
      "Medical aftercare kit & direct artist follow-up"
    ],
    isFeatured: true
  },
  {
    id: "tattoo-training",
    name: "Tattoo School & Training",
    tagline: "Professional Certified Diploma Course",
    priceNote: "Starts ₹50k",
    priceHighlight: "₹50k onwards",
    description: "Kerala's renowned tattoo academy. Intensive hands-on mentorship covering machine anatomy, skin depth, fine linework, shading, sterilization protocol, and live human client apprenticeships.",
    features: [
      "Rotary & coil machine mechanics & tuning",
      "Skin anatomy, cross-contamination & sterilization mastery",
      "Synthetic skin practice to supervised human model sessions",
      "Business establishment, client consulting & portfolio building",
      "Certification upon curriculum completion"
    ],
    isFeatured: true
  },
  {
    id: "laser-removal",
    name: "Laser Tattoo Removal",
    tagline: "Advanced Q-Switched & Picosecond Technology",
    priceNote: "Customized Pricing",
    priceHighlight: "Customized",
    description: "Safe, effective fading for cover-ups or complete tattoo removal with minimal skin trauma and targeted pigment breakdown.",
    features: [
      "Targeted ink frequency calibration",
      "Cooling system for client comfort",
      "Detailed session roadmap & skin recovery plan",
      "Specialized prep fading for artist cover-ups"
    ]
  },
  {
    id: "body-piercings",
    name: "Body Piercings",
    tagline: "Implant-Grade Titanium & Sterile Needles",
    priceNote: "Customized Pricing",
    priceHighlight: "Customized",
    description: "Ear curation, septum, nostril, navel, and dermal piercings executed strictly with sterile hollow needles (never guns) and hypoallergenic jewelry.",
    features: [
      "100% Implant-Grade ASTM F-136 Titanium",
      "Autoclave-sterilized precision hollow needles",
      "Gentle anatomical placement consultation",
      "Aftercare saline spray & heal tracking"
    ]
  },
  {
    id: "hand-poke",
    name: "Hand Poke Tattoos",
    tagline: "Machine-Free Ritual & Organic Texture",
    priceNote: "Customized Pricing",
    priceHighlight: "From ₹2k",
    description: "Intimate, non-electric tattooing technique using pointillism. Gentle on skin with faster healing times and unmatched organic dotwork character.",
    features: [
      "Traditional dot-by-dot needle precision",
      "Less dermal vibration & ultra-gentle healing",
      "Specialized sacred geometry, runes & fine scripts",
      "Calm, therapeutic studio session"
    ]
  },
  {
    id: "pmu-microblading",
    name: "PMU & Microblading",
    tagline: "Semi-Permanent Brows, Lips & Scalp (SMP)",
    priceNote: "Customized Pricing",
    priceHighlight: "Customized",
    description: "Precision permanent makeup enhancing natural facial symmetry through hyper-realistic hair strokes, ombre powder brows, and lip blush tinting.",
    features: [
      "Micro-pigment color matching to skin undertone",
      "Golden-ratio facial brow mapping",
      "Numbing cream for painless treatment",
      "Complimentary touch-up assessment"
    ]
  }
];

export const ARTISTS: Artist[] = [
  {
    id: "lead-artist",
    name: "GLADWIN MATHEW",
    role: "Founder & Master Tattooist",
    experience: "11+ Years Experience",
    specialty: ["Dark Realism", "Custom Sleeves", "Cover-ups", "Fine-Line"],
    bio: "Pioneering high-precision tattooing in Kochi. Trained across international conventions, specializing in anatomically flowed large-scale pieces and tattoo artist education.",
    instagram: "https://www.instagram.com/gunslingerstattoostudio?rpxt=dXR0M3A2ZXU3NDhk",
    avatar: "/src/assets/images/regenerated_image_1794466551453.jpg"
  },
  {
    id: "fine-line-artist",
    name: "Aria Vance",
    role: "Senior Tattoo Artist & PMU Specialist",
    experience: "7+ Years Experience",
    specialty: ["Micro Realism", "Geometric", "Hand Poke", "PMU Microblading"],
    bio: "Celebrated for surgical linework and subtle gradient shading. Aria leads our PMU microblading division with a focus on organic facial contours.",
    instagram: "https://www.instagram.com/gunslingerstattoostudio?rpxt=dXR0M3A2ZXU3NDhk",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "academy-instructor",
    name: "SONNET JOSE",
    role: "Academy Director & Piercing Master",
    experience: "5+ Years Experience",
    specialty: ["Tattoo School Mentorship", "Body Piercing", "Neo-Traditional", "Blackwork"],
    bio: "Guiding the next generation of tattoo artists through hands-on rigor, sterile protocols, and deep understanding of skin biology and machine engineering.",
    instagram: "https://www.instagram.com/gunslingerstattoostudio?rpxt=dXR0M3A2ZXU3NDhk",
    avatar: "/src/assets/images/regenerated_image_1794466553335.jpg"
  }
];

export const PORTFOLIO_WORKS: TattooWork[] = [
  {
    id: "work-1",
    title: "Ascending Swift & Celestial Dotwork Halo",
    category: "Fine Line",
    artist: "GLADWIN MATHEW",
    placement: "Outer Forearm / Radial Curvature",
    duration: "4.5 hours",
    description: "Surgical single-needle swallow in dynamic flight enveloped by a delicate stippled pointillism crescent moon. Micro-feather shading and razor-sharp contour stabilization.",
    image: "/assets/aistudio/7d04a737-26fc-42b3-8f15-470810dafa49_630b0d2e.jpg",
    contentSubject: "Swallow Bird & Stippled Crescent Moon",
    tags: ["#FineLine", "#Dotwork", "#AvianArt", "#MicroShading", "#GunslingersMaster"],
    complexity: "Masterclass",
    aiAnalyzed: true
  },
  {
    id: "work-2",
    title: "Tropical Sloth in Chromatic Canopy",
    category: "Color & Custom",
    artist: "SONNET JOSE",
    placement: "Bicep / Inner Arm Anatomy",
    duration: "5.5 hours",
    description: "Vibrant high-saturation wildlife realism with multi-tonal fur texturing, emerald foliage bokeh, and sunlight dappling. Custom organic composition crafted for the client.",
    image: "/assets/aistudio/0012c1c1-02d0-4bc8-aea4-94aba80990a7_c2b8995e.jpg",
    contentSubject: "Hanging Sloth in Rainforest Canopy",
    tags: ["#ColorRealism", "#WildlifeTattoo", "#BotanicalColor", "#FurTexture", "#KochiInk"],
    complexity: "Masterclass",
    aiAnalyzed: true
  },
  {
    id: "work-3",
    title: "Classical Renaissance Eros & Psyche Embrace",
    category: "Realism",
    artist: "GLADWIN MATHEW",
    placement: "Lateral Deltoid & Outer Tricep",
    duration: "6 hours",
    description: "Faithful fine-art translation of the neoclassical mythological sculpture into skin. Soft marble draping, feathered anatomical wings, and smooth charcoal greywash transitions.",
    image: "/assets/aistudio/74f668d7-17a2-40ad-87c5-29a95bce1e42_a59b947f.jpg",
    contentSubject: "Eros & Psyche Mythological Neoclassical Figures",
    tags: ["#Renaissance", "#SculptureRealism", "#BlackAndGrey", "#FineArtTattoo", "#DeltoidFlow"],
    complexity: "Masterclass",
    aiAnalyzed: true
  },
  {
    id: "work-4",
    title: "Mystic Third Eye, Typography & Sacred Cross",
    category: "Black & Grey",
    artist: "GLADWIN MATHEW",
    placement: "Anterior Forearm & Radial Wrist",
    duration: "4 hours",
    description: "Woodcut-inspired solar eye burst paired with mirrored serif typography and architectural circular crucifix. Precise negative space dynamics and crisp linework weight.",
    image: "/assets/aistudio/f66d04a8-4afb-4877-8aad-08bb5ad2877b_9477993a.jpg",
    contentSubject: "Woodcut All-Seeing Eye, 'REMEMBER' & Geometric Cross",
    tags: ["#Woodcut", "#SacredGeometry", "#Typography", "#Blackwork", "#ForearmDesign"],
    complexity: "Intermediate",
    aiAnalyzed: true
  },
  {
    id: "work-5",
    title: "Cross-Stitch Botanical Blossom & Berries",
    category: "Fine Line",
    artist: "Aria Vance",
    placement: "Clavicle & Upper Collarbone",
    duration: "2.5 hours",
    description: "Avant-garde cross-stitch embroidery illusion rendered in micro-red ink crosses, paired with delicate charcoal berry stems following the natural curvature of the clavicle.",
    image: "/assets/aistudio/45391f55-568d-4693-a0e7-73a3d555890e_45a09f46.jpg",
    contentSubject: "Embroidery Cross-Stitch Flora & Winter Berries",
    tags: ["#EmbroideryTattoo", "#CrossStitch", "#ClaviclePlacement", "#MicroColor", "#Minimalist"],
    complexity: "Fine-Detail",
    aiAnalyzed: true
  },
  {
    id: "work-6",
    title: "Clinical Laser Pigment Removal (Session 1)",
    category: "Custom & Color",
    artist: "SONNET JOSE",
    placement: "Dorsal Hand & Wrist Anatomy",
    duration: "Clinical Session 01",
    description: "Documented pigment breakdown and fading of dense black hand ink after a single targeted laser session. Safe dermal clearance paving the way for a bespoke cover-up.",
    image: "/assets/aistudio/c00fcedc-9e84-4945-b31d-5cb000046fb2_abe2065f.jpg",
    contentSubject: "Before & After 1st Session Laser Ink Degradation",
    tags: ["#LaserRemoval", "#CoverupPrep", "#SkinHealth", "#ClinicalSanitation", "#KochiLaser"],
    complexity: "Clinical Procedure",
    aiAnalyzed: true
  },
  {
    id: "work-7",
    title: "Master Studio Consultation & Custom Execution",
    category: "Custom & Color",
    artist: "GLADWIN MATHEW",
    placement: "Studio Chair / Live Atelier Session",
    duration: "Atelier Experience",
    description: "Behind-the-scenes view of our sterile cleanroom ergonomics, custom client anatomical stencil mapping, and wireless rotary machine precision at Gunslingers Studio.",
    image: "/assets/aistudio/02b1cfa3-2f8e-45d7-809c-54cf440f9cd6_82705848.jpg",
    contentSubject: "Artist & Client Ergonomics in Studio Suite",
    tags: ["#AtelierLife", "#GunslingersKochi", "#SterileProtocol", "#ArtistCraft", "#LiveSession"],
    complexity: "Studio Craft",
    aiAnalyzed: true
  }
];

export const SAFETY_STANDARDS = [
  {
    title: "Autoclave Medical Sterilization",
    detail: "Class B medical-grade vacuum autoclaves for all non-disposable metal grips, tested with monthly biological spore indicators."
  },
  {
    title: "100% Single-Use Disposables",
    detail: "Needle cartridges, ink caps, barrier sleeves, grip tape, and razors are unsealed in front of your eyes and discarded into biohazard disposal."
  },
  {
    title: "Vegan & Heavy-Metal-Free Inks",
    detail: "We exclusively utilize world-certified organic pigments (EU REACH compliant) free from animal derivatives and toxic heavy metals."
  },
  {
    title: "Dedicated Cleanrooms",
    detail: "Separate dedicated suites for custom tattoo appointments, laser removal, body piercing, and educational training."
  }
];

export const TRAINING_CURRICULUM = [
  {
    phase: "Phase 01",
    title: "Skin Anatomy & Sterilization",
    items: ["Epidermis/Dermis mechanics", "Bloodborne pathogen hygiene", "Autoclave & barrier protocols"]
  },
  {
    phase: "Phase 02",
    title: "Machine Mechanics & Needle Physics",
    items: ["Rotary vs Coil configurations", "Voltage & needle throw tuning", "Cartridge configurations (Liner/Shader/Magnum)"]
  },
  {
    phase: "Phase 03",
    title: "Stenciling, Line Stability & Shading",
    items: ["Freehand sketching & iPad stencil mastery", "Consistent needle depth control", "Whip shading, pepper shading & smooth greywash"]
  },
  {
    phase: "Phase 04",
    title: "Live Model Mentorship & Business",
    items: ["Supervised human skin sessions", "Client psychology & price quoting", "Studio setup & health board legalities"]
  }
];
