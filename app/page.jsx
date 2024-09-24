"use client";
import QuotesCard from "@/components/QuotesCard";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Card from "@/components/Card";
import { img600 } from "@/components/ImageUrl";
import Link from "next/link";

export default function Home() {
  const [imageSize, setImageSize] = useState({ width: 600, height: 400 });

  const url = "/";

  const img160 =
    "data:image/png;base64,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";

  // Tailwind CSS breakpoints
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const aspectRatio = 600 / 400; // Aspect ratio based on initial width and height (600 / 400)

      if (width < breakpoints.sm) {
        // Small screens (smaller than 640px)
        const newWidth = 300; // You can adjust this as needed
        setImageSize({ width: newWidth, height: newWidth / aspectRatio });
      } else if (width >= breakpoints.sm && width < breakpoints.md) {
        // Medium screens (640px and up)
        const newWidth = 400; // Adjusted size
        setImageSize({ width: newWidth, height: newWidth / aspectRatio });
      } else if (width >= breakpoints.md && width < breakpoints.lg) {
        // Large screens (768px and up)
        const newWidth = 500;
        setImageSize({ width: newWidth, height: newWidth / aspectRatio });
      } else if (width >= breakpoints.lg && width < breakpoints.xl) {
        // Extra large screens (1024px and up)
        const newWidth = 600;
        setImageSize({ width: newWidth, height: newWidth / aspectRatio });
      } else {
        // 1280px and up
        setImageSize({ width: 600, height: 400 });
      }
    };

    // Call the function on initial load
    handleResize();

    // Add event listener on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints.lg, breakpoints.md, breakpoints.sm, breakpoints.xl]);

  const quotes = [
    {
      title: "Title",
      quote: "Description",
      imageUrl: "/icons/avtar.gif",
      description:
        "A motivational reminder to pursue your dreams with passion and confidence, as they hold the key to shaping your future.",
      link: "/",
    },
    {
      title: "The Power of Persistence",
      quote:
        "Success is the sum of small efforts, repeated day in and day out.",
      imageUrl: "/icons/avtar.gif",
      description:
        "This quote highlights the importance of consistent effort in achieving long-term success, no matter how small the steps may seem.",
      link: "/",
    },
    {
      title: "Embrace Change",
      quote:
        "Change is the only constant in life. Embrace it, and you will thrive.",
      imageUrl: "/icons/avtar.gif",
      description:
        "A reminder that accepting and adapting to life's inevitable changes leads to personal growth and resilience.",
      link: "/",
    },
    {
      title: "Courage Over Fear",
      quote: "Courage is not the absence of fear, but the triumph over it.",
      imageUrl: "/icons/avtar.gif",
      description:
        "This quote inspires individuals to face challenges head-on, understanding that courage comes from overcoming fear.",
      link: "/",
    },
    {
      title: "The Beauty of Simplicity",
      quote: "Simplicity is the ultimate sophistication.",
      imageUrl: "/icons/avtar.gif",
      description:
        "A celebration of simplicity as the key to elegance and effectiveness in both life and design.",
      link: "/",
    },
    {
      title: "The Journey of Growth",
      quote:
        "Growth is never by mere chance; it is the result of forces working together.",
      imageUrl: "/icons/avtar.gif",
      description:
        "This quote reflects on the collaborative nature of growth, whether personal or professional, emphasizing the role of collective effort.",
      link: "/",
    },
    {
      title: "Dream Big, Act Now",
      quote:
        "The future belongs to those who believe in the beauty of their dreams.",
      imageUrl: "/icons/avtar.gif",
      description:
        "A motivational reminder to pursue your dreams with passion and confidence, as they hold the key to shaping your future.",
      link: "/",
    },
  ];

  return (
    <main className="thin-scrollbar overflow-y-auto">

      {/* Hero Section */}
      <section className="hero-section bg-gray-100 min-h-[50vh] flex flex-col justify-center items-center gap-5">
        <h2 className="text-5xl font-bold mx-auto">Title</h2>
        <p className="text-lg mx-auto">Subtitle</p>
        <div className="button-section flex gap-3 mx-auto">
          <Button
            variant="outline"
            className="border-black/35 border bg-gray-200"
          >
            Button
          </Button>
          <Button>Button</Button>
        </div>
      </section>

      <section className="min-h-[20vh] flex flex-col justify-center items-center gap-5 px-4 py-6 md:p-16 sm:flex-row mx-auto">
        <div className="image">
          <Image
            className="object-contain"
            src={img600}
            width={imageSize.width}
            height={imageSize.height}
            alt="Photo"
          />
        </div>
        <div className="image object">
          <Image
            className="object-contain"
            src={img600}
            width={imageSize.width}
            height={imageSize.height}
            alt="Photo"
          />
        </div>
      </section>

      <section className="quote-sections p-4 md:p-16 border-y flex flex-col gap-3 w-full">
        <div className="details flex flex-col gap-1 w-full">
          <h2 className="font-semibold text-xl ps-2">Heading</h2>
          <p className="text-gray-700/70 text-base ps-2">SubHeading</p>
        </div>
        <div className="cardGrid mx-auto w-full h-[80vh] sm:h-auto overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-1">
          {quotes.map((quote, id) => {
            return (
              <QuotesCard
                key={id}
                url={quote.imageUrl}
                title={quote.title}
                description={quote.quote}
              />
            );
          })}
        </div>
      </section>

      <section className="about-section p-4 md:p-16 border-y flex flex-col gap-3 w-full">
        <div className="details flex flex-col gap-1 w-full">
          <h2 className="font-semibold text-xl ps-2">Heading</h2>
          <p className="text-gray-700/70 text-base ps-2">SubHeading</p>
        </div>

        <div className="about-card-section mx-auto w-full h-[80vh] sm:h-auto overflow-y-auto flex flex-col gap-5 md:w-full px-2">
          {quotes.map((quote, id) => {
            return (
              <Card
                key={id}
                url={img160}
                title="Title"
                description="Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
                className="flex flex-col sm:flex-row gap-4 justify-between items-start border rounded-lg p-6 md:w-full"
                elements={
                  <Link href={quote.link}>
                    <Button
                      variant="outline"
                      className="border-black/35 border bg-gray-200"
                    >
                      Button
                    </Button>
                  </Link>
                }
              />
            );
          })}
        </div>
      </section>

      <section className="about-section p-4 md:p-16 border-y flex flex-col gap-3 w-full">
        <div className="details flex flex-col gap-1 w-full">
          <h2 className="font-semibold text-xl ps-2">Heading</h2>
          <p className="text-gray-700/70 text-base ps-2">SubHeading</p>
        </div>

        <div className="about-card-section h-[80vh] sm:h-auto overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-8 gap-x-8 px-2">
          {quotes.map((quote, id) => {
            return (
              <Link key={id} href={quote.link} className="w-fit">
                <Card
                  url={img160}
                  title="Title"
              description="Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
                  className="flex flex-col flex-wrap gap-4 justify-start items-start border rounded-lg p-6 md:max-w-96 xl:max-w-full"
                />
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
