import { useContext } from "react"
import { ReportsContext } from "../ReportsContext"

const CancelButton = () => {

  const reportContext = useContext(ReportsContext)

  return (
    <button
      className="m-2 hover:bg-h4 active:bg-transparent rounded-full p-2 transition-all text-h2 hover:text-h1"
      onClick={()=>{
        reportContext.changeFilter(false)
      }}
    >
      <svg className="h-8 w-8"  
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round">  
        <path stroke="none" d="M0 0h24v24H0z"/>  
        <line x1="18" y1="6" x2="6" y2="18" />  
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  )
}

export default CancelButton
