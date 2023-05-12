import { useEffect } from "react"
import { IReport } from "./ReportsContext"
import { getDate } from "./getDate"

const Report = (value:IReport) => {

  useEffect(()=>{
    console.log(value.totalAmount)
  },[])

  return (
    <div className=' hover:bg-h4 m-5 p-5 rounded-3xl hover:text-h1'>
      <div>
        <p className="font-rubic_light font-bold inline-block">Отчет за период:</p>
        <p className="font-rubic_light inline-block">&nbsp;{getDate(value.date)}</p>
      </div>
      <div>
        <p className="font-rubic_light font-bold inline-block">Составитель:</p>
        <p className="font-rubic_light inline-block">&nbsp;{value.compiler}</p>
      </div>
      <div>
        <p className="font-rubic_light font-bold inline-block">Итоговая сумма:</p>
        <p className="font-rubic_light inline-block">&nbsp;{value.totalAmount} руб.</p>
      </div>
      <div>
        <p className="font-rubic_light font-bold inline-block">Статус:</p>
        <p className="font-rubic_light inline-block">&nbsp;{value.status}</p>
      </div>
    </div>
  )
}

export default Report