import { checked } from './guide';

/**
 * Independent long-tail topics for kailasaverul.com.
 * Every page has one search intent, its own title/description/h1, and real internal links.
 * Facts follow the ASI Ellora Caves listing (consulted 2026-10-29), the UNESCO
 * Ellora Caves property record, and a dated Google Maps snapshot only.
 * Unverified prices, business names, distances, timetables and facilities are never invented.
 */
export const ASI_CONSULTED = checked;
export const PAGE_REVIEWED = '9 November 2026';

export type TopicGroupId = 'visit' | 'culture' | 'routes' | 'nearby' | 'services';
export type TopicKind = 'guide' | 'place' | 'itinerary';

export interface TopicSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  note?: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicFact {
  label: string;
  value: string;
}

export interface Topic {
  slug: string;
  group: TopicGroupId;
  kind: TopicKind;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  kicker: string;
  lead: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
  related: string[];
  facts?: TopicFact[];
  stops?: string[];
  mapsQuery?: string;
}

export const TOPIC_GROUPS: Record<TopicGroupId, { label: string; blurb: string }> = {
  visit: { label: 'Visitor information', blurb: 'Tickets, hours, timing, access and first-visit questions.' },
  culture: { label: 'History & architecture', blurb: 'Rashtrakuta history, rock-cut architecture, sculpture and UNESCO heritage.' },
  routes: { label: 'Transport & itineraries', blurb: 'Getting to Ellora, parking and visits from one hour to a full day.' },
  nearby: { label: 'Nearby caves & sights', blurb: 'Other Ellora caves and regional monuments worth a separate visit.' },
  services: { label: 'Food & accommodation', blurb: 'Where to eat, stay and arrange transport, with verification notes.' }
};

export const TOPIC_GROUP_ORDER: TopicGroupId[] = ['visit', 'culture', 'routes', 'nearby', 'services'];

export const TOPICS: Topic[] = [
  // ── A. Visitor information (10) ────────────────────────────────────────────
  {
    slug: 'tickets',
    group: 'visit',
    kind: 'guide',
    metaTitle: 'Kailasa Temple Tickets & Entry Fees | Ellora Cave 16',
    metaDescription: 'ASI-listed Ellora Caves entry fees for visiting Kailasa Temple (Cave 16): Indian, SAARC, BIMSTEC and foreign visitor rates, counter vs online, children and what to verify.',
    h1: 'Kailasa Temple Tickets & Entry Fees',
    kicker: 'Visitor information · Ellora Cave 16',
    lead: 'Kailasa Temple is Cave 16 inside the ASI-managed Ellora Caves. The published admission is for the Ellora Caves property, not a separate Kailasa-only ticket.',
    sections: [
      {
        heading: 'ASI-listed admission categories',
        paragraphs: [
          'The Archaeological Survey of India publishes category-based admission for the Ellora Caves. The listing consulted on 29 October 2026 distinguishes visitors from India, SAARC and BIMSTEC countries from other foreign visitors, and distinguishes counter purchases from online purchases.',
          'These are ASI’s listed figures for the whole protected property. They are reproduced here as a dated reference, not as a live price quote, a booking service or a guarantee of availability on your travel date.'
        ],
        bullets: [
          'Visitors from India, SAARC and BIMSTEC countries: ₹40 at the counter, ₹35 online, per the ASI listing.',
          'Other foreign visitors: ₹600 at the counter, ₹550 online, per the ASI listing.',
          'Children below 15: listed as free in the ASI information.',
          'No clear page-update date was visible on the ASI listing when reviewed.'
        ],
        note: 'Reviewed 9 November 2026 against the ASI listing consulted 29 October 2026. Confirm the current amount, eligibility and required identification in the official ticket system before travelling.'
      },
      {
        heading: 'Where admission is arranged',
        paragraphs: [
          'ASI points visitors to its official e-ticketing service. Use that channel, or the on-site counter, and keep the confirmation with the identification used for booking. This independent guide does not sell tickets, hold inventory or issue reservations.',
          'Because Kailasa sits inside a larger protected complex, the ticket governs access to the Ellora Caves site. It does not by itself confirm that a specific cave, upper terrace or passage is open on the day of your visit.'
        ]
      },
      {
        heading: 'What the fee does not include',
        paragraphs: [
          'Do not assume the admission covers parking, a guide, an audio device, transport within the site or special access to conservation areas. Those arrangements are separate and need their own checks. Temporary closures, conservation work or special orders can override the general listing.'
        ]
      }
    ],
    faqs: [
      { q: 'Is there a separate ticket just for Kailasa Temple?', a: 'The ASI listing describes admission to the Ellora Caves property, within which Kailasa is Cave 16. No separate Kailasa-only ticket appears in that listing; confirm at the official ticket service before you travel.' },
      { q: 'Do children enter free?', a: 'ASI lists free entry for children below 15. Eligibility rules and identification requirements should be confirmed in the official ticket system rather than assumed.' },
      { q: 'Is booking online cheaper?', a: 'The ASI listing consulted on 29 October 2026 showed lower online figures than counter figures in both charged categories. Treat that as a dated listing, not a permanent price difference.' }
    ],
    related: ['opening-hours', 'visitor-guide', 'how-to-reach', 'best-time-to-visit', 'faq']
  },
  {
    slug: 'opening-hours',
    group: 'visit',
    kind: 'guide',
    metaTitle: 'Kailasa Temple Opening Hours & Tuesday Closure | Ellora',
    metaDescription: 'ASI lists the Ellora Caves as open sunrise to sunset and closed on Tuesdays. What that means for a Kailasa Temple (Cave 16) visit, and which hours still need checking.',
    h1: 'Kailasa Temple Opening Hours & Closing Days',
    kicker: 'Visitor information · Ellora Cave 16',
    lead: 'ASI describes visiting hours for the Ellora Caves as sunrise to sunset, with a weekly closure on Tuesdays. Kailasa Temple follows the property’s access, not its own independent timetable.',
    sections: [
      {
        heading: 'What the ASI listing says',
        paragraphs: [
          'The ASI Ellora Caves page consulted on 29 October 2026 lists sunrise-to-sunset visiting and a weekly Tuesday closure. Because sunrise and sunset shift through the year, this is a daylight rule rather than a fixed clock time.',
          'A Google Maps snapshot taken the same day displayed an 18:00 closing time. That third-party listing is not an official closing hour, a last-admission time or a promise of access to Cave 16 at that time.'
        ],
        note: 'Reviewed 9 November 2026. The ASI page showed no clear update date; treat the hours as a listing to re-check, not a live schedule.'
      },
      {
        heading: 'Planning around a daylight-only window',
        paragraphs: [
          'Daylight opening means that entry procedures, the walk to Cave 16, time inside the monument and the return to your vehicle all have to fit before sunset. Arriving late in the day compresses the visit even if the gate is still open.',
          'Conservation work, weather, special orders and partial closures can restrict individual caves or routes within the property. A general opening listing cannot confirm that the exact area you want is reachable.'
        ],
        bullets: [
          'Confirm the weekly closure and any public-holiday exceptions before fixing a travel date.',
          'Ask ASI or the official ticket service about the current last-admission time.',
          'Do not plan sunrise or sunset photography outside permitted admission hours.'
        ]
      },
      {
        heading: 'Where to verify on the day',
        paragraphs: [
          'Check the ASI site and the official ticket service for current conditions, then confirm at the entrance. This guide does not monitor gate status and does not publish a live opening board.'
        ]
      }
    ],
    faqs: [
      { q: 'Is Kailasa Temple open on Tuesdays?', a: 'The ASI listing consulted on 29 October 2026 gives a weekly Tuesday closure for the Ellora Caves. Kailasa is Cave 16 within that property, so plan around the closure and confirm current exceptions.' },
      { q: 'What time does the temple close?', a: 'ASI lists sunrise to sunset rather than a fixed hour. A Maps 18:00 snapshot is a third-party listing, not an official closing or last-ticket time.' },
      { q: 'Can I visit for sunset?', a: 'Sunset defines the end of the listed visiting window. Do not assume late entry or after-hours photography is permitted; confirm last admission with ASI.' }
    ],
    related: ['tickets', 'best-time-to-visit', 'visitor-guide', 'how-to-reach', 'faq']
  },
  {
    slug: 'best-time-to-visit',
    group: 'visit',
    kind: 'guide',
    metaTitle: 'Best Time to Visit Kailasa Temple | Season & Time of Day',
    metaDescription: 'Compare seasons and times of day for a Kailasa Temple visit at Ellora: cooler winter months, hot pre-monsoon weeks, monsoon surfaces and crowd-free early hours.',
    h1: 'Best Time to Visit Kailasa Temple',
    kicker: 'Visitor information · Ellora Cave 16',
    lead: 'The most comfortable visit is usually a dry, cooler day with an early start. ASI’s sunrise-to-sunset opening means season and daylight shape how much of Cave 16 you can see.',
    sections: [
      {
        heading: 'Seasons around Verul',
        paragraphs: [
          'The region around Ellora is commonly described in three broad travel seasons: a cooler dry winter, a hot pre-monsoon period and the monsoon months. These are general patterns for planning, not a forecast for a specific date.',
          'This guide does not publish climatology tables or guaranteed temperatures. For a current forecast use the weather panel on the home page, and for warnings rely on the India Meteorological Department rather than a travel site.'
        ],
        bullets: [
          'Cooler months (roughly November to February): often the most comfortable for long periods on open stone surfaces.',
          'Hot months (roughly March to May): heat and strong sun make shade, water and shorter walking stretches more important.',
          'Monsoon months (roughly June to September): greener surroundings, but wet stone, standing water and possible path closures are separate concerns.',
          'October and early November: a transition period where conditions vary year to year.'
        ]
      },
      {
        heading: 'Time of day',
        paragraphs: [
          'An early start usually gives softer light on the rock-cut facades and more time before the daylight window closes. Midday can be harsh on exposed surfaces, and late arrival compresses both entry and the walk inside the complex.',
          'Photographers often prefer oblique morning or late-afternoon light, but the listed visiting hours and any local photography rules take priority over an ideal shot.'
        ]
      },
      {
        heading: 'Days and conditions to re-check',
        paragraphs: [
          'Whatever the season, the weekly Tuesday closure listed by ASI and any temporary conservation or weather restrictions determine whether a visit is possible. Confirm the date, opening status and current entry rules before committing to transport.'
        ],
        note: 'Reviewed 9 November 2026. Seasonal descriptions are planning guidance only, not a weather or access guarantee.'
      }
    ],
    faqs: [
      { q: 'Which month is best for Kailasa Temple?', a: 'Cooler, drier months are generally more comfortable for walking on open stone, but no month guarantees clear weather or full access. Check the ASI listing, current forecast and IMD warnings for your date.' },
      { q: 'Is the monsoon a good time to visit?', a: 'The monsoon brings greener surroundings but also wet stone and possible path restrictions. It is a trade-off rather than a recommended season; see the monsoon guide.' },
      { q: 'Should I arrive early?', a: 'An early start generally allows more time within the sunrise-to-sunset window and softer light. Confirm the current last-admission time with ASI.' }
    ],
    related: ['opening-hours', 'monsoon-visit', 'visitor-guide', 'photography-guide', 'tickets']
  },
  {
    slug: 'visitor-guide',
    group: 'visit',
    kind: 'guide',
    metaTitle: 'Kailasa Temple Visitor Guide | First Visit to Ellora Cave 16',
    metaDescription: 'A practical first-visit guide to Kailasa Temple (Ellora Cave 16): where it sits in the cave complex, admission checks, what to wear and carry, and how to pace your time.',
    h1: 'Kailasa Temple Visitor Guide',
    kicker: 'Visitor information · Ellora Cave 16',
    lead: 'Kailasa Temple is one monument, Cave 16, inside the much larger Ellora Caves property. A good first visit starts by separating the temple, the ensemble and the admission process.',
    sections: [
      {
        heading: 'Understand what you are visiting',
        paragraphs: [
          'UNESCO inscribed the Ellora Caves as a World Heritage property in 1983, describing caves associated with Buddhist, Brahmanical and Jain traditions. Kailasa, a monolithic rock-cut temple dedicated to Shiva, is Cave 16 within that ensemble.',
          'Calling the whole complex “Kailasa Temple” is inaccurate. The 1983 inscription covers the property, not a standalone listing for Cave 16.'
        ]
      },
      {
        heading: 'Before you leave',
        paragraphs: [
          'Confirm the ASI-listed opening window, the weekly Tuesday closure, current admission categories and any temporary closures. Agree with your driver or group on the actual gate and meeting point: UNESCO’s property reference coordinate of 20.02639, 75.17917 is not a surveyed Cave 16 entrance or ticket counter.'
        ],
        bullets: [
          'Carry drinking water and sun protection; exposed stone surfaces get hot.',
          'Wear footwear with grip for steps and uneven, sometimes wet, stone.',
          'Carry the identification used for any online ticket booking.',
          'Check current photography, tripod and drone rules with ASI rather than assuming permission.'
        ]
      },
      {
        heading: 'Pacing the visit',
        paragraphs: [
          'Allow separate time for admission, the actual route to Cave 16, the monument itself and rests. ASI describes the Ellora scarp as nearly 2 km long, so distances inside the property are part of the plan. As a reference, ASI suggests a 3–4 hour visit can prioritise Caves 10, 16, 21, 32 and 34, subject to what is open.',
          'Facilities such as toilets, drinking-water points, food outlets, luggage storage or EV charging have not been independently verified by this guide. Confirm anything essential before travelling.'
        ],
        note: 'Reviewed 9 November 2026 against the ASI listing consulted 29 October 2026. No on-site inspection is claimed.'
      }
    ],
    faqs: [
      { q: 'How long should I allow for Kailasa Temple?', a: 'It depends on whether you see only Cave 16 or other caves too. ASI suggests 3–4 hours for a focused selection of caves; add separate time for admission, walking and rests.' },
      { q: 'Is the temple the whole Ellora site?', a: 'No. Kailasa is Cave 16 of the Ellora Caves. The UNESCO inscription and ASI admission cover the wider property.' },
      { q: 'Are there facilities on site?', a: 'This guide has not verified current toilets, water points, food outlets or storage. Check with ASI before you travel and carry essentials.' }
    ],
    related: ['tickets', 'opening-hours', 'accessibility', 'one-hour-itinerary', 'how-to-reach']
  },
  {
    slug: 'photography-guide',
    group: 'visit',
    kind: 'guide',
    metaTitle: 'Kailasa Temple Photography Guide | Angles, Light & Rules',
    metaDescription: 'Photographing Kailasa Temple at Ellora Cave 16: courtyard and facade angles, upper rock-cut details, light through the day and which rules to confirm with ASI.',
    h1: 'Kailasa Temple Photography Guide',
    kicker: 'Visitor information · Ellora Cave 16',
    lead: 'The monument rewards slow framing: a wide courtyard view, the vertical rock-cut facades and the sculpted panels each need a different position and light.',
    sections: [
      {
        heading: 'What the published photograph shows',
        paragraphs: [
          'The photograph used across this site is a 2016 image by Ms Sarah Welch, cropped to the upper 3264 × 1200 area of the original 3264 × 2448 frame. It shows historical upper architectural detail, not the full monument and not evidence of present-day conditions.',
          'The crop deliberately excludes the lower visitor areas. Derivatives retain CC BY-SA 4.0; photographer credit does not imply endorsement or grant additional subject rights. The original published images are kept unchanged.'
        ]
      },
      {
        heading: 'Angles worth planning for',
        paragraphs: [
          'Work from the general to the specific rather than repeating one wide frame. Because the temple was excavated from a single rock mass, the depth of the courtyard and the vertical faces are the strongest compositional features.'
        ],
        bullets: [
          'Courtyard: step back to include the full excavated volume and the surrounding rock walls.',
          'Upper facades: the cropped historical photograph shows how strongly the upper carved storeys read against the sky.',
          'Sculpted panels: UNESCO singles out the Ravana shaking Mount Kailasa scene; frame it as narrative relief, not as a historical record.',
          'Painted traces: UNESCO also notes painting remains on the ceiling of the front mandapa; check current viewing and photography conditions before attempting detail shots.'
        ]
      },
      {
        heading: 'Light, rules and respect',
        paragraphs: [
          'Oblique light early or late in the day tends to reveal carving depth better than flat midday sun, but the ASI sunrise-to-sunset visiting window sets the limits. Do not plan shots outside permitted admission hours.',
          'Confirm current rules on tripods, professional equipment, commercial filming, flash and drones with ASI. This guide grants no permission. Respect worshippers, keep out of closed areas, and never touch or climb carvings.'
        ],
        note: 'Photography conditions and restrictions change; verify on site. Reviewed 9 November 2026.'
      }
    ],
    faqs: [
      { q: 'Are drones allowed at Kailasa Temple?', a: 'Do not assume so. Confirm current drone, tripod and professional-equipment rules with ASI; this guide cannot grant permission.' },
      { q: 'When is the best light?', a: 'Softer oblique light near the start or end of the visiting window generally shows relief better, but opening hours and local rules take priority.' },
      { q: 'Can I use the photos on this site?', a: 'The historical photograph is a CC BY-SA 4.0 derivative with its own credit and licence terms. Check the photograph and licence section on the home page before any reuse.' }
    ],
    related: ['sculptures', 'ravana-sculpture', 'architecture', 'best-time-to-visit', 'visitor-guide']
  },
  {
    slug: 'family-guide',
    group: 'visit',
    kind: 'guide',
    metaTitle: 'Visiting Kailasa Temple with Children | Ellora Family Guide',
    metaDescription: 'A family guide to Kailasa Temple (Ellora Cave 16): steps and stone surfaces, heat and sun, rest breaks, water, stroller limits and questions to ask ASI.',
    h1: 'Visiting Kailasa Temple with Children',
    kicker: 'Visitor information · Ellora Cave 16',
    lead: 'Children usually cope well with a short, paced visit. The challenges are practical: steps, hot or wet stone, sun exposure and limited shade.',
    sections: [
      {
        heading: 'Surfaces and movement',
        paragraphs: [
          'This is an excavated stone monument inside a large protected complex. Expect steps, uneven surfaces and changes in level. A route described as lower-effort is not evidence of a step-free path.',
          'For a stroller or a child who needs carrying, ask ASI about the current entrance route, gradients, closed areas and available assistance before setting out. This guide has not carried out an accessibility inspection.'
        ]
      },
      {
        heading: 'Heat, water and breaks',
        paragraphs: [
          'Open stone surfaces can be hot in the pre-monsoon months and slippery during the monsoon. Plan shorter walking stretches, shaded rests and a realistic finish time inside the sunrise-to-sunset window.'
        ],
        bullets: [
          'Carry drinking water and sun protection for every family member.',
          'Use footwear with grip rather than smooth soles.',
          'Build in rest stops instead of trying to cover the whole ensemble.',
          'Confirm current toilet and drinking-water facilities with ASI; they are not verified here.'
        ]
      },
      {
        heading: 'Behaviour around a religious monument',
        paragraphs: [
          'Kailasa is dedicated to Shiva and remains a place of religious significance. Explain to children that carved panels are not climbing surfaces and that worshippers should not be photographed without consideration. Temporary restrictions can also apply to specific areas.',
          'ASI lists free entry for children below 15; confirm the eligibility rules and identification requirements in the official ticket system.'
        ],
        note: 'Reviewed 9 November 2026. Facilities, routes and rules must be confirmed with ASI on the day.'
      }
    ],
    faqs: [
      { q: 'Is Kailasa Temple suitable for a stroller?', a: 'No step-free route has been verified here. Ask ASI about the current entrance route, gradients and assistance before bringing a stroller.' },
      { q: 'Do children pay for entry?', a: 'The ASI listing consulted on 29 October 2026 lists free entry for children below 15. Confirm eligibility and identification in the official ticket system.' },
      { q: 'How long should a family visit take?', a: 'Keep it short and paced. See the one-hour itinerary for a Cave 16-focused plan, and add time for rests and admission.' }
    ],
    related: ['accessibility', 'visitor-guide', 'one-hour-itinerary', 'monsoon-visit', 'opening-hours']
  },
  {
    slug: 'accessibility',
    group: 'visit',
    kind: 'guide',
    metaTitle: 'Kailasa Temple Accessibility Guide | Steps & Access Limits',
    metaDescription: 'An honest accessibility guide to Kailasa Temple (Ellora Cave 16): what is known about steps, gradients and stone surfaces, and what must be confirmed with ASI.',
    h1: 'Kailasa Temple Accessibility Guide',
    kicker: 'Visitor information · Ellora Cave 16',
    lead: 'This guide does not claim that Kailasa Temple or the wider Ellora Caves are wheelchair accessible. It sets out what is known, what is unverified and what to ask before travelling.',
    sections: [
      {
        heading: 'What is and is not established',
        paragraphs: [
          'Kailasa is an excavated stone monument in a large protected complex. Steps, changes in level, uneven rock surfaces and, in wet weather, slippery ground should be expected rather than ruled out.',
          'A Google Maps “accessible entrance” listing is not an accessibility inspection of every cave, passage or terrace. UNESCO’s property reference coordinate of 20.02639, 75.17917 is not a verified ticket counter, pickup point or surveyed Cave 16 entrance.'
        ],
        note: 'No on-site accessibility survey has been carried out by this independent guide. Reviewed 9 November 2026.'
      },
      {
        heading: 'Questions to put to ASI',
        paragraphs: [
          'Because routes and closures change, the most useful preparation is a short list of specific questions rather than a generic assumption that assistance exists.'
        ],
        bullets: [
          'Which entrance route is currently usable for a wheelchair or walking aid, and what gradients does it involve?',
          'Are any areas of Cave 16 closed for conservation at present?',
          'Is assistance available, and where should a vehicle drop off and wait?',
          'Which toilet and resting facilities are currently open?'
        ]
      },
      {
        heading: 'Planning around uncertainty',
        paragraphs: [
          'Choose a cooler part of the day, keep a companion available, and set a fallback plan if a route is closed. Do not treat a suggested lower-effort route as a guaranteed step-free path. Current shuttle, buggy or parking availability has not been verified here.'
        ]
      }
    ],
    faqs: [
      { q: 'Is Cave 16 wheelchair accessible?', a: 'No site inspection is claimed here, so this cannot be confirmed. Ask ASI about the current entrance route, gradients, assistance and closed areas.' },
      { q: 'Does Google Maps accessible-entrance data cover the caves?', a: 'No. A Maps listing is not a survey of every stone step, passage or cave within the property.' },
      { q: 'Is there a buggy or shuttle?', a: 'Current availability and charges are not verified by this guide. Confirm with ASI before relying on one.' }
    ],
    related: ['family-guide', 'visitor-guide', 'parking', 'how-to-reach', 'faq']
  },
  {
    slug: 'guided-tours',
    group: 'visit',
    kind: 'guide',
    metaTitle: 'Kailasa Temple Guided Tours | What to Check Before Booking',
    metaDescription: 'How to think about guided tours at Kailasa Temple (Ellora Cave 16): on-site guide arrangements, self-guided visits, and the questions to ask before paying anyone.',
    h1: 'Kailasa Temple Guided Tours',
    kicker: 'Visitor information · Ellora Cave 16',
    lead: 'A guide can help explain the rock-cut architecture and Shaiva sculpture, but this site does not publish or endorse guide services, prices or schedules.',
    sections: [
      {
        heading: 'Guided or self-guided',
        paragraphs: [
          'A self-guided visit works if you have read the basic history and know which parts of Cave 16 you want to see. A guided visit adds context about the Rashtrakuta period, excavation sequence and sculptural narratives that is easy to miss from a plaque alone.',
          'Neither option changes the admission rules. The ASI-listed entry covers the Ellora Caves property; guiding is a separate arrangement and should never be assumed to be included in the ticket.'
        ]
      },
      {
        heading: 'Questions before paying',
        paragraphs: [
          'This guide has not verified any individual guide, operator, language availability, meeting point, duration or fee. Treat any offer as a separate commercial arrangement and check the following.'
        ],
        bullets: [
          'Is the guide authorised or recognised by ASI for guiding inside the protected property?',
          'Which language is the tour actually delivered in, and how long does it run?',
          'Is the fee per person or per group, and what exactly does it include?',
          'Where is the agreed meeting point, given that a UNESCO property coordinate is not an entrance?'
        ],
        note: 'No operator names, ratings or prices are published here because they have not been independently verified.'
      },
      {
        heading: 'Getting context without a guide',
        paragraphs: [
          'The history and architecture pages on this site summarise the ASI and UNESCO record: Cave 16 within a 34-cave ensemble, attribution to Krishna I, monolithic excavation in Deccan Trap basalt, and the distinction between artistic narrative and documented history.'
        ]
      }
    ],
    faqs: [
      { q: 'Does the entry ticket include a guide?', a: 'Do not assume so. Admission to the Ellora Caves and any guiding service are separate; confirm with ASI or the official ticket service.' },
      { q: 'Are official guides available on site?', a: 'This guide has not verified current arrangements. Ask ASI directly about authorised guiding and current conditions.' },
      { q: 'Are audio guides available?', a: 'Availability, languages and charges are not verified here. Check with ASI before relying on one.' }
    ],
    related: ['history', 'architecture', 'visitor-guide', 'travel-services', 'tickets']
  },
  {
    slug: 'monsoon-visit',
    group: 'visit',
    kind: 'guide',
    metaTitle: 'Visiting Kailasa Temple During the Monsoon | Ellora',
    metaDescription: 'Monsoon visiting notes for Kailasa Temple (Ellora Cave 16): greener surroundings, wet stone, standing water, path restrictions and where to find official weather warnings.',
    h1: 'Visiting Kailasa Temple During the Monsoon',
    kicker: 'Visitor information · Ellora Cave 16',
    lead: 'The monsoon changes the landscape around Verul, but greenery does not imply dry surfaces, open paths or unrestricted access to the caves.',
    sections: [
      {
        heading: 'What changes in the wet season',
        paragraphs: [
          'Rain can make the surrounding scarp noticeably greener, which is part of the appeal for some visitors. At the same time, excavated stone surfaces, steps and open approaches can become wet or slippery, and low areas may hold water.',
          'ASI describes the Ellora scarp as nearly 2 km long, so a wet-weather visit involves more exposed walking than a single monument might suggest.'
        ]
      },
      {
        heading: 'Checks that matter more in the monsoon',
        paragraphs: [
          'A pleasant forecast is not evidence that a cave is open or a route is safe. Conservation work, temporary closures and local warnings can override the general ASI listing, which gives sunrise-to-sunset visiting and a weekly Tuesday closure.'
        ],
        bullets: [
          'Use the weather panel on the home page for a current regional model, not as an access or safety clearance.',
          'Rely on the India Meteorological Department for official warnings.',
          'Confirm current path closures and entry rules with ASI on the day.',
          'Wear footwear with grip and allow extra time for slower movement.'
        ]
      },
      {
        heading: 'Photography and pacing',
        paragraphs: [
          'Overcast light can be kind to carved detail, but protect equipment and avoid sheltering in closed or restricted areas. Keep the itinerary shorter than a dry-season plan, and do not extend photography beyond permitted admission hours.'
        ],
        note: 'Reviewed 9 November 2026. Seasonal notes are planning guidance, not a forecast or safety clearance.'
      }
    ],
    faqs: [
      { q: 'Is Kailasa Temple open during the monsoon?', a: 'The ASI listing gives sunrise-to-sunset visiting with a weekly Tuesday closure, but temporary restrictions can apply. Confirm current status with ASI before travelling.' },
      { q: 'Are the stone surfaces slippery?', a: 'Wet excavated stone and steps can be slippery. This guide has not surveyed current conditions; use grippy footwear and follow on-site instructions.' },
      { q: 'Where do I find official weather warnings?', a: 'Use the India Meteorological Department. The home-page weather panel is a regional model and is not an official warning or access clearance.' }
    ],
    related: ['best-time-to-visit', 'family-guide', 'accessibility', 'opening-hours', 'photography-guide']
  },
  {
    slug: 'faq',
    group: 'visit',
    kind: 'guide',
    metaTitle: 'Kailasa Temple FAQ | Ellora Cave 16 Visitor Questions',
    metaDescription: 'Answers to common Kailasa Temple questions: which cave it is, weekly closure, entry fees, coordinates, accessibility, photography rules and where to verify current details.',
    h1: 'Kailasa Temple Frequently Asked Questions',
    kicker: 'Visitor information · Ellora Cave 16',
    lead: 'Short answers to the questions visitors most often ask, with clear pointers to the pages that go into detail and to the authorities that hold current information.',
    sections: [
      {
        heading: 'Identity and location',
        paragraphs: [
          'Kailasa Temple is Cave 16 of the Ellora Caves near Verul, Maharashtra. It is a monolithic rock-cut temple dedicated to Shiva, attributed by ASI to the Rashtrakuta ruler Krishna I. The 1983 UNESCO inscription covers the Ellora property, not a separate listing for Cave 16.',
          'The published address reference is Ellora, Verul, Maharashtra 431102, India. UNESCO’s 20.02639, 75.17917 is a property reference point, not a ticket counter or surveyed entrance.'
        ]
      },
      {
        heading: 'Admission and timing',
        paragraphs: [
          'ASI lists sunrise-to-sunset visiting and a weekly Tuesday closure, with category-based admission for the Ellora Caves and free entry for children below 15. Confirm current rates, eligibility and temporary closures in the official ticket system.',
          'For deeper detail see the tickets, opening hours and visitor guide pages. This guide does not sell tickets and does not monitor live gate status.'
        ]
      },
      {
        heading: 'Access, conduct and current conditions',
        paragraphs: [
          'No full accessibility inspection is claimed here; ask ASI about routes, gradients and assistance. Confirm photography, tripod and drone rules with ASI as well. Respect worshippers, stay out of closed areas and never touch carvings.',
          'Google Maps review figures shown on this site are a dated manual snapshot of a third-party listing, not reviews collected here. Rights remain with the original authors and Google.'
        ],
        note: 'Reviewed 9 November 2026 against the ASI listing consulted 29 October 2026.'
      }
    ],
    faqs: [
      { q: 'Which cave is Kailasa Temple?', a: 'Cave 16 of the Ellora Caves. The UNESCO World Heritage inscription covers the whole ensemble.' },
      { q: 'What does it cost to enter?', a: 'ASI lists category-based Ellora Caves admission, with free entry for children below 15. Check current amounts in the official ticket service.' },
      { q: 'Is the site open every day?', a: 'ASI lists a weekly Tuesday closure and sunrise-to-sunset visiting. Temporary restrictions can override that listing.' },
      { q: 'Can I trust the Google Maps rating shown here?', a: 'It is a dated manual snapshot of a third-party listing, not site-collected or automatically updated. Open the original listing for current figures.' }
    ],
    related: ['visitor-guide', 'tickets', 'opening-hours', 'how-to-reach', 'accessibility']
  },

  // ── B. History, architecture & culture (8) ────────────────────────────────
  {
    slug: 'history',
    group: 'culture',
    kind: 'guide',
    metaTitle: 'History of Kailasa Temple | Rashtrakuta & Cave 16 Timeline',
    metaDescription: 'A source-based history of Kailasa Temple (Ellora Cave 16): ASI’s attribution to Krishna I, UNESCO’s wider cave chronology, the three traditions and the 1983 inscription.',
    h1: 'History of Kailasa Temple',
    kicker: 'History & architecture · Ellora Cave 16',
    lead: 'The history of Kailasa is best told in layers: the Ellora ensemble, the Brahmanical cave group, and one 8th-century monolithic temple attributed to the Rashtrakuta court.',
    sections: [
      {
        heading: 'A temple inside a larger ensemble',
        paragraphs: [
          'UNESCO describes 34 caves at Ellora associated with Buddhist, Brahmanical and Jain traditions, and inscribed the Ellora Caves as a World Heritage property in 1983. Kailasa is Cave 16, one monument among them, not a name for the whole group.',
          'ASI also notes that Ellora, unlike Ajanta, was never lost to oblivion and that records by earlier travellers exist. That continuous visibility is part of why the site has a long documented reception history.'
        ]
      },
      {
        heading: 'Attribution and chronology',
        paragraphs: [
          'ASI attributes Kailasa to the Rashtrakuta king Krishna I, approximately 757–783. UNESCO gives a broader 7th–10th-century range for the Brahmanical group as a whole, Caves 13–29. A group-wide chronology is not a precise date for every stage of this single monument.',
          'It is therefore more accurate to speak of an 8th-century Rashtrakuta attribution than of a fully documented construction start and completion year.'
        ],
        bullets: [
          'ASI: Cave 16 attributed to Krishna I (c. 757–783).',
          'UNESCO: Brahmanical Caves 13–29 span roughly the 7th–10th centuries.',
          'UNESCO: 1983 World Heritage inscription of the Ellora Caves property.',
          'ASI: the rock is Deccan Trap basalt; the monument is excavated, not assembled.'
        ]
      },
      {
        heading: 'History, art and legend kept apart',
        paragraphs: [
          'The sculptural scene of Ravana attempting to lift Mount Kailasa is an artistic expression of a Shaiva narrative, not evidence of a literal event. Religious stories belong in the cultural interpretation of the monument; dynastic attribution and chronology belong in its documented history.',
          'This guide also avoids unverified engineering figures such as exact tonnage of removed rock, a fixed number of construction years or a claimed workforce size, because those are not established in the sources reviewed.'
        ],
        note: 'Sources: ASI Ellora Caves page (consulted 29 October 2026) and the UNESCO Ellora Caves property record. Reviewed 9 November 2026.'
      }
    ],
    faqs: [
      { q: 'Who built Kailasa Temple?', a: 'ASI attributes it to the Rashtrakuta ruler Krishna I, approximately 757–783. The attribution is to a reign, not a fully documented construction schedule.' },
      { q: 'How old is Kailasa Temple?', a: 'It is generally placed in the 8th century under the Rashtrakutas. UNESCO dates the wider Brahmanical cave group more broadly to the 7th–10th centuries.' },
      { q: 'Was Ellora rediscovered like Ajanta?', a: 'No. ASI states that Ellora was never lost to oblivion and notes records of earlier travellers.' }
    ],
    related: ['rashtrakuta-dynasty', 'architecture', 'how-was-it-built', 'unesco-heritage', 'sculptures']
  },
  {
    slug: 'architecture',
    group: 'culture',
    kind: 'guide',
    metaTitle: 'Kailasa Temple Architecture Explained | Rock-Cut Cave 16',
    metaDescription: 'How Kailasa Temple (Ellora Cave 16) is structured: monolithic excavation in Deccan Trap basalt, courtyard, front mandapa, sanctuary, carved storeys and sculpted panels.',
    h1: 'Kailasa Temple Architecture Explained',
    kicker: 'History & architecture · Ellora Cave 16',
    lead: 'The defining fact is structural: Kailasa was revealed by removing rock, not by stacking stone. Almost every other feature of the building follows from that decision.',
    sections: [
      {
        heading: 'Monolithic excavation',
        paragraphs: [
          'ASI identifies Ellora’s rock as Deccan Trap basalt. In a monolithic excavation, the surrounding rock is cut away so that architectural forms remain standing from the living rock, rather than being assembled from separate blocks.',
          'This distinction explains why the temple reads as a solid volume carved out of a pit: the courtyard, walls and shrine belong to the same rock mass. It also explains why the vertical faces and upper storeys are so prominent in photographs.'
        ]
      },
      {
        heading: 'Reading the plan',
        paragraphs: [
          'A useful way to understand the monument is to move from the entrance through a courtyard toward the sanctuary, while noticing how carved storeys and sculptural panels articulate the vertical faces. UNESCO specifically notes painting traces on the ceiling of the front mandapa and highlights the Ravana shaking Mount Kailasa sculpture.',
          'This guide avoids precise, unverified dimensions. For the current condition of individual areas, and for which parts may be closed for conservation, check with ASI.'
        ],
        bullets: [
          'Courtyard: the open volume left by excavation, framed by rock walls.',
          'Upper carved facades: the architectural storeys visible in the historical upper-detail photograph used on this site.',
          'Front mandapa: UNESCO records painting traces on its ceiling.',
          'Sculpted panels: Shaiva narrative reliefs integrated into the architecture, not applied decoration.'
        ]
      },
      {
        heading: 'Why it differs from a Buddhist chaitya',
        paragraphs: [
          'Compare Cave 16 with the Buddhist chaitya at Cave 10: one is a freestanding temple excavated from a rock mass with an open courtyard, the other a worship hall organised around an interior stupa. Both are rock-cut, but they solve very different spatial and ritual problems.'
        ],
        note: 'Architectural description follows ASI and UNESCO material; no on-site measured survey is claimed. Reviewed 9 November 2026.'
      }
    ],
    faqs: [
      { q: 'Is Kailasa Temple built or carved?', a: 'It is carved: a monolithic excavation in Deccan Trap basalt, where rock is removed to leave the architecture standing.' },
      { q: 'Is the temple the same as the whole Ellora complex?', a: 'No. It is Cave 16 within the Ellora Caves, a UNESCO property inscribed in 1983.' },
      { q: 'Are there surviving paintings?', a: 'UNESCO notes traces of painting on the ceiling of the front mandapa. Current viewing conditions should be confirmed with ASI.' }
    ],
    related: ['how-was-it-built', 'history', 'sculptures', 'nearby/ellora-cave-10', 'photography-guide']
  },
  {
    slug: 'how-was-it-built',
    group: 'culture',
    kind: 'guide',
    metaTitle: 'How Was Kailasa Temple Built? | Evidence vs Popular Claims',
    metaDescription: 'What is actually known about how Kailasa Temple (Ellora Cave 16) was excavated, and why popular claims about tonnage, workforce and construction time should be treated cautiously.',
    h1: 'How Was Kailasa Temple Built?',
    kicker: 'History & architecture · Ellora Cave 16',
    lead: 'The honest answer separates three things: what the rock shows, what scholars infer about the excavation sequence, and what circulates online without a reliable source.',
    sections: [
      {
        heading: 'What the monument itself establishes',
        paragraphs: [
          'ASI identifies the rock as Deccan Trap basalt, and the monument as a monolithic excavation: rock was removed to leave a courtyard, walls and shrine standing from the living mass. That much is visible in the fabric of the site.',
          'Because the temple and its courtyard are part of the same rock body, the builders had to plan the final void and the final solid volume together. There was no opportunity to add a missing wing later.'
        ]
      },
      {
        heading: 'What is inferred',
        paragraphs: [
          'A common scholarly explanation is top-down excavation: working from the upper levels downward so that the highest carvings were finished first, with waste rock removed as the pit deepened. This is a widely discussed interpretation of the sequence, not a signed contemporary construction manual.',
          'Tool marks, unfinished areas and comparisons with other Ellora excavations are the kinds of evidence used to discuss method. Conclusions about the exact order of work remain interpretive.'
        ]
      },
      {
        heading: 'Claims this guide does not make',
        paragraphs: [
          'Popular accounts often quote a fixed tonnage of removed rock, a precise number of construction years, a named architect or an exact workforce. Those figures are not established in the ASI or UNESCO material reviewed here, so they are not presented as facts on this site.',
          'Likewise, a group-wide date range for the Brahmanical caves is not a precise date for Cave 16, and a religious narrative is not a construction record.'
        ],
        note: 'Reviewed 9 November 2026. Sources: ASI Ellora Caves page (consulted 29 October 2026) and the UNESCO Ellora Caves property record.'
      }
    ],
    faqs: [
      { q: 'Was it carved from the top down?', a: 'Top-down excavation is a common interpretation of the sequence, consistent with a monolithic rock-cut monument. It is an inference from the fabric, not a documented contemporary plan.' },
      { q: 'How many tonnes of rock were removed?', a: 'No reliable figure is established in the sources reviewed here, so this guide does not publish one.' },
      { q: 'How long did construction take?', a: 'A precise duration is not documented in the ASI or UNESCO material reviewed. ASI’s attribution is to the reign of Krishna I, not to a fixed build schedule.' }
    ],
    related: ['architecture', 'history', 'rashtrakuta-dynasty', 'sculptures', 'unesco-heritage']
  },
  {
    slug: 'rashtrakuta-dynasty',
    group: 'culture',
    kind: 'guide',
    metaTitle: 'Kailasa Temple & the Rashtrakuta Dynasty | Krishna I',
    metaDescription: 'The Rashtrakuta context of Kailasa Temple (Ellora Cave 16): ASI’s attribution to Krishna I (c. 757–783), the Deccan setting and the wider Brahmanical cave group.',
    h1: 'Kailasa Temple and the Rashtrakuta Dynasty',
    kicker: 'History & architecture · Ellora Cave 16',
    lead: 'ASI places Cave 16 under the Rashtrakuta ruler Krishna I, roughly 757–783. Understanding that attribution means understanding a dynasty, a region and a group of caves.',
    sections: [
      {
        heading: 'The ASI attribution',
        paragraphs: [
          'The Archaeological Survey of India attributes Kailasa to Krishna I, approximately 757–783, of the Rashtrakuta dynasty. The attribution is dynastic and regnal: it identifies the political context in which the monument is generally placed, rather than a complete building archive.',
          'UNESCO gives a wider 7th–10th-century span for the Brahmanical caves (Caves 13–29). Cave 16 therefore belongs to a longer sequence of rock-cut activity at Ellora, not an isolated project.'
        ]
      },
      {
        heading: 'A Deccan rock-cut tradition',
        paragraphs: [
          'The Rashtrakutas ruled across large parts of the Deccan in the 8th–10th centuries. Rock-cut architecture in basalt was an established regional technique, and Ellora already contained Buddhist and Brahmanical excavations. Kailasa represents an ambitious development of that tradition rather than an inexplicable outlier.',
          'ASI identifies the rock as Deccan Trap basalt; the choice of a single rock mass for a complete temple is what makes Cave 16 exceptional within the ensemble.'
        ]
      },
      {
        heading: 'Reading the context on site',
        paragraphs: [
          'Comparing Cave 16 with the nearby Dashavatara Cave (Cave 15) and other Brahmanical caves helps show the range of plans and sculptural programmes in the group. Inscriptions and attributions should be read through ASI and UNESCO material rather than through unsourced retellings.',
          'This guide does not present dynastic chronology as a precise construction timeline, and it does not treat later legend as court history.'
        ],
        note: 'Reviewed 9 November 2026. Sources: ASI Ellora Caves page (consulted 29 October 2026) and UNESCO Ellora Caves property record.'
      }
    ],
    faqs: [
      { q: 'Which ruler is linked to Kailasa Temple?', a: 'ASI attributes the monument to the Rashtrakuta king Krishna I, approximately 757–783.' },
      { q: 'Did the Rashtrakutas build all the Ellora caves?', a: 'No. UNESCO describes caves associated with Buddhist, Brahmanical and Jain traditions across a long chronology; the Rashtrakuta attribution is specifically to Cave 16.' },
      { q: 'Was Kailasa a capital-city project?', a: 'The sources reviewed here do not establish that level of detail. This guide stays with the dynastic attribution and the wider cave chronology.' }
    ],
    related: ['history', 'architecture', 'nearby/ellora-cave-15', 'sculptures', 'how-was-it-built']
  },
  {
    slug: 'sculptures',
    group: 'culture',
    kind: 'guide',
    metaTitle: 'Sculptures & Carvings of Kailasa Temple | Cave 16 Art',
    metaDescription: 'A guide to the sculptural programme of Kailasa Temple (Ellora Cave 16): Shaiva narrative panels, the Ravana scene, carved facades and UNESCO-noted painting traces.',
    h1: 'Sculptures and Carvings of Kailasa Temple',
    kicker: 'History & architecture · Ellora Cave 16',
    lead: 'The carving is not applied ornament. In a monolithic excavation, sculptural panels and architectural faces are cut from the same rock mass as the shrine itself.',
    sections: [
      {
        heading: 'Subjects and where to look',
        paragraphs: [
          'The temple is dedicated to Shiva, and its sculptural programme draws on Shaiva narratives. UNESCO singles out the panel showing Ravana attempting to lift Mount Kailasa, one of the best-known scenes at the site.',
          'The upper carved facades are visible in the 2016 historical photograph used on this site, which is cropped to the upper architectural detail rather than the whole monument.'
        ],
        bullets: [
          'Narrative relief panels: episodes from Shaiva tradition, carved into the architecture.',
          'Upper facades: carved architectural storeys that read as built forms but are rock-cut.',
          'Front mandapa ceiling: UNESCO records traces of painting.',
          'Courtyard faces: sculpture and architecture share one continuous rock surface.'
        ]
      },
      {
        heading: 'Art is not a chronicle',
        paragraphs: [
          'A relief of Ravana shaking Mount Kailasa is an artistic treatment of a religious story. It should be read as iconography and devotional expression, not as evidence that an event took place or as a dated construction record.',
          'This guide also avoids detailed identifications of every figure where the sources reviewed do not support them. For a fuller reading, the ASI and UNESCO records are the appropriate starting points.'
        ]
      },
      {
        heading: 'Looking responsibly',
        paragraphs: [
          'Never touch, lean on or climb carved surfaces, and keep out of closed areas. Check current photography rules with ASI before using a tripod or close-up lighting, and be considerate of worshippers at a living religious monument.'
        ],
        note: 'Reviewed 9 November 2026. Sources: UNESCO Ellora Caves property record and the ASI Ellora Caves page.'
      }
    ],
    faqs: [
      { q: 'What is the most famous sculpture at Cave 16?', a: 'UNESCO specifically highlights the scene of Ravana attempting to lift Mount Kailasa.' },
      { q: 'Are there paintings inside the temple?', a: 'UNESCO notes traces of painting on the ceiling of the front mandapa. Current viewing conditions should be confirmed with ASI.' },
      { q: 'Can visitors touch the carvings?', a: 'No. Avoid touching or climbing carvings, respect religious imagery and stay out of closed areas.' }
    ],
    related: ['ravana-sculpture', 'shiva-symbolism', 'architecture', 'photography-guide', 'history']
  },
  {
    slug: 'shiva-symbolism',
    group: 'culture',
    kind: 'guide',
    metaTitle: 'Shiva & the Religious Meaning of Kailasa Temple',
    metaDescription: 'Why Kailasa Temple (Ellora Cave 16) is dedicated to Shiva: Mount Kailasa imagery, Shaiva narrative art, worship and the difference between religious meaning and history.',
    h1: 'Shiva and the Religious Meaning of Kailasa Temple',
    kicker: 'History & architecture · Ellora Cave 16',
    lead: 'The name, the dedication and much of the sculptural programme point to Shiva. Understanding that meaning helps explain the building, provided it is not confused with documented history.',
    sections: [
      {
        heading: 'Name, mountain and dedication',
        paragraphs: [
          'Kailasa refers to the sacred mountain associated with Shiva in Hindu tradition. A temple carrying that name, excavated as a monumental rock-cut form, gives architectural shape to a religious idea of a divine abode.',
          'The monument is dedicated to Shiva, and its sculptural programme draws on Shaiva narratives. ASI attributes the temple to the Rashtrakuta ruler Krishna I in the 8th century; that is a historical attribution, separate from the religious meaning of the name.'
        ]
      },
      {
        heading: 'Narrative art and devotion',
        paragraphs: [
          'The relief of Ravana attempting to lift Mount Kailasa, highlighted by UNESCO, is a theological and artistic image: it expresses Shiva’s power within a Shaiva story. Reading it as a literal historical event would be a category error.',
          'For visitors, this means two valid but different readings can coexist: an art-historical reading of carving, style and patronage, and a devotional reading of the same panels. This independent guide takes the first approach and treats the second with respect.'
        ]
      },
      {
        heading: 'Conduct at a living religious monument',
        paragraphs: [
          'Kailasa is part of an ASI-managed protected property and remains a place of religious significance. Dress and behaviour should be considerate, worshippers should not be treated as photographic subjects, and current rules on photography, footwear and restricted areas should be confirmed with ASI.',
          'Do not assume that arrangements at a nearby active temple such as Grishneshwar apply here, or vice versa: they have separate rules.'
        ],
        note: 'Reviewed 9 November 2026. Religious interpretation here is descriptive, not devotional instruction.'
      }
    ],
    faqs: [
      { q: 'Is Kailasa Temple dedicated to Shiva?', a: 'Yes. It is a rock-cut temple dedicated to Shiva, and its sculptural programme draws on Shaiva narratives.' },
      { q: 'Is the Ravana story historical?', a: 'It is a religious narrative expressed in sculpture, not evidence of a literal event. This guide keeps religious meaning and documented history distinct.' },
      { q: 'Are there dress or worship rules?', a: 'Confirm current rules with ASI. This is a protected archaeological monument with religious significance; be considerate of worshippers.' }
    ],
    related: ['ravana-sculpture', 'sculptures', 'history', 'nearby/grishneshwar-temple', 'visitor-guide']
  },
  {
    slug: 'ravana-sculpture',
    group: 'culture',
    kind: 'guide',
    metaTitle: 'Ravana Shaking Mount Kailasa Sculpture | Ellora Cave 16',
    metaDescription: 'The Ravana shaking Mount Kailasa panel at Kailasa Temple (Ellora Cave 16): what UNESCO says about it, how to read the Shaiva narrative and why it is art, not history.',
    h1: 'Ravana Shaking Mount Kailasa Sculpture',
    kicker: 'History & architecture · Ellora Cave 16',
    lead: 'UNESCO singles out this relief when describing the Ellora Caves. It is one of the most recognisable sculptural images at Cave 16 and a good example of narrative carving.',
    sections: [
      {
        heading: 'What the panel depicts',
        paragraphs: [
          'The scene shows Ravana attempting to lift or shake Mount Kailasa, the abode of Shiva. In the Shaiva narrative the mountain is steadied by Shiva, and the episode becomes an image of divine power rather than a record of a battle.',
          'UNESCO highlights this sculpture in its description of the property, which is why it is a reliable starting point for interpreting Cave 16’s sculptural programme.'
        ]
      },
      {
        heading: 'How to read it as rock-cut art',
        paragraphs: [
          'In a monolithic excavation, a narrative panel is carved from the same basalt mass as the surrounding architecture. Composition, depth of relief and the framing of figures all have to be resolved before the surrounding rock is removed.',
          'Compare the panel with the carved upper facades shown in the historical photograph on this site: both depend on controlling depth across a continuous rock surface.'
        ]
      },
      {
        heading: 'Art, legend and evidence',
        paragraphs: [
          'Religious narrative and documented history answer different questions. The panel tells us about Shaiva imagery and the ambitions of the sculptural programme; it does not establish a literal event or a construction date.',
          'Look responsibly: do not touch or climb carvings, stay out of closed areas, and confirm current photography conditions with ASI.'
        ],
        note: 'Reviewed 9 November 2026. Primary reference: the UNESCO Ellora Caves property record.'
      }
    ],
    faqs: [
      { q: 'Where is the Ravana panel?', a: 'It is part of the sculptural programme of Kailasa Temple, Cave 16, at the Ellora Caves. Confirm which areas are currently open with ASI.' },
      { q: 'Why is this sculpture singled out by UNESCO?', a: 'UNESCO specifically mentions the scene of Ravana attempting to lift Mount Kailasa in its description of the property’s artistic significance.' },
      { q: 'Does the panel show a real event?', a: 'No. It is an artistic expression of a Shaiva narrative, not evidence of a literal historical event.' }
    ],
    related: ['sculptures', 'shiva-symbolism', 'architecture', 'history', 'photography-guide']
  },
  {
    slug: 'unesco-heritage',
    group: 'culture',
    kind: 'guide',
    metaTitle: 'Kailasa Temple & the Ellora UNESCO World Heritage Site',
    metaDescription: 'What the 1983 UNESCO inscription actually covers: the Ellora Caves property, its Buddhist, Brahmanical and Jain caves, and where Cave 16 fits within it.',
    h1: 'Kailasa Temple and the Ellora UNESCO World Heritage Site',
    kicker: 'History & architecture · Ellora Cave 16',
    lead: 'The World Heritage listing is for the Ellora Caves property. Kailasa Temple is Cave 16 within it, not a separate UNESCO inscription of its own.',
    sections: [
      {
        heading: 'What was inscribed',
        paragraphs: [
          'UNESCO inscribed the Ellora Caves on the World Heritage List in 1983. The property encompasses caves associated with Buddhist, Brahmanical and Jain traditions; UNESCO describes 34 caves in its account of the ensemble.',
          'That scope matters. Saying “Kailasa Temple is a UNESCO World Heritage Site” is a convenient shorthand, but the precise statement is that Cave 16 forms part of the inscribed Ellora Caves property.'
        ]
      },
      {
        heading: 'Why the ensemble matters',
        paragraphs: [
          'The coexistence of Buddhist chaityas, Brahmanical rock-cut temples and Jain caves at one site is central to the property’s significance. Comparing Cave 16 with Cave 10, Cave 21, Cave 29 or the Indra Sabha (Cave 32) shows the range that the inscription protects.',
          'UNESCO’s property reference point, 20.02639, 75.17917, identifies the ensemble. It is not a ticket counter, a drop-off point or a surveyed entrance to Cave 16.'
        ]
      },
      {
        heading: 'Conservation and visitor responsibility',
        paragraphs: [
          'A protected property is managed under conservation rules that can restrict individual caves or routes. ASI is the managing authority for the site, and its listing gives sunrise-to-sunset visiting with a weekly Tuesday closure. Temporary conservation work can override the general listing.',
          'Visitors help protect the property by staying out of closed areas, not touching carved surfaces and following current ASI instructions. This independent guide is separate from ASI, UNESCO and temple management.'
        ],
        note: 'Reviewed 9 November 2026. Sources: UNESCO Ellora Caves property record and ASI Ellora Caves page (consulted 29 October 2026).'
      }
    ],
    faqs: [
      { q: 'Is Kailasa Temple separately UNESCO-listed?', a: 'No. The 1983 inscription covers the Ellora Caves property; Kailasa is Cave 16 within that property.' },
      { q: 'How many caves are at Ellora?', a: 'UNESCO describes 34 caves associated with Buddhist, Brahmanical and Jain traditions.' },
      { q: 'Is the UNESCO coordinate the temple entrance?', a: 'No. 20.02639, 75.17917 is a property reference point, not a verified gate or ticket counter.' }
    ],
    related: ['history', 'architecture', 'nearby/ellora-cave-10', 'nearby/indra-sabha', 'visitor-guide']
  },

  // ── C. Transport, routes & itineraries (8) ────────────────────────────────
  {
    slug: 'how-to-reach',
    group: 'routes',
    kind: 'guide',
    metaTitle: 'How to Reach Kailasa Temple | Ellora Cave 16 Directions',
    metaDescription: 'How to reach Kailasa Temple (Ellora Cave 16) near Verul: the Sambhajinagar / Aurangabad gateway, transport options and the checks to make before travelling.',
    h1: 'How to Reach Kailasa Temple',
    kicker: 'Transport & itineraries · Ellora Cave 16',
    lead: 'Kailasa Temple is Cave 16 at the Ellora Caves, near Verul, Maharashtra 431102. Most visits are staged through Chhatrapati Sambhajinagar, still widely called Aurangabad.',
    sections: [
      {
        heading: 'Where the site sits',
        paragraphs: [
          'ASI places the Ellora complex roughly 30 km north-northwest of the city it calls Aurangabad; the same city is now also referred to as Chhatrapati Sambhajinagar. The published address reference for the site is Ellora, Verul, Maharashtra 431102, India.',
          'That city-versus-village distinction matters when booking transport: Verul/Ellora is the destination, while Sambhajinagar is the usual regional gateway with the wider range of services.'
        ]
      },
      {
        heading: 'Choosing a way in',
        paragraphs: [
          'This guide does not publish unverified bus numbers, timetables, taxi fares or shuttle schedules. Whatever mode you choose, agree the outward and return route, the vehicle, waiting time and the meeting point in advance.',
          'Opening the verified Google Maps link for Kailasa Temple opens Google’s separate service. Directions may not account for rock steps, closed paths or current conservation work, so treat the map as a starting point rather than a site plan.'
        ],
        bullets: [
          'From the city: see the Chhatrapati Sambhajinagar guide.',
          'By air: see the airport connection guide.',
          'By rail: see the railway station guide.',
          'By car or taxi: see the parking and drop-off guide.'
        ]
      },
      {
        heading: 'One coordinate is not a meeting point',
        paragraphs: [
          'UNESCO’s 20.02639, 75.17917 is a reference point for the whole property, not a surveyed Cave 16 entrance. Agree on the actual gate and the route inside the complex before anyone waits for anyone else.',
          'ASI describes the scarp as nearly 2 km long, so allow for internal walking as well as the drive.'
        ],
        note: 'Reviewed 9 November 2026. Distances, services and routes must be confirmed locally; no on-site travel survey is claimed.'
      }
    ],
    faqs: [
      { q: 'What is the nearest city to Kailasa Temple?', a: 'Chhatrapati Sambhajinagar (also called Aurangabad) is the usual regional gateway; ASI places the complex roughly 30 km north-northwest of that city.' },
      { q: 'Is there a direct train or bus to the caves?', a: 'This guide does not publish unverified route numbers or timetables. Check current services locally and see the railway station and travel services pages.' },
      { q: 'Can I use the UNESCO coordinate as a meeting point?', a: 'No. It is a property reference point, not a verified entrance or ticket counter. Agree on the real gate in advance.' }
    ],
    related: ['from-sambhajinagar', 'from-airport', 'from-railway-station', 'parking', 'travel-services']
  },
  {
    slug: 'from-sambhajinagar',
    group: 'routes',
    kind: 'guide',
    metaTitle: 'Chhatrapati Sambhajinagar to Kailasa Temple | Ellora Trip',
    metaDescription: 'Planning the trip from Chhatrapati Sambhajinagar (Aurangabad) to Kailasa Temple and the Ellora Caves: route, return travel, waiting charges and same-day combinations.',
    h1: 'Chhatrapati Sambhajinagar to Kailasa Temple',
    kicker: 'Transport & itineraries · Ellora Cave 16',
    lead: 'The city long known as Aurangabad and now also called Chhatrapati Sambhajinagar is the practical base for a day trip to the Ellora Caves.',
    sections: [
      {
        heading: 'Two names, one gateway',
        paragraphs: [
          'ASI’s Ellora page uses the older Aurangabad name and places the complex about 30 km north-northwest of the city. Travel bookings, maps and hotel listings may use either name, so confirm you are looking at the same place.',
          'Kailasa Temple is Cave 16 inside the Ellora Caves property; asking a driver for “Ellora” or “Verul” is usually clearer than asking for a single cave number.'
        ]
      },
      {
        heading: 'Arranging the day',
        paragraphs: [
          'Fix the outward route, the return route, the vehicle, the waiting arrangement and the charge before departure. A one-way drop can leave you dependent on whatever is available at the site. This guide does not publish taxi fares or bus numbers because they have not been independently verified.',
          'Check the ASI sunrise-to-sunset window and the weekly Tuesday closure first, then work backwards to a departure time. Include admission, the walk inside the property and any other caves in the schedule.'
        ]
      },
      {
        heading: 'Combining regional stops',
        paragraphs: [
          'Travellers sometimes pair Ellora with Daulatabad Fort or Bibi Ka Maqbara. Each is a separate destination with its own travel, admission and timing; a list of nearby places is not a claim that they are within walking distance or that all fit comfortably in one day.',
          'Confirm current opening and ticket arrangements for each stop independently. See the parking guide for drop-off considerations at Ellora.'
        ],
        note: 'Reviewed 9 November 2026. Distances, fares and timetables are not published here because they are not independently verified.'
      }
    ],
    faqs: [
      { q: 'How far is Ellora from Chhatrapati Sambhajinagar?', a: 'ASI describes the complex as roughly 30 km north-northwest of the city it calls Aurangabad. Treat that as a regional description, not a door-to-door distance.' },
      { q: 'Are Aurangabad and Chhatrapati Sambhajinagar the same place?', a: 'Yes, they refer to the same city under different names. ASI uses the older name; many current listings use the newer one.' },
      { q: 'Can I combine Ellora with Daulatabad in one day?', a: 'It is a common combination, but it needs separate checks of travel, admission and time. This guide does not promise an easy all-in-one day.' }
    ],
    related: ['how-to-reach', 'from-airport', 'from-railway-station', 'travel-services', 'nearby/daulatabad-fort']
  },
  {
    slug: 'from-airport',
    group: 'routes',
    kind: 'guide',
    metaTitle: 'Sambhajinagar Airport to Kailasa Temple | Ellora Transfer',
    metaDescription: 'How to plan the two-stage transfer from Chhatrapati Sambhajinagar Airport to Kailasa Temple (Ellora Cave 16): city connection, then the road to Verul.',
    h1: 'Getting to Kailasa Temple from Sambhajinagar Airport',
    kicker: 'Transport & itineraries · Ellora Cave 16',
    lead: 'An airport visit is a two-stage journey: airport to the city gateway, then the road onward to the Ellora Caves at Verul.',
    sections: [
      {
        heading: 'Two separate legs',
        paragraphs: [
          'Treat the airport-to-city leg and the city-to-Ellora leg as separate decisions. Confirm flight arrival time, the onward vehicle, where it will wait, and how the return is arranged before you commit to a visit on the same day.',
          'ASI places the Ellora complex roughly 30 km north-northwest of the city it calls Aurangabad, now also called Chhatrapati Sambhajinagar. That is a regional description, not a measured airport-to-gate distance.'
        ]
      },
      {
        heading: 'What this guide does not publish',
        paragraphs: [
          'Airport transfer operators, fares, fixed journey times, flight schedules and shuttle availability have not been independently verified here, so none are listed. Check current services directly and agree the price before departure.'
        ],
        bullets: [
          'Confirm the airport’s current name and code when booking.',
          'Check the ASI visiting window and weekly Tuesday closure against your flight time.',
          'Allow separately for admission and walking inside the property.',
          'Carry water and sun protection; exposed stone surfaces can be hot.'
        ]
      },
      {
        heading: 'If the same-day plan is tight',
        paragraphs: [
          'Because ASI lists sunrise-to-sunset visiting, a late arrival can leave too little daylight. Consider staying in the city and visiting the next morning instead; the where-to-stay page compares the two base areas without naming unverified hotels.'
        ],
        note: 'Reviewed 9 November 2026. No transfer times, prices or operator names are claimed.'
      }
    ],
    faqs: [
      { q: 'Is there a direct airport bus to Ellora?', a: 'This guide has not verified any direct service. Check current airport and local transport options and see the travel services page.' },
      { q: 'Can I visit Kailasa Temple on my arrival day?', a: 'Only if the daylight visiting window, weekly closure and transfer time all align. Confirm opening status with ASI before planning around a flight.' },
      { q: 'How long does the transfer take?', a: 'No journey time is published here because it has not been independently verified. Agree an estimate with your transport provider.' }
    ],
    related: ['how-to-reach', 'from-sambhajinagar', 'travel-services', 'where-to-stay', 'opening-hours']
  },
  {
    slug: 'from-railway-station',
    group: 'routes',
    kind: 'guide',
    metaTitle: 'Railway Station to Kailasa Temple | Ellora Cave 16 Guide',
    metaDescription: 'Planning the rail-to-road transfer for Kailasa Temple (Ellora Cave 16): station naming, onward transport options and checks before travelling.',
    h1: 'Railway Station to Kailasa Temple',
    kicker: 'Transport & itineraries · Ellora Cave 16',
    lead: 'Rail travel gets you to the regional gateway; the final leg to the Ellora Caves at Verul is by road and needs its own arrangement.',
    sections: [
      {
        heading: 'Get the station name right',
        paragraphs: [
          'The city is referred to both as Aurangabad and Chhatrapati Sambhajinagar, and station names in booking systems may follow either usage. Confirm the exact station name and its distance from your intended accommodation before buying a ticket.',
          'The Ellora Caves are near Verul, not inside the city. ASI places the complex roughly 30 km north-northwest of the city it calls Aurangabad.'
        ]
      },
      {
        heading: 'Arranging the onward leg',
        paragraphs: [
          'Plan the station-to-Ellora transfer, the return and the waiting arrangement before arrival. This guide does not publish train numbers, timetables, bus routes or taxi fares because they have not been independently verified.',
          'Check whether your arrival time fits the ASI sunrise-to-sunset visiting window and the weekly Tuesday closure before committing to a same-day visit.'
        ],
        bullets: [
          'Confirm the current station name in your booking.',
          'Agree the vehicle, waiting time and return plan in advance.',
          'Fix the actual gate as the meeting point, not a UNESCO property coordinate.',
          'Keep admission and internal walking time in the schedule.'
        ]
      },
      {
        heading: 'If you arrive late',
        paragraphs: [
          'Staying in the city and starting early the next morning is often simpler than a rushed late-day visit. See the where-to-stay and half-day itinerary pages for a calmer plan.'
        ],
        note: 'Reviewed 9 November 2026. No train or bus data is claimed as verified.'
      }
    ],
    faqs: [
      { q: 'Is there a railway station at Ellora?', a: 'This guide has not verified a station at the caves. The usual approach is rail to the regional city and then a road transfer; confirm current services locally.' },
      { q: 'Which station should I book to?', a: 'Check whether your booking system uses Aurangabad or Chhatrapati Sambhajinagar for the same city, and confirm the name before purchase.' },
      { q: 'Are there buses from the station to Ellora?', a: 'Current bus services are not verified here. Check locally or see the travel services page.' }
    ],
    related: ['how-to-reach', 'from-sambhajinagar', 'travel-services', 'where-to-stay', 'half-day-itinerary']
  },
  {
    slug: 'parking',
    group: 'routes',
    kind: 'guide',
    metaTitle: 'Kailasa Temple Parking & Drop-Off Guide | Ellora',
    metaDescription: 'Parking and drop-off planning for Kailasa Temple (Ellora Cave 16): what to confirm about the actual gate, internal distances and waiting arrangements.',
    h1: 'Kailasa Temple Parking & Drop-Off Guide',
    kicker: 'Transport & itineraries · Ellora Cave 16',
    lead: 'A reliable plan starts with an agreed gate and meeting point. This guide does not publish unverified parking entrances, fees or walking distances.',
    sections: [
      {
        heading: 'Why a pin is not a plan',
        paragraphs: [
          'UNESCO’s 20.02639, 75.17917 is a reference point for the whole Ellora property, not a surveyed Cave 16 entrance or ticket counter. A map pin that lands somewhere in the ensemble is not necessarily the gate your vehicle can use.',
          'ASI describes the scarp as nearly 2 km long, so the walk from wherever you stop to Cave 16 is part of the visit rather than a negligible final step.'
        ]
      },
      {
        heading: 'Checks to make before you set off',
        paragraphs: [
          'Car park location, current operation, charges and any shuttle or buggy service have not been independently verified by this guide. Confirm them with ASI or at the entrance on the day.'
        ],
        bullets: [
          'Which vehicle entrance and drop-off point are currently in use?',
          'Is parking operating, and is there a current charge?',
          'Where can the vehicle wait, and for how long?',
          'Is any internal shuttle operating, and which areas are closed to vehicles?'
        ]
      },
      {
        heading: 'Practical sequencing',
        paragraphs: [
          'Agree the return pick-up location with the driver before entering; mobile coverage and signage inside a large protected site are not something to rely on. Keep admission, the walk to Cave 16 and the return walk in the schedule, particularly near the end of the sunrise-to-sunset window.',
          'For travellers with limited mobility, combine this page with the accessibility guide and put the route questions to ASI in advance.'
        ],
        note: 'Reviewed 9 November 2026. No parking price, entrance location or walking distance is claimed as verified.'
      }
    ],
    faqs: [
      { q: 'Is there parking at Kailasa Temple?', a: 'This guide has not verified current parking location, availability or charges. Confirm with ASI or at the entrance before relying on it.' },
      { q: 'How far is the car park from Cave 16?', a: 'No measured walking distance is published here. ASI describes the scarp as nearly 2 km long; confirm the current gate and route on site.' },
      { q: 'Is there a shuttle or buggy?', a: 'Current availability and charges are not verified. Ask ASI, and do not build an itinerary that depends on one.' }
    ],
    related: ['how-to-reach', 'from-sambhajinagar', 'accessibility', 'visitor-guide', 'travel-services']
  },
  {
    slug: 'one-hour-itinerary',
    group: 'routes',
    kind: 'itinerary',
    metaTitle: 'Kailasa Temple One-Hour Visit | Cave 16 Short Itinerary',
    metaDescription: 'A focused one-hour route for Kailasa Temple (Ellora Cave 16): what to prioritise when time is short, and what must happen outside that hour.',
    h1: 'Kailasa Temple One-Hour Visit',
    kicker: 'Transport & itineraries · Ellora Cave 16',
    lead: 'With roughly an hour for the monument itself, stay with Cave 16. Admission, the walk from the gate and the return are separate from that hour.',
    sections: [
      {
        heading: 'Before the clock starts',
        paragraphs: [
          'A one-hour visit means one hour at the monument, not one hour from arrival. Entry procedures, the walk inside the property and the return to your vehicle all sit outside it. Confirm the ASI sunrise-to-sunset window and weekly Tuesday closure first.',
          'Use the verified map link to agree the gate and meeting point with your driver; a UNESCO property coordinate is not an entrance.'
        ]
      },
      {
        heading: 'A practical sequence',
        paragraphs: [
          'Move from the whole to the detail: take in the excavated courtyard and the surrounding rock walls, then the carved upper facades, then one or two sculptural panels. UNESCO highlights the Ravana shaking Mount Kailasa scene and painting traces on the front mandapa ceiling.'
        ],
        note: 'Treat this as an order of attention, not a timed guarantee. Closed areas, conservation work and your own pace take priority.'
      },
      {
        heading: 'What to leave out',
        paragraphs: [
          'Do not try to add Cave 10, the Indra Sabha or a regional fort to this plan. If you have more time, the half-day and one-day itinerary pages cover those combinations. ASI suggests a 3–4 hour visit for a focused selection of Caves 10, 16, 21, 32 and 34.'
        ]
      }
    ],
    stops: ['Agree the gate and meeting point', 'Complete admission and walk to Cave 16', 'Read the excavated courtyard and rock walls', 'Study the upper carved facades', 'Focus on one sculptural panel, such as the Ravana relief', 'Return to the agreed pick-up point'],
    faqs: [
      { q: 'Is one hour enough for Kailasa Temple?', a: 'It is enough for a focused look at Cave 16 itself, but not for the wider ensemble. Add separate time for admission and walking.' },
      { q: 'What should I prioritise?', a: 'The courtyard volume, the carved upper facades and one major sculptural panel. UNESCO highlights the Ravana relief and front mandapa ceiling painting traces.' },
      { q: 'Can I include other caves?', a: 'Not comfortably in an hour. See the half-day itinerary for a realistic combination.' }
    ],
    related: ['half-day-itinerary', 'ellora-one-day-itinerary', 'visitor-guide', 'tickets', 'how-to-reach']
  },
  {
    slug: 'half-day-itinerary',
    group: 'routes',
    kind: 'itinerary',
    metaTitle: 'Kailasa Temple Half-Day Itinerary | Ellora Caves Route',
    metaDescription: 'A half-day Ellora plan centred on Kailasa Temple (Cave 16) with a few representative caves, following ASI’s 3–4 hour priority list and on-site conditions.',
    h1: 'Kailasa Temple Half-Day Itinerary',
    kicker: 'Transport & itineraries · Ellora Cave 16',
    lead: 'A half day allows Cave 16 in depth plus a small selection of the ensemble. ASI suggests that 3–4 hours can prioritise Caves 10, 16, 21, 32 and 34, subject to what is open.',
    sections: [
      {
        heading: 'Use ASI’s priority list as a ceiling, not a promise',
        paragraphs: [
          'ASI’s suggestion of Caves 10, 16, 21, 32 and 34 in a 3–4 hour visit is a useful historical and artistic spread: a Buddhist chaitya, the great monolithic temple, Brahmanical caves and a Jain group. It is a reference for planning, not a guarantee that every cave is open or reachable.',
          'Confirm current closures with ASI, then drop stops rather than compressing the monument that brought you here.'
        ]
      },
      {
        heading: 'A workable order',
        paragraphs: [
          'Start with admission and the route to Cave 16 while energy and light are good. Give the courtyard, upper facades and the Ravana panel proper time, then add one or two contrasting caves. Finish with the return walk and the agreed pick-up.'
        ],
        note: 'Allow separately for admission, internal walking, rests and any closed paths. Reviewed 9 November 2026.'
      },
      {
        heading: 'When to scale back',
        paragraphs: [
          'Heat, monsoon surfaces, family pace or accessibility needs all argue for fewer caves. A shorter Cave 16-focused plan is on the one-hour page; a full ensemble day is on the Ellora one-day itinerary page.'
        ]
      }
    ],
    stops: ['Confirm the day’s open caves with ASI', 'Admission and walk to Cave 16', 'Kailasa Temple: courtyard, upper facades, sculptural panels', 'Vishvakarma Cave (Cave 10) as a Buddhist contrast', 'One further cave from the ASI priority list, if open', 'Return walk to the agreed pick-up point'],
    faqs: [
      { q: 'Which caves does ASI suggest for a 3–4 hour visit?', a: 'ASI suggests Caves 10, 16, 21, 32 and 34 as a priority selection for a 3–4 hour visit. Confirm current access on site.' },
      { q: 'Can I see all 34 caves in half a day?', a: 'No. The property is extensive and ASI describes the scarp as nearly 2 km long. A short, deliberate selection is more realistic.' },
      { q: 'Should I add a guide?', a: 'That is a separate arrangement; see the guided tours page for the questions to ask before booking.' }
    ],
    related: ['one-hour-itinerary', 'ellora-one-day-itinerary', 'nearby/ellora-cave-10', 'guided-tours', 'opening-hours']
  },
  {
    slug: 'ellora-one-day-itinerary',
    group: 'routes',
    kind: 'itinerary',
    metaTitle: 'Ellora Caves One-Day Itinerary | Buddhist, Hindu & Jain Caves',
    metaDescription: 'A full-day Ellora plan that links representative Buddhist, Brahmanical and Jain caves with Kailasa Temple (Cave 16), with realistic pacing and access caveats.',
    h1: 'Ellora Caves One-Day Itinerary',
    kicker: 'Transport & itineraries · Ellora Cave 16',
    lead: 'A full day is the right scale for the ensemble: Buddhist worship halls, the great monolithic temple of Cave 16, other Brahmanical caves and the Jain group.',
    sections: [
      {
        heading: 'The logic of the day',
        paragraphs: [
          'UNESCO describes 34 caves associated with Buddhist, Brahmanical and Jain traditions. A sensible day samples each tradition rather than attempting every cave: the point is to see how different communities used the same basalt scarp in different ways.',
          'ASI suggests a 3–4 hour visit can prioritise Caves 10, 16, 21, 32 and 34. A full day adds time for slower looking, rests, the internal walking and the unexpected closure.'
        ]
      },
      {
        heading: 'A possible shape',
        paragraphs: [
          'Begin with the daylight window in mind, since ASI lists sunrise-to-sunset visiting and a weekly Tuesday closure. Put the most important stop, Cave 16, early enough that a later closure or a tired group cannot crowd it out.',
          'Confirm which caves are open before fixing the order, and drop stops freely. A list is a planning device, not a promise of access.'
        ],
        note: 'No fixed hours are guaranteed for the whole ensemble; reviewed 9 November 2026.'
      },
      {
        heading: 'Beyond the property',
        paragraphs: [
          'Grishneshwar Temple, Daulatabad Fort and Bibi Ka Maqbara are separate destinations with their own admission, timings and travel. Adding any of them requires independent checks; they should not be assumed to be walking distance or to fit easily into the same day.'
        ]
      }
    ],
    stops: ['Confirm opening status, weekly closure and current cave access', 'Buddhist group: Vishvakarma Cave (Cave 10)', 'Kailasa Temple (Cave 16): courtyard, facades and sculpture', 'Brahmanical caves such as Cave 15, Cave 21 or Dumar Lena (Cave 29)', 'Jain group: Indra Sabha (Cave 32)', 'Return to the agreed pick-up point; optional separate regional stop'],
    faqs: [
      { q: 'Can I see all 34 caves in one day?', a: 'That is not a realistic promise. Closed areas, the length of the scarp and the time Cave 16 deserves all argue for a representative selection.' },
      { q: 'Which caves should not be missed?', a: 'ASI suggests Caves 10, 16, 21, 32 and 34 as priorities for a shorter visit. Cave 16 is the focus of this site.' },
      { q: 'Can I add Daulatabad Fort the same day?', a: 'It is a separate destination with its own travel and admission. Check both independently and do not assume an easy combination.' }
    ],
    related: ['half-day-itinerary', 'one-hour-itinerary', 'nearby/ellora-cave-10', 'nearby/indra-sabha', 'nearby/grishneshwar-temple']
  },

  // ── D. Nearby caves & sights (8) ──────────────────────────────────────────
  {
    slug: 'nearby/ellora-cave-10',
    group: 'nearby',
    kind: 'place',
    metaTitle: 'Vishvakarma Cave (Ellora Cave 10) | Buddhist Chaitya Guide',
    metaDescription: 'Vishvakarma Cave, Ellora Cave 10: a Buddhist chaitya worship hall with a stupa, and a useful architectural contrast with Kailasa Temple (Cave 16).',
    h1: 'Vishvakarma Cave (Cave 10)',
    kicker: 'Nearby caves & sights · Ellora',
    lead: 'Cave 10 is one of the Buddhist caves at Ellora. Comparing its interior worship hall with the open, monolithic temple of Cave 16 makes both easier to understand.',
    sections: [
      {
        heading: 'A different kind of rock-cut space',
        paragraphs: [
          'A Buddhist chaitya is an interior hall organised around a stupa, with the congregation’s space defined inside the rock. Kailasa, by contrast, is a freestanding temple excavated out of a pit with an open courtyard.',
          'Both are cut from the Deccan Trap basalt that ASI identifies at Ellora, but they solve different ritual and spatial problems. Seeing them close together is one of the clearest lessons the property offers.'
        ]
      },
      {
        heading: 'Planning the stop',
        paragraphs: [
          'ASI includes Cave 10 in its suggested 3–4 hour priority selection of Caves 10, 16, 21, 32 and 34. Treat that as a planning reference and confirm which caves are open on the day.',
          'Admission is to the Ellora Caves property, with the category-based ASI listing and the weekly Tuesday closure; there is no separate Cave 10 ticket published by this guide.'
        ],
        note: 'Reviewed 9 November 2026. Current cave access, routes and facilities must be confirmed with ASI.'
      },
      {
        heading: 'Where it fits in a route',
        paragraphs: [
          'Cave 10 works well as the Buddhist stop in a half-day or one-day route that keeps Cave 16 as the centrepiece. Allow for internal walking: ASI describes the scarp as nearly 2 km long.'
        ]
      }
    ],
    facts: [
      { label: 'Type', value: 'Buddhist chaitya (worship hall), Ellora Cave 10' },
      { label: 'Part of', value: 'Ellora Caves, UNESCO World Heritage property inscribed 1983' },
      { label: 'Admission', value: 'ASI-listed Ellora Caves entry; confirm current rules' },
      { label: 'Best paired with', value: 'Kailasa Temple (Cave 16) as an architectural contrast' }
    ],
    mapsQuery: 'Vishvakarma Cave Ellora Cave 10 Maharashtra',
    faqs: [
      { q: 'Is Cave 10 part of Kailasa Temple?', a: 'No. It is a separate Buddhist cave in the same Ellora property; Kailasa is Cave 16.' },
      { q: 'Do I need a separate ticket for Cave 10?', a: 'The ASI listing describes admission to the Ellora Caves property. Confirm current arrangements with ASI or the official ticket service.' },
      { q: 'How does it compare with Cave 16?', a: 'Cave 10 is an interior chaitya hall around a stupa; Cave 16 is a monolithic temple with an open courtyard. Both are rock-cut.' }
    ],
    related: ['half-day-itinerary', 'ellora-one-day-itinerary', 'architecture', 'nearby/indra-sabha', 'unesco-heritage']
  },
  {
    slug: 'nearby/ellora-cave-15',
    group: 'nearby',
    kind: 'place',
    metaTitle: 'Dashavatara Cave (Ellora Cave 15) | Brahmanical Cave Guide',
    metaDescription: 'Dashavatara Cave, Ellora Cave 15: Brahmanical sculpture, inscriptional context and its relationship to the nearby Kailasa Temple (Cave 16).',
    h1: 'Dashavatara Cave (Cave 15)',
    kicker: 'Nearby caves & sights · Ellora',
    lead: 'Cave 15 sits close to Kailasa in both location and period. It helps place Cave 16 within the wider Brahmanical sequence at Ellora.',
    sections: [
      {
        heading: 'A Brahmanical neighbour',
        paragraphs: [
          'UNESCO dates the broader Brahmanical group, Caves 13–29, roughly to the 7th–10th centuries. Cave 15 belongs to that sequence, while ASI attributes Cave 16 specifically to the Rashtrakuta ruler Krishna I (c. 757–783).',
          'The cave is associated with Vaishnava imagery, including the dashavatara (ten avatars) theme from which its common name comes. Inscriptions at Ellora are an important part of how the site’s chronology is discussed; consult ASI and UNESCO material for specific readings.'
        ]
      },
      {
        heading: 'Why visit it with Cave 16',
        paragraphs: [
          'Seeing Cave 15 and Cave 16 together shows the range of Brahmanical rock-cut design: excavated halls and sculptural programmes on one hand, and a complete monolithic temple on the other.',
          'Confirm current access with ASI before adding it to a route, since conservation work can close individual caves.'
        ],
        note: 'Reviewed 9 November 2026. Inscriptional and iconographic details should be checked against ASI and UNESCO material.'
      },
      {
        heading: 'Practical notes',
        paragraphs: [
          'Admission follows the ASI-listed Ellora Caves categories and the sunrise-to-sunset window with a weekly Tuesday closure. This guide does not publish a separate Cave 15 ticket, fixed walking distance or guaranteed viewing conditions.'
        ]
      }
    ],
    facts: [
      { label: 'Type', value: 'Brahmanical rock-cut cave, Ellora Cave 15' },
      { label: 'Group', value: 'Brahmanical caves 13–29, broadly 7th–10th centuries per UNESCO' },
      { label: 'Part of', value: 'Ellora Caves, UNESCO World Heritage property inscribed 1983' },
      { label: 'Admission', value: 'ASI-listed Ellora Caves entry; confirm current access' }
    ],
    mapsQuery: 'Dashavatara Cave Ellora Cave 15 Maharashtra',
    faqs: [
      { q: 'Is Cave 15 the same monument as Kailasa Temple?', a: 'No. Kailasa is Cave 16; Cave 15 is a separate Brahmanical excavation nearby.' },
      { q: 'What does Dashavatara mean?', a: 'It refers to the ten avatars of Vishnu, a sculptural theme associated with this cave.' },
      { q: 'Is Cave 15 open to visitors?', a: 'Current access is not verified here. Confirm with ASI on the day, as individual caves can close for conservation.' }
    ],
    related: ['rashtrakuta-dynasty', 'history', 'nearby/ellora-cave-21', 'half-day-itinerary', 'unesco-heritage']
  },
  {
    slug: 'nearby/ellora-cave-21',
    group: 'nearby',
    kind: 'place',
    metaTitle: 'Rameshvara Cave (Ellora Cave 21) | Brahmanical Sculpture',
    metaDescription: 'Rameshvara Cave, Ellora Cave 21: an ASI-priority Brahmanical cave with columned spaces and sculpture, seen alongside Kailasa Temple (Cave 16).',
    h1: 'Rameshvara Cave (Cave 21)',
    kicker: 'Nearby caves & sights · Ellora',
    lead: 'Cave 21 is one of the caves ASI names in its suggested 3–4 hour priority visit, and a useful stop for understanding Brahmanical rock-cut design.',
    sections: [
      {
        heading: 'Columns, panels and excavation',
        paragraphs: [
          'The Brahmanical caves at Ellora use columned interiors and sculpted panels in ways quite different from the open courtyard of Cave 16. Comparing the two makes the ambition of the monolithic temple easier to judge.',
          'UNESCO places the Brahmanical group, Caves 13–29, broadly in the 7th–10th centuries. A group-wide range is not a precise date for any single cave.'
        ]
      },
      {
        heading: 'In a short itinerary',
        paragraphs: [
          'ASI suggests a 3–4 hour visit can prioritise Caves 10, 16, 21, 32 and 34. If time is limited, keep Cave 16 as the main stop and add Cave 21 only if it is open and within your walking capacity.',
          'ASI describes the scarp as nearly 2 km long, so internal distances are part of the decision.'
        ],
        note: 'Reviewed 9 November 2026. Confirm current access and any conservation closures with ASI.'
      },
      {
        heading: 'Admission and conduct',
        paragraphs: [
          'Access follows the ASI-listed Ellora Caves admission and the sunrise-to-sunset window with a weekly Tuesday closure. Avoid touching carved surfaces, respect religious imagery and stay out of closed areas.'
        ]
      }
    ],
    facts: [
      { label: 'Type', value: 'Brahmanical rock-cut cave, Ellora Cave 21' },
      { label: 'ASI reference', value: 'Named among Caves 10, 16, 21, 32, 34 for a 3–4 hour visit' },
      { label: 'Part of', value: 'Ellora Caves, UNESCO World Heritage property inscribed 1983' },
      { label: 'Admission', value: 'ASI-listed Ellora Caves entry; confirm current access' }
    ],
    mapsQuery: 'Rameshvara Cave Ellora Cave 21 Maharashtra',
    faqs: [
      { q: 'Why is Cave 21 often recommended?', a: 'ASI includes it in a suggested priority selection for a 3–4 hour visit to the property.' },
      { q: 'Is it close to Cave 16?', a: 'It is in the same property, but this guide does not publish a measured walking distance. ASI describes the scarp as nearly 2 km long.' },
      { q: 'Does it need a separate ticket?', a: 'The ASI listing describes admission for the Ellora Caves property. Confirm current arrangements with ASI.' }
    ],
    related: ['nearby/ellora-cave-15', 'nearby/ellora-cave-29', 'half-day-itinerary', 'sculptures', 'unesco-heritage']
  },
  {
    slug: 'nearby/ellora-cave-29',
    group: 'nearby',
    kind: 'place',
    metaTitle: 'Dumar Lena (Ellora Cave 29) | Large Rock-Cut Cave Guide',
    metaDescription: 'Dumar Lena, Ellora Cave 29: a large excavated Brahmanical cave with Shaiva sculpture, its setting in the scarp and how to fit it into an Ellora route.',
    h1: 'Dumar Lena (Cave 29)',
    kicker: 'Nearby caves & sights · Ellora',
    lead: 'Cave 29 is one of the largest excavated spaces at Ellora. It offers a different experience from Cave 16: a broad interior cut into the scarp rather than a freestanding temple.',
    sections: [
      {
        heading: 'Space and setting',
        paragraphs: [
          'Dumar Lena is a substantial rock-cut cave with a broad interior and Shaiva sculptural panels. Its scale and the surrounding terrain make it a useful point of comparison with the courtyard-based plan of Kailasa.',
          'ASI describes the Ellora scarp as nearly 2 km long, and the setting of Cave 29 makes the relationship between excavation and hillside especially legible.'
        ]
      },
      {
        heading: 'Planning the visit',
        paragraphs: [
          'Confirm current access with ASI before including Cave 29, since individual caves can close for conservation. Lighting, wet surfaces and steps can affect how comfortable the interior is, particularly in the monsoon.',
          'It fits naturally into a half-day or one-day route that treats Cave 16 as the main event and adds a small number of contrasting caves.'
        ],
        note: 'Reviewed 9 November 2026. No fixed walking distance or guaranteed lighting conditions are claimed.'
      },
      {
        heading: 'Admission',
        paragraphs: [
          'Access follows the ASI-listed Ellora Caves admission categories and the sunrise-to-sunset visiting window with a weekly Tuesday closure. This guide does not sell tickets or publish a separate Cave 29 charge.'
        ]
      }
    ],
    facts: [
      { label: 'Type', value: 'Brahmanical rock-cut cave, Ellora Cave 29' },
      { label: 'Known for', value: 'Large excavated interior and Shaiva sculptural panels' },
      { label: 'Part of', value: 'Ellora Caves, UNESCO World Heritage property inscribed 1983' },
      { label: 'Admission', value: 'ASI-listed Ellora Caves entry; confirm current access' }
    ],
    mapsQuery: 'Dumar Lena Ellora Cave 29 Maharashtra',
    faqs: [
      { q: 'Is Dumar Lena part of Kailasa Temple?', a: 'No. It is Cave 29, a separate excavation in the same Ellora property; Kailasa is Cave 16.' },
      { q: 'Is it worth adding to a short visit?', a: 'If time and current access allow, it is a strong contrast with Cave 16. For an hour-long visit, stay with Cave 16.' },
      { q: 'Is the cave open in the monsoon?', a: 'Current status is not verified here. Confirm access, path conditions and any closures with ASI.' }
    ],
    related: ['nearby/ellora-cave-21', 'half-day-itinerary', 'sculptures', 'monsoon-visit', 'unesco-heritage']
  },
  {
    slug: 'nearby/indra-sabha',
    group: 'nearby',
    kind: 'place',
    metaTitle: 'Indra Sabha (Ellora Cave 32) | Jain Cave Guide',
    metaDescription: 'Indra Sabha, Ellora Cave 32: Jain rock-cut architecture and carving, part of ASI’s suggested priority caves and a contrast with Kailasa Temple (Cave 16).',
    h1: 'Indra Sabha (Cave 32)',
    kicker: 'Nearby caves & sights · Ellora',
    lead: 'Cave 32 belongs to the Jain group at Ellora. Seeing it alongside Cave 16 shows the range of religious traditions represented in the UNESCO property.',
    sections: [
      {
        heading: 'A third tradition at Ellora',
        paragraphs: [
          'UNESCO describes the Ellora Caves as associated with Buddhist, Brahmanical and Jain traditions. The Jain caves, including Indra Sabha, add a further architectural and sculptural vocabulary to the property.',
          'Placing Cave 32 next to the Buddhist chaitya of Cave 10 and the Shaiva monolithic temple of Cave 16 is the clearest way to understand why the ensemble, not a single cave, was inscribed in 1983.'
        ]
      },
      {
        heading: 'In ASI’s suggested route',
        paragraphs: [
          'ASI names Cave 32 among Caves 10, 16, 21, 32 and 34 in its suggested 3–4 hour priority visit. Confirm which caves are open before treating that list as a route.',
          'Internal walking is part of the plan: ASI describes the scarp as nearly 2 km long.'
        ],
        note: 'Reviewed 9 November 2026. Current access and conservation closures must be confirmed with ASI.'
      },
      {
        heading: 'Admission and conduct',
        paragraphs: [
          'Access follows the ASI-listed Ellora Caves admission and the sunrise-to-sunset window with a weekly Tuesday closure. Respect religious imagery, avoid touching carvings and stay out of closed areas.'
        ]
      }
    ],
    facts: [
      { label: 'Type', value: 'Jain rock-cut cave, Ellora Cave 32' },
      { label: 'ASI reference', value: 'Named among Caves 10, 16, 21, 32, 34 for a 3–4 hour visit' },
      { label: 'Part of', value: 'Ellora Caves, UNESCO World Heritage property inscribed 1983' },
      { label: 'Admission', value: 'ASI-listed Ellora Caves entry; confirm current access' }
    ],
    mapsQuery: 'Indra Sabha Ellora Cave 32 Maharashtra',
    faqs: [
      { q: 'Is Indra Sabha a Hindu cave?', a: 'No. It belongs to the Jain group at Ellora; Kailasa (Cave 16) is a Shaiva temple.' },
      { q: 'Is it included in a short ASI route?', a: 'Yes, ASI names Cave 32 among its suggested priority caves for a 3–4 hour visit. Confirm current access.' },
      { q: 'Do I need a separate ticket?', a: 'The ASI listing describes admission to the Ellora Caves property. Confirm current arrangements with ASI.' }
    ],
    related: ['nearby/ellora-cave-10', 'ellora-one-day-itinerary', 'half-day-itinerary', 'unesco-heritage', 'sculptures']
  },
  {
    slug: 'nearby/grishneshwar-temple',
    group: 'nearby',
    kind: 'place',
    metaTitle: 'Grishneshwar Temple near Ellora | Visit & Etiquette Guide',
    metaDescription: 'Grishneshwar Temple near Verul: a separate Shiva pilgrimage destination mentioned by ASI, with its own rules, and how to consider it alongside Kailasa Temple.',
    h1: 'Grishneshwar Temple',
    kicker: 'Nearby caves & sights · Verul region',
    lead: 'ASI mentions Grishneshwar Temple near the Ellora Caves. It is a separate religious destination, not part of the ASI ticketed cave property.',
    sections: [
      {
        heading: 'A distinct place of worship',
        paragraphs: [
          'Grishneshwar is a Shiva temple and a pilgrimage destination in the Verul area. Its devotional life, dress expectations and worship practices belong to that living religious institution, not to an archaeological monument.',
          'Do not assume that Ellora admission, opening hours, photography rules or dress codes apply there. Equally, do not assume that a temple visit is included in an Ellora Caves ticket.'
        ]
      },
      {
        heading: 'Checks before combining visits',
        paragraphs: [
          'This guide has not verified current temple timings, worship schedules, photography rules, entry arrangements or any dress code. Ask the temple or check its current notices, and allow separate travel and time.'
        ],
        bullets: [
          'Confirm current visiting hours and any worship-related restrictions.',
          'Ask about photography and footwear rules on site.',
          'Allow separate travel time from the Ellora Caves property.',
          'Respect worshippers and do not treat rituals as photographic subjects.'
        ],
        note: 'Reviewed 9 November 2026. No timetable, fee or distance is published as verified.'
      },
      {
        heading: 'Shiva at two very different sites',
        paragraphs: [
          'Visiting Grishneshwar and Kailasa together offers an instructive contrast: an 8th-century rock-cut temple under ASI management, and an active place of worship with its own community. Keep the two sets of rules separate in your planning.'
        ]
      }
    ],
    facts: [
      { label: 'Type', value: 'Active Shiva temple and pilgrimage site near Verul' },
      { label: 'Relation to Ellora', value: 'Separate destination; mentioned on the ASI Ellora Caves page' },
      { label: 'Admission', value: 'Not covered by the ASI Ellora Caves listing; check on site' },
      { label: 'Rules', value: 'Dress, worship and photography rules are its own; confirm locally' }
    ],
    mapsQuery: 'Grishneshwar Jyotirlinga Temple Verul Maharashtra',
    faqs: [
      { q: 'Is Grishneshwar Temple inside the Ellora Caves ticket?', a: 'Do not assume so. It is a separate religious destination; confirm its own arrangements before visiting.' },
      { q: 'Can I use the same opening hours as Ellora?', a: 'No. ASI’s sunrise-to-sunset listing and weekly Tuesday closure apply to the caves property, not to this temple.' },
      { q: 'Is photography allowed?', a: 'Current rules are not verified here. Ask at the temple and respect worshippers.' }
    ],
    related: ['shiva-symbolism', 'visitor-guide', 'nearby/daulatabad-fort', 'ellora-one-day-itinerary', 'how-to-reach']
  },
  {
    slug: 'nearby/daulatabad-fort',
    group: 'nearby',
    kind: 'place',
    metaTitle: 'Daulatabad Fort near Ellora | Hill Fort Visit Guide',
    metaDescription: 'Daulatabad Fort in Maharashtra: a hill fort with defensive architecture, often considered alongside an Ellora visit, with separate admission and timing checks.',
    h1: 'Daulatabad Fort',
    kicker: 'Nearby caves & sights · Maharashtra',
    lead: 'Daulatabad Fort is a regional hill fort with a very different history and physical demands from the rock-cut caves at Ellora.',
    sections: [
      {
        heading: 'A defensive landscape',
        paragraphs: [
          'A hill fort is organised around terrain, approach routes and defensive works rather than excavated worship spaces. Visiting it involves climbing and exposed sections, which makes it a different kind of day from walking the Ellora scarp.',
          'The architectural contrast is real: excavation into basalt at Ellora, and construction on and around a fortified hill at Daulatabad.'
        ]
      },
      {
        heading: 'Treat it as a separate outing',
        paragraphs: [
          'This guide has not verified current opening hours, admission charges, conservation closures or route conditions at the fort. Confirm each independently and do not assume the ASI Ellora listing applies.',
          'A same-day combination needs separate travel, admission and time. A list of regional places is not a claim of walking proximity or an easy all-in-one day.'
        ],
        note: 'Reviewed 9 November 2026. No fee, timetable or travel time is published as verified.'
      },
      {
        heading: 'If you plan both in one day',
        paragraphs: [
          'Prioritise one site and keep the other optional. Start with the ASI sunrise-to-sunset window for the caves, check the weekly Tuesday closure, and allow for heat, steps and the return journey to your base.'
        ]
      }
    ],
    facts: [
      { label: 'Type', value: 'Hill fort and defensive complex, Maharashtra' },
      { label: 'Relation to Ellora', value: 'Separate regional destination; requires its own travel and ticket checks' },
      { label: 'Physical demands', value: 'Climbing and exposed sections; plan accordingly' },
      { label: 'Admission', value: 'Not covered by the ASI Ellora Caves listing; confirm locally' }
    ],
    mapsQuery: 'Daulatabad Fort Maharashtra India',
    faqs: [
      { q: 'Is Daulatabad Fort included in the Ellora ticket?', a: 'No assumption of that is justified. It is a separate destination with its own admission; confirm locally.' },
      { q: 'Can I visit both in one day?', a: 'It is a common combination, but it needs independent checks of travel, opening times and your own stamina.' },
      { q: 'Is the fort accessible for limited mobility?', a: 'This guide has not verified current routes. A hill fort involves climbing; check accessibility directly before travelling.' }
    ],
    related: ['nearby/bibi-ka-maqbara', 'from-sambhajinagar', 'ellora-one-day-itinerary', 'where-to-stay', 'how-to-reach']
  },
  {
    slug: 'nearby/bibi-ka-maqbara',
    group: 'nearby',
    kind: 'place',
    metaTitle: 'Bibi Ka Maqbara near Kailasa Temple | Sambhajinagar Guide',
    metaDescription: 'Bibi Ka Maqbara in Chhatrapati Sambhajinagar: Mughal-era architecture as a city stop, with separate admission and timing checks alongside an Ellora visit.',
    h1: 'Bibi Ka Maqbara',
    kicker: 'Nearby caves & sights · Chhatrapati Sambhajinagar',
    lead: 'Bibi Ka Maqbara is a Mughal-era monument in the city gateway of Chhatrapati Sambhajinagar (Aurangabad), not part of the Ellora Caves property.',
    sections: [
      {
        heading: 'A different architectural tradition',
        paragraphs: [
          'Where Kailasa is excavated from living basalt, Bibi Ka Maqbara belongs to a built Mughal architectural tradition of planned gardens, domes and minarets. Comparing the two is a study in opposing construction logics.',
          'It also sits in the city rather than at Verul, which makes it a different logistical decision from the other caves in this cluster.'
        ]
      },
      {
        heading: 'Checks before visiting',
        paragraphs: [
          'This guide has not verified current opening hours, admission categories, conservation work or photography rules at the monument. Confirm them independently; the ASI Ellora Caves listing does not govern this site.',
          'Because it is in the city, it is often considered on an arrival or departure day rather than as part of an Ellora cave route.'
        ],
        note: 'Reviewed 9 November 2026. No fee, timetable or distance is published as verified.'
      },
      {
        heading: 'Fitting it into a trip',
        paragraphs: [
          'Keep the Ellora day focused on the sunrise-to-sunset window and the weekly Tuesday closure. A city monument can be a separate half-day; see the where-to-stay and from-Sambhajinagar pages for the regional logistics.'
        ]
      }
    ],
    facts: [
      { label: 'Type', value: 'Mughal-era monumental tomb, Chhatrapati Sambhajinagar' },
      { label: 'Relation to Ellora', value: 'Separate city destination; its own travel and admission checks' },
      { label: 'Architectural contrast', value: 'Built masonry and planned setting vs monolithic excavation at Cave 16' },
      { label: 'Admission', value: 'Not covered by the ASI Ellora Caves listing; confirm locally' }
    ],
    mapsQuery: 'Bibi Ka Maqbara Chhatrapati Sambhajinagar Maharashtra',
    faqs: [
      { q: 'Is Bibi Ka Maqbara near the Ellora Caves?', a: 'It is in the city gateway, not at Verul. Treat it as a separate city stop with its own travel.' },
      { q: 'Does the Ellora ticket cover it?', a: 'No assumption of that is justified. Confirm its own admission arrangements.' },
      { q: 'Is it worth pairing with Kailasa Temple?', a: 'As an architectural contrast, yes, but with separate checks of time, travel and opening status.' }
    ],
    related: ['nearby/daulatabad-fort', 'from-sambhajinagar', 'where-to-stay', 'architecture', 'how-to-reach']
  },

  // ── E. Food, accommodation & travel services (6) ──────────────────────────
  {
    slug: 'nearby-restaurants',
    group: 'services',
    kind: 'guide',
    metaTitle: 'Restaurants Near Kailasa Temple | Where to Eat at Ellora',
    metaDescription: 'How to plan meals around a Kailasa Temple visit: the Verul and Sambhajinagar areas, what to verify about current openings, and why no business is named here.',
    h1: 'Restaurants Near Kailasa Temple',
    kicker: 'Food & accommodation · Ellora / Verul',
    lead: 'This guide does not name individual restaurants, publish their hours or quote their prices. None have been independently verified here, so the useful advice is about planning rather than recommendations.',
    sections: [
      {
        heading: 'Where meals usually fit',
        paragraphs: [
          'Think in areas rather than addresses: the immediate Verul / Ellora area, the route back toward the city, and Chhatrapati Sambhajinagar itself, which has the widest range of services. Which of those works depends on your transport and the daylight visiting window.',
          'ASI’s sunrise-to-sunset listing and weekly Tuesday closure shape the day. An early start often means eating before arrival or after leaving rather than in the middle of a cave visit.'
        ],
        bullets: [
          'Confirm any restaurant’s current opening hours and location on the day.',
          'Do not rely on a third-party listing as proof that a place is trading.',
          'Carry drinking water regardless of where you plan to eat.',
          'Keep perishables and meals away from protected monument areas.'
        ],
        note: 'Reviewed 9 November 2026. No business name, rating, price, opening time or walking distance is claimed as verified.'
      },
      {
        heading: 'What to check before relying on a listing',
        paragraphs: [
          'If you do use a map service to find food, verify the name, the type of food, the current trading hours and whether it is reachable with your transport. A listing is not a booking, and a review snapshot is not a current status report.',
          'For travellers with dietary requirements, confirm dishes and ingredients directly rather than assuming a standard menu.'
        ]
      },
      {
        heading: 'Keep the site clean',
        paragraphs: [
          'The Ellora Caves are a protected UNESCO property managed by ASI. Follow on-site rules about where food and drink are allowed, take litter away with you and stay out of closed areas.'
        ]
      }
    ],
    faqs: [
      { q: 'Are there restaurants inside the Ellora Caves?', a: 'Current food outlets and their locations are not verified here. Check with ASI and follow on-site rules about where food is permitted.' },
      { q: 'Which restaurant do you recommend?', a: 'None is named on this site because no individual business has been independently verified. Use a current map listing and confirm on the day.' },
      { q: 'Should I eat before arriving?', a: 'With an early start and a sunrise-to-sunset window, many visitors plan meals before or after the visit. Carry water either way.' }
    ],
    related: ['local-food', 'cafes-and-refreshments', 'where-to-stay', 'visitor-guide', 'travel-services']
  },
  {
    slug: 'local-food',
    group: 'services',
    kind: 'guide',
    metaTitle: 'What to Eat Near Ellora Caves | Maharashtrian Food Guide',
    metaDescription: 'A plain introduction to Maharashtrian food for Ellora visitors: common dishes and meal formats, without unverified restaurant names or prices.',
    h1: 'What to Eat Near Ellora Caves',
    kicker: 'Food & accommodation · Maharashtra',
    lead: 'Regional food is one of the pleasures of a trip to this part of Maharashtra. This page introduces common dishes, not specific establishments or prices.',
    sections: [
      {
        heading: 'Common dishes and formats',
        paragraphs: [
          'Maharashtrian menus range from quick street snacks to a full thali. Naming a dish is not a claim that any particular outlet near Verul serves it — check current menus locally.'
        ],
        bullets: [
          'Vada pav and misal pav: widely known savoury snacks built around bread and spiced preparations.',
          'Pav bhaji and other griddle-cooked street dishes: commonly found across the region.',
          'A Maharashtrian thali: a plated meal with several preparations, useful when you want one substantial sitting.',
          'Bhakri with pithla or other accompaniments: a rustic millet-bread based meal.',
          'Puran poli and other sweets: seasonal or festive preparations rather than everyday staples.',
          'Chai: the most common short-break drink; see the cafés and refreshments page.'
        ]
      },
      {
        heading: 'Eating around a monument visit',
        paragraphs: [
          'A heavy meal before walking a long, hot site is not always a good idea. Carry water, keep something light available, and plan a proper meal for after the visit or back in the city.',
          'Dietary needs and spice levels vary; confirm ingredients directly with whoever prepares the food.'
        ],
        note: 'Reviewed 9 November 2026. Dish names are general regional vocabulary, not recommendations or availability claims.'
      },
      {
        heading: 'Respect the protected property',
        paragraphs: [
          'Food and drink rules inside the ASI-managed Ellora Caves are set on site. Do not eat in restricted areas, and carry all litter out with you.'
        ]
      }
    ],
    faqs: [
      { q: 'What is a typical Maharashtrian meal?', a: 'A thali brings several preparations on one plate; snacks such as vada pav and misal pav are common lighter options. Availability near Verul must be checked locally.' },
      { q: 'Is vegetarian food easy to find?', a: 'Vegetarian preparations are common in the region, but this guide does not verify any specific outlet. Confirm dishes directly.' },
      { q: 'Are these dishes served at Ellora?', a: 'No claim of that is made here. This is a general introduction to regional food, not a listing of current vendors.' }
    ],
    related: ['nearby-restaurants', 'cafes-and-refreshments', 'where-to-stay', 'visitor-guide', 'how-to-reach']
  },
  {
    slug: 'cafes-and-refreshments',
    group: 'services',
    kind: 'guide',
    metaTitle: 'Cafes & Refreshments Near Ellora Caves | Break Planning',
    metaDescription: 'Planning short breaks and drinks around a Kailasa Temple visit: chai, water, shade and why this guide does not name or rate individual cafés.',
    h1: 'Cafes and Refreshments Near Ellora Caves',
    kicker: 'Food & accommodation · Ellora / Verul',
    lead: 'A long visit on exposed stone makes water and rest more important than finding a particular café. No individual business is named here because none has been verified.',
    sections: [
      {
        heading: 'Plan the break, not the venue',
        paragraphs: [
          'ASI describes the Ellora scarp as nearly 2 km long and lists sunrise-to-sunset visiting. That combination of distance and daylight means breaks should be built into the route rather than improvised at the end.',
          'Chai is the most common short-break drink across Maharashtra, but where it is available on a given day near Verul is not something this guide can confirm.'
        ],
        bullets: [
          'Carry drinking water with you regardless of planned stops.',
          'Identify shade or rest points as you go rather than assuming a café is open.',
          'Check current hours and location for any venue you intend to use.',
          'Keep drinks away from carved surfaces and restricted areas.'
        ],
        note: 'Reviewed 9 November 2026. No café name, rating, price, opening time or distance is published as verified.'
      },
      {
        heading: 'Heat, monsoon and families',
        paragraphs: [
          'In hotter months, shorter walking stretches with regular rests are more comfortable. In the monsoon, a dry place to pause matters more, but a pleasant forecast is not a guarantee that any facility is operating.',
          'For children and older visitors, combine this page with the family and accessibility guides.'
        ]
      },
      {
        heading: 'Facilities that remain unverified',
        paragraphs: [
          'This guide has not verified current drinking-water points, toilets, shaded seating or luggage storage at the property. Confirm anything essential with ASI before travelling.'
        ]
      }
    ],
    faqs: [
      { q: 'Are there cafés inside the Ellora Caves?', a: 'Current outlets and their locations are not verified here. Check with ASI and follow on-site rules.' },
      { q: 'Is drinking water available on site?', a: 'This guide has not verified water points. Carry your own and confirm facilities with ASI.' },
      { q: 'Can I recommend a café for this guide?', a: 'This site does not publish unverified business listings. Use a current map service and check details on the day.' }
    ],
    related: ['nearby-restaurants', 'local-food', 'family-guide', 'accessibility', 'monsoon-visit']
  },
  {
    slug: 'nearby-hotels',
    group: 'services',
    kind: 'guide',
    metaTitle: 'Hotels Near Kailasa Temple | Verul & Sambhajinagar Areas',
    metaDescription: 'How to think about accommodation areas for a Kailasa Temple visit: Verul / Ellora versus Chhatrapati Sambhajinagar, and what to verify before booking.',
    h1: 'Hotels Near Kailasa Temple',
    kicker: 'Food & accommodation · Ellora / Verul',
    lead: 'No hotel is named or rated on this site. Instead, this page sets out the two areas to compare and the checks that matter before booking.',
    sections: [
      {
        heading: 'Two bases, different trade-offs',
        paragraphs: [
          'Staying near Verul / Ellora puts you closer to the caves but generally closer to a smaller set of services. Staying in Chhatrapati Sambhajinagar (Aurangabad) usually means a longer transfer but a wider choice of accommodation, food and transport.',
          'The city is the gateway ASI refers to as Aurangabad, roughly 30 km north-northwest of which the complex lies. Confirm actual travel times with your accommodation or transport provider rather than relying on a map estimate.'
        ],
        bullets: [
          'Confirm current availability and booking terms directly with a property or platform.',
          'Check where the property actually is: “near Ellora” is a marketing phrase, not a distance.',
          'Ask about early breakfast if you plan to arrive at opening.',
          'Confirm transport to the caves and the return arrangement.'
        ],
        note: 'Reviewed 9 November 2026. No hotel name, rate, star rating, review score or distance is published as verified.'
      },
      {
        heading: 'Match the base to the itinerary',
        paragraphs: [
          'For a single early visit to Cave 16, either base can work. For a full-day ensemble visit or a multi-day regional trip that includes Daulatabad Fort or Bibi Ka Maqbara, the city simplifies transport.',
          'If you are arriving by air or rail late in the day, staying in the city and starting early the next morning fits the sunrise-to-sunset window better.'
        ]
      },
      {
        heading: 'Verification checklist',
        paragraphs: [
          'Before paying, confirm the current trading status, exact location, cancellation terms, check-in times and whether the property can arrange or advise on transport to the Ellora gate. A review snapshot is not a status report.'
        ]
      }
    ],
    faqs: [
      { q: 'Are there hotels within walking distance of Cave 16?', a: 'This guide does not publish unverified distances. Check the exact location of any property and its transport options before booking.' },
      { q: 'Which hotel do you recommend?', a: 'None is named here because no individual property has been independently verified.' },
      { q: 'Should I stay in Verul or Sambhajinagar?', a: 'It depends on your itinerary. See the where-to-stay page for a side-by-side comparison.' }
    ],
    related: ['where-to-stay', 'from-airport', 'from-railway-station', 'travel-services', 'ellora-one-day-itinerary']
  },
  {
    slug: 'where-to-stay',
    group: 'services',
    kind: 'guide',
    metaTitle: 'Where to Stay for Kailasa Temple | Verul vs Sambhajinagar',
    metaDescription: 'Compare staying near Verul / Ellora with staying in Chhatrapati Sambhajinagar for a Kailasa Temple visit, including transport, timing and verification notes.',
    h1: 'Where to Stay for Visiting Kailasa Temple',
    kicker: 'Food & accommodation · Maharashtra',
    lead: 'The choice is less about a hotel and more about which base suits your arrival time, your transport and how many days you want to spend at Ellora.',
    sections: [
      {
        heading: 'Verul / Ellora area',
        paragraphs: [
          'The advantage is proximity to the caves and the possibility of an unhurried early start. The trade-off is a smaller set of services and fewer transport alternatives, so confirm dining and return travel before committing.',
          'This guide does not name properties, quote rates or claim any particular walking distance to Cave 16.'
        ]
      },
      {
        heading: 'Chhatrapati Sambhajinagar (Aurangabad)',
        paragraphs: [
          'The city is the regional gateway, used by ASI under the older Aurangabad name. It generally offers a wider choice of accommodation, food, and arrival options by air or rail, at the cost of a road transfer to the caves.',
          'It also makes it easier to combine an Ellora day with city monuments such as Bibi Ka Maqbara or a separate trip to Daulatabad Fort.'
        ]
      },
      {
        heading: 'Decide by itinerary',
        paragraphs: [
          'For a single early Cave 16 visit, either base works. For arrival late in the day, a full ensemble visit, or a multi-day regional trip, the city is usually the simpler logistical choice. Check the weekly Tuesday closure before fixing dates.',
          'Whatever you choose, confirm the exact location, current trading status, cancellation terms and how you will reach the actual Ellora gate — not a UNESCO property coordinate.'
        ],
        note: 'Reviewed 9 November 2026. No hotel name, price, rating or travel time is published as verified.'
      }
    ],
    faqs: [
      { q: 'Is it better to stay in Verul or in the city?', a: 'Verul offers proximity; the city offers more services and easier arrivals. Choose according to your arrival time and itinerary.' },
      { q: 'How far is the city from Ellora?', a: 'ASI describes the complex as roughly 30 km north-northwest of the city it calls Aurangabad. Confirm actual travel times locally.' },
      { q: 'Do you list specific hotels?', a: 'No. This guide does not publish unverified business names, rates or ratings.' }
    ],
    related: ['nearby-hotels', 'from-airport', 'from-railway-station', 'travel-services', 'ellora-one-day-itinerary']
  },
  {
    slug: 'travel-services',
    group: 'services',
    kind: 'guide',
    metaTitle: 'Transport & Travel Services for Ellora Visitors',
    metaDescription: 'A verification-first guide to taxis, private cars, buses and guiding arrangements for a Kailasa Temple visit, without naming unverified operators or prices.',
    h1: 'Transport and Travel Services for Ellora Visitors',
    kicker: 'Food & accommodation · Getting around',
    lead: 'Most transport problems at Ellora come from assumptions: that a return vehicle will be waiting, that a fare includes waiting time, or that a map pin is the gate.',
    sections: [
      {
        heading: 'Choose the arrangement, then confirm the terms',
        paragraphs: [
          'A private car or taxi offers the most control over timing; a bus or shared service may cost less but needs current schedule checks. This guide does not publish operator names, fares, bus numbers or timetables because none have been independently verified.',
          'Whatever the mode, write down the outward route, the return route, the waiting arrangement, the meeting point and the total charge before departure.'
        ],
        bullets: [
          'Agree the actual gate as the pick-up point, not a UNESCO property coordinate.',
          'Confirm whether the price includes waiting, parking and the return leg.',
          'Check that the vehicle can wait until the end of the sunrise-to-sunset visiting window.',
          'Keep the ASI weekly Tuesday closure in mind when booking.'
        ],
        note: 'Reviewed 9 November 2026. No operator, price or schedule is claimed as verified.'
      },
      {
        heading: 'Guides and extras',
        paragraphs: [
          'Guiding, audio devices, special access, parking and internal shuttles are separate from admission to the Ellora Caves. Do not assume any is included in the ASI-listed ticket; see the guided tours and parking pages for the questions to ask.'
        ]
      },
      {
        heading: 'A short pre-departure checklist',
        paragraphs: [
          'Confirm the ASI opening status and current admission categories, check official weather warnings if travelling in the monsoon, carry water and identification, and allow time for admission plus the walk inside the property. Keep the verified Kailasa Temple map link handy, but agree the real gate in person.'
        ]
      }
    ],
    faqs: [
      { q: 'Which taxi company do you recommend?', a: 'None is named here because no operator has been independently verified. Agree the route, waiting time and total charge directly before departure.' },
      { q: 'Are buses available from the city?', a: 'Current bus numbers and timetables are not verified here. Check locally on the day.' },
      { q: 'Is a guide included in the ticket?', a: 'Do not assume so. Admission to the Ellora Caves and guiding are separate arrangements; see the guided tours page.' }
    ],
    related: ['how-to-reach', 'from-sambhajinagar', 'parking', 'guided-tours', 'where-to-stay']
  }
];

export const topicPath = (slug: string): string => `/${slug}/`;
export const getTopic = (slug: string): Topic | undefined => TOPICS.find(t => t.slug === slug);
export const topicSlugs = (): string[] => TOPICS.map(t => t.slug);
export const topicsByGroup = (group: TopicGroupId): Topic[] => TOPICS.filter(t => t.group === group);
export const relatedTopics = (topic: Topic): Topic[] =>
  topic.related.map(getTopic).filter((t): t is Topic => Boolean(t));
export const TOPIC_COUNT = TOPICS.length;
