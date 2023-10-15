import { useContext } from "react"
import { PostContext } from '../../pages/GalleryDetails'

const VoteCell = () => {

  const post = useContext(PostContext)
  
  return ( 
    <div className='w-32 z-10'>
      <div className="sticky top-52 h-screen box-content mr-5 mt-10">
        <div className='border border-gray-200 shadow rounded p-2 flex flex-col items-center'>
          <div className="font-medium text-sm p-2.5 text-center inline-flex items-center">
            <svg className="w-6 h-6 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
              <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
            </svg>
          </div>
          <span className=' font-bold text-sm'>{post?.ups.toLocaleString()}</span>
          <div className="font-medium text-sm p-2.5 text-center inline-flex items-center mt-5">
            <svg className="w-6 h-6 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
              <path d="M11.955 2.117h-.114C9.732 1.535 6.941.5 4.356.5c-1.4 0-1.592.526-1.879 1.316l-2.355 7A2 2 0 0 0 2 11.5h3.956L4.4 16a1.779 1.779 0 0 0 3.332 1.061 24.8 24.8 0 0 1 4.226-5.36l-.003-9.584ZM15 11h2a1 1 0 0 0 1-1V2a2 2 0 1 0-4 0v8a1 1 0 0 0 1 1Z"/>
            </svg>
          </div>
          <span className='text-sm'>{post?.downs.toLocaleString()}</span>
        </div>

        <div className="score mt-20 border border-gray-200 shadow rounded p-2 flex flex-col items-center">
          <div className="font-medium text-sm p-2.5 text-center inline-flex items-center">
            <svg className="w-6 h-6 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
          </div>
          <span className='font-bold text-sm'>{post?.score?.toLocaleString()}</span>
        </div>
      </div>
    </div>
   )
}
 
export default VoteCell