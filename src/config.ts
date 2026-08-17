// ============================================================================
// SINGLE SOURCE OF TRUTH — every component reads from here.
// Update phone numbers, address, hours, and social links in this one file.
// ============================================================================

export const config = {
  name: "Madina Lucky",
  fullName: "Madina Lucky Bar B.Q & Fast Food",
  tagline: "Bold Flavors. Great Taste. Lucky Choice.",

  phone: "+923112624218",
  phoneDisplay: "0311 2624218",
  whatsapp: "923232638002",
  whatsappDisplay: "0323 2638002",

  address: "Plot # L/4, St. 15, Sector 5-A/1, Opposite Khursheed Begum Park, North Karachi",
  addressShort: "North Karachi",

  hours: "6 PM – 4 AM",
  hoursNote: "Open Daily",

  googleMapsUrl: "https://www.google.com/maps/place/25%C2%B000'10.7%22N+67%C2%B003'32.9%22E/@25.0028874,67.0591707,20.55z/data=!4m4!3m3!8m2!3d25.002972!4d67.059125?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D",
  googleMapsEmbed:
    "https://www.google.com/maps?q=Sector+5A1+North+Karachi&output=embed",

  facebookUrl: "https://www.facebook.com/profile.php?id=61592772839712",
  instagramUrl: "https://www.instagram.com/madina_lucky_restaurant/",
} as const;

export const whatsappOrderUrl = (message?: string) => {
  const text = message ?? "Hello Madina Lucky, I want to place an order.";
  return `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(text)}`;
};

export const callUrl = () => `tel:${config.phone}`;
