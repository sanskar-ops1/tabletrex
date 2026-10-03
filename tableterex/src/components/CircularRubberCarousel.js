'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import './CircularRacketCarousel.css'; // Re-use same CSS — same layout

export const CATEGORY_RUBBERS = {
  "SPIN": [
    {
      "id": "nittaku-h8-80",
      "name": "Nittaku Hurricane 8-80 Power",
      "brand": "NITTAKU",
      "price": "₹6,129 MRP",
      "image": "/images/black-rubber.jpg",
      "desc": "Engineered specifically for the 40+ poly ball. The high-elastic #80 sponge gives fast speed recovery while the sticky topsheet generates lethal arc rotation.",
      "summary": "Sticky high-elastic #80 sponge generating lethal arc rotation.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.15mm #80 HIGH-ELASTIC",
          "val": 88
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "TACKY HIGH-FRICTION",
          "val": 99
        },
        "pips": {
          "label": "PIPS",
          "sub": "DENSE SPIN ARRAY",
          "val": 92
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 54-028 APPROVED",
          "val": 100
        }
      }
    },
    {
      "id": "butterfly-t05-spin",
      "name": "Butterfly Tenergy 05",
      "brand": "BUTTERFLY",
      "price": "₹10,600 MRP",
      "image": "/images/red-rubber.jpg",
      "desc": "Spring Sponge technology combined with high-tension rubber produces heavy rotation on looping drives and serve returns.",
      "summary": "The global benchmark for heavy rotation topspin loops.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm SPRING SPONGE",
          "val": 92
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "HIGH-TENSION GRIP",
          "val": 98
        },
        "pips": {
          "label": "PIPS",
          "sub": "CODE 05 VERTICAL ARRAY",
          "val": 96
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 14-001 TOURNAMENT",
          "val": 100
        }
      }
    },
    {
      "id": "donic-bluegrip-s2-spin",
      "name": "Donic Bluegrip S2",
      "brand": "DONIC",
      "price": "₹5,729 MRP",
      "image": "/images/black-rubber.jpg",
      "desc": "Chinese-style tacky topsheet paired with medium-soft European tensor sponge for surgical control and heavy backspin chops.",
      "summary": "Tacky European hybrid with surgical spin touch.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm MEDIUM-SOFT TENSOR",
          "val": 84
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "CHINESE TACKY SURFACE",
          "val": 96
        },
        "pips": {
          "label": "PIPS",
          "sub": "HIGH-DWELL CONICAL",
          "val": 90
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 21-042 CERTIFIED",
          "val": 100
        }
      }
    },
    {
      "id": "nittaku-fastarc-g1-spin",
      "name": "Nittaku Fastarc G-1",
      "brand": "NITTAKU",
      "price": "₹5,849 MRP",
      "image": "/images/red-rubber.jpg",
      "desc": "Japan #1 best-selling tensor rubber. Grip sheet generates extreme mechanical friction on high-arc looping topspins.",
      "summary": "Japan #1 power tensor rubber for aggressive loop arcs.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm POWER SPONGE",
          "val": 88
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "GRIP TOPSHEET MATRIX",
          "val": 97
        },
        "pips": {
          "label": "PIPS",
          "sub": "DENSE POWER ARRAY",
          "val": 90
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 54-012 TOURNAMENT",
          "val": 100
        }
      }
    },
    {
      "id": "tibhar-evolution-mxp-spin",
      "name": "Tibhar Evolution MX-P",
      "brand": "TIBHAR",
      "price": "₹7,215 MRP",
      "image": "/images/tibhar-rubber.jpg",
      "desc": "Dynamic Red Power Sponge delivering maximum catapult velocity and extreme rotation on heavy forward loop drives.",
      "summary": "Red Power Sponge tensor for relentless offensive topspins.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm RED POWER SPONGE",
          "val": 94
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "HIGH-CATAPULT ELASTIC",
          "val": 95
        },
        "pips": {
          "label": "PIPS",
          "sub": "POWER TENSOR PIPS",
          "val": 92
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG TIB-09 APPROVED",
          "val": 100
        }
      }
    },
    {
      "id": "donic-baracuda-spin",
      "name": "Donic Baracuda",
      "brand": "DONIC",
      "price": "₹5,129 MRP",
      "image": "/images/red-rubber.jpg",
      "desc": "Noticeably higher ball flight curve and vicious top-spin trajectory giving exceptional safety over the net.",
      "summary": "High-arc trajectory specialist for safe topspin consistency.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm DYNAMIC SPONGE",
          "val": 86
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "HIGH-ARC TOPSHEET",
          "val": 94
        },
        "pips": {
          "label": "PIPS",
          "sub": "FLEXIBLE DWELL PIPS",
          "val": 88
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 21-026 APPROVED",
          "val": 100
        }
      }
    }
  ],
  "SPEED": [
    {
      "id": "butterfly-t64-speed",
      "name": "Butterfly Tenergy 64",
      "brand": "BUTTERFLY",
      "price": "₹10,600 MRP",
      "image": "/images/red-rubber.jpg",
      "desc": "Code 64 pimples produce the fastest catapult and flat drive speed within the Tenergy series from mid-distance.",
      "summary": "Fastest catapult Tenergy sheet for aggressive drives.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm SPRING SPONGE",
          "val": 95
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "SPEED HIGH-TENSION",
          "val": 92
        },
        "pips": {
          "label": "PIPS",
          "sub": "CODE 64 WIDE ARRAY",
          "val": 96
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 14-002 TOURNAMENT",
          "val": 100
        }
      }
    },
    {
      "id": "donic-bluestorm-z1-speed",
      "name": "Donic Bluestorm Z1",
      "brand": "DONIC",
      "price": "₹6,169 MRP",
      "image": "/images/tibhar-rubber.jpg",
      "desc": "Noticeably thinner top sheet under high tension creates room for thicker sponge and unprecedented explosive power on contact.",
      "summary": "Explosive thin topsheet tensor for maximum velocity.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.3mm MAX+ SPONGE",
          "val": 96
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "ULTRA-THIN TENSION",
          "val": 91
        },
        "pips": {
          "label": "PIPS",
          "sub": "SHORT CATAPULT PIPS",
          "val": 94
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 21-039 CERTIFIED",
          "val": 100
        }
      }
    },
    {
      "id": "tibhar-mxp-speed",
      "name": "Tibhar Evolution MX-P",
      "brand": "TIBHAR",
      "price": "₹7,215 MRP",
      "image": "/images/tibhar-rubber.jpg",
      "desc": "Hard 47.5° sponge catapulting flat hits and forward drives with blistering speed.",
      "summary": "Maximum European catapult acceleration on forward strokes.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm 47.5° POWER CELL",
          "val": 94
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "FORWARD CATAPULT",
          "val": 93
        },
        "pips": {
          "label": "PIPS",
          "sub": "DIRECT IMPACT PIPS",
          "val": 91
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG TIB-09 APPROVED",
          "val": 100
        }
      }
    },
    {
      "id": "nittaku-fastarc-s1-speed",
      "name": "Nittaku Fastarc S1",
      "brand": "NITTAKU",
      "price": "₹4,629 MRP",
      "image": "/images/black-rubber.jpg",
      "desc": "Soft tension sponge producing explosive speed and high ball arc with crisp sound on counter-drives.",
      "summary": "Soft-touch tensor delivering high speed and crisp acoustic pop.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm SOFT TENSION",
          "val": 89
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "SPEED GRIP SHEET",
          "val": 88
        },
        "pips": {
          "label": "PIPS",
          "sub": "QUICK REBOUND PIPS",
          "val": 90
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 54-013 APPROVED",
          "val": 100
        }
      }
    },
    {
      "id": "donic-acuda-s2-speed",
      "name": "Donic Acuda S2",
      "brand": "DONIC",
      "price": "₹5,679 MRP",
      "image": "/images/red-rubber.jpg",
      "desc": "Fast, soft, and easy to control. Delivers explosive speed even during difficult passive match situations.",
      "summary": "Medium-soft tensor with outstanding forward energy transfer.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm MEDIUM-SOFT ELASTIC",
          "val": 88
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "ACUDA POWER SURFACE",
          "val": 90
        },
        "pips": {
          "label": "PIPS",
          "sub": "HIGH-SPEED CONICAL",
          "val": 89
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 21-019 APPROVED",
          "val": 100
        }
      }
    },
    {
      "id": "butterfly-rozena-speed",
      "name": "Butterfly Rozena",
      "brand": "BUTTERFLY",
      "price": "₹5,490 MRP",
      "image": "/images/red-rubber.jpg",
      "desc": "Spring Sponge technology combined with High Tension topsheet forgives minor stroke imperfections while sustaining fast pace.",
      "summary": "High-tolerance Spring Sponge speed with forgiving trajectory.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm ROSE SPRING FOAM",
          "val": 87
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "TOLERANCE TENSION",
          "val": 89
        },
        "pips": {
          "label": "PIPS",
          "sub": "ROZENA DWELL ARRAY",
          "val": 88
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 14-025 CERTIFIED",
          "val": 100
        }
      }
    }
  ],
  "CONTROL": [
    {
      "id": "donic-liga-ctrl",
      "name": "Donic Liga",
      "brand": "DONIC",
      "price": "₹2,275 MRP",
      "image": "/images/red-rubber.jpg",
      "desc": "High-grip elastic surface engineered for spin development, steady rally control, and pinpoint placement.",
      "summary": "All-round high-grip rubber for fundamental precision and touch.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.8mm ELASTIC CONTROL",
          "val": 68
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "HIGH-GRIP NATURAL RUBBER",
          "val": 82
        },
        "pips": {
          "label": "PIPS",
          "sub": "SURGICAL DWELL PIPS",
          "val": 78
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 21-002 TOURNAMENT",
          "val": 100
        }
      }
    },
    {
      "id": "donic-twingo-plus-ctrl",
      "name": "Donic Twingo Plus",
      "brand": "DONIC",
      "price": "₹2,239 MRP",
      "image": "/images/black-rubber.jpg",
      "desc": "Maximum ball contact time and forgiving bounce for learning spins, active blocks, and steady pushes.",
      "summary": "Forgiving all-round sheet for absolute table control.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.8mm TWINGO PLUS FOAM",
          "val": 65
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "CONTROL SHEET MATRIX",
          "val": 80
        },
        "pips": {
          "label": "PIPS",
          "sub": "WIDE DWELL SPACING",
          "val": 76
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 21-001 APPROVED",
          "val": 100
        }
      }
    },
    {
      "id": "nittaku-fastarc-s1-ctrl",
      "name": "Nittaku Fastarc S1",
      "brand": "NITTAKU",
      "price": "₹4,629 MRP",
      "image": "/images/black-rubber.jpg",
      "desc": "Soft sponge feel creates deep ball absorption for controlled returns against heavy aggressive topspins.",
      "summary": "Deep ball dwell time for counter-spin and placement control.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm SOFT ABSORB SPONGE",
          "val": 75
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "PRECISION GRIP",
          "val": 86
        },
        "pips": {
          "label": "PIPS",
          "sub": "BALANCED RETURN ARRAY",
          "val": 82
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 54-013 APPROVED",
          "val": 100
        }
      }
    },
    {
      "id": "donic-bluegrip-s2-ctrl",
      "name": "Donic Bluegrip S2",
      "brand": "DONIC",
      "price": "₹5,729 MRP",
      "image": "/images/black-rubber.jpg",
      "desc": "Tacky Chinese surface with soft European sponge enables surgical short-game touch and tight drop-shots.",
      "summary": "Sticky top sheet providing surgical short-table precision.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm SOFT TENSOR",
          "val": 78
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "TACKY SHORT GAME",
          "val": 92
        },
        "pips": {
          "label": "PIPS",
          "sub": "PINPOINT PLACEMENT PIPS",
          "val": 85
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 21-042 CERTIFIED",
          "val": 100
        }
      }
    },
    {
      "id": "butterfly-rozena-ctrl",
      "name": "Butterfly Rozena",
      "brand": "BUTTERFLY",
      "price": "₹5,490 MRP",
      "image": "/images/red-rubber.jpg",
      "desc": "Engineered specifically for players needing high tolerance on active blocking and directional placement.",
      "summary": "High-tolerance balance for consistent rally control.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.9mm ROSE SPRING FOAM",
          "val": 76
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "DIRECTIONAL TENSION",
          "val": 88
        },
        "pips": {
          "label": "PIPS",
          "sub": "ROZENA STABILITY PIPS",
          "val": 84
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 14-025 APPROVED",
          "val": 100
        }
      }
    },
    {
      "id": "tibhar-hybrid-k1-ctrl",
      "name": "Tibhar Hybrid K1",
      "brand": "TIBHAR",
      "price": "₹5,400 MRP",
      "image": "/images/tibhar-rubber.jpg",
      "desc": "Sticky surface grip neutralizes incoming topspin velocity, giving control on serve-receives and block returns.",
      "summary": "Sticky Euro-Hybrid surface for superior serve receive touch.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm CONTROL HYBRID",
          "val": 77
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "TACKY EURO-CHINESE",
          "val": 90
        },
        "pips": {
          "label": "PIPS",
          "sub": "RECEIVE CONTROL PIPS",
          "val": 83
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG TIB-15 APPROVED",
          "val": 100
        }
      }
    }
  ],
  "OFFENSIVE": [
    {
      "id": "butterfly-t05-off",
      "name": "Butterfly Tenergy 05",
      "brand": "BUTTERFLY",
      "price": "₹10,600 MRP",
      "image": "/images/red-rubber.jpg",
      "desc": "Spring Sponge technology powers high-impact loop drives with tremendous rotational energy.",
      "summary": "The world tournament standard attacking tensor rubber.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm SPRING ATTACK",
          "val": 95
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "MAX ROTATION TENSION",
          "val": 98
        },
        "pips": {
          "label": "PIPS",
          "sub": "CODE 05 VERTICAL",
          "val": 95
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 14-001 TOURNAMENT",
          "val": 100
        }
      }
    },
    {
      "id": "tibhar-evolution-mxp-off",
      "name": "Tibhar Evolution MX-P",
      "brand": "TIBHAR",
      "price": "₹7,215 MRP",
      "image": "/images/tibhar-rubber.jpg",
      "desc": "Maximum catapult acceleration and heavy topspin bite for aggressive power loopers.",
      "summary": "High-performance tensor engineered for explosive loop attacks.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm POWER CELL RED",
          "val": 94
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "EXPLOSIVE CATAPULT",
          "val": 94
        },
        "pips": {
          "label": "PIPS",
          "sub": "FORWARD MOMENTUM PIPS",
          "val": 92
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG TIB-09 APPROVED",
          "val": 100
        }
      }
    },
    {
      "id": "nittaku-fastarc-g1-off",
      "name": "Nittaku Fastarc G-1",
      "brand": "NITTAKU",
      "price": "₹5,849 MRP",
      "image": "/images/red-rubber.jpg",
      "desc": "Japan #1 offensive rubber delivering high arc stability on aggressive counter-loop rallies.",
      "summary": "Maximum grip topsheet for dominant offensive loop drives.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm STRONG SPONGE",
          "val": 91
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "GRIP POWER SHEET",
          "val": 96
        },
        "pips": {
          "label": "PIPS",
          "sub": "HIGH-ARC PIPS ARRAY",
          "val": 91
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 54-012 TOURNAMENT",
          "val": 100
        }
      }
    },
    {
      "id": "donic-bluestorm-z1-off",
      "name": "Donic Bluestorm Z1",
      "brand": "DONIC",
      "price": "₹6,169 MRP",
      "image": "/images/tibhar-rubber.jpg",
      "desc": "Thinner topsheet under high tension accommodates max+ sponge for blistering flat power.",
      "summary": "Noticeably explosive catapult on direct forward attacks.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.3mm MAX+ BLUESTORM",
          "val": 95
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "HIGH-TENSION ELASTIC",
          "val": 91
        },
        "pips": {
          "label": "PIPS",
          "sub": "DIRECT DRIVE PIPS",
          "val": 93
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 21-039 CERTIFIED",
          "val": 100
        }
      }
    },
    {
      "id": "butterfly-t64-off",
      "name": "Butterfly Tenergy 64",
      "brand": "BUTTERFLY",
      "price": "₹10,600 MRP",
      "image": "/images/red-rubber.jpg",
      "desc": "Dynamic Spring Sponge creates blistering mid-distance velocity on forward counter attacks.",
      "summary": "Extreme catapult velocity from all attacking zones.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.1mm CATAPULT SPRING",
          "val": 94
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "SPEED TENSION MATRIX",
          "val": 92
        },
        "pips": {
          "label": "PIPS",
          "sub": "CODE 64 MID-DISTANCE",
          "val": 94
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 14-002 APPROVED",
          "val": 100
        }
      }
    },
    {
      "id": "nittaku-h8-80-off",
      "name": "Nittaku Hurricane 8-80 Power",
      "brand": "NITTAKU",
      "price": "₹6,129 MRP",
      "image": "/images/black-rubber.jpg",
      "desc": "Tacky surface grips the 40+ ball with heavy arc rotation on loop-drives and decisive kills.",
      "summary": "Sticky offensive power with rapid rebound response.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.15mm #80 ELASTIC",
          "val": 90
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "STICKY ARC SHEET",
          "val": 97
        },
        "pips": {
          "label": "PIPS",
          "sub": "OFFENSIVE SPIN PIPS",
          "val": 93
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 54-028 CERTIFIED",
          "val": 100
        }
      }
    }
  ],
  "DEFENSIVE": [
    {
      "id": "donic-spike-p2-def",
      "name": "Donic Spike P2",
      "brand": "DONIC",
      "price": "₹4,109 MRP",
      "image": "/images/black-rubber.jpg",
      "desc": "Soft-sponge long pimple rubber designed for modern defensive choppers demanding spin variation.",
      "summary": "Soft-sponge long pimple rubber for heavy backspin reversal.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.0mm SOFT DEF SPONGE",
          "val": 38
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "LONG PIPS REVERSAL",
          "val": 86
        },
        "pips": {
          "label": "PIPS",
          "sub": "EXTENDED DEFENSIVE PIPS",
          "val": 94
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 21-032 CERTIFIED",
          "val": 100
        }
      }
    },
    {
      "id": "donic-liga-def",
      "name": "Donic Liga",
      "brand": "DONIC",
      "price": "₹2,275 MRP",
      "image": "/images/red-rubber.jpg",
      "desc": "High-grip classic surface allows clean baseline chops with controlled backspin rotation.",
      "summary": "Controlled inverted sheet for reliable baseline chopping.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.5mm CONTROL FOAM",
          "val": 52
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "BACKSPIN GRIP SHEET",
          "val": 80
        },
        "pips": {
          "label": "PIPS",
          "sub": "DAMPENED CHOP ARRAY",
          "val": 78
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 21-002 TOURNAMENT",
          "val": 100
        }
      }
    },
    {
      "id": "nittaku-moristo-sp-def",
      "name": "Nittaku Moristo SP AX",
      "brand": "NITTAKU",
      "price": "₹5,129 MRP",
      "image": "/images/black-rubber.jpg",
      "desc": "Tension short pimples enabling active defensive counter-blocks and flat trajectory returns.",
      "summary": "Japanese short pimple sheet for active defensive counter-blocks.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.8mm TENSION SPONGE",
          "val": 68
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "SHORT PIPS FRICTION",
          "val": 78
        },
        "pips": {
          "label": "PIPS",
          "sub": "AX SPEED PIPS MATRIX",
          "val": 88
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 54-024 APPROVED",
          "val": 100
        }
      }
    },
    {
      "id": "donic-twingo-plus-def",
      "name": "Donic Twingo Plus",
      "brand": "DONIC",
      "price": "₹2,239 MRP",
      "image": "/images/black-rubber.jpg",
      "desc": "Gentle catapult absorption helps defensive players neutralize aggressive attacks with safety.",
      "summary": "Low-rebound inverted rubber for safe table returns.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.5mm SLOW FOAM",
          "val": 48
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "DAMPENED CONTACT",
          "val": 76
        },
        "pips": {
          "label": "PIPS",
          "sub": "ABSORPTION ARRAY",
          "val": 75
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 21-001 APPROVED",
          "val": 100
        }
      }
    },
    {
      "id": "butterfly-rozena-def",
      "name": "Butterfly Rozena",
      "brand": "BUTTERFLY",
      "price": "₹5,490 MRP",
      "image": "/images/red-rubber.jpg",
      "desc": "Forgiving High Tension surface allows defensive players to launch sudden attacking counter-loops.",
      "summary": "High-tolerance sheet for modern counter-choppers.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.7mm ROSE SPRING SPONGE",
          "val": 72
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "COUNTER-SPIN DWELL",
          "val": 86
        },
        "pips": {
          "label": "PIPS",
          "sub": "STABLE CHOP PIPS",
          "val": 82
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 14-025 CERTIFIED",
          "val": 100
        }
      }
    },
    {
      "id": "tibhar-hybrid-k1-def",
      "name": "Tibhar Hybrid K1",
      "brand": "TIBHAR",
      "price": "₹5,400 MRP",
      "image": "/images/tibhar-rubber.jpg",
      "desc": "Tacky surface grips incoming ball rotation, generating extreme variation on chops from distance.",
      "summary": "Sticky topsheet generating heavy backspin variation.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.8mm DAMP HYBRID",
          "val": 66
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "STICKY CHOP FRICTION",
          "val": 91
        },
        "pips": {
          "label": "PIPS",
          "sub": "VARIATION MATRIX",
          "val": 84
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG TIB-15 APPROVED",
          "val": 100
        }
      }
    }
  ],
  "ALL-ROUND": [
    {
      "id": "donic-liga-all",
      "name": "Donic Liga",
      "brand": "DONIC",
      "price": "₹2,275 MRP",
      "image": "/images/red-rubber.jpg",
      "desc": "The classic all-round training rubber. Grippy topsheet provides consistent touch on every stroke.",
      "summary": "High-grip elastic surface giving great touch and spin development.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.8mm ALL-ROUND FOAM",
          "val": 72
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "NATURAL ELASTIC GRIP",
          "val": 85
        },
        "pips": {
          "label": "PIPS",
          "sub": "BALANCED PIPS MATRIX",
          "val": 80
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 21-002 TOURNAMENT",
          "val": 100
        }
      }
    },
    {
      "id": "donic-twingo-plus-all",
      "name": "Donic Twingo Plus",
      "brand": "DONIC",
      "price": "₹2,239 MRP",
      "image": "/images/black-rubber.jpg",
      "desc": "Forgiving response with steady dwell time for rally development and counter pushes.",
      "summary": "High-control all-round rubber for versatile play.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.8mm MEDIUM-SOFT",
          "val": 70
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "STEADY TOUCH SHEET",
          "val": 82
        },
        "pips": {
          "label": "PIPS",
          "sub": "VERSATILE PIPS ARRAY",
          "val": 78
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 21-001 APPROVED",
          "val": 100
        }
      }
    },
    {
      "id": "nittaku-fastarc-s1-all",
      "name": "Nittaku Fastarc S1",
      "brand": "NITTAKU",
      "price": "₹4,629 MRP",
      "image": "/images/black-rubber.jpg",
      "desc": "Soft tension sponge giving comfortable dwell time and effortless rally speed on both wings.",
      "summary": "Comfortable Japanese tensor for all-round versatility.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm SOFT TENSOR",
          "val": 80
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "ELASTIC GRIP SHEET",
          "val": 88
        },
        "pips": {
          "label": "PIPS",
          "sub": "HARMONIC PIPS MATRIX",
          "val": 84
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 54-013 APPROVED",
          "val": 100
        }
      }
    },
    {
      "id": "donic-acuda-s2-all",
      "name": "Donic Acuda S2",
      "brand": "DONIC",
      "price": "₹5,679 MRP",
      "image": "/images/red-rubber.jpg",
      "desc": "Harmonious balance of speed, spin, and touch. Performs cleanly in both close-table and mid-court situations.",
      "summary": "Medium-soft German tensor with well-rounded match dynamics.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm DYNAMIC SPONGE",
          "val": 86
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "ACUDA TOUCH SURFACE",
          "val": 91
        },
        "pips": {
          "label": "PIPS",
          "sub": "ALL-ZONE PIPS ARRAY",
          "val": 87
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 21-019 APPROVED",
          "val": 100
        }
      }
    },
    {
      "id": "butterfly-rozena-all",
      "name": "Butterfly Rozena",
      "brand": "BUTTERFLY",
      "price": "₹5,490 MRP",
      "image": "/images/red-rubber.jpg",
      "desc": "Spring Sponge technology designed to absorb opponents aggressive spin while maintaining high offensive quality.",
      "summary": "Forgiving tournament tensor for consistent all-round play.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "1.9mm ROSE SPRING SPONGE",
          "val": 84
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "TOLERANT TENSION",
          "val": 89
        },
        "pips": {
          "label": "PIPS",
          "sub": "STABILITY PIPS MATRIX",
          "val": 86
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG 14-025 CERTIFIED",
          "val": 100
        }
      }
    },
    {
      "id": "tibhar-hybrid-k1-all",
      "name": "Tibhar Hybrid K1",
      "brand": "TIBHAR",
      "price": "₹5,400 MRP",
      "image": "/images/tibhar-rubber.jpg",
      "desc": "Sticky surface paired with responsive sponge allows quick transition from passive defense to offensive counter.",
      "summary": "Tacky hybrid tensor for versatile attacking and control rallies.",
      "profile": {
        "sponge": {
          "label": "SPONGE",
          "sub": "2.0mm BALANCED HYBRID",
          "val": 82
        },
        "topsheet": {
          "label": "TOPSHEET",
          "sub": "TACKY GRIP SURFACE",
          "val": 91
        },
        "pips": {
          "label": "PIPS",
          "sub": "TRANSITION PIPS ARRAY",
          "val": 85
        },
        "ittf": {
          "label": "ITTF",
          "sub": "REG TIB-15 APPROVED",
          "val": 100
        }
      }
    }
  ]
};

export const CIRCULAR_POSITIONS = {
  0:    { x: 0,    y: 8,   z: 35,   rotateY: 0,   scale: 1.06, opacity: 1,    zIndex: 60 },
  1:    { x: 114,  y: 2,   z: -18,  rotateY: -18, scale: 0.88, opacity: 0.88, zIndex: 45 },
  '-1': { x: -114, y: 2,   z: -18,  rotateY: 18,  scale: 0.88, opacity: 0.88, zIndex: 45 },
  2:    { x: 198,  y: -18, z: -85,  rotateY: -10, scale: 0.74, opacity: 0.70, zIndex: 30 },
  '-2': { x: -198, y: -18, z: -85,  rotateY: 10,  scale: 0.74, opacity: 0.70, zIndex: 30 },
  3:    { x: 0,    y: -42, z: -125, rotateY: 0,   scale: 0.72, opacity: 0.62, zIndex: 15 },
};

export default function CircularRubberCarousel({
  category = 'SPIN',
  onSelectRubber,
}) {
  const rubbers = CATEGORY_RUBBERS[category] || CATEGORY_RUBBERS.SPIN;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Reset when category changes, broadcast first rubber
  useEffect(() => {
    setActiveIndex(0);
    const first = rubbers[0];
    if (first && onSelectRubber) onSelectRubber(first);
  }, [category]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelectIndex = useCallback(
    (index) => {
      const clamped = (index + rubbers.length) % rubbers.length;
      setActiveIndex(clamped);
      const chosen = rubbers[clamped];
      if (chosen && onSelectRubber) onSelectRubber(chosen);
    },
    [rubbers, onSelectRubber]
  );

  const handlePrev = useCallback(() => handleSelectIndex(activeIndex - 1), [activeIndex, handleSelectIndex]);
  const handleNext = useCallback(() => handleSelectIndex(activeIndex + 1), [activeIndex, handleSelectIndex]);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };
  const handlePointerUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const endX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0;
    const diff = endX - dragStartX.current;
    if (diff > 45) handlePrev();
    else if (diff < -45) handleNext();
  };

  const multX = isMobile ? 0.58 : 1;
  const multY = isMobile ? 0.68 : 1;
  const multZ = isMobile ? 0.55 : 1;
  const scaleMult = isMobile ? 0.88 : 1;

  return (
    <div className="crc-container" aria-label="Interactive 3D Circular Rubber Selector">
      <div
        className="crc-viewport"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <button type="button" className="crc-nav-btn crc-nav-prev" onClick={handlePrev} aria-label="Previous Rubber">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button type="button" className="crc-nav-btn crc-nav-next" onClick={handleNext} aria-label="Next Rubber">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="crc-stage">
          {rubbers.map((card, i) => {
            const count = rubbers.length;
            let diff = i - activeIndex;
            while (diff > 3) diff -= count;
            while (diff < -2) diff += count;

            const pos = CIRCULAR_POSITIONS[String(diff)] || CIRCULAR_POSITIONS[0];
            const isActive = diff === 0;
            const isBack = Math.abs(diff) >= 2;

            return (
              <div
                key={card.id}
                className={`crc-card${isActive ? ' active' : ''}${isBack ? ' is-back' : ''}`}
                style={{
                  transform: `translateX(${pos.x * multX}px) translateY(${pos.y * multY}px) translateZ(${pos.z * multZ}px) rotateY(${pos.rotateY}deg) scale(${pos.scale * scaleMult})`,
                  opacity: pos.opacity,
                  zIndex: pos.zIndex,
                }}
                onClick={() => handleSelectIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSelectIndex(i); }}
                aria-label={`${card.name} - ${card.brand}`}
              >
                <img src={card.image} alt={card.name} className="crc-card-img" loading="lazy" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="crc-dots" role="tablist" aria-label="Rubber carousel pagination">
        {rubbers.map((card, i) => (
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
