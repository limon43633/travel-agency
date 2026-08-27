import logo from './logo.svg'
import topBannerBg from './top_banner_bg.jpg'
import bandarban from './bandarban.jpg'
import coxs from './coxs.jpg'
import sajek from './sajek.jpg'
import sundarban from './sundarban.jpg'
import travelersExploring from './travelers_exploring.jpg'
import tourGuide from './tour_guide.jpg'




export const assets = {
  logo,
  topBannerBg,
  travelersExploring,
  tourGuide
}



export const menuLinks = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Packages", path: "/packages" },
  { name: "Contact us", path: "/contact-us" },
]


export const destinations = [
  {
    id: 1,
    name: "Cox's Bazar",
    location: "Chattogram Division",
    duration: "3 Days, 2 Nights",
    price: "Tk 8,500",
    rating: 4.8,
    reviews: "2.1k",
    image: coxs
  },
  {
    id: 2,
    name: "Sajek Valley",
    location: "Rangamati",
    duration: "2 Days, 1 Night",
    price: "Tk 6,000",
    rating: 4.9,
    reviews: "1.4k",
    image: sajek
  },
  {
    id: 3,
    name: "Sundarbans",
    location: "Khulna Division",
    duration: "3 Days, 2 Nights",
    price: "Tk 12,000",
    rating: 4.7,
    reviews: "980",
    image: sundarban
  },
  {
    id: 4,
    name: "Bandarban",
    location: "Chattogram Hill Tracts",
    duration: "3 Days, 2 Nights",
    price: "Tk 7,500",
    rating: 4.8,
    reviews: "1.6k",
    image: bandarban
  },
]
