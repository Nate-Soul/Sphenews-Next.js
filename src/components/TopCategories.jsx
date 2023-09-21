"use client";

import Image from "next/image";
import Link from "next/link";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";

const TopCategories = () => {
    
  const top_categories = [
    {
      id: 1,
      name: "World News",
      slug: "world-news",
      imageUrl: "/images/categories/1.jpg",
    },
    {
      id: 2,
      name: "Music",
      slug: "music",
      imageUrl: "/images/categories/2.jpg",
    },
    {
      id: 3,
      name: "Health & Wellness",
      slug: "health-wellness",
      imageUrl: "/images/categories/3.jpg",
    },
    {
      id: 4,
      name: "Technology",
      slug: "tecnology",
      imageUrl: "/images/categories/4.jpg",
    },
    {
      id: 5,
      name: "Sports",
      slug: "sports",
      imageUrl: "/images/categories/4.jpg",
    },
    {
      id: 6,
      name: "Politics",
      slug: "politics",
      imageUrl: "/images/categories/4.jpg",
    },
  ];

  
  const { carouselInnerRef, scrollCarousel, canScrollLeft, canScrollRight } =
    useHorizontalScroll();

  return (
    <section id="topCategories" className="py-14 bg-white dark:bg-main-200">
      <div className="container">
        <h3 className="text-sm rounded-3xl font-bold uppercase mb-8 text-gray-500 dark:text-white">
          Top Categories
        </h3>
        <div
          className="flex gap-5 horizontal-scroll hide-scrollbar"
          ref={carouselInnerRef}
        >
          {top_categories &&
            top_categories.map((top_category, index) => (
              <Link
                href={`/blog/category/${top_category.slug}`}
                key={index}
                className="flex-none basis-1/6"
              >
                <figure>
                  <Image
                    src={top_category.imageUrl}
                    height={200}
                    width={200}
                    alt="category name"
                    className="w-full h-48 object-cover mb-2 rounded-lg transition-all hover:scale-105"
                  />
                  <figcaption className="text-main-400 font-semibold hover:text-main-500">
                    {top_category.name}
                  </figcaption>
                </figure>
              </Link>
            ))}
        </div>
        <div className="flex items-center justify-center mt-6 gap-3">
          <button
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-main-500 text-white hover:bg-main-600"
            onClick={(e) => scrollCarousel(e, "left")}
            disabled={!canScrollLeft}
          >
            <span className="bi-chevron-left font-bold"></span>
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-main-500 text-white hover:bg-main-600"
            onClick={(e) => scrollCarousel(e, "right")}
            disabled={!canScrollRight}
          >
            <span className="bi-chevron-right font-bold"></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default TopCategories
