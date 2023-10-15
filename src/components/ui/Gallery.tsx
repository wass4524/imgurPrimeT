import { useContext } from "react"
import { PostContext } from '../../pages/GalleryDetails'

const Gallery = () => {
  
  const post = useContext(PostContext)

  return ( 
    <ul>
      {
        post?.images?.map((image) => (
          <li className='mb-5' key={image.id}>
              <img className="h-auto max-w-lg rounded-lg" src={image.link} loading='lazy' alt=""/>
              <div className='description text-justify my-5'>{image.description}</div>
          </li>
        ))
      }
    </ul>
   )
}
 
export default Gallery