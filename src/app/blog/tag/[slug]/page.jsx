import { notFound } from "next/navigation";
import { PagingContextProvider } from "@/context/PagingContext";
import ArticleCard from "@/components/ArticleCard";
import Pagination from "@/components/Pagination";

async function getData(slug) {
  const res = await fetch(`http://127.0.0.1:8000/api/articles/in/tag/${slug}`);

  if(!res.ok){
    return notFound();
  }

  return res.json();
}

const TagArticles = async ({params}) => {
  const tagArticles = await getData(params.slug);
  return (
    <PagingContextProvider>
      <section>
        <ArticleCard articles={tagArticles} itemsPerPage={1}/>
        <Pagination/>
      </section>
    </PagingContextProvider>
  )
}

export default TagArticles
