import MyProfile from "../components/MyProfile"
import BackButton from "../components/buttons/backButton"
import NewReport from "../components/buttons/newReport"
import SavedReports from "../components/SavedReports"
import FilterButton from "../components/buttons/filterButton"
import { ReportsContext } from "../components/ReportsContext"
import { useContext } from 'react';
import CancelButton from "../components/buttons/cancelButton"
import Filter from "../components/Filter"

const MainMenu = () => {

  const reportContext = useContext(ReportsContext)

  return (
    <div className="md:h-2/3 md:w-1/2 w-full h-full min-h-[400px] min-w-[325px] relative rounded-2xl bg-h1 transition-all flex justify-between">
      <div className="absolute top-0 left-0 right-0 border-b-2 border-h5 flex justify-between">
        <div className="flex">
          <BackButton />
          <NewReport />
        </div>
        <div className="flex">
          {
            reportContext.filter && <CancelButton />
          }
          <FilterButton />
        </div>
      </div>
      <div className="absolute top-[64px] left-0 right-0 bottom-0 flex ">
        <SavedReports />
        {
          reportContext.filter ? <Filter /> : <MyProfile />
        }
        
      </div>
    </div>
  )
}

export default MainMenu