export interface Deal {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
}

export const deals: Deal[] = [
  {
    id: "chest-broast",
    title: "Chest Broast",
    subtitle: "Golden, crispy chest broast served with fries & mayo dip",
    price: "400",
    image: "/deals/chest-broast.jpg",
  },
  {
    id: "zinger-5-deal",
    title: "5 Zinger Burgers",
    subtitle: "Family deal — five loaded zinger burgers, one great price",
    price: "1000",
    image: "/deals/zinger-5-deal.jpg",
  },
  {
    id: "leg-broast",
    title: "Leg Broast",
    subtitle: "Mouth-watering, crispy & juicy leg broast with fries",
    price: "350",
    image: "/deals/leg-broast.jpg",
  },
  {
    id: "chicken-leg-tikka",
    title: "Chicken Leg Tikka",
    subtitle: "Charcoal-grilled leg tikka with mint chutney & salad",
    price: "200",
    image: "/deals/chicken-leg-tikka.jpg",
  },
];
