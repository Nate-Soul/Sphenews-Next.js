import Link from "next/link";

const SidebarCategories = () => {
  return (
    <div className="category-box border border-light rounded-lg p-5 overflow-hidden">
        <h4 className="font-semibold text-xl capitalize">Categories</h4>
        <hr className="mt-3 mb-6"/>
        <ul className="flex flex-col gap-3">
            <li>
                <Link 
                    href={`/blog/category/slug`}
                    className="inline-flex justify-between items-center text-slate-50 hover:text-main-500 dark:hover:text-secondary-500">
                        Category name 1
                    <span>14</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default SidebarCategories
