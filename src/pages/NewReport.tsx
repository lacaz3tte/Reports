import BackButton from "../components/buttons/backButton"
import NewFolder from "../components/NewFolder";

const NewReport = () => {

  return (
    <div className="md:h-2/3 md:w-1/2 w-full h-full min-h-[400px] min-w-[325px] relative rounded-2xl bg-h1 transition-all flex justify-between">
      <div className="absolute top-0 left-0 right-0 border-b-2 border-h5 flex">
        <BackButton />
      </div>
      <div className="absolute top-[64px] left-0 right-0 bottom-0 ">
        <NewFolder />
      </div>
    </div>
  )
}

export default NewReport