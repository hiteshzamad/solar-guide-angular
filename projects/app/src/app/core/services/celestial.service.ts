import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CelestialService {

  constructor() { }

  celestialTypeList = [
    {
      name: 'Star',
      description: 'A star is an astronomical object consisting of a luminous spheroid of plasma held together by its own gravity. The nearest star to Earth is the Sun.',
      celestialList: [
        { name: 'Sun', imageurl: 'https://picsum.photos/512/512', description: 'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as light and infrared radiation.' },
        { name: 'Sirius', imageurl: 'https://picsum.photos/512/512', description: 'Sirius is a binary star system and the brightest star in the Earth\'s night sky. With a visual apparent magnitude of −1.46, it is almost twice as bright as Canopus, the next brightest star.' },
        { name: 'Alpha Centauri', imageurl: 'https://picsum.photos/512/512', description: 'Alpha Centauri is a binary star system, whose combined visual magnitude of −0.27 makes it the third-brightest star (other than the Sun) visible from Earth, after Sirius and Canopus.' }
      ]
    },
    {
      name: 'Planet',
      description: 'A planet is an astronomical body orbiting a star or stellar remnant that is massive enough to be rounded by its own gravity, is not massive enough to cause thermonuclear fusion, and has cleared its neighbouring region of planetesimals.',
      celestialList: [
        { name: 'Earth', imageurl: 'https://picsum.photos/512/512', description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth\'s surface is land consisting of continents and islands.' },
        { name: 'Mars', imageurl: 'https://picsum.photos/512/512', description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".' },
        { name: 'Jupiter', imageurl: 'https://picsum.photos/512/512', description: '' },
        { name: 'Saturn', imageurl: 'https://picsum.photos/512/512', description: '' },
        { name: 'Uranus', imageurl: '', description: '' },
        { name: 'Neptune', imageurl: '', description: '' },
        { name: 'Pluto', imageurl: '', description: '' },
      ]
    },
    {
      name: 'Galaxy',
      description: 'A galaxy is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, dark matter, and other astronomical objects.',
      celestialList: [
        { name: 'Milky Way', imageurl: 'https://picsum.photos/512/512', description: 'The Milky Way is the galaxy that contains our Solar System, with the name describing the galaxy\'s appearance from Earth: a hazy band of light seen in the night sky formed from stars that cannot be individually distinguished by the naked eye.' },
        { name: 'Andromeda', imageurl: 'https://picsum.photos/512/512', description: 'The Andromeda Galaxy, also known as Messier 31, M31, or NGC 224 and originally the Andromeda Nebula, is a barred spiral galaxy approximately 2.5 million light-years from Earth and the nearest major galaxy to the Milky Way.' },
        { name: 'Triangulum', imageurl: 'https://picsum.photos/512/512', description: 'The Triangulum Galaxy is a spiral galaxy approximately 3 million light-years from Earth in the constellation Triangulum. It is catalogued as Messier 33 or NGC 598.' }
      ]
    },
    {
      name: 'Nebula',
      description: 'A nebula is a giant cloud of dust and gas in space. Some nebulae (more than one nebula) come from the gas and dust thrown out by the explosion of a dying star, such as a supernova.',
      celestialList: [
        { name: 'Orion', imageurl: 'https://picsum.photos/512/512', description: 'The Orion Nebula is a diffuse nebula situated in the Milky Way, being south of Orion\'s Belt in the constellation of Orion. It is one of the brightest nebulae, and is visible to the naked eye in the night sky.' },
        { name: 'Crab', imageurl: 'https://picsum.photos/512/512', description: 'The Crab Nebula is a supernova remnant in the constellation of Taurus. The now-current name is due to William Parsons, 3rd Earl of Rosse, who observed the object in 1840 using a 36-inch telescope and produced a drawing that looked somewhat like a crab.' },
        { name: 'Eagle', imageurl: 'https://picsum.photos/512/512', description: 'The Eagle Nebula is a young open cluster of stars in the constellation Serpens, discovered by Jean-Philippe de Chéseaux in 1745–46. Its name derives from its shape that is thought to resemble an eagle.' }
      ]
    }
  ]
}
