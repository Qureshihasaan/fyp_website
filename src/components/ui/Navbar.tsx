
import Link from "next/link"
import  { Search } from "lucide-react"

export default function Component() {
  return (
    <div className="flex items-center justify-between w-full px-4 md:px-6 p-4">
      <Link className="flex gap-2 items-center" href="#">
        {/* <Icon className="h-6 w-6" /> */}
        <span className="font-semibold px-10">FYP WEBSITE</span>
      </Link>
      <nav className="flex items-center gap-6 md:gap-6">
        <Link className="font-semibold" href="#">
          Home
        </Link>
        <Link className="font-semibold" href="#">
          Categories
        </Link>
        <Link className="font-semibold" href="#">
          About
        </Link>
        <Link className="font-semibold" href="#">
          Contact
        </Link>
      </nav>
      <div className="flex rounded-md bg-white border-2">
                <input
                    type="text"
                    placeholder="What you are looking for"
                    className="rounded-r text-black" />
                    <Search className="h-6 w-6 text-black-200 " />
            </div>
      <div className="flex items-center gap-2 md:gap-4">
        <Link className="font-semibold" href="./">
          Sign in
        </Link>
        <Link
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus:outline-none focus:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-950 dark:hover:bg-gray-50/90 dark:focus:bg-gray-50/90"
          href="#"
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}

