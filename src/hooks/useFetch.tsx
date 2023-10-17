import { useEffect, useState } from 'react'
import { DataProps } from '../types/types'

const useFetch = (query: string, headers: HeadersInit) => {

  const [data, setData] = useState<DataProps[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => { 

    const abortController = new AbortController()
    setIsLoading(true)

    fetch(query, { headers, signal: abortController.signal })
      .then(response => response.ok ? response.json() : (() => { throw new Error("Couldn't fetch data from imgur") })())
      .then(({ data }) => {
        setData(data)
        setIsLoading(false)
        setError(null)
      })
      .catch((error) => {
        setIsLoading(false)
        setError(error.message)
      })

      return () => abortController.abort()
      
  }, [ query ])

  return { data, isLoading, error }
}
 
export default useFetch