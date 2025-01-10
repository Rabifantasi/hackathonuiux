type Car = {
  name: string;
  type: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  capacity: string;
  price: number;
  favoriteIcon: "heart.png" | "wheart.png"; // or adjust as needed
};

type Main = {
  heroTitle1: string;
  heroDescription1: string;
  heroImage1background: string;
  heroImage1car: string;
  heroTitle2: string;
  heroDescription2: string;
  heroImage2background: string;
  heroImage2car: string;

  // Pick-Up Section
  pickupLocationLabel: string;
  pickupDateLabel: string;
  pickupTimeLabel: string;

  // Drop-Off Section
  dropoffLocationLabel: string;
  dropoffDateLabel: string;
  dropoffTimeLabel: string;

  // Popular Cars Section
  popularCars: Car[];

  // Recommended Cars Section
  recommendedCars: Car[];
};
