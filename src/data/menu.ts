export interface MenuPoster {
  id: string;
  title: string;
  caption: string;
  image: string;
}

export const menuPosters: MenuPoster[] = [
  {
    id: "bbq",
    title: "Bar B.Q Menu",
    caption: "Chicken & malai tikka, boti plates, seekh & chandan kababs",
    image: "/menu/bbq-menu.jpg",
  },
  {
    id: "rolls",
    title: "Roll Menu",
    caption: "Chicken, beef & zinger rolls — plain, mayo, or with cheese",
    image: "/menu/roll-menu.jpg",
  },
  {
    id: "fastfood",
    title: "Fast Food Menu",
    caption: "Zinger, beef & Texas burgers, club sandwiches, broast, fries",
    image: "/menu/fastfood-menu.jpg",
  },
  {
    id: "kabab",
    title: "Kabab, Paratha & Drinks",
    caption: "Chapli & shami kabab, puri paratha, chilled cold drinks",
    image: "/menu/kabab-paratha-drinks-menu.jpg",
  },
];

/** A short, hand-picked list of best sellers shown as quick-scan price cards. */
export interface PopularItem {
  name: string;
  price: string;
}

export const popularItems: PopularItem[] = [
  { name: "Chicken Leg Tikka", price: "200" },
  { name: "Chicken Boti (Plate)", price: "400" },
  { name: "Seekh Kabab (Plate)", price: "360" },
  { name: "Zinger Burger", price: "250" },
  { name: "Zinger Roll", price: "160" },
  { name: "Bar B.Q Club Sandwich", price: "400" },
  { name: "Chest Broast", price: "400" },
  { name: "Leg Broast", price: "350" },
];
