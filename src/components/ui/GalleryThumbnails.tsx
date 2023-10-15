import { Link } from 'react-router-dom'
import { useEffect, useState, FC } from 'react'
import { DataProps } from '../../types/types'

const GalleryThumbnails: FC<{ posts: DataProps[] | null }> = ({ posts}) => {

  const [rows, setRows] = useState<DataProps[][]>([])

  useEffect(() => {
    const numRows = 4
    const rowArray: DataProps[][] = Array.from({ length: numRows }, () => [])
    let rowIndex = 0

    posts?.forEach((post) => {
      rowArray[rowIndex].push(post)
      rowIndex = (rowIndex + 1) % numRows
    })

    setRows([...rowArray])

  }, [posts])

  return ( 
    <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-4 flex-col">
          {row.map((post) => (
            <Link key={post.id} to={`gallery/${post.id}`} className='border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300'>
              <div className="flex-grow">
                <img src={post.images[0].link} alt={post.title} className={`w-full min-h-52 ${post.images[0].description ? 'rounded-t-lg' : 'rounded-lg'}`} loading='lazy'/>
              </div>
              {post.images[0].description && <div className="p-3">
                  <p className="line-clamp-2 font-normal text-gray-700" title={post.images[0].description}>{post.images[0].description}</p>
              </div>}
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

 
export default GalleryThumbnails