import { FaSearch } from "react-icons/fa"

export default function Searchbox() {
  return (
    <>
    <div className="flex justify-center items-center relative mb-5">
        <button className="dark:text-gray-300 cursor-pointer rounded-full text-gray-400 absolute right-0 hover:bg-gray-300 dark:hover:bg-gray-950 transition-all  p-3">
          <FaSearch className="" />
        </button>

        <input
          type="text"
          id="text"
          autoComplete="off"
          name="text"
          placeholder="Search Context"
          className="w-full focus:outline-slate-200 dark:focus:outline-slate-800 border-slate-900 dark:border-slate-800 pt-[12px] pb-[12px] pl-10 bg-white dark:bg-slate-800 shadow-2xl"
        />
      </div>
    </>
  )
}