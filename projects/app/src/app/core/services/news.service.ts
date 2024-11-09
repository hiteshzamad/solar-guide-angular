import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  newsList = [
    {
      title: 'China’s new rocket for crew and moon to launch in 2026',
      description: 'China is developing a new rocket for crewed missions that will be used for its lunar exploration program.',
      image: 'https://i0.wp.com/spacenews.com/wp-content/uploads/2024/06/CZ10-first-stage-3engines-test-14june2024-CASC-1.jpg?resize=1200%2C704&ssl=1',
      link: 'https://spacenews.com/chinas-new-rocket-for-crew-and-moon-to-launch-in-2026/'
    },
    {
      title: 'Russia sends 53 satellites to orbit on record-breaking launch',
      description: 'Russia launched a Soyuz-2.1b rocket carrying 53 small satellites, setting a new record for the most payloads ever launched by a single rocket.',
      image: 'https://cdn.mos.cms.futurecdn.net/Qtbq7h9rmRDUnMLi2ehtx6-970-80.jpg.webp',
      link: 'https://www.space.com/space-exploration/launches-spacecraft/russia-sends-53-satellites-to-orbit-on-record-breaking-launch-video'
    },
    {
      title: 'World\'s first wooden satellite launched into space',
      description: 'A Finnish company launched the world\'s first wooden satellite on a Rocket Lab Electron rocket.',
      image: 'https://images.moneycontrol.com/static-mcnews/2024/11/20241107134743_Worlds-first-wooden-satellite-The-Lignosat.png?impolicy=website&width=770&height=431',
      link: 'https://www.nbcnews.com/video/world-s-first-wooden-satellite-launched-into-space-223575621678'
    },
    {
      title: 'SpaceX launches rescue mission for 2 NASA astronauts',
      description: 'SpaceX launched a rescue mission to the International Space Station to bring two NASA astronauts back to Earth.',
      image: 'https://images.deccanherald.com/deccanherald%2F2024-09-14%2F0a5ecmqs%2FGXas5yPXQAAwhE1.png?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=900&dpr=1',
      link: 'https://www.deccanherald.com/science/space/nasa-to-launch-rescue-mission-today-for-boeing-astronauts-stuck-on-international-space-station-3211045'
    }
  ]

}
