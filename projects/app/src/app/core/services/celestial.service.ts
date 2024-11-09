import { Injectable } from '@angular/core';
import { CelestialTypeModel } from '../models/celestial-type.model';

@Injectable({
  providedIn: 'root'
})
export class CelestialService {

  constructor() { }

  celestialTypeList: CelestialTypeModel[] = [
    {
      "name": "Star",
      "description": "A star is an astronomical object consisting of a luminous spheroid of plasma held together by its own gravity.",
      "celestialList": [
        {
          "id": "sun",
          "name": "Sun",
          "imageurl": "assets/images/sun.jpg",
          "description": "The Sun is a G-type main-sequence star at the center of our Solar System, comprising about 99.86% of the system's mass. The Sun produces energy through nuclear fusion in its core, where hydrogen atoms merge to form helium, releasing light and heat. This fusion process has sustained the Sun for billions of years and will continue for billions more. The surface temperature reaches approximately 5,500 degrees Celsius, while temperatures within the core can soar to around 15 million degrees Celsius. Surrounding the Sun is the corona, a thin outer layer visible during solar eclipses. Its magnetic field undergoes an 11-year cycle, influencing solar activity, which includes sunspots and solar flares. These phenomena impact space weather, affecting satellite operations and power grids on Earth. The Sun's solar wind, a stream of charged particles, extends beyond the planets, creating a vast bubble known as the heliosphere. As our primary energy source, the Sun plays a critical role in sustaining life on Earth, influencing climate, seasons, and ecosystems."
        },
        {
          "id": "alpha-centauri",
          "name": "Alpha Centauri",
          "imageurl": "assets/images/alpha-centauri.jpg",
          "description": "Alpha Centauri is the closest star system to the Solar System, located about 4.37 light-years away. This triple star system consists of Alpha Centauri A, Alpha Centauri B, and Proxima Centauri. Alpha Centauri A and B are Sun-like stars, while Proxima Centauri is a small red dwarf and the closest individual star to Earth. Proxima hosts an exoplanet, Proxima b, in its habitable zone, spurring interest in its potential to harbor life. The brightness and relative size of Alpha Centauri A and B allow astronomers to study their composition and behavior closely, providing insights into star formation and the evolution of binary systems. The Alpha Centauri system has been considered a potential target for interstellar exploration due to its proximity, making it a focal point for both scientific study and conceptual missions like the Breakthrough Starshot initiative. With advancements in observational technology, scientists hope to learn more about the atmospheric conditions and habitability of Proxima b and similar exoplanets within nearby star systems."
        },
        {
          "id": "betelgeuse",
          "name": "Betelgeuse",
          "imageurl": "assets/images/betelgeuse.jpg",
          "description": "Betelgeuse, located in the constellation Orion, is a red supergiant and one of the largest stars visible to the naked eye. Approximately 700 light-years away, Betelgeuse is in a late stage of stellar evolution and is expected to explode as a supernova in the next million years. Its size is about 1,400 times the Sun's diameter, so large that it would extend past Mars if placed in our Solar System's center. Recent dimming events have sparked speculation and interest, highlighting changes in its outer layers. Betelgeuse’s behavior provides astronomers with a rare chance to study the late-life cycle of massive stars, particularly the transition to supernova. When Betelgeuse finally explodes, it will create a spectacular display in the sky, outshining other stars for a short period. Its supernova will produce elements essential to planet and life formation, showcasing the life cycle of stars and their role in cosmic evolution."
        }
      ]
    },
    {
      "name": "Planet",
      "description": "A planet is an astronomical body orbiting a star or stellar remnant that is massive enough to be rounded by its own gravity.",
      "celestialList": [
        {
          "id": "mercury",
          "name": "Mercury",
          "imageurl": "assets/images/mercury.jpg",
          "description": "Mercury, the smallest planet in the Solar System, is also the closest to the Sun, completing an orbit in just 88 Earth days. Its very thin atmosphere, or exosphere, consists of oxygen, sodium, and hydrogen but offers no protection from solar radiation or meteoroid impacts. Daytime temperatures can soar to 430°C (800°F), while nighttime temperatures plunge to -180°C (-290°F) due to the absence of a substantial atmosphere. Mercury’s surface, covered in craters from meteoroid impacts, resembles the Moon’s, with features such as Caloris Basin, one of the largest impact basins. Mercury has a large, iron-rich core, which may indicate that the planet was once much larger but lost part of its outer layers. Studying Mercury helps scientists understand the formation and evolution of terrestrial planets, providing clues about early Solar System processes."
        },
        {
          "id": "venus",
          "name": "Venus",
          "imageurl": "assets/images/venus.jpg",
          "description": "Venus, the second planet from the Sun, is often called Earth’s twin due to its similar size and structure. However, Venus has an extremely dense atmosphere, mainly of carbon dioxide, which creates a runaway greenhouse effect, leading to surface temperatures as high as 475°C (887°F). This atmosphere, thick with clouds of sulfuric acid, traps heat, making Venus hotter than Mercury, despite being farther from the Sun. Its slow retrograde rotation means the Sun rises in the west and sets in the east. The surface is marked by volcanic plains and mountain ranges, with possible evidence of ongoing volcanic activity. Because of its dense atmosphere and proximity to Earth, Venus is a key focus for studying greenhouse effects and atmospheric dynamics."
        },
        {
          "id": "earth",
          "name": "Earth",
          "imageurl": "assets/images/earth.jpg",
          "description": "Earth is the third planet from the Sun and the only known planet to support life. Covering about 70% of its surface, oceans play a crucial role in regulating climate and supporting a wide range of ecosystems. Earth's atmosphere is composed of 78% nitrogen, 21% oxygen, and trace amounts of other gases, creating a balance essential for life. The planet's magnetic field shields it from solar and cosmic radiation, and its rotation and orbit contribute to the diversity of climates and seasons. Earth has a single natural satellite, the Moon, which influences tides and stabilizes the planet's axial tilt, contributing to a relatively stable climate. Geologically active, Earth has plate tectonics, which cause earthquakes, volcanic activity, and mountain formation, recycling materials and shaping the surface over time. The biosphere, supported by Earth's unique conditions, hosts millions of species, forming complex ecosystems and contributing to the planet's biodiversity."
        },
        {
          "id": "mars",
          "name": "Mars",
          "imageurl": "assets/images/mars.jpg",
          "description": "Mars, the fourth planet from the Sun, is known as the 'Red Planet' due to its iron oxide-rich surface. Mars has a thin atmosphere composed mostly of carbon dioxide, resulting in extreme temperature fluctuations. Surface features include the largest volcano in the Solar System, Olympus Mons, and the deep canyon Valles Marineris. Mars has polar ice caps that contain water and carbon dioxide ice, which change with the seasons. The presence of ancient river valleys and lake beds suggests that Mars once had liquid water, raising questions about past life. Mars has two small, irregularly shaped moons, Phobos and Deimos, which are thought to be captured asteroids. Ongoing exploration, such as NASA's Perseverance rover, aims to uncover signs of ancient microbial life and gather data for potential future human missions."
        },
        {
          "id": "jupiter",
          "name": "Jupiter",
          "imageurl": "assets/images/jupiter.jpg",
          "description": "Jupiter, the fifth planet from the Sun, is the largest planet in the Solar System, with a mass more than twice that of all other planets combined. This gas giant primarily consists of hydrogen and helium and lacks a solid surface, instead featuring bands of clouds and powerful storms, the most famous being the Great Red Spot, a massive storm larger than Earth. Jupiter has a strong magnetic field and a system of rings, though less prominent than Saturn's. It has at least 79 moons, including the four largest, known as the Galilean moons: Io, Europa, Ganymede, and Callisto. Europa, with its subsurface ocean, is considered one of the prime candidates for extraterrestrial life. Jupiter’s immense gravity has a significant influence on surrounding celestial objects, and studying its atmosphere and moons provides insights into planetary formation and the conditions required for habitability."
        },
        {
          "id": "saturn",
          "name": "Saturn",
          "imageurl": "assets/images/saturn.jpg",
          "description": "Saturn, the sixth planet from the Sun, is renowned for its complex and beautiful ring system, composed of ice and rock particles. A gas giant like Jupiter, Saturn's atmosphere consists mostly of hydrogen and helium, with powerful winds and storms, including the long-lasting hexagonal storm at its north pole. Saturn has 83 confirmed moons, with Titan being the largest and the only moon in the Solar System with a substantial atmosphere. Titan's surface lakes and rivers of liquid methane and ethane make it one of the most intriguing bodies in the Solar System, and the possibility of life is a major area of interest. Saturn’s rings are a focal point for understanding planetary ring systems, their formation, and dynamics. Observations from missions like Cassini have expanded our knowledge of Saturn's complex system, its atmospheric dynamics, and its diverse moons."
        },
        {
          "id": "uranus",
          "name": "Uranus",
          "imageurl": "assets/images/uranus.jpg",
          "description": "Uranus, the seventh planet from the Sun, is a unique ice giant with a composition that includes water, ammonia, and methane ices. It has a pale blue color due to methane in its atmosphere, which absorbs red light. Uranus rotates on its side, with an axial tilt of about 98 degrees, likely due to a massive collision in its early history. This tilt causes extreme seasonal variations, with each pole experiencing 42 years of continuous sunlight or darkness. Uranus has 27 known moons and a faint ring system, and its magnetic field is unusually tilted compared to the rotation axis. The structure and atmosphere of Uranus remain somewhat mysterious, as it has only been visited briefly by the Voyager 2 spacecraft. Future missions to Uranus could provide further insights into its interior and the processes shaping ice giants."
        },
        {
          "id": "neptune",
          "name": "Neptune",
          "imageurl": "assets/images/neptune.jpg",
          "description": "Neptune, the eighth and farthest planet from the Sun, is a deep blue ice giant similar in composition to Uranus, with a mixture of hydrogen, helium, and methane. Known for its intense weather patterns, Neptune has the fastest winds in the Solar System, reaching speeds up to 2,100 km/h (1,300 mph). The planet has a faint ring system and 14 known moons, with Triton being the largest. Triton, believed to be a captured Kuiper Belt object, has geysers of nitrogen gas, making it one of the few geologically active bodies in the outer Solar System. Neptune's magnetic field is also highly tilted, adding to the planet's dynamic characteristics. Observations and models of Neptune offer insights into the atmospheres and magnetic fields of ice giants, and its extreme distance presents challenges and opportunities for future exploration."
        }

      ]
    },
    {
      "name": "Galaxy",
      "description": "A galaxy is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, dark matter, and other astronomical objects.",
      "celestialList": [
        {
          "id": "milky-way",
          "name": "Milky Way",
          "imageurl": "assets/images/milky-way.jpg",
          "description": "The Milky Way Galaxy, containing our Solar System, is a barred spiral galaxy with a diameter of about 100,000 light-years and an estimated 200-400 billion stars. The galaxy’s central region is densely populated with stars and contains a supermassive black hole, Sagittarius A*. The Milky Way’s arms spiral outward from the center, home to star-forming regions, nebulae, and star clusters. Located within the Local Group of galaxies, it includes nearby galaxies like Andromeda and Triangulum. Current research suggests that the Milky Way and Andromeda may merge in about 4.5 billion years, forming a new galaxy. The Milky Way's dynamic structure offers insights into the evolution of galaxies and the larger cosmos."
        }
      ]
    },
    {
      "name": "Nebula",
      "description": "A nebula is a vast cloud of gas and dust in space, often marking regions where stars are forming or dying.",
      "celestialList": [
        {
          "id": "orion-nebula",
          "name": "Orion Nebula",
          "imageurl": "assets/images/orion-nebula.jpg",
          "description": "The Orion Nebula is a diffuse nebula in the Milky Way, situated just south of Orion's Belt. It is among the brightest nebulae visible to the naked eye and serves as a stellar nursery where new stars are born from collapsing gas and dust. The Trapezium Cluster, a group of young, massive stars at its core, emits intense ultraviolet light, illuminating surrounding gases. Spanning about 24 light-years, the Orion Nebula offers a glimpse into star formation processes, making it a primary target for astronomers. Observations reveal the nebula’s intricate structure, with dense, turbulent regions where nascent stars and possibly planets are developing, providing insights into the early stages of solar systems."
        },
        {
          "id": "crab-nebula",
          "name": "Crab Nebula",
          "imageurl": "assets/images/crab-nebula.jpg",
          "description": "The Crab Nebula is a supernova remnant located in the constellation Taurus. It formed from a supernova explosion observed in 1054 AD and is one of the most studied nebulae. The nebula contains a rapidly spinning neutron star, or pulsar, which emits powerful radiation. The Crab Nebula’s intricate filaments of gas and dust expand outward, illuminated by the pulsar’s emissions, offering insights into the violent aftermath of supernovae and the formation of neutron stars."
        },
        {
          "id": "eagle-nebula",
          "name": "Eagle Nebula",
          "imageurl": "assets/images/eagle-nebula.jpg",
          "description": "The Eagle Nebula, located about 7,000 light-years away in the constellation Serpens, is best known for the Pillars of Creation, towering columns of gas and dust captured in iconic Hubble images. These columns are star-forming regions where dense gas collapses to form new stars. Spanning about 70 light-years, the Eagle Nebula offers a vivid example of star formation and the interactions between stars and their surrounding material."
        }
      ]
    }
  ]



  getCelestialById(id: string) {
    for (let celestialType of this.celestialTypeList) {
      for (let celestial of celestialType.celestialList) {
        if (celestial.id.toString() === id) {
          return celestial;
        }
      }
    }
    return null;
  }
}

