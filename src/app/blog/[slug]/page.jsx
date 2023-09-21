import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { dateFormatter, linebreaksToBr } from "@/utils/textFormatter";

async function getData(slug) {
  const res = await fetch(`http://localhost:8000/api/articles/${slug}/`);

  if(!res.ok){
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({params}) {
  const article = await getData(params.slug);
  return {
    title: article.title,
    description: article.excerpt,
  }
}

const BlogSingle = async ({params}) => {

  const article = await getData(params.slug);

  return (
    <section>
      <article>
        <header className="relative shadow-custom rounded-lg overflow-hidden mb-8">
          <Image 
            src={article.featured_image_url}
            height={500} 
            width={800}
            className="h-72 w-full object-cover"
            alt={`image illustration for ${article.title}`}
          />
          <div className="p-4 my-4">
            <h1 className="text-3xl capitalize font-bold mb-4">{article.title}</h1>
            <div className="flex gap-4 items-center">
              <div className="author text-sm">
                <Link 
                  href={`/blog/author/${article.author}`} 
                  className="uppercase text-main-400 hover:text-main-500"
                >
                  By {article.author}
                </Link>
              </div>
              <div className="date flex items-center gap-2 uppercase text-xs">
                <span className="bi bi-clock"></span>
                <span>{dateFormatter(article.created)}</span>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-6">
          <div className="text-justify leading-7" dangerouslySetInnerHTML={{ __html: linebreaksToBr(article.content) }}></div>
          <p>
            <span className="font-semibold">Tags: </span>
            {article.tags.map((tag) => (
              <Link href={`/blog/tag/${tag.slug}`} key={tag.id}>
                {tag.name}
              </Link>
            ))}
          </p>
          <p>
            <span className="font-semibold">Categories: </span> 
            {article.categories.map((cat) => (
              <Link href={`/blog/category/${cat.slug}`} key={cat.id}>
                {cat.name}
              </Link>
            ))}
          </p>
          {/* <div className="border-t py-4">
            prev post & next post thingy
          </div> */}
          <div className="flex items-center justify-between rounded-lg">
            <div className="inline-flex justify-center items-center gap-2 cursor-pointer basis-1/3 text-sm border rounded-s-lg p-4">
              <span className="bi-heart"></span>
              <span>12</span>
            </div>
            <div className="inline-flex justify-center items-center gap-2 cursor-pointer basis-1/3 text-sm border p-4">
              <span className="bi-chat-dots"></span>
              <span>6</span>
            </div>
            <div className="inline-flex justify-center items-center gap-2 cursor-pointer basis-1/3 text-sm border rounded-e-lg p-4">
              <span className="bi-share"></span>
              Share
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default BlogSingle
