"use client";

import useFetch from "@/hooks/useFetch";
import { PagingContextProvider } from "@/context/PagingContext";
import ArticleCard from "@/components/ArticleCard";
import Pagination from "@/components/Pagination";

export const metadata = {
  title: 'Read compelling stories from our authors | Sphenews',
}

const BlogDetail = () => {

  const { data, error, loading } = useFetch("http://localhost:8000/api/articles");
  const itemsPerPage = 1;

  if (loading) {
    return (
      <p> Loading articles... </p>
    );
  }

  if (error) {
    return (
      <p> Error: {error.message} </p>
    );
  }

  return (
    <PagingContextProvider totalItems={data.length} itemsPerPage={itemsPerPage}>
      <ArticleCard articles={data} itemsPerPage={itemsPerPage}/>
      <Pagination/>
    </PagingContextProvider>
  );
};

export default BlogDetail;
