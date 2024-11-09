import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactService {

  constructor() { }

  factList = [
    {
      description: 'The first artificial satellite, Sputnik 1, was launched by the Soviet Union in 1957.',
      image: 'https://images.unsplash.com/photo-1618315206935-6b4f7d7b8b3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      description: 'The first human to journey into outer space was Yuri Gagarin from the Soviet Union.',
      image: 'https://images.unsplash.com/photo-1618315206935-6b4f7d7b8b3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      description: 'Mars is home to the tallest volcano and the largest canyon in the solar system.',
      image: 'https://images.unsplash.com/photo-1618315206935-6b4f7d7b8b3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      description: 'The Moon is the only celestial body humans have visited.',
      image: 'https://images.unsplash.com/photo-1618315206935-6b4f7d7b8b3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      description: 'The International Space Station is the largest human-made structure in space.',
      image: 'https://images.unsplash.com/photo-1618315206935-6b4f7d7b8b3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }
  ]
}
