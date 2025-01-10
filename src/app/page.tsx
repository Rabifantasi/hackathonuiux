"use client"

import { useEffect, useState } from "react";
import { client } from "../sanity/lib/client"; // Adjust the path according to your project structure
import Hero, { PopularCarPage, RecommendedCarPage } from "../components/Hero"; // Adjust paths as necessary

// Define your types
type Car = {
  name: string;
  type: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  capacity: string;
  price: number;
  favoriteIcon: "heart.png" | "wheart.png";
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
  pickupLocationLabel: string;
  pickupDateLabel: string;
  pickupTimeLabel: string;
  dropoffLocationLabel: string;
  dropoffDateLabel: string;
  dropoffTimeLabel: string;
  popularCars: Car[];
  recommendedCars: Car[];
};

const Homepage = () => {
  const [data, setData] = useState<Main | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "carRental"] | order(_updatedAt asc) {
        // Hero Section
        heroTitle1,
        heroDescription1,
        "heroImage1background": heroImage1background.asset->url,
        "heroImage1car": heroImage1car.asset->url,
        heroTitle2,
        heroDescription2,
        "heroImage2background": heroImage2background.asset->url,
        "heroImage2car": heroImage2car.asset->url,

        // Pick-Up Section
        pickupLocationLabel,
        pickupDateLabel,
        pickupTimeLabel,

        // Drop-Off Section
        dropoffLocationLabel,
        dropoffDateLabel,
        dropoffTimeLabel,

        // Popular Cars Section
        popularCars[] {
          name,
          type,
          "image": image.asset->url,
          fuelCapacity,
          transmission,
          capacity,
          price,
          favoriteIcon
        },

        // Recommended Cars Section
        recommendedCars[] {
          name,
          type,
          "image": image.asset->url,
          fuelCapacity,
          transmission,
          capacity,
          price,
          favoriteIcon
        }
      }`;

      try {
        const fetchedData = await client.fetch(query);
        setData(fetchedData[0]); // Assuming fetchedData is an array
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      {data && (
        <Hero data={data} />
      )}
    </>
  );
};

export default Homepage;
