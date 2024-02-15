import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(`http://localhost:8000/api/articles/?limit=3`);

  if(!res.ok){
    return notFound();
  }

  return res.json();
}

const RecentArticles = async () => {

  const recent_articles = await getData()

  return (
    <section id="recentArticles" className="py-14 bg-slate-50 dark:bg-main-900">
      <div className="container">
        <h2 className="text-sm rounded-3xl font-bold uppercase mb-8 text-gray-500 dark:text-white">
          Recent Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 shadow-custom dark:shadow dark:shadow-secondary-100 overflow-hidden rounded-lg dark:bg-main-900">
          {recent_articles &&
            recent_articles.map((recent_article, index) => (
              <article
                key={index}
                className="transition-all overflow-hidden shadow-sm shadow-main-100 dark:shadow-secondary-100 p-10 flex flex-col gap-5"
              >
                <Link href={`/blog/${recent_article.slug}`}>
                  <Image
                    src={recent_article.featured_image_url}
                    alt={recent_article.title}
                    height={300}
                    width={300}
                    className="w-full h-36 object-cover rounded-lg hover:scale-95"
                  />
                </Link>
                <div className="flex flex-col gap-5 text-sm text-dark dark:text-white">
                  <Link
                    href={`/blog/${recent_article.slug}`}
                    className="text-main-500 dark:text-secondary-300 hover:text-main-700 dark:hover:text-secondary-400 text-lg truncate font-semibold hover:line-through"
                  >
                    <h4>{recent_article.title}</h4>
                  </Link>
                  <p className="text-truncate">{recent_article.excerpt}</p>
                  <Link
                    href={`/blog/${recent_article.slug}`}
                    className="text-right text-main-400 dark:text-secondary-300 hover:text-main-500 dark:hover:text-secondary-400"
                  >
                    Read Full Article{" "}
                    <span className="bi-arrow-up-right"></span>
                  </Link>
                </div>
              </article>
            ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="btn btn-outline-main inline-flex justify-center items-center capitalize"
          >
            Discover more
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RecentArticles
