import Hero from "@/components/Hero";
import TopCategories from "@/components/TopCategories";
import FeaturedArticles from "@/components/FeaturedArticles";
import RecentArticles from "@/components/RecentArticles";

export default function Home() {

  return (
    <>
      <Hero/>
      <TopCategories/>
      {/* <FeaturedArticles/>  */}
      <RecentArticles/>
    </>
  );
}
