'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import './CircularRacketCarousel.css';

export const CATEGORY_RACKETS = {
  "BEGINNER": [
    {
      "id": "donic-waldner-allplay",
      "name": "Donic Waldner Allplay",
      "brand": "DONIC",
      "price": "₹5,089 MRP",
      "image": "/images/donic-blade.jpg",
      "desc": "All-round classic wood blade with supreme touch and forgiving flex for learning fundamental stroke mechanics.",
      "summary": "Perfect first blade. Full wood, great tactile feel.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.8mm SOFT FOAM",
          "val": 55
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "ALL-WOOD CONTROL",
          "val": 62
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY SWEDISH ALLPLAY",
          "val": 58
        },
        "handle": {
          "label": "HANDLE",
          "sub": "FLARED ERGO GRIP",
          "val": 70
        }
      }
    },
    {
      "id": "tibhar-gravity-all",
      "name": "Tibhar Gravity All",
      "brand": "TIBHAR",
      "price": "₹3,850 MRP",
      "image": "/images/why-hero-racket.jpg",
      "desc": "Balanced European all-round frame with generous sweet spot for rally consistency and touch.",
      "summary": "Balanced frame. Smooth rally progression.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.8mm PROGRESSIVE",
          "val": 52
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "TOUCH CONTROL",
          "val": 65
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY GRAVITY CORE",
          "val": 56
        },
        "handle": {
          "label": "HANDLE",
          "sub": "ANATOMIC FL",
          "val": 68
        }
      }
    },
    {
      "id": "butterfly-primorac",
      "name": "Butterfly Primorac Classic",
      "brand": "BUTTERFLY",
      "price": "₹6,290 MRP",
      "image": "/images/pro-blade.jpg",
      "desc": "Proven 5-ply African wood design engineered for balanced progression and clean ball feedback.",
      "summary": "Time-tested African wood feel. Smooth rally transition.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.9mm ELASTIC FOAM",
          "val": 60
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "TACKY TRAINING SHEET",
          "val": 65
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY AFRICAN WOOD",
          "val": 63
        },
        "handle": {
          "label": "HANDLE",
          "sub": "FLARED ANATOMIC",
          "val": 72
        }
      }
    },
    {
      "id": "donic-appelgren",
      "name": "Donic Appelgren Allplay",
      "brand": "DONIC",
      "price": "₹4,499 MRP",
      "image": "/images/donic-blade.jpg",
      "desc": "Legendary Swedish all-wood blade renowned for supreme ball control and pinpoint placement.",
      "summary": "Swedish classic. Supreme control and forgiving sweet spot.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.6mm MEDIUM FOAM",
          "val": 48
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "SWEDISH CONTROL",
          "val": 72
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY LIMBA OUTER",
          "val": 60
        },
        "handle": {
          "label": "HANDLE",
          "sub": "COMFORT STRAIGHT",
          "val": 68
        }
      }
    },
    {
      "id": "tibhar-iv-l",
      "name": "Tibhar IV-L Light Contact",
      "brand": "TIBHAR",
      "price": "₹3,650 MRP",
      "image": "/images/why-hero-racket.jpg",
      "desc": "Soft Ayous inner core dampening impact shock on defensive resets and learning strokes.",
      "summary": "Vibration absorbing core for effortless baseline control.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.5mm ABSORB FOAM",
          "val": 44
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "DAMP CONTROL SHEET",
          "val": 74
        },
        "blade": {
          "label": "BLADE",
          "sub": "AYOUS INNER CORE",
          "val": 50
        },
        "handle": {
          "label": "HANDLE",
          "sub": "LIGHTWEIGHT FL",
          "val": 66
        }
      }
    },
    {
      "id": "donic-waldner-off-2016-beg",
      "name": "Donic Waldner Off 2016",
      "brand": "DONIC",
      "price": "₹6,819 MRP",
      "image": "/images/donic-blade.jpg",
      "desc": "Progressive Swedish offensive blade with wide sweet spot helping beginners graduate to match-play.",
      "summary": "Sensory feedback Swedish blade for accelerating touch calibration.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.8mm CONTROL FOAM",
          "val": 54
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "ALLPLAY SHEET",
          "val": 68
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY SWEDISH WOOD",
          "val": 58
        },
        "handle": {
          "label": "HANDLE",
          "sub": "WALDNER FL",
          "val": 75
        }
      }
    }
  ],
  "INTERMEDIATE": [
    {
      "id": "tibhar-stratus-powerwood",
      "name": "Samsonov Stratus Powerwood",
      "brand": "TIBHAR",
      "price": "₹6,200 MRP",
      "image": "/images/why-hero-racket.jpg",
      "desc": "Hard wood plies engineered with Vladimir Samsonov for progressive offensive pace and loop power.",
      "summary": "Top-tier 5-ply attacking wood with crisp catapult response.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm POWER FOAM",
          "val": 74
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "ATTACKING ELASTIC",
          "val": 76
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY STRATUS WOOD",
          "val": 73
        },
        "handle": {
          "label": "HANDLE",
          "sub": "SAMSONOV FLARED",
          "val": 74
        }
      }
    },
    {
      "id": "donic-waldner-off-2016",
      "name": "Donic Waldner Off 2016",
      "brand": "DONIC",
      "price": "₹6,819 MRP",
      "image": "/images/donic-blade.jpg",
      "desc": "Jan-Ove Waldner competition offensive frame balancing speed with surgical rally control.",
      "summary": "Balanced offensive wood with expanded sweet spot.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm HIGH-ELASTIC",
          "val": 72
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "TENSOR TOPSHEET",
          "val": 75
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY OFF WOOD",
          "val": 71
        },
        "handle": {
          "label": "HANDLE",
          "sub": "WALDNER FL",
          "val": 73
        }
      }
    },
    {
      "id": "butterfly-korbel",
      "name": "Butterfly Petr Korbel",
      "brand": "BUTTERFLY",
      "price": "₹7,490 MRP",
      "image": "/images/pro-blade.jpg",
      "desc": "Classic Limba outer plies for high-dwell looping and counter topspins from mid-distance.",
      "summary": "Benchmark looping blade for developing technical attackers.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm DWELL FOAM",
          "val": 74
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "SPIN ARC TOPSHEET",
          "val": 78
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY LIMBA OUTER",
          "val": 72
        },
        "handle": {
          "label": "HANDLE",
          "sub": "KORBEL FLARED",
          "val": 71
        }
      }
    },
    {
      "id": "tibhar-gravity-offensive",
      "name": "Tibhar Gravity Offensive",
      "brand": "TIBHAR",
      "price": "₹5,135 MRP",
      "image": "/images/why-hero-racket.jpg",
      "desc": "Direct strike velocity and high-elastic wood plies for active close-to-table attacks.",
      "summary": "Direct pace assist for aggressive looping combinations.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm CATAPULT FOAM",
          "val": 75
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "ACTIVE LOOP SHEET",
          "val": 74
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY GRAVITY OFF",
          "val": 72
        },
        "handle": {
          "label": "HANDLE",
          "sub": "OFFENSIVE STRAIGHT",
          "val": 70
        }
      }
    },
    {
      "id": "donic-waldner-ultrasenso",
      "name": "Waldner UltraSenso Carbon",
      "brand": "DONIC",
      "price": "₹7,499 MRP",
      "image": "/images/donic-blade.jpg",
      "desc": "Carbon fleece composite with Senso handle technology for explosive drive acceleration.",
      "summary": "Carbon assist with deep sensory feedback for intermediate transition.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm CARBON FOAM",
          "val": 76
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "CATAPULT TENSOR",
          "val": 77
        },
        "blade": {
          "label": "BLADE",
          "sub": "5+2 ULTRASENSO CARBON",
          "val": 75
        },
        "handle": {
          "label": "HANDLE",
          "sub": "HOLLOW SENSO FL",
          "val": 74
        }
      }
    },
    {
      "id": "nittaku-flyatt-carbon",
      "name": "Nittaku Flyatt Carbon",
      "brand": "NITTAKU",
      "price": "₹6,129 MRP",
      "image": "/images/donic-blade.jpg",
      "desc": "Thin carbon reinforcement combined with selected Japanese wood plies for high sweet spot stability.",
      "summary": "Consistent loop-drive stability across all match phases.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm SWEET SPOT",
          "val": 71
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "HIGH-ELASTIC SHEET",
          "val": 73
        },
        "blade": {
          "label": "BLADE",
          "sub": "5+2 FLYATT CARBON",
          "val": 70
        },
        "handle": {
          "label": "HANDLE",
          "sub": "ERGONOMIC FL GRIP",
          "val": 72
        }
      }
    }
  ],
  "ADVANCED": [
    {
      "id": "butterfly-tb-alc",
      "name": "Butterfly Timo Boll ALC",
      "brand": "BUTTERFLY",
      "price": "₹24,200 MRP",
      "image": "/images/pro-blade.jpg",
      "desc": "Arylate-Carbon composite offering world-class stiffness, vibration dampening, and lethal spin precision.",
      "summary": "Arylate-Carbon. World-class tournament standard.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm SPRING MAX",
          "val": 92
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "HIGH-TENSION PRO",
          "val": 94
        },
        "blade": {
          "label": "BLADE",
          "sub": "5+2 ARYLATE-CARBON ALC",
          "val": 95
        },
        "handle": {
          "label": "HANDLE",
          "sub": "TOURNAMENT GRADE FL",
          "val": 90
        }
      }
    },
    {
      "id": "donic-waldner-black-devil",
      "name": "Waldner Black Devil",
      "brand": "DONIC",
      "price": "₹10,639 MRP",
      "image": "/images/donic-blade.jpg",
      "desc": "Balsa core enveloped in stiff carbon plies for lightning-fast counters and explosive flat kills.",
      "summary": "Ultra-fast carbon + balsa with unmatched smash velocity.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm BALSA ELASTIC",
          "val": 90
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "POWER TENSOR",
          "val": 92
        },
        "blade": {
          "label": "BLADE",
          "sub": "7-PLY BALSA CARBON",
          "val": 96
        },
        "handle": {
          "label": "HANDLE",
          "sub": "BLACK DEVIL FL",
          "val": 86
        }
      }
    },
    {
      "id": "tibhar-gravity-dyneema",
      "name": "Tibhar Gravity Dyneema Carbon",
      "brand": "TIBHAR",
      "price": "₹9,750 MRP",
      "image": "/images/why-hero-racket.jpg",
      "desc": "Dyneema composite carbon fibers providing massive sweet spot expansion and heavy loop catapult.",
      "summary": "High-tech Dyneema composite for modern power looping.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm DYNEEMA MAX",
          "val": 89
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "HEAVY LOOP SHEET",
          "val": 90
        },
        "blade": {
          "label": "BLADE",
          "sub": "5+2 DYNEEMA CARBON",
          "val": 93
        },
        "handle": {
          "label": "HANDLE",
          "sub": "PRO ATTACK FL",
          "val": 88
        }
      }
    },
    {
      "id": "nittaku-acoustic-fl",
      "name": "Nittaku Acoustic FL",
      "brand": "NITTAKU",
      "price": "₹16,979 MRP",
      "image": "/images/donic-blade.jpg",
      "desc": "String-instrument acoustic lutherie technology delivering pure tactile resonance and crisp ball feedback.",
      "summary": "Japanese acoustic wood lutherie with pure touch resonance.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm ACOUSTIC CORE",
          "val": 88
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "SPIN RESONANCE",
          "val": 93
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY ACOUSTIC WOOD",
          "val": 91
        },
        "handle": {
          "label": "HANDLE",
          "sub": "TOKYO ACOUSTIC FL",
          "val": 92
        }
      }
    },
    {
      "id": "donic-ovtcharov-true-carbon",
      "name": "Donic Ovtcharov True Carbon",
      "brand": "DONIC",
      "price": "₹11,999 MRP",
      "image": "/images/donic-blade.jpg",
      "desc": "High-grade Aramid Carbon inner core offering maximum speed reserve for relentless attacking play.",
      "summary": "Dimitrij Ovtcharov signature weapon for aggressive attacking.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm ARAMID FOAM",
          "val": 88
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "MAX SPEED RESERVE",
          "val": 90
        },
        "blade": {
          "label": "BLADE",
          "sub": "5+2 ARAMID CARBON",
          "val": 92
        },
        "handle": {
          "label": "HANDLE",
          "sub": "PRO ATTACK FL",
          "val": 86
        }
      }
    },
    {
      "id": "donic-original-carbospeed",
      "name": "Donic Original CarboSpeed",
      "brand": "DONIC",
      "price": "₹8,639 MRP",
      "image": "/images/custom-racket.jpg",
      "desc": "Very fast carbon blade designed for all-out attackers demanding uncompromising speed on loop kills.",
      "summary": "Maximum carbon speed for pure aggressive firepower.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm HARD CARBON",
          "val": 95
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "FLAT KILL TENSOR",
          "val": 89
        },
        "blade": {
          "label": "BLADE",
          "sub": "3+2 HEAVY CARBON",
          "val": 97
        },
        "handle": {
          "label": "HANDLE",
          "sub": "DIRECT ATTACK FL",
          "val": 84
        }
      }
    }
  ],
  "OFFENSIVE": [
    {
      "id": "butterfly-tb-alc-off",
      "name": "Butterfly Timo Boll ALC",
      "brand": "BUTTERFLY",
      "price": "₹24,200 MRP",
      "image": "/images/pro-blade.jpg",
      "desc": "Arylate-Carbon weave dampens vibration while unlocking extreme explosive looping drive power.",
      "summary": "Gold standard tournament offensive weapon.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm ALC DRIVE",
          "val": 93
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "PRO LOOP MATRIX",
          "val": 95
        },
        "blade": {
          "label": "BLADE",
          "sub": "5+2 ARYLATE-CARBON",
          "val": 95
        },
        "handle": {
          "label": "HANDLE",
          "sub": "PRO MATCH FL",
          "val": 90
        }
      }
    },
    {
      "id": "donic-original-carbospeed-off",
      "name": "Donic Original CarboSpeed",
      "brand": "DONIC",
      "price": "₹8,639 MRP",
      "image": "/images/custom-racket.jpg",
      "desc": "Very fast carbon blade engineered for uncompromising forward attack and blisteringly fast kills.",
      "summary": "Pure attacking velocity for all-out front-foot players.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm SPEED CARBON",
          "val": 96
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "HIGH-VELOCITY SHEET",
          "val": 88
        },
        "blade": {
          "label": "BLADE",
          "sub": "3+2 ORIGINAL CARBOSPEED",
          "val": 98
        },
        "handle": {
          "label": "HANDLE",
          "sub": "STIFF ATTACK FL",
          "val": 85
        }
      }
    },
    {
      "id": "tibhar-gravity-dyneema-off",
      "name": "Tibhar Gravity Dyneema Carbon",
      "brand": "TIBHAR",
      "price": "₹9,750 MRP",
      "image": "/images/why-hero-racket.jpg",
      "desc": "Dyneema fiber dampening combined with high-rebound carbon for lethal topspin trajectory.",
      "summary": "Catapult looping powerhouse with expanded hitting zone.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm DYNEEMA FOAM",
          "val": 91
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "DYNAMIC ATTACK",
          "val": 92
        },
        "blade": {
          "label": "BLADE",
          "sub": "5+2 DYNEEMA COMPOSITE",
          "val": 94
        },
        "handle": {
          "label": "HANDLE",
          "sub": "GRAVITY PRO FL",
          "val": 88
        }
      }
    },
    {
      "id": "tibhar-gravity-off",
      "name": "Tibhar Gravity Offensive",
      "brand": "TIBHAR",
      "price": "₹5,135 MRP",
      "image": "/images/why-hero-racket.jpg",
      "desc": "Direct offensive wood plies offering high forward kinetic energy on loop-drives.",
      "summary": "Balanced offensive wood with sharp feedback.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm OFF DWELL",
          "val": 82
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "DRIVE ROTATION",
          "val": 86
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY GRAVITY OFF",
          "val": 85
        },
        "handle": {
          "label": "HANDLE",
          "sub": "OFFENSIVE FL",
          "val": 84
        }
      }
    },
    {
      "id": "donic-black-devil-off",
      "name": "Waldner Black Devil",
      "brand": "DONIC",
      "price": "₹10,639 MRP",
      "image": "/images/donic-blade.jpg",
      "desc": "Balsa core carbon blade delivering unmatched smash speed and stiff blocks against loopers.",
      "summary": "Explosive balsa carbon combination for aggressive counters.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm BALSA BOOST",
          "val": 94
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "HARD SMASH SHEET",
          "val": 89
        },
        "blade": {
          "label": "BLADE",
          "sub": "7-PLY BALSA CARBON",
          "val": 96
        },
        "handle": {
          "label": "HANDLE",
          "sub": "BLACK DEVIL FL",
          "val": 85
        }
      }
    },
    {
      "id": "nittaku-acoustic-off",
      "name": "Nittaku Acoustic FL",
      "brand": "NITTAKU",
      "price": "₹16,979 MRP",
      "image": "/images/donic-blade.jpg",
      "desc": "Handmade musical instrument construction producing heavy spin arcs and deep dwell time.",
      "summary": "Japanese acoustic craftsmanship for high-spin attack.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm STRING LUTHERIE",
          "val": 89
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "DEEP DWELL TOPSHEET",
          "val": 94
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY ACOUSTIC WOOD",
          "val": 91
        },
        "handle": {
          "label": "HANDLE",
          "sub": "ACOUSTIC FL",
          "val": 91
        }
      }
    }
  ],
  "DEFENSIVE": [
    {
      "id": "nittaku-flyatt-def",
      "name": "Nittaku Flyatt Carbon",
      "brand": "NITTAKU",
      "price": "₹6,129 MRP",
      "image": "/images/donic-blade.jpg",
      "desc": "Defensive-capable carbon blade offering huge sweet spot and dampening on heavy incoming loops.",
      "summary": "Carbon stability with absorbent dwell for modern chopping.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.5mm DAMP FOAM",
          "val": 42
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "CHOP REVERSAL SHEET",
          "val": 82
        },
        "blade": {
          "label": "BLADE",
          "sub": "5+2 DEF CARBON",
          "val": 55
        },
        "handle": {
          "label": "HANDLE",
          "sub": "LONG DEF STRAIGHT",
          "val": 85
        }
      }
    },
    {
      "id": "tibhar-stratus-powerdef",
      "name": "Tibhar Stratus Power Defense",
      "brand": "TIBHAR",
      "price": "₹5,135 MRP",
      "image": "/images/why-hero-racket.jpg",
      "desc": "Enlarged defensive head shape and dampening wood plies to absorb high-impact smash energy.",
      "summary": "Supreme absorption for long-distance baseline chopping.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.3mm ABSORB FOAM",
          "val": 38
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "LONG-PIPS PROFILE",
          "val": 88
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY OVERSIZED DEF",
          "val": 48
        },
        "handle": {
          "label": "HANDLE",
          "sub": "COMFORT DEF STRAIGHT",
          "val": 84
        }
      }
    },
    {
      "id": "butterfly-diode-v",
      "name": "Butterfly Diode V",
      "brand": "BUTTERFLY",
      "price": "₹11,200 MRP",
      "image": "/images/pro-blade.jpg",
      "desc": "Hard 5-ply defensive construction engineered for heavy backspin chops with aggressive counter capabilities.",
      "summary": "Tour standard modern defensive blade with sharp backspin bite.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.5mm HARD DEF FOAM",
          "val": 45
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "BACKSPIN BITE SHEET",
          "val": 85
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY HARD DIODE",
          "val": 56
        },
        "handle": {
          "label": "HANDLE",
          "sub": "DIODE DEF STRAIGHT",
          "val": 82
        }
      }
    },
    {
      "id": "donic-defplay-senso",
      "name": "Donic Defplay Senso",
      "brand": "DONIC",
      "price": "₹5,129 MRP",
      "image": "/images/donic-blade.jpg",
      "desc": "Specially constructed Senso V3 hollow handle slows down head rebound for supreme defensive touch.",
      "summary": "V3 Senso cavity engineered for the ultimate control defender.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.2mm SLOW FOAM",
          "val": 35
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "DEADENED IMPACT",
          "val": 90
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY DEFPLAY WOOD",
          "val": 45
        },
        "handle": {
          "label": "HANDLE",
          "sub": "SENSO V3 DEF FL",
          "val": 86
        }
      }
    },
    {
      "id": "tibhar-iv-l-def",
      "name": "Tibhar IV-L Light Contact",
      "brand": "TIBHAR",
      "price": "₹3,650 MRP",
      "image": "/images/why-hero-racket.jpg",
      "desc": "Soft wood inner core neutralizes incoming loop pace for steady baseline rally resets.",
      "summary": "Soft core shock absorption for reliable rallies.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.5mm SOFT TOUCH",
          "val": 44
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "CONTROL BACKSPIN",
          "val": 78
        },
        "blade": {
          "label": "BLADE",
          "sub": "4-PLY AYOUS DAMP",
          "val": 50
        },
        "handle": {
          "label": "HANDLE",
          "sub": "ANATOMIC FL",
          "val": 76
        }
      }
    },
    {
      "id": "donic-waldner-allplay-def",
      "name": "Donic Waldner Allplay",
      "brand": "DONIC",
      "price": "₹5,089 MRP",
      "image": "/images/donic-blade.jpg",
      "desc": "All-round Swedish touch allowing defensive players to push, chop, and counter-hit with precision.",
      "summary": "Versatile all-wood blade adaptable for close-table defense.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.6mm ALL-WOOD",
          "val": 52
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "TACTILE PLACEMENT",
          "val": 76
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY SWEDISH LIMBA",
          "val": 58
        },
        "handle": {
          "label": "HANDLE",
          "sub": "CLASSIC FLARED",
          "val": 75
        }
      }
    }
  ],
  "ALL-ROUND": [
    {
      "id": "donic-waldner-allplay-all",
      "name": "Donic Waldner Allplay",
      "brand": "DONIC",
      "price": "₹5,089 MRP",
      "image": "/images/donic-blade.jpg",
      "desc": "The global benchmark all-round frame. Combines Swedish craftsmanship with peerless ball placement.",
      "summary": "Legendary Jan-Ove Waldner touch for every rally situation.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.8mm HARMONIC FOAM",
          "val": 62
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "BALANCE ELASTIC",
          "val": 75
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY ALLPLAY WOOD",
          "val": 64
        },
        "handle": {
          "label": "HANDLE",
          "sub": "WALDNER FL",
          "val": 76
        }
      }
    },
    {
      "id": "tibhar-gravity-all-all",
      "name": "Tibhar Gravity All",
      "brand": "TIBHAR",
      "price": "₹3,850 MRP",
      "image": "/images/why-hero-racket.jpg",
      "desc": "Balanced European all-round frame providing solid feedback and wide sweet spot on all strokes.",
      "summary": "Confidence builder with harmonious speed and control.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.8mm BALANCED",
          "val": 60
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "CONSISTENT ELASTIC",
          "val": 74
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY GRAVITY ALL",
          "val": 62
        },
        "handle": {
          "label": "HANDLE",
          "sub": "COMFORT FL",
          "val": 72
        }
      }
    },
    {
      "id": "donic-waldner-off-2016-all",
      "name": "Donic Waldner Off 2016",
      "brand": "DONIC",
      "price": "₹6,819 MRP",
      "image": "/images/donic-blade.jpg",
      "desc": "Versatile offensive-allround wood frame built for all-zone play from close blocks to mid-court loops.",
      "summary": "Versatile attacker blade for every table zone.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm ALL-ZONE FOAM",
          "val": 70
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "LOOP + BLOCK SHEET",
          "val": 76
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY SWEDISH OFF",
          "val": 71
        },
        "handle": {
          "label": "HANDLE",
          "sub": "WALDNER ERGO FL",
          "val": 74
        }
      }
    },
    {
      "id": "tibhar-stratus-powerwood-all",
      "name": "Samsonov Stratus Powerwood",
      "brand": "TIBHAR",
      "price": "₹6,200 MRP",
      "image": "/images/why-hero-racket.jpg",
      "desc": "Hard Limba plies delivering crisp sensation and strong dynamic reserve on active blocks and drives.",
      "summary": "Dynamic all-round offensive frame with clear touch.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm POWER WOOD",
          "val": 72
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "ALL-ROUND ATTACK",
          "val": 75
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY STRATUS WOOD",
          "val": 72
        },
        "handle": {
          "label": "HANDLE",
          "sub": "SAMSONOV FL",
          "val": 73
        }
      }
    },
    {
      "id": "butterfly-primorac-all",
      "name": "Butterfly Primorac Classic",
      "brand": "BUTTERFLY",
      "price": "₹6,290 MRP",
      "image": "/images/pro-blade.jpg",
      "desc": "Proven 5-ply African wood design engineered for balanced progression and clean ball feedback.",
      "summary": "Time-tested African wood feel. Smooth rally transition.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.9mm ELASTIC FOAM",
          "val": 64
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "SPIN + BLOCK BALANCE",
          "val": 73
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY AFRICAN WOOD",
          "val": 65
        },
        "handle": {
          "label": "HANDLE",
          "sub": "PRIMORAC FL",
          "val": 74
        }
      }
    },
    {
      "id": "donic-appelgren-all",
      "name": "Donic Appelgren Allplay",
      "brand": "DONIC",
      "price": "₹4,499 MRP",
      "image": "/images/donic-blade.jpg",
      "desc": "Mikael Appelgren signature classic offering absolute control on pushes, blocks, and placement.",
      "summary": "The ultimate control racket for thoughtful match tacticians.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.6mm MAXIMUM TOUCH",
          "val": 50
        },
        "rubber": {
          "label": "RUBBER",
          "sub": "SURGICAL PLACEMENT",
          "val": 82
        },
        "blade": {
          "label": "BLADE",
          "sub": "5-PLY APPELGREN ALL",
          "val": 56
        },
        "handle": {
          "label": "HANDLE",
          "sub": "SWEDISH STRAIGHT",
          "val": 72
        }
      }
    }
  ]
};

export const RACKET_CAROUSEL_DATA = CATEGORY_RACKETS.BEGINNER;

export const CIRCULAR_POSITIONS = {
  0: {
    x: 0,
    y: 8,
    z: 35,
    rotateY: 0,
    scale: 1.06,
    opacity: 1,
    zIndex: 60,
  },
  1: {
    x: 114,
    y: 2,
    z: -18,
    rotateY: -18,
    scale: 0.88,
    opacity: 0.88,
    zIndex: 45,
  },
  '-1': {
    x: -114,
    y: 2,
    z: -18,
    rotateY: 18,
    scale: 0.88,
    opacity: 0.88,
    zIndex: 45,
  },
  2: {
    x: 198,
    y: -18,
    z: -85,
    rotateY: -10,
    scale: 0.74,
    opacity: 0.70,
    zIndex: 30,
  },
  '-2': {
    x: -198,
    y: -18,
    z: -85,
    rotateY: 10,
    scale: 0.74,
    opacity: 0.70,
    zIndex: 30,
  },
  3: {
    x: 0,
    y: -42,
    z: -125,
    rotateY: 0,
    scale: 0.72,
    opacity: 0.62,
    zIndex: 15,
  },
};

export default function CircularRacketCarousel({
  category = 'BEGINNER',
  selectedStyle,
  onSelect,
  onSelectRacket,
}) {
  const currentCategory = category || selectedStyle || 'BEGINNER';
  const rackets = CATEGORY_RACKETS[currentCategory] || CATEGORY_RACKETS.BEGINNER;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  // Responsive screen detection for 3D coordinate multipliers
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Reset activeIndex when category changes and broadcast first racket
  useEffect(() => {
    setActiveIndex(0);
    const firstRacket = rackets[0];
    if (firstRacket) {
      if (onSelectRacket) onSelectRacket(firstRacket);
      if (onSelect) onSelect(firstRacket.id);
    }
  }, [currentCategory]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelectIndex = useCallback(
    (index) => {
      const clamped = (index + rackets.length) % rackets.length;
      setActiveIndex(clamped);
      const chosenRacket = rackets[clamped];
      if (chosenRacket) {
        if (onSelectRacket) onSelectRacket(chosenRacket);
        if (onSelect) onSelect(chosenRacket.id);
      }
    },
    [rackets, onSelectRacket, onSelect]
  );

  const handlePrev = useCallback(() => {
    handleSelectIndex(activeIndex - 1);
  }, [activeIndex, handleSelectIndex]);

  const handleNext = useCallback(() => {
    handleSelectIndex(activeIndex + 1);
  }, [activeIndex, handleSelectIndex]);

  // Pointer drag gestures
  const handlePointerDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  const handlePointerUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const endX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0;
    const diff = endX - dragStartX.current;
    if (diff > 45) {
      handlePrev();
    } else if (diff < -45) {
      handleNext();
    }
  };

  const multX = isMobile ? 0.58 : 1;
  const multY = isMobile ? 0.68 : 1;
  const multZ = isMobile ? 0.55 : 1;
  const scaleMult = isMobile ? 0.88 : 1;

  return (
    <div className="crc-container" aria-label="Interactive 3D Circular Racket Selector">
      {/* ── 3D Circular Ring Viewport (Pills strip removed per user request) ── */}
      <div
        className="crc-viewport"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {/* Navigation Arrows */}
        <button
          type="button"
          className="crc-nav-btn crc-nav-prev"
          onClick={handlePrev}
          aria-label="Previous Racket"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          className="crc-nav-btn crc-nav-next"
          onClick={handleNext}
          aria-label="Next Racket"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Stage hosting the 3D Square Cards along the circular cylinder */}
        <div className="crc-stage">
          {rackets.map((card, i) => {
            const count = rackets.length;
            let diff = i - activeIndex;

            // Normalise diff into range [-2, 3]
            while (diff > 3) diff -= count;
            while (diff < -2) diff += count;

            const posKey = String(diff);
            const pos = CIRCULAR_POSITIONS[posKey] || CIRCULAR_POSITIONS[0];
            const isActive = diff === 0;
            const isBack = Math.abs(diff) >= 2;

            const x = pos.x * multX;
            const y = pos.y * multY;
            const z = pos.z * multZ;
            const scale = pos.scale * scaleMult;

            return (
              <div
                key={card.id}
                className={`crc-card${isActive ? ' active' : ''}${isBack ? ' is-back' : ''}`}
                style={{
                  transform: `translateX(${x}px) translateY(${y}px) translateZ(${z}px) rotateY(${pos.rotateY}deg) scale(${scale})`,
                  opacity: pos.opacity,
                  zIndex: pos.zIndex,
                }}
                onClick={() => handleSelectIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSelectIndex(i);
                  }
                }}
                aria-label={`${card.name} - ${card.brand}`}
              >
                {/* Pure Square Racket Blade Visual Photo (no text overlays) */}
                <img
                  src={card.image}
                  alt={card.name}
                  className="crc-card-img"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Bottom Indicator Dots ── */}
      <div className="crc-dots" role="tablist" aria-label="Racket carousel pagination">
        {rackets.map((card, i) => (
          <button
            key={card.id}
            type="button"
            className={`crc-dot${i === activeIndex ? ' active' : ''}`}
            onClick={() => handleSelectIndex(i)}
            aria-label={`Go to ${card.name}`}
          />
        ))}
      </div>
    </div>
  );
}
