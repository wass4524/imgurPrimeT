import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import GalleryThumbnails from '../components/ui/GalleryThumbnails'
import SearchGalleries from '../components/form/SearchGalleries'
import SectionFilter from '../components/form/SectionFilter'
import ViralImagesFilter from '../components/form/ViralImagesFilter'
import SkeletonCards from '../components/ui/SkeletonCards'
import EmptyData from '../components/ui/EmptyData'

import { InlineSectionProps, InlineViralImagesProps, OnChange, OnSubmit } from "../types/types"


const Home = () => {

  const [viralImages, setViralImages] = useState<InlineViralImagesProps>(true)
  const [section, setSection] = useState<InlineSectionProps>('hot')
  const [searchGalleries, setsearchGalleries] = useState<string>('')

  const headers = { 'Authorization': import.meta.env.VITE_CLIENT_ID }
  const query = `${import.meta.env.VITE_GALLERY_POSTS}${section}/viral/day/1?showViral=true&album_previews=true`

  const { data, isLoading, error } = useFetch(query, headers)

  const posts = data?.filter((post) => (
    (post.images && post.images[0].type !== 'video/mp4') &&
    (viralImages ? post.in_most_viral || !post.in_most_viral : post.in_most_viral === false) &&
    (searchGalleries === '' || post.images[0].description?.toLowerCase().includes(searchGalleries.toLowerCase()))
  )) ?? null

  const handleSection = (event: OnChange) => {
    setSection(event.target.value as InlineSectionProps)
  }

  const handleViralImages = () => {
    setViralImages(!viralImages)
  }

  const handleSearch = (event: OnSubmit) => {
    event.preventDefault()
    const query = (event.target as HTMLFormElement).elements[0] as HTMLInputElement
    setsearchGalleries(query.value)
  }

  return ( 
    <div className="container my-0 mx-auto max-w-6xl">
      <div className="filters p-4 mb-4 border-gray-400 flex gap-4 justify-between sticky top-0 z-10 bg-gray-50 rounded-b-lg">
        <SectionFilter section={section} handleSection={handleSection} />
        <div className="flex gap-5">
          <ViralImagesFilter viralImages={viralImages} handleViralImages={handleViralImages} />
          <SearchGalleries handleSearch={handleSearch} />
        </div>
      </div>
      {error && <div>{error}</div>}
      {isLoading && <SkeletonCards cards={20} width={'w-68'} />}
      {posts && posts.length === 0 && <EmptyData />}
      {posts && <GalleryThumbnails posts={posts} />}
    </div>
   )
}
 
export default Home