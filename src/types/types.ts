import { ChangeEvent, FormEvent } from "react"
// Section filter types
export type InlineSectionProps = 'hot' | 'top' | 'user'
export type SectionProps = { section: InlineSectionProps }
export type HandleSectionProps = { handleSection: (event: OnChange) => void }
export type AllSectionProps = SectionProps & HandleSectionProps

// ViralImages types
export type InlineViralImagesProps = boolean
export type ViralImagesProps = { viralImages: InlineViralImagesProps }
export type handleViralImages = { handleViralImages: () => void }
export type AllViralImagesProps = ViralImagesProps & handleViralImages

// SearchGalleries types
export type HandleSearchGalleriesProps = { handleSearch: (event: OnSubmit) => void }

// events types
export type OnChange = ChangeEvent<HTMLInputElement>
export type OnSubmit = FormEvent<HTMLFormElement>

// data fetch types
export type DataProps = {
  id: number,
  title: string,
  images: [
    {
      id: number,
      link: string,
      description: string,
      type: string
    }
  ],
  ups: number,
  downs: number,
  score: number,
  in_most_viral?: boolean
}

