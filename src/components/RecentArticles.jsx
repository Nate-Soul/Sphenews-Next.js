import Image from "next/image";
import Link from "next/link";

const RecentArticles = () => {
    
  const recent_articles = [
    {
      id: 1,
      title:
        "The Rise of Electric Vehicles: Driving Towards a Sustainable Future",
      slug: "covid-19-vaccine-rollout-progress-and-challenges",
      excerpt:
        "As the global COVID-19 vaccination campaigns continue, there have been significant achievements and hurdles to overcome. This article explores the progress made in vaccine distribution and the challenges...",
      imageUrl: "/images/articles/3.jpg",
    },
    {
      id: 2,
      title:
        "The Power of Music: Exploring its Psychological and Emotional Impact",
      slug: "the-power-of-music-exploring-its-psychological-and-emotional-impact",
      excerpt:
        "Music has a profound effect on our emotions and mental well-being. This article delves into the psychological benefits of music, its impact on mood regulation, and its therapeutic potential.",
      imageUrl: "/images/articles/2.jpg",
    },
    {
      id: 3,
      title:
        "Exploring Mars: The Red Planet's Mysteries and Potential for Human Exploration",
      slug: "exploring-mars-the-red-planets-mysteries-and-potential-for-human-exploration",
      excerpt:
        "Mars has captivated human curiosity for centuries. This article delves into the mysteries surrounding the Red Planet, recent scientific discoveries, and the potential for future human exploration.",
      imageUrl: "/images/articles/1.jpg",
    },
    // {
    //   id: 4,
    //   title: "COVID-19 Vaccine Rollout: Progress and Challenges",
    //   slug: "covid-19-vaccine-rollout-progress-and-challenges",
    //   excerpt:
    //     "As the global COVID-19 vaccination campaigns continue, there have been significant achievements and hurdles to overcome. This article explores the progress made in vaccine distribution and the challenges..",
    //   imageUrl: "/images/articles/2.jpg",
    // },
  ];

  return (
    <section id="recentArticles" className="py-14 bg-white dark:bg-main-200">
      <div className="container">
        <h3 className="text-sm rounded-3xl font-bold uppercase mb-8 text-gray-500 dark:text-white">
          Recent Articles
        </h3>
        <div className="grid grid-cols-3 shadow-custom dark:shadow dark:shadow-white overflow-hidden rounded-lg dark:bg-main-500">
          {recent_articles &&
            recent_articles.map((recent_article, index) => (
              <article
                key={index}
                className="transition-all overflow-hidden shadow-sm shadow-main-100 dark:shadow-white p-10 flex flex-col gap-5"
              >
                <Link href={`/blog/${recent_article.slug}`}>
                  <Image
                    src={recent_article.imageUrl}
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
