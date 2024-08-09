const Projects = [
  {
    id: 1,
    title: 'STUDENT SAT',
    author: 'SSRP',
    src: "img10.webp",
    url: '/project/{id}',
    description: 'Our inaugural StudentSat, guided by ISRO and leading space startups, aims to elevate educational opportunities and expand the horizons of space research. Join us as we inspire future engineers and students to turn their dreams into reality ',
    objective: 'Data collection, communications and conducting experiments.',
    outcomes: 'Our showcase of technological expertise in propulsion and communications will garner nationwide recognition, fostering valuable connections and collaboration opportunities with startups and organizations. This event will positively impact student communities and encourage more colleges to venture into outer space.',
    color: "black"
  },
  {
    id:2,
    title: 'GROUND STATION',
    author: 'SSRP',
    src: "img2.webp",
    url: '/project/{id}',
    description: 'The ground station is a device which will be built and used for the purpose of satellite communication, data acquisition, and space research endeavors and to connect with the ham community(Amateur Radio community).',
    objective: 'To receive and transmit data to satellites and for tracking our satellite. It will be used to remotely interact with the ham community (Amateur Radio community).',
    color: "black",
    outcomes: 'This enables stable communication with satellites, facilitates satellite tracking for students, and allows us to become an active member of the ham community(Amateur Radio community).'
  },
  {
    id:3,
    title: 'BALLOON SAT',
    author: 'SSRP',
    color: "black",
    src: "img6.webp",
    url: '/project/{id}',
    description: 'Experiment involves a meteorological balloon ascending to 50 km above sea level. Equipped with a UV sensor, it measures UV levels across regions to assess ozone levels.',
    objective: 'To gather ozone level data, attach a camera for topographic views, and establish ground station communication.',
    outcomes: "Explores satellite propulsion methods while collecting data in Earth's atmosphere."
  },

  {
    id:4,
    title: 'SPACEPORT AMERICA',
    color: "black",
    author: 'SSRP',
    src: "img4.webp",
    url: '/project/{id}',
    description: "Intercollegiate rocket engineering competition by Spaceport America. Students design propulsion systems and avionics. Also aids in rocket recovery mechanism development for SSRP's CanSat testing.",
    objective: 'IREC teams design, build, and launch sounding rockets with payloads of minimum 8.8 lbs to reach apogees of 10,000 ft or 30,000 ft AGL. Aiming to advance research in monopropellant/hybrid rocket propulsion engines.',
    outcomes: 'Enables development of propulsion engines, including hybrids, and gathers sounding data from rocket payloads. Rockets can serve as testing platforms for CanSat tournament.'
  },
  {
    id:5,
    title: 'INTERNATIONAL ROVER CHALLENGE',
    author: 'SSRP',
    color: "black",
    src: "img5.webp",
    url: '/project/{id}',
    description: 'To conceptualize, design, develop and operate an extraterrestrial rover and perform specific missions in simulated conditions.',
    objective: 'Design and build a rover with autonomous navigation, featuring detachable modules including an arm and a laboratory module for detecting signs of ancient life. Equipped with sensors like spectrometers and gas sensors, it can manipulate objects up to 1kg weight, enabling research in extraterrestrial terrain.',
    outcomes: 'This will forward our research on extraterrestrial autonomous rovers on harsh terrain.It will deepen our understanding of STEM fields.'
  },
  {
    id:6,
    title: 'CANSAT',
    author: 'SSRP',
    src: "img3.webp",
    url: '/project/{id}',
    description: 'The CanSat competition allows students to design, build, and launch miniature satellites resembling canisters. It provides practical experience in space science, progressing through design, construction, testing, and launch stages. CanSats are deployed via rockets to gather data during descent, with teams evaluated on design, functionality, data accuracy, and presentation.',
    objective: 'Components: Container, Probe Altitude Range: 670m - 725m  Deployment: Peak altitude Orientation: Uncontrolled Survivability: Launch and deployment forces Objective: Collect and transmit data from peak altitude.',
    color: "black",
    outcomes: 'Students learn to develop optimized systems under extreme space constraints, including mechanical space-grade systems that endure forces and vibrations.'
  },
  // Add more projects as needed
];

    export default Projects;