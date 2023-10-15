import { createContext } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import VoteCell from '../components/ui/VoteCell'
import Title from '../components/ui/Title'
import Gallery from '../components/ui/Gallery'
import SkeletonCards from '../components/ui/SkeletonCards'

import { DataProps } from '../types/types'

export const PostContext = createContext<DataProps | null>(null)

const GalleryDetails = () => {

  const { id } = useParams()

  const headers = { 'Authorization': import.meta.env.VITE_CLIENT_ID }
  const query = `${import.meta.env.VITE_GALLERY_POST}${id}`

  const { data: post, isLoading, error } = useFetch(query, headers)

  return ( 
    <div className='w-full max-w-lg mx-auto flex flex-row w- flex-nowrap flex-grow justify-center items-stretch'>

      <PostContext.Provider value={post}>

        <VoteCell />

        <div className="flex flex-col w-full">
          <Title>{post?.title}</Title>
          <Gallery />
        </div>

      </PostContext.Provider>

      {error && <div>{error}</div>}
      {isLoading && <SkeletonCards cards={1} width='w-128' marginTop='mt-10' height='h-72' heightImage='h-96' />}
    
    </div>
   )
}


export default GalleryDetails