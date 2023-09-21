import { notFound } from "next/navigation";
import { PagingContextProvider } from "@/context/PagingContext";
import ArticleCard from "@/components/ArticleCard";
import Pagination from "@/components/Pagination";

async function getData(slug) {
  const res = await fetch(`http://127.0.0.1:8000/api/articles/in/category/${slug}`);

  if(!res.ok){
    return notFound();
  }

  return res.json();
}

const CategoryArticles = async ({params}) => {

  const categoryArticles = await getData(params.slug);

  return (
    <PagingContextProvider>
      <section>
        <ArticleCard articles={categoryArticles} itemsPerPage={1}/>
        <Pagination/>
      </section>
    </PagingContextProvider>
  )
}

export default CategoryArticles
