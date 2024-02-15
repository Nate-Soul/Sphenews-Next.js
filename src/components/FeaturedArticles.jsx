"use client";

import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";
import useCarousel from "@/hooks/useCarousel";

const FeaturedArticles = () => {

  const { 
    data, 
    error, 
    loading 
  } = useFetch("http://localhost:8000/api/articles/?featured=true&limit=5");

  // console.log(data);

  
  if (loading) {
    return (
      <p>Loading featured articles...</p>
      )
    }
    
    if (error){
      return (
        <p>There was an error loading categories</p>
        )
    }

    if(data === null){
      return (
        <></>
      )
    }
      
    // const { currentSlide, goToSlide } = useCarousel(data?.length, 10000);

  return (
    <section id="featuredArticles" className="py-14 bg-light overflow-hidden">
      <div className="container">
        <h3 className="text-sm rounded-3xl font-bold uppercase mb-8 text-gray-500">
          Featured Stories
        </h3>
        <div className="carousel flex relative">
          {data?.map((featured_article, index) => (
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
                    src={featured_article.featured_image_url}
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
          {data?.map((_, index) => (
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
