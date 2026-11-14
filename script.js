
/* ========================================
   1. MISSION INFORMATION
======================================== */

const missions = {

    /* ====================================
       MARS MISSIONS
    ==================================== */

    opportunity: {
        name: "Opportunity",
        destination: "mars",
        location: "MARS · NASA MARS EXPLORATION ROVER",
        year: "2004–2018",
        type: "rover",

        description:
            "Opportunity was a robotic rover that explored Mars for almost 15 years, studying rocks and searching for evidence of ancient water.",

        overview: `
            <p><strong>Launch:</strong> July 7, 2003</p>
            <p><strong>Landing:</strong> January 25, 2004</p>
            <p><strong>Mission:</strong> Explore the Martian surface and investigate its geological history.</p>
            <p><strong>Mission ending:</strong> NASA ended the mission in February 2019 after communication could not be restored following a major dust storm.</p>
        `,

        components: [
            {
                name: "Panoramic Camera",
                description: "Captured wide views of the Martian landscape. Scientists used these images to study rocks, soil and the surrounding terrain.",
                x: 300, y: 65
            },
            {
                name: "Robotic Arm",
                description: "Moved scientific instruments close to rocks and soil so the rover could examine their composition.",
                x: 420, y: 180
            },
            {
                name: "APXS",
                description: "The Alpha Particle X-ray Spectrometer measured the chemical elements in rocks and soil.",
                x: 450, y: 245
            },
            {
                name: "Rock Abrasion Tool",
                description: "Ground away the outer surface of rocks to expose fresh material for scientific examination.",
                x: 365, y: 275
            },
            {
                name: "Solar Panels",
                description: "Converted sunlight into electrical energy to power the rover and its instruments.",
                x: 150, y: 155
            }
        ],

        photos: [
            {
                url: "https://images-assets.nasa.gov/image/PIA04413/PIA04413~orig.jpg",
                title: "Opportunity on Mars",
                caption: "An image from the Mars Exploration Rover mission."
            },
            {
                url: "https://images-assets.nasa.gov/image/PIA05000/PIA05000~orig.jpg",
                title: "Martian Landscape",
                caption: "A view of the rocky surface explored by the rover."
            }
        ],

        discoveries: [
            {
                title: "Evidence of Ancient Water",
                description: "Opportunity found geological evidence that liquid water had once affected rocks on Mars."
            },
            {
                title: "Longer Than Expected",
                description: "The rover was designed for a 90-Martian-day mission but continued operating for nearly 15 Earth years."
            }
        ],

        signal: {
            description: "Opportunity continued sending scientific information and images to Earth throughout its mission. NASA's final attempts to contact the rover followed a planet-wide dust storm in 2018.",
            status: "MISSION ENDED · FEBRUARY 2019",
            date: "JUNE 2018 – FEBRUARY 2019",
            transmission: `OPPORTUNITY MISSION RECORD

LOCATION: PERSEVERANCE VALLEY, MARS

A severe dust storm reduced the sunlight
reaching the rover's solar panels.

NASA attempted to re-establish contact
after the storm.

NO FURTHER COMMUNICATION WAS RECEIVED.

NASA declared the mission complete
in February 2019.

END OF MISSION RECORD.`
        }
    },


    spirit: {
        name: "Spirit",
        destination: "mars",
        location: "MARS · NASA MARS EXPLORATION ROVER",
        year: "2004–2010",
        type: "rover",

        description:
            "Spirit was one of NASA's Mars Exploration Rovers. It investigated rocks, soil and evidence of ancient water on Mars.",

        overview: `
            <p><strong>Launch:</strong> June 10, 2003</p>
            <p><strong>Landing:</strong> January 4, 2004</p>
            <p><strong>Mission:</strong> Investigate the geology of Mars and search for evidence of past water.</p>
            <p><strong>Last communication:</strong> March 22, 2010.</p>
            <p><strong>Mission ending:</strong> NASA ended recovery efforts in May 2011.</p>
        `,

        components: [
            {
                name: "Panoramic Camera",
                description: "Captured detailed images of the Martian landscape and helped scientists choose places to investigate.",
                x: 300, y: 65
            },
            {
                name: "Robotic Arm",
                description: "Positioned scientific instruments against rocks and soil for close examination.",
                x: 420, y: 180
            },
            {
                name: "APXS",
                description: "Measured the chemical composition of rocks and soil using alpha particles and X-rays.",
                x: 450, y: 245
            },
            {
                name: "Mössbauer Spectrometer",
                description: "Studied iron-bearing minerals to help scientists understand how Martian rocks formed and changed.",
                x: 365, y: 275
            },
            {
                name: "Solar Panels",
                description: "Collected sunlight and converted it into electricity for the rover.",
                x: 150, y: 155
            }
        ],

        photos: [
            {
                url: "https://images-assets.nasa.gov/image/PIA05000/PIA05000~orig.jpg",
                title: "Martian Terrain",
                caption: "A view of the surface explored during the Mars Exploration Rover missions."
            },
            {
                url: "https://images-assets.nasa.gov/image/PIA04413/PIA04413~orig.jpg",
                title: "Mars Exploration",
                caption: "Images from NASA's Mars rover exploration program."
            }
        ],

        discoveries: [
            {
                title: "Evidence of Water",
                description: "Spirit found evidence that water had changed rocks in the region it explored."
            },
            {
                title: "Unexpected Journey",
                description: "Spirit continued exploring for years beyond its original planned mission duration."
            }
        ],

        signal: {
            description: "Spirit's last communication with Earth was received on March 22, 2010. Attempts to restore contact continued but were unsuccessful.",
            status: "LAST COMMUNICATION · MARCH 22, 2010",
            date: "MARCH 22, 2010",
            transmission: `SPIRIT MISSION RECORD

LOCATION: GUSEV CRATER, MARS

LAST CONFIRMED COMMUNICATION:
MARCH 22, 2010

NASA continued attempts to re-establish
contact with the rover.

NO FURTHER COMMUNICATION WAS RECEIVED.

Recovery efforts ended in 2011.

END OF COMMUNICATION RECORD.`
        }
    },


    marsClimateOrbiter: {
        name: "Mars Climate Orbiter",
        destination: "mars",
        location: "MARS · NASA MARS SURVEYOR PROGRAM",
        year: "1998–1999",
        type: "orbiter",

        description:
            "Mars Climate Orbiter was designed to study the Martian atmosphere and climate. A navigation error caused the spacecraft to enter the atmosphere at an unsafe altitude.",

        overview: `
            <p><strong>Launch:</strong> December 11, 1998</p>
            <p><strong>Arrival attempt:</strong> September 23, 1999</p>
            <p><strong>Mission:</strong> Study Mars' atmosphere, climate and seasonal changes.</p>
            <p><strong>What happened:</strong> A navigation error involving different measurement units caused the spacecraft to approach Mars at an incorrect altitude.</p>
            <p><strong>Important:</strong> The mission did not return its planned orbital science results.</p>
        `,

        components: [
            {
                name: "High-Gain Antenna",
                description: "Used to communicate with Earth and transmit spacecraft information.",
                x: 300, y: 65
            },
            {
                name: "Solar Panels",
                description: "Generated electricity from sunlight to power the orbiter.",
                x: 150, y: 155
            },
            {
                name: "Mars Color Imager",
                description: "Designed to photograph Mars and monitor clouds, dust and atmospheric changes.",
                x: 220, y: 165
            },
            {
                name: "Infrared Radiometer",
                description: "Designed to measure atmospheric temperature and dust using infrared radiation.",
                x: 420, y: 160
            },
            {
                name: "Spacecraft Bus",
                description: "The main structure that supported the spacecraft's systems, electronics and instruments.",
                x: 365, y: 275
            }
        ],

        photos: [
            {
                url: "https://images-assets.nasa.gov/image/PIA02011/PIA02011~orig.jpg",
                title: "Mars",
                caption: "The planet that Mars Climate Orbiter was designed to study."
            },
            {
                url: "https://images-assets.nasa.gov/image/PIA00407/PIA00407~orig.jpg",
                title: "Martian Atmosphere",
                caption: "Mars observations provide context for the mission's atmospheric science goals."
            }
        ],

        discoveries: [
            {
                title: "A Critical Engineering Lesson",
                description: "The mission loss demonstrated why software, engineering teams and navigation systems must use consistent measurement units."
            },
            {
                title: "Mission Investigation",
                description: "The investigation identified a mismatch between metric and imperial units in spacecraft navigation calculations."
            }
        ],

        signal: {
            description: "The spacecraft communicated with Earth before its planned arrival. Contact was lost during the Mars orbit insertion attempt, and the signal was never reacquired.",
            status: "SIGNAL LOST · SEPTEMBER 23, 1999",
            date: "SEPTEMBER 23, 1999",
            transmission: `MARS CLIMATE ORBITER RECORD

DESTINATION: MARS

THE SPACECRAFT BEGAN ITS
PLANNED ORBIT INSERTION SEQUENCE.

CONTACT WAS LOST DURING THE
MARS ARRIVAL EVENT.

THE EXPECTED SIGNAL WAS NOT
REACQUIRED.

THE INVESTIGATION IDENTIFIED
A MEASUREMENT-UNIT MISMATCH
IN NAVIGATION CALCULATIONS.

END OF MISSION RECORD.`
        }
    },


    marsPolarLander: {
        name: "Mars Polar Lander",
        destination: "mars",
        location: "MARS · NASA MARS SURVEYOR PROGRAM",
        year: "1999",
        type: "lander",

        description:
            "Mars Polar Lander was designed to investigate the Martian south polar region and study the planet's soil, climate and water history.",

        overview: `
            <p><strong>Launch:</strong> January 3, 1999</p>
            <p><strong>Expected landing:</strong> December 3, 1999</p>
            <p><strong>Mission:</strong> Investigate the Martian polar environment and search for evidence of water and ice.</p>
            <p><strong>What happened:</strong> Controllers did not receive the expected signal after the planned landing. The spacecraft was presumed lost.</p>
            <p><strong>Important:</strong> Its planned surface science results were never received.</p>
        `,

        components: [
            {
                name: "Robotic Arm",
                description: "Designed to collect and move Martian soil samples for scientific analysis.",
                x: 420, y: 180
            },
            {
                name: "Stereo Camera",
                description: "Designed to capture images of the landing area and surrounding terrain.",
                x: 300, y: 65
            },
            {
                name: "TEGA",
                description: "The Thermal and Evolved Gas Analyzer was designed to heat soil samples and study gases released from them.",
                x: 450, y: 245
            },
            {
                name: "Meteorology Instruments",
                description: "Designed to measure environmental conditions such as temperature, pressure and wind.",
                x: 155, y: 265
            },
            {
                name: "Lidar",
                description: "Designed to investigate atmospheric dust and clouds using laser light.",
                x: 150, y: 155
            }
        ],

        photos: [
            {
                url: "https://images-assets.nasa.gov/image/PIA02011/PIA02011~orig.jpg",
                title: "Mars Polar Region",
                caption: "The polar environment was the target of the mission."
            },
            {
                url: "https://images-assets.nasa.gov/image/PIA00407/PIA00407~orig.jpg",
                title: "Mars Surface",
                caption: "A view of Mars, the destination of the lander."
            }
        ],

        discoveries: [
            {
                title: "Planned Polar Science",
                description: "The mission was designed to investigate soil, ice and atmospheric conditions near the Martian south pole."
            },
            {
                title: "No Confirmed Surface Results",
                description: "Because communication was never established after the expected landing, the planned surface measurements were not returned."
            }
        ],

        signal: {
            description: "The lander was expected to communicate after reaching the Martian surface. No signal was received, and attempts to establish contact were unsuccessful.",
            status: "NO CONFIRMED LANDING SIGNAL",
            date: "DECEMBER 3, 1999",
            transmission: `MARS POLAR LANDER RECORD

DESTINATION: MARTIAN SOUTH POLE

EXPECTED LANDING:
DECEMBER 3, 1999

EXPECTED POST-LANDING
COMMUNICATION: NOT RECEIVED.

NO CONFIRMED SURFACE DATA
WAS RETURNED.

THE SPACECRAFT WAS PRESUMED LOST.

END OF MISSION RECORD.`
        }
    },


    sojourner: {
        name: "Sojourner",
        destination: "mars",
        location: "MARS · MARS PATHFINDER MISSION",
        year: "1997",
        type: "rover",

        description:
            "Sojourner was the first successful Mars rover. It explored the area around the Pathfinder lander and examined nearby rocks and soil.",

        overview: `
            <p><strong>Launch:</strong> December 4, 1996</p>
            <p><strong>Landing:</strong> July 4, 1997</p>
            <p><strong>Mission:</strong> Demonstrate mobile robotic exploration on Mars and study nearby rocks and soil.</p>
            <p><strong>Last received data:</strong> September 27, 1997.</p>
            <p><strong>Important:</strong> Sojourner communicated through the Pathfinder lander, which served as its communication link with Earth.</p>
        `,

        components: [
            {
                name: "Front Cameras",
                description: "Captured images of rocks and the terrain in front of the rover, helping it navigate and investigate the surface.",
                x: 300, y: 65
            },
            {
                name: "Rear Camera",
                description: "Captured views behind the rover and helped scientists observe its surroundings.",
                x: 220, y: 165
            },
            {
                name: "APXS",
                description: "The Alpha Proton X-ray Spectrometer measured the chemical composition of rocks and soil.",
                x: 420, y: 180
            },
            {
                name: "Wheels",
                description: "Six independently controlled wheels helped the rover move across the rocky Martian surface.",
                x: 450, y: 265
            },
            {
                name: "Solar Panels",
                description: "Collected sunlight to provide electrical energy for the rover.",
                x: 150, y: 155
            }
        ],

        photos: [
            {
                url: "https://images-assets.nasa.gov/image/PIA01122/PIA01122~orig.jpg",
                title: "Mars Pathfinder",
                caption: "The Pathfinder mission delivered Sojourner to the Martian surface."
            },
            {
                url: "https://images-assets.nasa.gov/image/PIA01123/PIA01123~orig.jpg",
                title: "Sojourner Exploration",
                caption: "Images from the first successful Mars rover mission."
            }
        ],

        discoveries: [
            {
                title: "A New Way to Explore",
                description: "Sojourner demonstrated that a small mobile robot could travel across Mars and investigate rocks directly."
            },
            {
                title: "Rock Composition",
                description: "The rover used its APXS instrument to study the chemical composition of Martian rocks and soil."
            }
        ],

        signal: {
            description: "Sojourner sent information through the Pathfinder lander, which relayed data to Earth. The last data from the mission was received on September 27, 1997.",
            status: "LAST RECEIVED DATA · SEPTEMBER 27, 1997",
            date: "SEPTEMBER 27, 1997",
            transmission: `MARS PATHFINDER RECORD

ROVER: SOJOURNER
DESTINATION: MARS

LAST RECEIVED MISSION DATA:
SEPTEMBER 27, 1997

COMMUNICATION LINK:
SOJOURNER → PATHFINDER LANDER → EARTH

THE MISSION RETURNED:
MORE THAN 550 ROVER IMAGES
AND SCIENTIFIC MEASUREMENTS.

END OF MISSION RECORD.`
        }
    },


    maven: {
        name: "MAVEN",
        destination: "mars",
        location: "MARS · MARS ATMOSPHERE AND VOLATILE EVOLUTION",
        year: "2013–2026",
        type: "orbiter",

        description:
            "MAVEN studied the upper atmosphere of Mars and investigated how the planet lost much of its atmosphere to space.",

        overview: `
            <p><strong>Full name:</strong> Mars Atmosphere and Volatile Evolution</p>
            <p><strong>Launch:</strong> November 18, 2013</p>
            <p><strong>Arrival at Mars:</strong> September 21, 2014</p>
            <p><strong>Mission:</strong> Study the Martian upper atmosphere, ionosphere and interaction with the solar wind.</p>
            <p><strong>Last signal:</strong> December 6, 2025.</p>
            <p><strong>Mission ending:</strong> NASA declared the mission ended on June 3, 2026, after determining the spacecraft was not recoverable.</p>
        `,

        components: [
            {
                name: "High-Gain Antenna",
                description: "A dish-shaped antenna that communicated with Earth and transmitted scientific data over the enormous distance between Mars and our planet.",
                x: 300, y: 65
            },
            {
                name: "Solar Arrays",
                description: "Large solar panels that converted sunlight into electrical power for the spacecraft.",
                x: 150, y: 155
            },
            {
                name: "Magnetometer",
                description: "Measured magnetic fields around Mars to help scientists understand how the solar wind interacts with the planet.",
                x: 480, y: 265
            },
            {
                name: "Imaging Ultraviolet Spectrograph",
                description: "Observed ultraviolet light to study the composition and structure of the Martian upper atmosphere.",
                x: 420, y: 160
            },
            {
                name: "Particles and Fields Instruments",
                description: "Measured charged particles and the solar wind to investigate how atmospheric material escapes from Mars.",
                x: 365, y: 275
            }
        ],

        photos: [
            {
                url: "https://images-assets.nasa.gov/image/PIA17411/PIA17411~orig.jpg",
                title: "MAVEN at Mars",
                caption: "An artist's concept of the MAVEN spacecraft studying the Martian atmosphere."
            },
            {
                url: "https://images-assets.nasa.gov/image/PIA17412/PIA17412~orig.jpg",
                title: "Mars and Its Atmosphere",
                caption: "MAVEN investigated the upper atmosphere and the effects of the solar wind."
            }
        ],

        discoveries: [
            {
                title: "Atmospheric Escape",
                description: "MAVEN helped scientists understand how gases from Mars' atmosphere escape into space."
            },
            {
                title: "Solar Storm Effects",
                description: "Its observations showed how solar activity can influence the loss of atmospheric material from Mars."
            },
            {
                title: "Auroras on Mars",
                description: "MAVEN observations helped scientists investigate different types of auroras in the Martian atmosphere."
            },
            {
                title: "Communication Relay",
                description: "MAVEN also helped relay communications between Earth and rovers operating on the Martian surface."
            }
        ],

        signal: {
            description: "NASA last heard from MAVEN on December 6, 2025, after it passed behind Mars. Attempts to re-establish contact were unsuccessful. NASA declared the mission ended in June 2026.",
            status: "MISSION ENDED · JUNE 3, 2026",
            date: "DECEMBER 6, 2025",
            transmission: `MAVEN COMMUNICATION RECORD

DESTINATION: MARS

LAST SIGNAL DETECTED:
DECEMBER 6, 2025

THE SPACECRAFT PASSED BEHIND MARS.

AFTER IT EMERGED,
NASA'S DEEP SPACE NETWORK
DID NOT DETECT ITS SIGNAL.

RECOVERY ATTEMPTS WERE UNSUCCESSFUL.

NASA DECLARED THE MISSION ENDED
ON JUNE 3, 2026.

END OF MISSION RECORD.`
        }
    },


    /* ====================================
       MOON MISSIONS
    ==================================== */

    lunarProspector: {
        name: "Lunar Prospector",
        destination: "moon",
        location: "THE MOON · NASA LUNAR PROSPECTOR",
        year: "1998–1999",
        type: "orbiter",

        description:
            "Lunar Prospector orbited the Moon to investigate its surface composition, gravity field and magnetic environment.",

        overview: `
            <p><strong>Launch:</strong> January 6, 1998</p>
            <p><strong>Arrival at the Moon:</strong> January 11, 1998</p>
            <p><strong>Mission:</strong> Map the Moon's chemical composition and investigate possible water ice.</p>
            <p><strong>Mission ending:</strong> The spacecraft was intentionally directed to impact a permanently shadowed lunar crater on July 31, 1999.</p>
            <p><strong>Note:</strong> Lunar Prospector did not carry a conventional camera. Its science archive is mainly instrument measurements and maps.</p>
        `,

        components: [
            {
                name: "Gamma-Ray Spectrometer",
                description: "Detected gamma rays emitted by lunar materials, helping scientists identify elements on the Moon.",
                x: 300, y: 65
            },
            {
                name: "Neutron Spectrometer",
                description: "Measured neutrons coming from the lunar surface. Its observations helped identify hydrogen-rich areas that may contain water ice.",
                x: 420, y: 160
            },
            {
                name: "Magnetometer",
                description: "Measured the Moon's magnetic environment.",
                x: 480, y: 265
            },
            {
                name: "Alpha Particle Spectrometer",
                description: "Detected alpha particles that could reveal gases released from the lunar surface.",
                x: 155, y: 265
            },
            {
                name: "Solar Panels",
                description: "Collected sunlight and supplied electrical power to the spacecraft.",
                x: 150, y: 155
            }
        ],

        photos: [
            {
                url: "https://images-assets.nasa.gov/image/PIA00302/PIA00302~orig.jpg",
                title: "The Moon",
                caption: "Lunar exploration and mapping provide information about the Moon's surface."
            },
            {
                url: "https://images-assets.nasa.gov/image/PIA00405/PIA00405~orig.jpg",
                title: "Lunar Surface",
                caption: "Lunar observations help scientists investigate the Moon's composition."
            }
        ],

        discoveries: [
            {
                title: "Hydrogen Near the Poles",
                description: "Neutron measurements revealed hydrogen-rich regions near the lunar poles, supporting the possibility of water ice."
            },
            {
                title: "Global Mapping",
                description: "The mission produced maps of the Moon's elemental composition, gravity and magnetic properties."
            }
        ],

        signal: {
            description: "Lunar Prospector returned scientific measurements while orbiting the Moon. Its mission ended with a planned impact into a permanently shadowed crater.",
            status: "MISSION ENDED · JULY 31, 1999",
            date: "JULY 31, 1999",
            transmission: `LUNAR PROSPECTOR RECORD

DESTINATION: THE MOON

FINAL MISSION EVENT:
CONTROLLED LUNAR IMPACT

DATE:
JULY 31, 1999

THE SPACECRAFT WAS DIRECTED
TOWARD A PERMANENTLY SHADOWED
LUNAR CRATER.

THE MISSION HAD COMPLETED
ITS PLANNED SCIENCE OPERATIONS.

END OF MISSION RECORD.`
        }
    },


    ladee: {
        name: "LADEE",
        destination: "moon",
        location: "THE MOON · LUNAR ATMOSPHERE AND DUST ENVIRONMENT EXPLORER",
        year: "2013–2014",
        type: "orbiter",

        description:
            "LADEE orbited the Moon to investigate its extremely thin atmosphere, lunar dust and the environment near the lunar surface.",

        overview: `
            <p><strong>Full name:</strong> Lunar Atmosphere and Dust Environment Explorer</p>
            <p><strong>Launch:</strong> September 6, 2013</p>
            <p><strong>Entered lunar orbit:</strong> October 6, 2013</p>
            <p><strong>Mission:</strong> Study the lunar exosphere, dust and conditions close to the Moon's surface.</p>
            <p><strong>Mission ending:</strong> LADEE intentionally impacted the Moon on April 18, 2014, after completing its science mission.</p>
        `,

        components: [
            {
                name: "High-Gain Antenna",
                description: "Communicated with Earth and sent scientific information from lunar orbit.",
                x: 300, y: 65
            },
            {
                name: "Solar Panels",
                description: "Converted sunlight into electrical energy to power the spacecraft and its instruments.",
                x: 150, y: 155
            },
            {
                name: "Neutral Mass Spectrometer",
                description: "Measured the composition of the Moon's extremely thin atmosphere, including gases such as argon and neon.",
                x: 420, y: 160
            },
            {
                name: "Lunar Dust Experiment",
                description: "Detected tiny dust particles around the Moon and helped scientists investigate how lunar dust behaves.",
                x: 480, y: 265
            },
            {
                name: "Ultraviolet and Visible Spectrometer",
                description: "Studied the lunar exosphere by observing ultraviolet and visible light.",
                x: 365, y: 275
            }
        ],

        photos: [
            {
                url: "https://images-assets.nasa.gov/image/PIA17607/PIA17607~orig.jpg",
                title: "LADEE Spacecraft",
                caption: "An artist's concept of LADEE orbiting the Moon."
            },
            {
                url: "https://images-assets.nasa.gov/image/PIA17563/PIA17563~orig.jpg",
                title: "The Lunar Environment",
                caption: "LADEE studied the extremely thin atmosphere and dust environment surrounding the Moon."
            }
        ],

        discoveries: [
            {
                title: "Neon in the Lunar Atmosphere",
                description: "LADEE's Neutral Mass Spectrometer detected neon in the Moon's extremely thin exosphere."
            },
            {
                title: "Lunar Dust",
                description: "The Lunar Dust Experiment recorded thousands of dust impacts and helped investigate the dust environment around the Moon."
            },
            {
                title: "Laser Communication",
                description: "LADEE demonstrated laser communication between the Moon and Earth, showing that lasers could transmit large amounts of data."
            }
        ],

        signal: {
            description: "LADEE completed its science mission before its planned impact. Contact was lost as the spacecraft passed behind the Moon during its final mission event.",
            status: "MISSION ENDED · APRIL 18, 2014",
            date: "APRIL 18, 2014",
            transmission: `LADEE FINAL MISSION RECORD

DESTINATION: THE MOON

SCIENCE MISSION: COMPLETED

FINAL EVENT:
PLANNED LUNAR IMPACT

DATE:
APRIL 18, 2014 UTC

CONTACT WAS LOST AS THE
SPACECRAFT PASSED BEHIND THE MOON.

THE SPACECRAFT IMPACTED
THE LUNAR SURFACE AS PLANNED.

END OF MISSION RECORD.`
        }
    }

};


/* ========================================
   2. WELCOME BACKGROUND SLIDESHOW
======================================== */

const welcomeImages = [
    "https://images-assets.nasa.gov/image/PIA01143/PIA01143~orig.jpg",
    "https://images-assets.nasa.gov/image/PIA06193/PIA06193~orig.jpg"
];

let currentBackground = 0;

function changeWelcomeBackground() {

    const welcome = document.getElementById("welcome");

    if (!welcome) return;

    currentBackground =
        (currentBackground + 1) % welcomeImages.length;

    welcome.style.backgroundImage =
        `url("${welcomeImages[currentBackground]}")`;
}

setInterval(changeWelcomeBackground, 7000);


/* ========================================
   3. HTML ELEMENT REFERENCES
======================================== */

const welcomeScreen = document.getElementById("welcome");
const museum = document.getElementById("museum");
const gallery = document.getElementById("mission-gallery");
const exhibit = document.getElementById("exhibit");

const enterButton = document.getElementById("enter-museum");
const homeButton = document.getElementById("back-home");
const galleryButton = document.getElementById("back-gallery");

const missionTitle = document.getElementById("mission-title");
const missionLocation = document.getElementById("mission-location");
const missionDescription = document.getElementById("mission-description");

const missionOverview = document.getElementById("mission-overview");
const schematic = document.getElementById("spacecraft-schematic");
const componentInformation = document.getElementById("component-information");

const missionPhotos = document.getElementById("mission-photos");
const missionDiscoveries = document.getElementById("mission-discoveries");

const signalDescription = document.getElementById("signal-description");
const signalVisual = document.getElementById("signal-visual");
const signalStatus = document.getElementById("signal-status");
const replayButton = document.getElementById("replay-signal");

const filterButtons =
    document.querySelectorAll(".filter-button");


/* ========================================
   4. ENTER AND NAVIGATION
======================================== */

enterButton.addEventListener("click", () => {

    welcomeScreen.classList.add("hidden");
    museum.classList.remove("hidden");

    exhibit.classList.add("hidden");
    gallery.classList.remove("hidden");

    window.scrollTo(0, 0);

});


homeButton.addEventListener("click", () => {

    museum.classList.add("hidden");
    welcomeScreen.classList.remove("hidden");

    window.scrollTo(0, 0);

});


galleryButton.addEventListener("click", () => {

    stopTyping();

    exhibit.classList.add("hidden");
    gallery.classList.remove("hidden");

    window.scrollTo(0, 0);

});


/* ========================================
   5. DESTINATION FILTERS
======================================== */

let activeDestination = "all";

function filterMissions(destination) {

    activeDestination = destination;

    filterButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.destination === destination
        );

    });

    createMissionCards();

}


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const destination = button.dataset.destination;

        filterMissions(destination);

    });

});


/* ========================================
   6. CREATE MISSION CARDS
======================================== */

function createMissionCards() {

    gallery.innerHTML = "";

    Object.entries(missions).forEach(([id, mission]) => {

        if (
            activeDestination !== "all" &&
            mission.destination !== activeDestination
        ) {
            return;
        }

        const card = document.createElement("article");

        card.className = "mission-card";

        const imageURL = mission.photos[0].url;

        card.innerHTML = `
            <img
                src="${imageURL}"
                alt="${mission.name}"
                loading="lazy"
                onerror="this.style.display='none'"
            >

            <div class="mission-card-info">
                <h3>${mission.name}</h3>
                <p>${mission.location}</p>
                <p>${mission.year}</p>
            </div>
        `;

        card.addEventListener("click", () => {
            openMission(id);
        });

        gallery.appendChild(card);

    });

}

createMissionCards();


/* ========================================
   7. OPEN A MISSION EXHIBIT
======================================== */

function openMission(id) {

    const mission = missions[id];

    if (!mission) return;

    stopTyping();

    gallery.classList.add("hidden");
    exhibit.classList.remove("hidden");

    missionTitle.textContent = mission.name;
    missionLocation.textContent = mission.location;
    missionDescription.textContent = mission.description;

    missionOverview.innerHTML = mission.overview;

    createSchematic(mission);
    createPhotos(mission);
    createDiscoveries(mission);
    createSignalArchive(mission);

    componentInformation.innerHTML = `
        <h4>Explore the spacecraft</h4>
        <p>Select one of the numbered markers on the technical diagram to learn about its function.</p>
    `;

    window.scrollTo(0, 0);

}


/* ========================================
   8. SPACECRAFT TECHNICAL DIAGRAM
======================================== */

/*
   These are simplified conceptual diagrams.
   They are not exact engineering blueprints
   or to-scale spacecraft drawings.
*/

function createSchematic(mission) {

    const markers = mission.components.map((component, index) => {

        const number = index + 1;

        return `
            <g
                class="component-marker"
                data-index="${index}"
                tabindex="0"
                role="button"
                aria-label="${component.name}"
            >

                <circle
                    cx="${component.x}"
                    cy="${component.y}"
                    r="12"
                ></circle>

                <text
                    x="${component.x}"
                    y="${component.y}"
                >
                    ${number}
                </text>

            </g>
        `;

    }).join("");


    let spacecraftShape = "";


    /* ROVER DIAGRAM */

    if (mission.type === "rover") {

        spacecraftShape = `
            <!-- Rover body -->
            <rect
                x="220" y="130"
                width="160" height="110"
                fill="none"
                stroke="black"
                stroke-width="4"
            />

            <!-- Camera mast -->
            <line
                x1="300" y1="130"
                x2="300" y2="85"
                stroke="black"
                stroke-width="4"
            />

            <rect
                x="275" y="65"
                width="50" height="20"
                fill="none"
                stroke="black"
                stroke-width="3"
            />

            <!-- Solar panels -->
            <rect
                x="90" y="135"
                width="100" height="65"
                fill="none"
                stroke="black"
                stroke-width="3"
            />

            <line x1="110" y1="135" x2="110" y2="200" stroke="black"/>
            <line x1="140" y1="135" x2="140" y2="200" stroke="black"/>
            <line x1="170" y1="135" x2="170" y2="200" stroke="black"/>

            <!-- Robotic arm -->
            <line
                x1="380" y1="170"
                x2="430" y2="200"
                stroke="black"
                stroke-width="5"
            />

            <circle
                cx="430" cy="200"
                r="9"
                fill="none"
                stroke="black"
                stroke-width="3"
            />

            <!-- Wheels -->
            <circle cx="245" cy="255" r="23" fill="none" stroke="black" stroke-width="4"/>
            <circle cx="355" cy="255" r="23" fill="none" stroke="black" stroke-width="4"/>
            <circle cx="300" cy="255" r="23" fill="none" stroke="black" stroke-width="4"/>
        `;

    }


    /* LANDER DIAGRAM */

    else if (mission.type === "lander") {

        spacecraftShape = `
            <!-- Lander body -->
            <rect
                x="225" y="125"
                width="150" height="100"
                fill="none"
                stroke="black"
                stroke-width="4"
            />

            <!-- Camera -->
            <line
                x1="300" y1="125"
                x2="300" y2="85"
                stroke="black"
                stroke-width="4"
            />

            <rect
                x="280" y="65"
                width="40" height="20"
                fill="none"
                stroke="black"
                stroke-width="3"
            />

            <!-- Landing legs -->
            <line x1="240" y1="225" x2="190" y2="300" stroke="black" stroke-width="4"/>
            <line x1="360" y1="225" x2="410" y2="300" stroke="black" stroke-width="4"/>

            <line x1="190" y1="300" x2="220" y2="300" stroke="black" stroke-width="4"/>
            <line x1="380" y1="300" x2="410" y2="300" stroke="black" stroke-width="4"/>

            <!-- Instrument arm -->
            <line
                x1="375" y1="170"
                x2="445" y2="210"
                stroke="black"
                stroke-width="5"
            />

            <circle
                cx="445" cy="210"
                r="10"
                fill="none"
                stroke="black"
                stroke-width="3"
            />
        `;

    }


    /* ORBITER DIAGRAM */

    else {

        spacecraftShape = `
            <!-- Main spacecraft body -->
            <rect
                x="245" y="125"
                width="110" height="115"
                fill="none"
                stroke="black"
                stroke-width="4"
            />

            <!-- Antenna -->
            <line
                x1="300" y1="125"
                x2="300" y2="85"
                stroke="black"
                stroke-width="4"
            />

            <circle
                cx="300" cy="70"
                r="28"
                fill="none"
                stroke="black"
                stroke-width="3"
            />

            <!-- Left solar panel -->
            <rect
                x="75" y="150"
                width="145" height="65"
                fill="none"
                stroke="black"
                stroke-width="3"
            />

            <line x1="110" y1="150" x2="110" y2="215" stroke="black"/>
            <line x1="145" y1="150" x2="145" y2="215" stroke="black"/>
            <line x1="180" y1="150" x2="180" y2="215" stroke="black"/>

            <!-- Right solar panel -->
            <rect
                x="380" y="150"
                width="145" height="65"
                fill="none"
                stroke="black"
                stroke-width="3"
            />

            <line x1="415" y1="150" x2="415" y2="215" stroke="black"/>
            <line x1="450" y1="150" x2="450" y2="215" stroke="black"/>
            <line x1="485" y1="150" x2="485" y2="215" stroke="black"/>

            <!-- Instrument boom -->
            <line
                x1="355" y1="220"
                x2="465" y2="280"
                stroke="black"
                stroke-width="4"
            />

            <circle
                cx="465" cy="280"
                r="10"
                fill="none"
                stroke="black"
                stroke-width="3"
            />
        `;

    }


    schematic.innerHTML = `
        <svg
            viewBox="0 0 600 350"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="${mission.name} conceptual spacecraft diagram"
        >

            <g fill="none" stroke="black">
                ${spacecraftShape}
            </g>

            ${markers}

            <text
                x="300"
                y="335"
                text-anchor="middle"
                font-size="11"
                fill="#333"
            >
                CONCEPTUAL DIAGRAM · NOT TO SCALE
            </text>

        </svg>
    `;


    /* COMPONENT MARKER INTERACTION */

    schematic.querySelectorAll(".component-marker").forEach(marker => {

        const showComponent = () => {

            const index = Number(marker.dataset.index);

            const component = mission.components[index];

            componentInformation.innerHTML = `
                <p class="eyebrow">COMPONENT ${index + 1}</p>
                <h4>${component.name}</h4>
                <p>${component.description}</p>
            `;

        };

        marker.addEventListener("click", showComponent);

        marker.addEventListener("keydown", event => {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();

                showComponent();

            }

        });

    });

}


/* ========================================
   9. MISSION PHOTO GALLERY
======================================== */

function createPhotos(mission) {

    missionPhotos.innerHTML = "";

    mission.photos.forEach(photo => {

        const item = document.createElement("article");

        item.className = "photo-item";

        item.innerHTML = `
            <img
                src="${photo.url}"
                alt="${photo.title}"
                loading="lazy"
                onerror="this.style.display='none'"
            >

            <div class="photo-caption">
                <h4>${photo.title}</h4>
                <p>${photo.caption}</p>
            </div>
        `;

        missionPhotos.appendChild(item);

    });

}


/* ========================================
   10. SCIENTIFIC DISCOVERIES
======================================== */

function createDiscoveries(mission) {

    missionDiscoveries.innerHTML = "";

    mission.discoveries.forEach(discovery => {

        const card = document.createElement("article");

        card.className = "discovery-card";

        card.innerHTML = `
            <h4>${discovery.title}</h4>
            <p>${discovery.description}</p>
        `;

        missionDiscoveries.appendChild(card);

    });

}


/* ========================================
   11. TYPEWRITER SIGNAL ARCHIVE
======================================== */

let messageTypingTimer = null;
let activeMessageMission = null;


function stopTyping() {

    if (messageTypingTimer !== null) {

        clearInterval(messageTypingTimer);

        messageTypingTimer = null;

    }

}


function createSignalArchive(mission) {

    stopTyping();

    activeMessageMission = mission;

    signalDescription.textContent = mission.signal.description;

    signalStatus.textContent = "PREPARING ARCHIVE...";

    signalVisual.innerHTML = `
        <div class="transmission-message">

            <p class="message-label">
                MISSION COMMUNICATION ARCHIVE
            </p>

            <p class="message-date"></p>

            <pre class="message-content" id="typed-message"></pre>

            <p class="message-footer">
                ${mission.name.toUpperCase()} · MISSION ARCHIVE
            </p>

        </div>
    `;


    const messageElement =
        document.getElementById("typed-message");

    const dateElement =
        signalVisual.querySelector(".message-date");


    dateElement.textContent = mission.signal.date;

    const message = mission.signal.transmission;

    let character = 0;

    signalStatus.textContent = "RECEIVING ARCHIVE...";


    messageTypingTimer = setInterval(() => {

        messageElement.textContent += message.charAt(character);

        character++;

        if (character >= message.length) {

            stopTyping();

            signalStatus.textContent =
                mission.signal.status;

        }

    }, 28);

}


/* ========================================
   12. REPLAY TRANSMISSION
======================================== */

replayButton.addEventListener("click", () => {

    if (activeMessageMission) {

        createSignalArchive(activeMessageMission);

    }

});
const roverLaunchButton =
    document.getElementById("open-rover-game");

if (roverLaunchButton) {

    roverLaunchButton.addEventListener("click", () => {
        window.location.href = "rover.html";
    });

}