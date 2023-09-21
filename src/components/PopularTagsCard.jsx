import Link from "next/link";

const PopularTagsCard = () => {
  return (
    <div className="popular-tags-box border border-light rounded-lg p-5 overflow-hidden">
        <h4 className="font-semibold text-xl capitalize">Popular Tags</h4>
        <hr className="mt-3 mb-6"/>
        <div>
            <Link 
                href={`/blog/tag/slug`}
                className="inline-block p-2 border text-xs uppercase m-1 transition ease-in-out duration-500 hover:bg-main-500 hover:text-white rounded"
            >
                Tag name 1
            </Link>
            <Link 
                href={`/blog/tag/slug`}
                className="inline-block p-2 border text-xs uppercase m-1 transition ease-in-out duration-500 hover:bg-main-500 hover:text-white rounded"
            >
                Tag name 2
            </Link>
            <Link 
                href={`/blog/tag/slug`}
                className="inline-block p-2 border text-xs uppercase m-1 transition ease-in-out duration-500 hover:bg-main-500 hover:text-white rounded"
            >
                Tag name 3
            </Link>
            <Link 
                href={`/blog/tag/slug`}
                className="inline-block p-2 border text-xs uppercase m-1 transition ease-in-out duration-500 hover:bg-main-500 hover:text-white rounded"
            >
                Tag name 4
            </Link>
            <Link 
                href={`/blog/tag/slug`}
                className="inline-block p-2 border text-xs uppercase m-1 transition ease-in-out duration-500 hover:bg-main-500 hover:text-white rounded"
            >
                Tag name 5
            </Link>
            <Link 
                href={`/blog/tag/slug`}
                className="inline-block p-2 border text-xs uppercase m-1 transition ease-in-out duration-500 hover:bg-main-500 hover:text-white rounded"
            >
                Tag name 6
            </Link>
            <Link 
                href={`/blog/tag/slug`}
                className="inline-block p-2 border text-xs uppercase m-1 transition ease-in-out duration-500 hover:bg-main-500 hover:text-white rounded"
            >
                Tag name 7
            </Link>
        </div>
    </div>
  )
}

export default PopularTagsCard
