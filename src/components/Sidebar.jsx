import PopularTagsCard from "./PopularTagsCard"
import SearchDailog from "./SearchDailog"
import SidebarArticles from "./SidebarArticles"
import SidebarCategories from "./SidebarCategories"


const Sidebar = ({ children }) => {
  return (
    <aside className="col-span-full lg:col-span-4 sticky top-36 flex flex-col gap-y-8">
        <SearchDailog/>
        <SidebarArticles type="Popular"/>
        <SidebarCategories/>
        <PopularTagsCard/>
    </aside>
  )
}

export default Sidebar
