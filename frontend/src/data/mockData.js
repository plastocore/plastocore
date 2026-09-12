export const companyInfo = {
  name: "Plastocore",
  tagline: "Precision in Every Connection. Reliability in Every Application.",
  subtagline:
    "Wire Harnesses | Cable Assemblies | Connectorization | Precision Injection Moulding",
  slogan: "One Cable. Every Need. Complete Solutions.",
  location: "Rakanpur, Gandhinagar, Gujarat, India",
  established: "2018",
  gst: "24AJPPM2507C1ZJ",
  iec: "AJPPM2507C",
  phone: "+91 86550 44579",
  phoneSecondary: "+91 70146 13142",
  proprietorPhone: "+91 97722 53784",
  email: "info@plastocore.com",
  salesEmail: "plastocore@gmail.com",
  website: "www.plastocore.com",
  addressLines: [
    "P/843, Om Industrial Estate",
    "Near Nikky Cable, Opp. Amardeep Pipes",
    "Sola-Santej Road, Village Rakanpur, Santej",
    "Gandhinagar, Gujarat – 382721, India"
  ],
  contacts: [
    {
      name: "Narendra Dev",
      role: "Head – Business Development",
      phone: "+91 86550 44579",
      email: "info@plastocore.com"
    },
    {
      name: "Dharmendra Mewara",
      role: "Proprietor",
      phone: "+91 97722 53784",
      email: "plastocore@gmail.com"
    }
  ]
};

export const customers = [
  { name: "V Sole Private Limited", domain: "vsole.in" },
  { name: "Cathode Power Pvt. Ltd", domain: "cathodepower.com" },
  { name: "PV Blink Technologies Pvt Ltd.", domain: "pvblink.com" },
  { name: "Horizon E-Peripherals Private Ltd.", domain: "horizoneperipherals.com" },
  { name: "G-Tek Solutions Pvt. Ltd.", domain: "gteksolutions.com" },
  { name: "Electrify Energy Private Ltd.", domain: "electrifyenergy.com" },
  { name: "Mefron Technologies India Pvt. Ltd", domain: "mefron.com" },
  { name: "Mindra EV", domain: "mindraev.com" },
  { name: "Mindra Green", domain: "mindragreen.com" },
  { name: "Access Private Ltd", domain: "accessindia.com" },
  { name: "Everest Instrument", domain: "everestinstrument.com" },
  { name: "Proactive Health", domain: "proactivehealth.in" },
  { name: "Sarjan Water Tank", domain: "sarjanwatertank.com" },
  { name: "Kapsun Resources", domain: "kapsun.com" },
  { name: "Cimcon Software", domain: "cimconlighting.com" },
  { name: "Cimcon Digital", domain: "cimcondigital.com" },
  { name: "Mantra Softech India Pvt. Ltd", domain: "mantrasoftech.com" },
  { name: "Prompt Equipments", domain: "promptequipments.com" },
  { name: "Varni Digital", domain: "varnidigital.com" },
  { name: "Janyutech", domain: "janyutech.com" }
];

export const productCategories = [
  {
    id: 1,
    name: "Data & Charging Cables",
    description:
      "USB, OTG and multi-in-one charging and data cables for electronics, OEM and industrial connectivity.",
    image: "/images/data-cables.jpg",
    slug: "data-charging-cables"
  },
  {
    id: 2,
    name: "Wire Harnesses",
    description:
      "Industrial, automotive, appliance and electronic harnesses built to customer drawings, gauge, length and connector type.",
    image: "/images/equipment-cables.jpg",
    slug: "wire-harnesses"
  },
  {
    id: 3,
    name: "Cable Assemblies",
    description:
      "Equipment cables, scanner cables, power cords, patch cords, spiral cords and solar inverter harnessing.",
    image: "/images/equipment-cables.jpg",
    slug: "cable-assemblies"
  },
  {
    id: 4,
    name: "Male & Female Connectors",
    description:
      "JST, Molex, AMP/Tyco, Dupont, Micro-Fit, Mini-Fit Jr., USB, RJ45, MC4 and more — male and female options.",
    image: "/images/male-female-connectors.jpg",
    slug: "male-female-connectors"
  },
  {
    id: 5,
    name: "Circular Connectors",
    description:
      "M8, M12, M16, M23, 7/8\", GX, aviation, waterproof IP67/IP68, panel mount, right-angle and in-line connectors.",
    image: "/images/circular-connectors.jpg",
    slug: "circular-connectors"
  },
  {
    id: 6,
    name: "Specialized Connectors",
    description:
      "Communication, RS485, IDC with FRC, AC/DC and 3-way strip connectors, plus customized solutions.",
    image: "/images/male-female-connectors.jpg",
    slug: "specialized-connectors"
  },
  {
    id: 7,
    name: "Injection Moulding",
    description:
      "Precision plastic components including connector housings, enclosures, clips, gears and custom parts.",
    image: "/images/injection-moulding.jpg",
    slug: "injection-moulding"
  }
];

export const productsByCategory = {
  "data-charging-cables": [
    { id: 101, name: "USB A to Type-C", description: "Charging + data cable for modern USB-C devices.", image: "/images/data-cables.jpg", category: "Data & Charging Cables", categorySlug: "data-charging-cables", inStock: true, specifications: { Function: "Charging + Data", Type: "USB A to Type-C", Customization: "Length, colour and OEM marking" } },
    { id: 102, name: "USB A to Micro USB", description: "Charging + data cable for Micro USB equipment and accessories.", image: "/images/data-cables.jpg", category: "Data & Charging Cables", categorySlug: "data-charging-cables", inStock: true, specifications: { Function: "Charging + Data", Type: "USB A to Micro USB" } },
    { id: 103, name: "USB A to Lightning", description: "Charging + data cable for Lightning-compatible devices.", image: "/images/data-cables.jpg", category: "Data & Charging Cables", categorySlug: "data-charging-cables", inStock: true, specifications: { Function: "Charging + Data", Type: "USB A to Lightning" } },
    { id: 104, name: "Type-C to Type-C", description: "Charging + data cable for USB-C to USB-C connections.", image: "/images/data-cables.jpg", category: "Data & Charging Cables", categorySlug: "data-charging-cables", inStock: true, specifications: { Function: "Charging + Data", Type: "Type-C to Type-C" } },
    { id: 105, name: "Type-C to Lightning", description: "Charging + data cable for Type-C to Lightning applications.", image: "/images/data-cables.jpg", category: "Data & Charging Cables", categorySlug: "data-charging-cables", inStock: true, specifications: { Function: "Charging + Data", Type: "Type-C to Lightning" } },
    { id: 106, name: "Micro USB to Type-C", description: "Charging + data adapter cable for mixed connector systems.", image: "/images/data-cables.jpg", category: "Data & Charging Cables", categorySlug: "data-charging-cables", inStock: true, specifications: { Function: "Charging + Data", Type: "Micro USB to Type-C" } },
    { id: 107, name: "USB A to Mini USB", description: "Charging + data cable for Mini USB peripherals.", image: "/images/data-cables.jpg", category: "Data & Charging Cables", categorySlug: "data-charging-cables", inStock: true, specifications: { Function: "Charging + Data", Type: "USB A to Mini USB" } },
    { id: 108, name: "USB Printer Cable", description: "Data cable for printers and similar peripherals.", image: "/images/data-cables.jpg", category: "Data & Charging Cables", categorySlug: "data-charging-cables", inStock: true, specifications: { Function: "Data Cable", Type: "USB A to Printer" } },
    { id: 109, name: "USB A to USB B Cable", description: "Standard USB A to USB B data cable.", image: "/images/data-cables.jpg", category: "Data & Charging Cables", categorySlug: "data-charging-cables", inStock: true, specifications: { Function: "Data Cable", Type: "USB A to USB B" } },
    { id: 110, name: "USB 2.0 Data Cable", description: "High-speed data transfer cable, 100% tested for performance.", image: "/images/data-cables.jpg", category: "Data & Charging Cables", categorySlug: "data-charging-cables", inStock: true, specifications: { Function: "High Speed Data Transfer", Standard: "USB 2.0" } },
    { id: 111, name: "USB 3.0 Data Cable", description: "Super-speed data transfer cable for demanding applications.", image: "/images/data-cables.jpg", category: "Data & Charging Cables", categorySlug: "data-charging-cables", inStock: true, specifications: { Function: "Super Speed Data Transfer", Standard: "USB 3.0" } },
    { id: 112, name: "2-in-1 Charging Cable", description: "Multi-connector charging cable with Micro + Lightning.", image: "/images/data-cables.jpg", category: "Data & Charging Cables", categorySlug: "data-charging-cables", inStock: true, specifications: { Connectors: "Micro + Lightning", Customization: "Custom length available" } },
    { id: 113, name: "3-in-1 Charging Cable", description: "Micro + Type-C + Lightning charging cable.", image: "/images/data-cables.jpg", category: "Data & Charging Cables", categorySlug: "data-charging-cables", inStock: true, specifications: { Connectors: "Micro + Type-C + Lightning" } },
    { id: 114, name: "4-in-1 Charging Cable", description: "Micro + Type-C + Lightning + USB A charging cable.", image: "/images/data-cables.jpg", category: "Data & Charging Cables", categorySlug: "data-charging-cables", inStock: true, specifications: { Connectors: "Micro + Type-C + Lightning + USB A" } }
  ],
  "wire-harnesses": [
    { id: 201, name: "Industrial Wire Harnesses", description: "Application-specific industrial harnesses with custom wire gauge, length, insulation and connectors.", image: "/images/equipment-cables.jpg", category: "Wire Harnesses", categorySlug: "wire-harnesses", inStock: true, specifications: { Customization: "As per drawing / BOM", Testing: "100% continuity tested" } },
    { id: 202, name: "Automotive Wire Harnesses", description: "Harnesses for automotive electrical systems, EV components and vehicle electronics.", image: "/images/equipment-cables.jpg", category: "Wire Harnesses", categorySlug: "wire-harnesses", inStock: true, specifications: { Applications: "Automotive & EV", Process: "Crimping, terminal insertion, assembly" } },
    { id: 203, name: "Appliance Wire Harnesses", description: "Reliable harnesses for appliances and commercial equipment.", image: "/images/equipment-cables.jpg", category: "Wire Harnesses", categorySlug: "wire-harnesses", inStock: true, specifications: { Type: "Appliance wiring assemblies" } },
    { id: 204, name: "Electronic Wire Harnesses", description: "Precision harnesses for electronic equipment, control panels and instrumentation.", image: "/images/equipment-cables.jpg", category: "Wire Harnesses", categorySlug: "wire-harnesses", inStock: true, specifications: { Type: "Signal, power and mixed harnesses" } },
    { id: 205, name: "Power, Signal & Data Harnesses", description: "Multi-core and multi-pin harnesses for power, signal and data in one assembly.", image: "/images/equipment-cables.jpg", category: "Wire Harnesses", categorySlug: "wire-harnesses", inStock: true, specifications: { Options: "Multi-core & multi-pin" } },
    { id: 206, name: "Customized Wire Assemblies", description: "Harnesses developed from customer drawings, samples or application requirements.", image: "/images/equipment-cables.jpg", category: "Wire Harnesses", categorySlug: "wire-harnesses", inStock: true, specifications: { Process: "Drawing → sample → production" } }
  ],
  "cable-assemblies": [
    { id: 301, name: "Equipment Cables", description: "Built for performance and reliability in industrial equipment.", image: "/images/equipment-cables.jpg", category: "Cable Assemblies", categorySlug: "cable-assemblies", inStock: true, specifications: { Focus: "Performance & reliability" } },
    { id: 302, name: "Scanner Cables", description: "Fast data transfer and long-lasting cables for barcode and fingerprint scanners.", image: "/images/equipment-cables.jpg", category: "Cable Assemblies", categorySlug: "cable-assemblies", inStock: true, specifications: { Focus: "Fast data transfer" } },
    { id: 303, name: "Power Cords", description: "Safe and reliable power connection cords for equipment and appliances.", image: "/images/equipment-cables.jpg", category: "Cable Assemblies", categorySlug: "cable-assemblies", inStock: true, specifications: { Focus: "Safe power connection" } },
    { id: 304, name: "Connectors & Harnesses", description: "Wide range of connectors assembled into complete cable harnesses.", image: "/images/equipment-cables.jpg", category: "Cable Assemblies", categorySlug: "cable-assemblies", inStock: true, specifications: { Focus: "Connectorized assemblies" } },
    { id: 305, name: "OTG Cables", description: "OTG cables to connect more devices and peripherals.", image: "/images/data-cables.jpg", category: "Cable Assemblies", categorySlug: "cable-assemblies", inStock: true, specifications: { Focus: "OTG connectivity" } },
    { id: 306, name: "Patch Cord Cables", description: "Fast and stable network connection patch cords.", image: "/images/equipment-cables.jpg", category: "Cable Assemblies", categorySlug: "cable-assemblies", inStock: true, specifications: { Focus: "Network connectivity" } },
    { id: 307, name: "Circular Cable Assemblies", description: "Circular connectorized cable assemblies for industrial applications.", image: "/images/circular-connectors.jpg", category: "Cable Assemblies", categorySlug: "cable-assemblies", inStock: true, specifications: { Range: "M8 to M23 and custom" } },
    { id: 308, name: "Sensor Cable Assemblies", description: "Sensor cable assemblies for automation and instrumentation.", image: "/images/circular-connectors.jpg", category: "Cable Assemblies", categorySlug: "cable-assemblies", inStock: true, specifications: { Applications: "Sensors & instrumentation" } },
    { id: 309, name: "Spiral Cable Cords", description: "Spiral / coiled cable cords for equipment that needs stretch and return.", image: "/images/equipment-cables.jpg", category: "Cable Assemblies", categorySlug: "cable-assemblies", inStock: true, specifications: { Type: "Spiral / coiled cords" } },
    { id: 310, name: "Solar Inverter Harnessing", description: "Harnessing and grid connectors for solar inverter and energy systems.", image: "/images/equipment-cables.jpg", category: "Cable Assemblies", categorySlug: "cable-assemblies", inStock: true, specifications: { Applications: "Solar & energy" } }
  ],
  "male-female-connectors": [
    { id: 401, name: "JST Connectors", description: "Male and female JST housings and crimp terminals.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Options: "Male & Female" } },
    { id: 402, name: "Molex Connectors", description: "Molex power and data housings in male and female versions.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Options: "Male & Female" } },
    { id: 403, name: "AMP / Tyco Connectors", description: "AMP / Tyco multi-pin housings for industrial and electronic use.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Options: "Male & Female" } },
    { id: 404, name: "Dupont Connectors", description: "Dupont rectangular housings commonly used in electronics.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Options: "Male & Female" } },
    { id: 405, name: "SM Connectors", description: "Latching SM plastic connectors.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Options: "Male & Female" } },
    { id: 406, name: "VH Connectors", description: "VH series housings with larger pitch for power applications.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Options: "Male & Female" } },
    { id: 407, name: "XH Connectors", description: "XH series connectors used widely in electronics.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Options: "Male & Female" } },
    { id: 408, name: "PH Connectors", description: "Compact PH series housings.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Options: "Male & Female" } },
    { id: 409, name: "Micro-Fit Connectors", description: "Micro-Fit multi-pin power connectors.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Options: "Male & Female" } },
    { id: 410, name: "Mini-Fit Jr. Connectors", description: "Mini-Fit Jr. multi-pin power connectors.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Options: "Male & Female" } },
    { id: 411, name: "MC4 Connectors", description: "Rugged MC4 connectors used in solar panel applications.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Applications: "Solar" } },
    { id: 412, name: "M12 Connectors", description: "Industrial circular M12 threaded connectors.", image: "/images/circular-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Options: "Male & Female" } },
    { id: 413, name: "USB A Connectors", description: "Standard USB-A plugs and ports.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Options: "Male & Female" } },
    { id: 414, name: "USB C Connectors", description: "Reversible USB-C connectors.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Options: "Male & Female" } },
    { id: 415, name: "Micro USB Connectors", description: "Micro USB plugs and jacks.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Options: "Male & Female" } },
    { id: 416, name: "OTG Connectors", description: "On-The-Go adapters including USB-A female and USB-C male pairs.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Type: "OTG adapters" } },
    { id: 417, name: "DC Power Connectors", description: "Barrel-style DC jacks and plugs for power supply.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Options: "Male & Female" } },
    { id: 418, name: "Audio Connectors", description: "3.5 mm auxiliary plugs and jacks.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Type: "3.5 mm audio" } },
    { id: 419, name: "RJ45 Connectors", description: "Ethernet plugs and jacks for networking.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Type: "Network / Ethernet" } },
    { id: 420, name: "IDC Connectors", description: "IDC connectors for flat ribbon / FRC cables.", image: "/images/male-female-connectors.jpg", category: "Male & Female Connectors", categorySlug: "male-female-connectors", inStock: true, specifications: { Type: "IDC / ribbon" } }
  ],
  "circular-connectors": [
    { id: 501, name: "M8 Connectors", description: "Compact metal-housing circular connectors.", image: "/images/circular-connectors.jpg", category: "Circular Connectors", categorySlug: "circular-connectors", inStock: true, specifications: { Series: "M8", Options: "Male & Female" } },
    { id: 502, name: "M12 Connectors", description: "Threaded M12 connectors for industrial automation.", image: "/images/circular-connectors.jpg", category: "Circular Connectors", categorySlug: "circular-connectors", inStock: true, specifications: { Series: "M12" } },
    { id: 503, name: "M16 Connectors", description: "Threaded M16 circular connectors.", image: "/images/circular-connectors.jpg", category: "Circular Connectors", categorySlug: "circular-connectors", inStock: true, specifications: { Series: "M16" } },
    { id: 504, name: "M23 Connectors", description: "High-density M23 pin configurations.", image: "/images/circular-connectors.jpg", category: "Circular Connectors", categorySlug: "circular-connectors", inStock: true, specifications: { Series: "M23" } },
    { id: 505, name: "7/8\" Connectors", description: "Large-format 7/8 inch metal connectors.", image: "/images/circular-connectors.jpg", category: "Circular Connectors", categorySlug: "circular-connectors", inStock: true, specifications: { Series: "7/8 inch" } },
    { id: 506, name: "GX Connectors", description: "Classic threaded GX metal connectors.", image: "/images/circular-connectors.jpg", category: "Circular Connectors", categorySlug: "circular-connectors", inStock: true, specifications: { Series: "GX" } },
    { id: 507, name: "Aviation Connectors", description: "Rugged aviation-style circular connectors.", image: "/images/circular-connectors.jpg", category: "Circular Connectors", categorySlug: "circular-connectors", inStock: true, specifications: { Type: "Aviation" } },
    { id: 508, name: "Waterproof Connectors (IP67 / IP68)", description: "Waterproof and dustproof circular connectors.", image: "/images/circular-connectors.jpg", category: "Circular Connectors", categorySlug: "circular-connectors", inStock: true, specifications: { Rating: "IP67 / IP68" } },
    { id: 509, name: "Panel Mount Connectors", description: "Flange-mount connectors for chassis installation.", image: "/images/circular-connectors.jpg", category: "Circular Connectors", categorySlug: "circular-connectors", inStock: true, specifications: { Mount: "Panel / flange" } },
    { id: 510, name: "Right Angle Connectors", description: "90-degree elbow circular connectors.", image: "/images/circular-connectors.jpg", category: "Circular Connectors", categorySlug: "circular-connectors", inStock: true, specifications: { Form: "Right angle" } },
    { id: 511, name: "In-Line Connectors", description: "Cylindrical in-line molded connectors.", image: "/images/circular-connectors.jpg", category: "Circular Connectors", categorySlug: "circular-connectors", inStock: true, specifications: { Form: "In-line" } },
    { id: 512, name: "Custom Circular Solutions", description: "Circular connectors assembled as per requirement.", image: "/images/circular-connectors.jpg", category: "Circular Connectors", categorySlug: "circular-connectors", inStock: true, specifications: { Customization: "As per requirement" } }
  ],
  "specialized-connectors": [
    { id: 601, name: "Communication Connectors", description: "Connectors for communication equipment and assemblies.", image: "/images/male-female-connectors.jpg", category: "Specialized Connectors", categorySlug: "specialized-connectors", inStock: true, specifications: { Type: "Communication" } },
    { id: 602, name: "RS485 Connectors", description: "RS485 connector assemblies for industrial communication.", image: "/images/male-female-connectors.jpg", category: "Specialized Connectors", categorySlug: "specialized-connectors", inStock: true, specifications: { Protocol: "RS485" } },
    { id: 603, name: "IDC Connectors with FRC Cable", description: "IDC connectors assembled with FRC / ribbon cable.", image: "/images/male-female-connectors.jpg", category: "Specialized Connectors", categorySlug: "specialized-connectors", inStock: true, specifications: { Type: "IDC + FRC" } },
    { id: 604, name: "AC/DC Connectors", description: "AC and DC power connectors for equipment wiring.", image: "/images/male-female-connectors.jpg", category: "Specialized Connectors", categorySlug: "specialized-connectors", inStock: true, specifications: { Type: "AC / DC" } },
    { id: 605, name: "3-Way Strip Connectors", description: "3-way strip connectors for power and distribution.", image: "/images/male-female-connectors.jpg", category: "Specialized Connectors", categorySlug: "specialized-connectors", inStock: true, specifications: { Type: "3-way strip" } },
    { id: 606, name: "FRC / Ribbon Cable Assemblies", description: "Flat ribbon cable assemblies with IDC termination.", image: "/images/male-female-connectors.jpg", category: "Specialized Connectors", categorySlug: "specialized-connectors", inStock: true, specifications: { Type: "FRC / Ribbon" } }
  ],
  "injection-moulding": [
    { id: 701, name: "Connector Housings", description: "Precision moulded electrical connector housings.", image: "/images/injection-moulding.jpg", category: "Injection Moulding", categorySlug: "injection-moulding", inStock: true, specifications: { Capability: "Precision moulding" } },
    { id: 702, name: "Electrical Enclosures", description: "Moulded plastic housing boxes for electrical assemblies.", image: "/images/injection-moulding.jpg", category: "Injection Moulding", categorySlug: "injection-moulding", inStock: true, specifications: { Type: "Enclosures" } },
    { id: 703, name: "Cable Clips & Clamps", description: "Cable clips and clamps for wire management.", image: "/images/injection-moulding.jpg", category: "Injection Moulding", categorySlug: "injection-moulding", inStock: true, specifications: { Type: "Clips & clamps" } },
    { id: 704, name: "Gears & Mechanical Parts", description: "Moulded gears and mechanical plastic parts.", image: "/images/injection-moulding.jpg", category: "Injection Moulding", categorySlug: "injection-moulding", inStock: true, specifications: { Type: "Mechanical parts" } },
    { id: 705, name: "Industrial Plastic Parts", description: "Industrial brackets and structural plastic components.", image: "/images/injection-moulding.jpg", category: "Injection Moulding", categorySlug: "injection-moulding", inStock: true, specifications: { Type: "Industrial parts" } },
    { id: 706, name: "Precision Components", description: "Complex precision components as per drawing and specifications, including insert moulding.", image: "/images/injection-moulding.jpg", category: "Injection Moulding", categorySlug: "injection-moulding", inStock: true, specifications: { Options: "Insert moulding, custom tools" } }
  ]
};

export const manufacturingProcess = [
  "Drawing",
  "Technical Review",
  "Sample Development",
  "Customer Approval",
  "Pilot Batch",
  "Quality Validation",
  "Mass Production",
  "Final Inspection",
  "Packaging & Dispatch",
  "After-Sales Support"
];

export const capabilities = [
  {
    title: "Wire Harness & Cable Assemblies",
    items: [
      "Custom Wire Harnesses",
      "Cable Assemblies",
      "FRC / Ribbon Cable Assemblies",
      "Power & Signal Harnesses",
      "Multi-core & Multi-pin Harnesses",
      "Customized Cable Assemblies"
    ]
  },
  {
    title: "Connectorization",
    items: [
      "Various Connector Assemblies",
      "Crimping & Terminal Insertion",
      "Multi-pin Connector Assembly",
      "Wire-to-Connector Assemblies",
      "Connectorized Cable Assemblies",
      "Customized Connector Solutions"
    ]
  },
  {
    title: "Injection Moulding",
    items: [
      "Precision Plastic Injection Moulding",
      "Engineering Plastic Components",
      "Custom Moulded Components",
      "Insert Moulding",
      "Components as per Drawing & Specifications"
    ]
  },
  {
    title: "Assembly & Integration",
    items: [
      "Electro-mechanical Assemblies",
      "Sub-assemblies",
      "Wire & Connector Integration",
      "Plastic & Electrical Component Integration",
      "Customized Assembly Solutions"
    ]
  }
];

export const industries = [
  {
    title: "Electronics & Electrical",
    items: ["Electronic Equipment", "Control Panels", "Power Electronics", "Electrical Systems", "Industrial Electronics"]
  },
  {
    title: "Solar & Renewable Energy",
    items: ["Solar Inverters", "Solar Power Systems", "Energy Management Equipment", "Renewable Energy Equipment", "Power & Control Connections"]
  },
  {
    title: "Automotive & EV",
    items: ["Automotive Electrical Systems", "EV Components", "Battery & Power Systems", "Vehicle Electronics", "Control & Wiring Systems"]
  },
  {
    title: "Industrial Automation",
    items: ["Automation Equipment", "Control Systems", "Industrial Controllers", "Sensors & Instrumentation", "Machine Wiring"]
  },
  {
    title: "Telecommunications & Networking",
    items: ["Communication Equipment", "Networking Devices", "Data & Signal Connections", "Telecom Systems", "Electronic Assemblies"]
  },
  {
    title: "Consumer & Commercial Electronics",
    items: ["Electronic Appliances", "Display & Control Systems", "Consumer Electronic Equipment", "Commercial Equipment", "Customized Electrical Assemblies"]
  },
  {
    title: "Medical & Instrumentation",
    items: ["Electronic Instruments", "Diagnostic Equipment", "Monitoring Systems", "Instrumentation Assemblies", "Specialized Cable Assemblies"]
  },
  {
    title: "Industrial Equipment & Machinery",
    items: ["Machinery & Equipment", "Electrical Control Systems", "Power Distribution Equipment", "Industrial Components", "Customized Machine Assemblies"]
  }
];

export const certifications = [
  {
    name: "ISO 9001:2015",
    detail: "Quality Management System focused on consistent processes, quality control and continual improvement."
  },
  {
    name: "GST Registration",
    detail: "GSTIN 24AJPPM2507C1ZJ"
  },
  {
    name: "IEC Registration",
    detail: "Importer-Exporter Code AJPPM2507C, issued 18.05.2019"
  },
  {
    name: "MSME Registration",
    detail: "Registered manufacturing enterprise."
  },
  {
    name: "RoHS Compliance",
    detail: "Products and materials can be supplied in accordance with applicable RoHS requirements, wherever specified by the customer."
  },
  {
    name: "REACH Compliance",
    detail: "Material compliance can be supported as required for applicable customer and market requirements."
  }
];
