"use client";

import Image from "next/image";
import Link from "next/link"
import useCarousel from "@/hooks/useCarousel";

const FeaturedArticles = () => {

    const featured_articles = [
        {
          id: 1,
          title: "COVID-19 Vaccine Rollout: Progress and Challenges",
          slug: "covid-19-vaccine-rollout-progress-and-challenges",
          excerpt:
            "As the global COVID-19 vaccination campaigns continue, there have been significant achievements and hurdles to overcome. This article explores the progress made in vaccine distribution and the challenges",
          imageUrl: "/images/articles/3.jpg",
        },
        {
          id: 2,
          title:
            "The Rise of Electric Vehicles: Driving Towards a Sustainable Future",
          slug: "the-rise-of-electric-vehicles-driving-towards-a-sustainable-future",
          excerpt:
            "Electric vehicles (EVs) are gaining momentum as a sustainable transportation solution. This article delves into the growing popularity of EVs, their environmental benefits, and the challenges in transitioning to an electrified automotive landscape.",
          imageUrl: "/images/articles/2.jpg",
        },
        {
          id: 3,
          title:
            "The Power of Music: Exploring its Psychological and Emotional Impact",
          slug: "the-power-of-music-exploring-its-psychological-and-emotional-impact",
          excerpt:
            "Music has a profound effect on our emotions and mental well-being. This article delves into the psychological benefits of music, its impact on mood regulation, and its therapeutic potential.",
          imageUrl: "/images/articles/1.jpg",
        },
      ];
      
  const { currentSlide, goToSlide } = useCarousel(featured_articles, 10000);

  return (
    <section id="featuredArticles" className="py-14 bg-light overflow-hidden">
      <div className="container">
        <h3 className="text-sm rounded-3xl font-bold uppercase mb-8 text-gray-500">
          Featured Stories
        </h3>
        <div className="carousel flex relative">
          {featured_articles &&
            featured_articles.map((featured_article, index) => (
              <article
                key={index}
                className={`carousel-item transition-opacity flex-shrink-0 w-full rounded-lg overflow-hidden shadow-custom hover:shadow-secondary-500 ${
                  currentSlide === index
                    ? "flex opacity-100"
                    : "hidden opacity-0"
                }`}
              >
                <Link
                  href={`/blog/${featured_article.slug}`}
                  className="flex-1"
                >
                  <Image
                    src={featured_article.imageUrl}
                    alt={featured_article.title}
                    height={500}
                    width={800}
                    className="w-full h-72 object-cover hover:scale-105"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-between p-8 bg-white dark:bg-main-500 text-dark dark:text-white">
                  <Link
                    href={`/blog/${featured_article.slug}`}
                    className="text-main-500 dark:text-secondary-400 hover:text-main-700 dark:hover:text-secondary-500 text-2xl hover:line-through"
                  >
                    <h4>{featured_article.title}</h4>
                  </Link>
                  <p>{featured_article.excerpt}...</p>
                  <Link
                    href={`/blog/${featured_article.slug}`}
                    className="text-right text-main-400 dark:text-secondary-400 hover:text-main-500 dark:hover:text-secondary-500"
                  >
                    Read Full Article{" "}
                    <span className="bi-arrow-up-right"></span>
                  </Link>
                </div>
              </article>
            ))}
        </div>
        <div className="slider-indicators text-center flex items-center justify-center gap-3 mt-8">
          {featured_articles.map((_, index) => (
            <button
              key={index}
              className={`indicator rounded-full w-3 h-3 ${
                index === currentSlide ? "bg-main-500" : "bg-main-300"
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedArticles
