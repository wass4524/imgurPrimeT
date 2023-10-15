import { AllSectionProps } from "../../types/types"

const SectionFilter = ({section, handleSection}: AllSectionProps) => {

  return ( 
    <div>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
              <div className="flex items-center">
                  <input id="hotRadio" type="radio" onChange={handleSection} checked={section !== 'hot' ? false : true } value="hot" name="sections" className="w-4 h-4 peer hidden text-green-600 bg-gray-100 border-gray-300 focus:ring-transparent"/>
                  <label htmlFor="hotRadio" className="w-full peer-checked:text-green-600 cursor-pointer p-3 text-sm font-medium text-gray-900">Hot</label>
              </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
              <div className="flex items-center">
                  <input id="topRadio" type="radio" onChange={handleSection} checked={section !== 'top' ? false : true } value="top" name="sections" className="w-4 h-4 peer hidden text-green-600 bg-gray-100 border-gray-300 focus:ring-transparen"/>
                  <label htmlFor="topRadio" className="w-full peer-checked:text-green-600 cursor-pointer p-3 text-sm font-medium text-gray-900">Top</label>
              </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
              <div className="flex items-center">
                  <input id="userRadio" type="radio" onChange={handleSection} checked={section !== 'user' ? false : true } value="user" name="sections" className="w-4 h-4 peer hidden text-green-600 bg-gray-100 border-gray-300 focus:ring-transparen"/>
                  <label htmlFor="userRadio" className="w-full peer-checked:text-green-600 cursor-pointer p-3 text-sm font-medium text-gray-900">User</label>
              </div>
          </li>
      </ul>
    </div>
   )
}
 
export default SectionFilter