import { ReactNode } from "react"

type TitleProps = {
  children: ReactNode
}

const title = ({ children }: TitleProps) => {
  return ( <h3 className="text-3xl font-bold text-center ml-15 my-10 ">{ children }</h3> )
}
 
export default title