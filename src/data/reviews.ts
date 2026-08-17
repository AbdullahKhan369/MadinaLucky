export interface Review {
  name: string;
  area: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    name: "Ahmed Raza",
    area: "North Karachi",
    rating: 5,
    text: "Chest broast is the best in Sector 5 — crispy outside, juicy inside every single time. Delivery is quick too.",
  },
  {
    name: "Sana Malik",
    area: "Khursheed Park",
    rating: 5,
    text: "Ordered the 5 zinger burgers deal for a family night in, everyone loved it. Great value for the price.",
  },
  {
    name: "Bilal Hussain",
    area: "North Karachi",
    rating: 4,
    text: "Chicken leg tikka has the perfect smoky char. My go-to order after work, never disappoints.",
  },
  {
    name: "Fatima Sheikh",
    area: "Buffer Zone",
    rating: 5,
    text: "Clean packaging, hot food on arrival, and the roll menu has so much variety. Highly recommend the malai boti roll.",
  },
];
