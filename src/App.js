import DestinationSearch from './components/DestinationSearch'

import './App.css'

const destinationsList = [
  {
    id: 1,
    name: 'Melaka Mosque',
    imgUrl: '../public/all_images/badge.png',
  },
  {
    id: 2,
    name: 'Shrubland',
    imgUrl: '../public/all_images/badge.png',
  },
  {
    id: 3,
    name: 'New York',
    imgUrl: '../public/all_images/badge.png',
  },
  {
    id: 4,
    name: 'Escarpment',
    imgUrl: '../public/all_images/badge.png',
  },
  {
    id: 5,
    name: 'Westminster Abbey',
    imgUrl: '../public/all_images/badge.png',
  },
  {
    id: 6,
    name: 'South Downs National Park',
    imgUrl: '../public/all_images/badge.png',
  },
  {
    id: 7,
    name: 'National Historic Site',
    imgUrl: '../public/all_images/badge.png',
  },
  {
    id: 8,
    name: 'Tower Bridge',
    imgUrl: '../public/all_images/badge.png',
  },
  {
    id: 9,
    name: 'Arc Here',
    imgUrl: '../public/all_images/badge.png',
  },
  {
    id: 10,
    name: 'Steeple',
    imgUrl: '../public/all_images/badge.png',
  },
  {
    id: 11,
    name: 'Glaciokarst',
    imgUrl: '../public/all_images/badge.png',
  },
  {
    id: 12,
    name: 'Parco Nazionale delle Cinque Terre',
    imgUrl: '../public/all_images/badge.png',
  },
]

const App = () => <DestinationSearch destinationsList={destinationsList} />

export default App
