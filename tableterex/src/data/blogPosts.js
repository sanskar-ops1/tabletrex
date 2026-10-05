export const BLOG_CATEGORIES = [
  'ALL ARTICLES',
  'RUBBER LAB',
  'BLADE CRAFT',
  'PRO TACTICS',
  'MAINTENANCE',
  'BUYING GUIDES',
];

export const BLOG_POSTS = [
  {
    id: 'definitive-guide-tension-rubbers',
    title: 'The Definitive Guide to Modern Tension Rubbers: Sponge Density vs. Topsheet Grip',
    category: 'RUBBER LAB',
    readTime: '6 MIN READ',
    publishDate: 'March 17, 2026',
    author: 'Vikram Rathore',
    authorRole: 'Chief Equipment Technician · TableTerex Lab',
    image: '/images/why-rubber-macro-seamless.png',
    featured: true,
    excerpt:
      'Understanding how micro-cellular sponge pore structures and mechanical surface friction interact at 40mm+ ball speeds to generate optimal trajectory and arc.',
    tags: ['Tension Rubbers', 'Spring Sponge', 'Ball Arc', 'Topsheet Friction'],
    takeaways: [
      'Harder sponges (48°–52°) require higher swing velocity to engage the internal catapult effect.',
      'Softer sponges (38°–44°) maximize dwell time and control during passive counter-punching and blocking.',
      'Tacky topsheets excel in slow brush looping, whereas grippy elastic European topsheets dominate open-table counter topspin.',
    ],
    content: [
      {
        heading: 'The Anatomy of Modern Tension Sponges',
        text: 'Since the plastic poly ball (40+) era began, table tennis rubbers have undergone radical internal re-engineering. Traditional mechanical rubbers depended on friction alone, but modern table tennis requires both chemical topsheet elasticity and micro-cellular sponge combustion.\n\nWhen a ball strikes a tension sponge like Butterfly’s Spring Sponge or Nittaku’s Strong Sponge, the internal gas pockets compress exponentially, returning up to 88% of the impact kinetic energy back into rotational spin.',
      },
      {
        heading: 'Sponge Hardness: Choosing Between 42° and 50°',
        text: 'A common misconception is that a harder sponge always generates more speed. In reality, sponge hardness determines the activation threshold.\n\nIf an intermediate player uses a 52° sponge (such as DHS Hurricane 8 or Dignics 09c) with a slow arm swing, the ball merely bounces off the hard surface without sinking into the sponge, resulting in flat, spinless shots. Conversely, when paired with high-acceleration forearm snap, dense sponges deliver an explosive, dipping trajectory that is virtually unreturnable.',
      },
      {
        heading: 'Specs Comparison: Sponge & Topsheet Characteristics',
        table: {
          headers: ['Rubber Class', 'Sponge Hardness', 'Optimal Distance', 'Best Shot Selection'],
          rows: [
            ['Hybrid Sticky (Dignics 09c / H3N)', '49° – 53°', 'Close to mid-table', 'Short serve push, heavy opening loop'],
            ['Euro-Tensor (Tenergy 05 / Fastarc G-1)', '45° – 47.5°', 'Mid to far-table', 'Loop-to-loop rallies, banana flick'],
            ['Soft Control Tensor (Rozena / Vega Europe)', '40° – 43°', 'Close to table', 'Controlled blocking, steady drives'],
          ],
        },
      },
      {
        heading: 'The Coach’s Verdict',
        text: 'If you play an attacking game with strong physical engagement, place a 47.5°+ rubber on your forehand. For your backhand, where stroke swing arcs are shorter and rely heavily on wrist flick acceleration, choose a sponge 3° to 5° softer to preserve safety over the net.',
      },
    ],
    faqs: [
      {
        question: 'How often should I replace tension rubber sheets?',
        answer: 'For tournament players training 3 to 4 times a week, rubbers generally provide 80 to 100 hours of peak table time before the internal tension and micro-pores begin to decline. Intermediate club players playing once or twice weekly will comfortably get 6 to 9 months of play with proper cleaning and non-adhesive film protection.',
      },
      {
        question: 'Does higher sponge hardness always mean more speed?',
        answer: 'No. Sponge hardness dictates the energy threshold required to compress the sponge. Harder sponges (48°–52°) have a higher maximum power ceiling, but only if you generate fast forearm snap. At lower swing speeds, a softer 42° sponge compresses more easily and actually rebounds faster.',
      },
      {
        question: 'Can I use water-based VOC-free glue on modern tension rubbers?',
        answer: 'Yes, modern tension rubbers are designed exclusively for water-based VOC-free latex glue (such as Butterfly Free Chack II or Donic Vario Clean). Solvent-based speed glues are banned by ITTF and will chemically degrade the micro-cellular sponge.',
      },
      {
        question: 'What sponge thickness should I select: 1.9mm, 2.1mm, or Max?',
        answer: 'Max (2.1–2.2mm) sponges give maximum speed and heavy topspin for attacking shots away from the table. However, 1.9mm or 2.0mm sponges provide noticeably sharper feedback and control on passive blocks and short pushes over the net.',
      },
    ],
  },
  {
    id: 'all-wood-vs-carbon-blades',
    title: '5-Ply All-Wood vs. 5+2 Carbon Blades: The Topspin Trajectory Analysis',
    category: 'BLADE CRAFT',
    readTime: '5 MIN READ',
    publishDate: 'March 17, 2026',
    author: 'Arjun Sen',
    authorRole: 'National Circuit Coach & Blade Consultant',
    image: '/images/pro-blade.jpg',
    featured: false,
    excerpt:
      'Why outer carbon blades feel crisp but punish mistimed strokes, while limba-layered all-wood frames cultivate supreme ball feel and rotational mastery.',
    tags: ['Blades', 'Outer ALC', 'Innerforce', 'Pure Wood', 'Vibration Feedback'],
    takeaways: [
      'Outer carbon blades place composite fibers immediately beneath the surface veneer for instant rebound speed.',
      'Inner carbon blades wrap fibers around the central core for wood-like dwell time on soft touches.',
      '5-ply all-wood blades transmit 3x more vibrational feedback to the player’s palm, accelerating stroke mechanics.',
    ],
    content: [
      {
        heading: 'Outer ALC vs. Inner Carbon Dwell Time',
        text: 'The location of composite layers dramatically alters the blade’s vibration frequency. Outer ALC (Arylate-Carbon) blades position composite fabric right under the outer Koto veneer. This yields a stiff, high-rebound sweet spot with near-zero flex, ideal for direct punch-blocking and off-the-bounce counter attacks.\n\nHowever, inner carbon blades position composite fibers around the core Ayous wood, behaving like a traditional wood blade during passive shots while unleashing carbon speed on heavy impacts.',
      },
      {
        heading: 'Vibrational Feedback and Muscle Memory',
        text: 'Developing players who switch to stiff carbon blades too early frequently develop abbreviated, jab-like strokes because the blade is doing the ball ejection before the player can finish brushing the ball.\n\nPure wood blades (like Stiga Clipper Classic or Butterfly Korbel) bend on contact, allowing the player to physically sense the ball sinking into the rubber sheet.',
      },
      {
        heading: 'Material Specifications Comparison',
        table: {
          headers: ['Blade Architecture', 'Flex / Dwell Time', 'Sweet Spot Size', 'Target Skill Level'],
          rows: [
            ['5-Ply Pure Wood (Limba/Ayous)', 'Very High Flex', 'Medium', 'Beginner to Advanced'],
            ['Inner Carbon (5 Wood + 2 Inner ALC)', 'Moderate Flex', 'Large', 'Intermediate to Pro'],
            ['Outer Carbon (5 Wood + 2 Outer ALC)', 'Low Flex / Stiff', 'Very Large', 'Advanced / Tournament'],
          ],
        },
      },
    ],
    faqs: [
      {
        question: 'When should an intermediate player switch from all-wood to carbon?',
        answer: 'Switch to carbon only when your stroke mechanics are consistent enough that you generate your own spin through proper weight transfer and forearm acceleration. If you still struggle to return heavy underspin, an all-wood blade will help you build cleaner stroke fundamentals.',
      },
      {
        question: 'What is the difference between Outer Carbon and Inner Carbon?',
        answer: 'Outer carbon places the carbon weave directly beneath the outer wood layer, making the blade stiffer and faster off the bounce. Inner carbon places the carbon around the core layer, which gives the blade a soft, wood-like feel on light touches and explosive power on full swings.',
      },
      {
        question: 'Does blade weight significantly affect topspin trajectory?',
        answer: 'Yes. Heavier blades (88g–92g) produce more momentum and penetrating topspin through the ball, but demand faster recovery speed. Lighter blades (80g–84g) allow rapid wrist flicking and quick transitions close to the table.',
      },
    ],
  },
  {
    id: 'rubber-maintenance-lifespan',
    title: 'How to Double the Lifespan of Your Pro Rubbers: Humidity, Cleaning & Protection',
    category: 'MAINTENANCE',
    readTime: '4 MIN READ',
    publishDate: 'March 17, 2026',
    author: 'Sunil Gokhale',
    authorRole: 'Master Restorer & Gear Specialist',
    image: '/images/black-rubber.jpg',
    featured: false,
    excerpt:
      'Step-by-step preservation routines using de-ionized foam cleaners and non-adhesive protective films to keep your topsheet tack fresh through monsoon seasons.',
    tags: ['Rubber Care', 'Cleaning Foam', 'Protection Film', 'Monsoon Care'],
    takeaways: [
      'Never use tap water with high mineral deposits to wipe rubber sheets.',
      'Apply non-adhesive electrostatic film sheets immediately after drying.',
      'Store rackets between 18°C and 24°C away from direct sunlight or car trunks.',
    ],
    content: [
      {
        heading: 'The Enemies of Table Tennis Rubber',
        text: 'Rubber sheets decay due to three primary environmental factors: dust micro-abrasion, oxygen oxidation, and ambient ultraviolet degradation. Every time an uncleaned rubber strikes a ball, micro-dust particles grind into the synthetic rubber pores, sanding off the micro-grooves that provide grip.',
      },
      {
        heading: 'The 3-Step Post-Match Routine',
        text: '1. Dispense one walnut-sized dollop of anti-static rubber cleaner foam onto the sheet.\n2. Using a dense dual-density sponge, sweep uniformly from the handle toward the racket tip.\n3. Allow 45 seconds for evaporation, then smooth on a thick protective plastic film without trapped air bubbles.',
      },
    ],
    faqs: [
      {
        question: 'Can I clean my rubber sheets with tap water and soap?',
        answer: 'Never use tap water or household soap. Tap water contains dissolved minerals and chlorine that leave a calcified film on the rubber, while soap strips the natural oils from the topsheet, causing premature cracking and loss of grip.',
      },
      {
        question: 'Why do the outer edges of my rubber sheets chip?',
        answer: 'Edge chipping happens when the racket accidentally touches the table or when the rubber is cut with dull scissors during assembly. Using 10mm to 12mm cushioned edge tape protects the perimeter against impact damage.',
      },
      {
        question: 'Should I use adhesive or non-adhesive protective films?',
        answer: 'For tacky Chinese rubbers (like Hurricane 3), always use non-adhesive plastic films. For European and Japanese tensor rubbers (like Tenergy or Fastarc), you can use either sticky or electrostatic non-adhesive films.',
      },
    ],
  },
  {
    id: 'banana-flick-mechanics',
    title: 'Mastering the Chiquita (Banana Flick): Wrist Elevation and Elbow Rotation',
    category: 'PRO TACTICS',
    readTime: '7 MIN READ',
    publishDate: 'March 17, 2026',
    author: 'Kavita Menon',
    authorRole: 'Former Junior National Finalist',
    image: '/images/hero-action.jpg',
    featured: false,
    excerpt:
      'Transform passive short returns into offensive kill shots. Master the elbow pivot, high wrist drop, and side-spin brush that redefined modern backhand play.',
    tags: ['Chiquita', 'Banana Flick', 'Short Game', 'Backhand Attack'],
    takeaways: [
      'Step deeply with your dominant leg under the table to stabilize head position.',
      'Cock the racket tip toward your own chest before accelerating outward.',
      'Brush the side of the incoming ball to neutralize underspin through gyro-rotation.',
    ],
    content: [
      {
        heading: 'Why the Flick Dominates Modern Reception',
        text: 'Before the Chiquita became universal, short backspin serves forced receivers into passive push returns, surrendering third-ball initiative.\n\nBy cocking the wrist inward and contacting the 3 o’clock or 9 o’clock hemisphere of the ball, modern receivers flip the ball directly into the opponent’s crossover pocket at 70+ km/h.',
      },
      {
        heading: 'Common Mistakes to Avoid',
        text: 'The most frequent mistake is reaching with an outstretched arm rather than stepping the dominant foot beneath the table surface. Without foot placement, receiver weight remains on the heels, destroying the torque produced by hip rotation.',
      },
    ],
    faqs: [
      {
        question: 'Can you flick short heavy underspin with inverted rubber?',
        answer: 'Yes, the key is brushing the side of the ball rather than hitting through it. Side-spin contact converts heavy backspin into lateral curve, lifting the ball safely over the net.',
      },
      {
        question: 'How do I avoid clashing my paddle with the table edge?',
        answer: 'Elevate your elbow above table level before dropping your wrist. Your elbow serves as a pivot hinge that keeps the racket tip elevated above the table surface as you step in.',
      },
      {
        question: 'Which rubber sponge thickness is best for the banana flick?',
        answer: 'A medium-hard sponge (45° to 48°) in 2.0mm thickness provides the best combination of dwell time and crisp grip needed to pick up short balls.',
      },
    ],
  },
  {
    id: 'choosing-first-custom-racket',
    title: 'Moving Beyond Pre-Made Bats: Your First Custom Table Tennis Assembly',
    category: 'BUYING GUIDES',
    readTime: '5 MIN READ',
    publishDate: 'March 17, 2026',
    author: 'Vikram Rathore',
    authorRole: 'Chief Equipment Technician · TableTerex Lab',
    image: '/images/custom-racket.jpg',
    featured: false,
    excerpt:
      'Why recreational blister-pack bats hold back your game, and how an 85g all-wood foundation paired with 2.0mm tensor sheets builds lifelong technical stroke habits.',
    tags: ['First Custom Bat', 'Beginner to Intermediate', 'Blade Weight', 'Pre-Made vs Custom'],
    takeaways: [
      'Pre-assembled supermarket bats use non-reactive dead sponges with brittle rubber topsheets.',
      'A custom blade can last 5+ years; you only need to refresh rubbers as your rating climbs.',
      'Opt for 1.9mm or 2.0mm sponge thicknesses instead of max (2.2mm) to maintain precise defensive touch.',
    ],
    content: [
      {
        heading: 'The Hidden Trap of Pre-Assembled Bats',
        text: 'Pre-assembled bats from department stores use cheap industrial contact adhesives that chemically fuse the rubber to the blade forever, making rubber upgrades impossible.\n\nTheir dead sponges produce inconsistent bounce pockets, forcing players to hit the ball too hard and corrupting stroke form.',
      },
      {
        heading: 'The Golden Formula for Your First Custom Setup',
        text: 'Choose an 83g–87g 5-ply wood blade with a flared handle (FL). Pair the forehand with a medium 45° spin-elastic tensor rubber (2.0mm) and the backhand with a forgiving 42° control rubber.\n\nThis setup provides endless consistency for looping and blocking without turning every ball into an unforced error.',
      },
    ],
    faqs: [
      {
        question: 'Will TableTerex assemble the blade and rubbers for me before shipping?',
        answer: 'Yes! We offer complimentary professional assembly for all custom racket orders. We use tournament-approved water-based glue, precision edge trimming, and include protective edge tape at no extra cost.',
      },
      {
        question: 'How long does a custom wooden blade last?',
        answer: 'A high quality wood or composite blade can easily last 5 to 10 years if protected against table clashes. You only need to replace rubber sheets as they wear out.',
      },
      {
        question: 'What is the difference between Flared (FL) and Straight (ST) handles?',
        answer: 'Flared (FL) handles are wider at the base, locking comfortably into the palm for players who favor forehand looping. Straight (ST) handles have uniform thickness, making it easier to adjust your grip between forehand and backhand or twiddle.',
      },
    ],
  },
  {
    id: 'chinese-tacky-vs-european-tensor',
    title: 'The Great Forehand Debate: Chinese Tacky Rubbers vs. European Dynamic Tensors',
    category: 'RUBBER LAB',
    readTime: '6 MIN READ',
    publishDate: 'March 17, 2026',
    author: 'Arjun Sen',
    authorRole: 'National Circuit Coach & Blade Consultant',
    image: '/images/red-rubber.jpg',
    featured: false,
    excerpt:
      'Can you master the physical full-body brush loop of DHS Hurricane 3, or does your game thrive on the instantaneous spring recoil of Butterfly Tenergy?',
    tags: ['Hurricane 3', 'Tenergy 05', 'Tacky vs Tensor', 'Forehand Loop'],
    takeaways: [
      'Tacky rubbers require full body weight transfer and forward waist acceleration.',
      'European tensors deliver high speed on compact strokes with effortless ball clearance.',
      'Sticky rubbers generate immense backspin on short serves and stop incoming spin dead on push blocks.',
    ],
    content: [
      {
        heading: 'Surface Friction vs. Mechanical Grip',
        text: 'Chinese rubbers utilize a sticky chemical surface that can physically hold a table tennis ball upside down for several seconds. When looping against heavy underspin, tacky topsheets grip the ball instantaneously without slipping.\n\nEuropean rubbers, by contrast, utilize microscopic elastomeric pores that catch the ball through sheer surface deformation.',
      },
      {
        heading: 'Which Style Are You Playing?',
        text: 'If your game relies on high-cadence wrist snaps, mid-table counter looping, and rapid tempo exchanges, European tensors like Fastarc G-1, Tenergy 05, or Tibhar Evolution MX-P are unmatched.\n\nIf you possess a powerful forehand drive with full torso rotation and prefer dominating short touch play, a hybrid or tacky rubber unlocks unparalleled precision.',
      },
    ],
    faqs: [
      {
        question: 'Can I use a Chinese tacky rubber on my backhand?',
        answer: 'Most players prefer European tensors on backhand because backhand swings are shorter and benefit from the built-in spring effect. However, hybrid tacky rubbers like Dignics 09c or Rakza Z are becoming popular for aggressive backhand flickers.',
      },
      {
        question: 'Do tacky rubbers lose their stickiness quickly?',
        answer: 'If cleaned with a moist sponge or foam cleaner immediately after play and stored with a protective film, Chinese tacky rubbers retain their grip for 6 months or more.',
      },
      {
        question: 'Why do Chinese rubbers feel hard out of the package?',
        answer: 'Traditional Chinese sponges use dense un-tuned rubber. They require a breaking-in period of 10 to 15 hours of heavy hitting, after which the sponge softens and offers remarkable control.',
      },
    ],
  },
];

export function getBlogPostById(id) {
  return BLOG_POSTS.find((p) => p.id === id);
}

export function getRelatedBlogPosts(currentId, limit = 3) {
  return BLOG_POSTS.filter((p) => p.id !== currentId).slice(0, limit);
}
