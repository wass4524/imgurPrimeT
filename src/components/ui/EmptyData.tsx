const EmptyData = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="max-w-md p-4 mx-auto text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-20 h-20 mx-auto text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4a6 6 0 100 12 6 6 0 000-12z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5.2-5.2"></path>
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 mt-6">No Galleries Found</h2>
        <p className="text-gray-600 mt-2">
          Sorry, we couldn't find any galleries for your search.
        </p>
      </div>
    </div>
  )
}

export default EmptyData
