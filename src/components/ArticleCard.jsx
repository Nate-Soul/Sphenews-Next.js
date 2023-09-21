"use client";

import Link from "next/link";
import Image from "next/image";
import { usePagingContext } from "@/context/PagingContext";

const ArticleCard = ({articles, itemsPerPage}) => {

  const { currentPage } = usePagingContext();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex   = Math.min(startIndex + itemsPerPage, articles.length);
  
  const articlesToDisplay = articles.slice(startIndex, endIndex);

  return (
    <>
    {articlesToDisplay.map((article) => (
      <article
        key={article.id}
        className={`flex mb-8 shadow-custom rounded-lg overflow-hidden`}
        data-index={currentPage}
      >
        <Link href={`/blog/${article.slug}`} className="flex-1">
          <Image
            src={article.featured_image_url}
            alt={article.title}
            width={500}
            height={500}
            className="h-72 w-full object-cover hover:scale-105"
            priority
          />
        </Link>
        <div className="flex-1 flex flex-col justify-between p-5">
          <Link 
            href={`/blog/${article.slug}`}
            className="text-xl font-semibold text-main-400 hover:text-main-500 hover:line-through"
          >
            <h4>{article.title}</h4>
          </Link>
          <p>{article.excerpt}</p>
          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex justify-end gap-2 text-main-400 hover:text-main-500"
          >
            Read Full Article
            <span className="bi-arrow-up-right"></span>
          </Link>
        </div>
      </article>
    ))}
  </>
  )
}

export default ArticleCard
