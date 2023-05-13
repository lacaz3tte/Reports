import Report from "./Report"
import { ReportsContext } from "./ReportsContext"
import { useContext } from 'react';

const SavedReports = () => {

  const reportsContext = useContext(ReportsContext)

  return (
    <div className="w-full md:w-2/3 h-full overflow-y-auto scrollbar-thin scrollbar-track-h1 scrollbar-thumb-h4">
      {
        reportsContext.reports.map((e)=>{
          return (
            <Report compiler={e.compiler} date={e.date} status={e.status} totalAmount={e.totalAmount}/>
          )
        })
      }
    </div>
  )
}

export default SavedReports