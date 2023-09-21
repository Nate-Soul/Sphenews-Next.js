import Sidebar from "@/components/Sidebar";

export default function BlogLayout({ children }) {
  return (
    <div className="container grid grid-cols-12 gap-8 py-14">
        <div className="col-span-8">
            {children}
        </div>
        <Sidebar/>
    </div>
  )
}
