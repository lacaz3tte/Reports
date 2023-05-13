
import { useContext } from 'react';
import { ReportsContext } from '../ReportsContext';
const FilterButton = () => {

  const reportContext = useContext(ReportsContext)

  return (
    <button
      className="hidden m-3 hover:bg-h3 active:bg-transparent rounded-full p-2 transition-all text-h1 md:flex items-center justify-center active:text-h2 bg-slate-500 overflow-hidden"
      onClick={()=>{reportContext.changeFilter(true)}}
    >
      <p className="font-rubic_light mx-2">Фильтр отчетов</p>
    </button>
  )
}

export default FilterButton