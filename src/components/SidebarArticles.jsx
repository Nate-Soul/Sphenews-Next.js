import Link from "next/link";
import Image from "next/image";
import blogImg1 from "/public/images/articles/2.jpg";

const SidebarArticles = ({type}) => {
  return (
    <div className="flex flex-col gap-5">
        <h4 className="font-semibold text-xl capitalize">{type} Articles</h4>
        <article className="p-3 flex gap-4 rounded-lg shadow-custom">
            <Link
                href={`/blog/slug`}
                className="basis-1/4"
            >
                <Image 
                    src={blogImg1} 
                    width={70} 
                    height={70} 
                    className="w-24 h-24 object-cover rounded-lg" alt="article title"
                />
            </Link>
            <div className="basis-3/4">
                <span className="text-gray-500 text-sm block mb-4">April 09, 2022</span>
                <Link 
                    href={`/blog/slug`}
                    className="text-main-400 hover:text-main-500 hover:line-through"
                >
                    <h5>COVID-19 Vaccine Rollout: Progress And Challenges</h5>
                </Link>
            </div>
        </article>
        <article className="p-3 flex gap-4 rounded-lg shadow-custom">
            <Link
                href={`/blog/slug`}
                className="basis-1/4"
            >
                <Image 
                    src={blogImg1} 
                    width={70} 
                    height={70} 
                    className="w-24 h-24 object-cover rounded-lg" alt="article title"
                />
            </Link>
            <div className="basis-3/4">
                <span className="text-gray-500 text-sm block mb-4">April 09, 2022</span>
                <Link 
                    href={`/blog/slug`}
                    className="text-main-400 hover:text-main-500 hover:line-through"
                >
                    <h5>COVID-19 Vaccine Rollout: Progress And Challenges</h5>
                </Link>
            </div>
        </article>
        <article className="p-3 flex gap-4 rounded-lg shadow-custom">
            <Link
                href={`/blog/slug`}
                className="basis-1/4"
            >
                <Image 
                    src={blogImg1} 
                    width={70} 
                    height={70} 
                    className="w-24 h-24 object-cover rounded-lg" alt="article title"
                />
            </Link>
            <div className="basis-3/4">
                <span className="text-gray-500 text-sm block mb-4">April 09, 2022</span>
                <Link 
                    href={`/blog/slug`}
                    className="text-main-400 hover:text-main-500 hover:line-through"
                >
                    <h5>COVID-19 Vaccine Rollout: Progress And Challenges</h5>
                </Link>
            </div>
        </article>
    </div>
  )
}

export default SidebarArticles
