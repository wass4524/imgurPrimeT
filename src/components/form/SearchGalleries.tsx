import { HandleSearchGalleriesProps } from "../../types/types"

const SearchGalleries = ({ handleSearch }: HandleSearchGalleriesProps) => {

  return ( 

    <form className="flex items-center w-72" onSubmit={handleSearch}>
        <div className="relative w-full">
            <input type="text" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="Search by keyword" required />
        </div>
        <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-green-600 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">
            <svg className="w-4 h-4" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </button>
    </form>

   )
}
 
export default SearchGalleries