
import { useEffect, useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import File from "./buttons/file";
import { ReportsContext } from "./ReportsContext";

interface Data {
  representative:number|null,
  business_trips:number|null,
  auto:number|null,
  other:number|null,
}

const NewFolder = () => {

  const reportsContext = useContext(ReportsContext)


  //Дата
  const [startDate, setStartDate] = useState<Date|null>(null);

  //Диапазон
  const [dateRange, setDateRange] = useState<[Date|null,Date|null]>([null, null]);
  const [startSecondDate, endDate] = dateRange;


  const [summ,setSumm] = useState<Data>({
    representative:null,
    business_trips:null,
    auto:null,
    other:null
  });

  const [sum,setSum] = useState(0)
  const [secondPeriod,setSecondPeriod] = useState(false)

  useEffect(()=>{
    setSum((summ.auto?summ.auto:0) + (summ.business_trips?summ.business_trips:0)  + (summ.other?summ.other:0) + (summ.representative?summ.representative:0))
  },[summ])

   const validate = () => {
    if(summ.auto!==null && summ.business_trips!==null && summ.other!==null && summ.representative!==null && (startDate!==null || (dateRange[0]!==null && dateRange[1]!==null))){
      return false
    }
    return true
  } 

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className="h-full w-2/3 flex flex-col justify-center">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <p className="font-rubic_light text-lg m-5 font-semibold">Отчетный период:</p>
              {
                secondPeriod 
                ?
                <DatePicker
                  className="text-center outline-none border-b-[1px] border-h3 font-rubic_light bg-transparent inline-block w-full"
                  selectsRange={true}
                  startDate={startSecondDate}
                  endDate={endDate}
                  dateFormat='dd.MMMM.yyyy'
                  onChange={(update) => {setDateRange(update)}}
                />
                :
                <DatePicker
                  className="text-center outline-none border-b-[1px] border-h3 font-rubic_light bg-transparent inline-block "
                  selected={startDate}
                  dateFormat='dd.MMMM.yyyy'
                  onChange={(date) => setStartDate(date as Date)}
                />
              }
          </div>
          {
            secondPeriod 
            ?
            <button
              className="m-3 hover:bg-h3 active:bg-transparent rounded-full p-2 transition-all text-h1 flex items-center justify-center active:text-h2 bg-h4 overflow-hidden"
              onClick={()=>{
                setSecondPeriod(false)
                setDateRange([null,null])
              }}
            >
              <p className="font-rubic_light mx-2">Сменить на дату</p>
            </button>
            :
            <button
              className="m-3 hover:bg-h3 active:bg-transparent rounded-full p-2 transition-all text-h1 flex items-center justify-center active:text-h2 bg-h4 overflow-hidden"
              onClick={()=>{
                setSecondPeriod(true)
                setStartDate(null)
              }}
            >
              <p className="font-rubic_light mx-2">Сменить на диапазон</p>
            </button>
          }
        </div>
        <div className="flex items-center justify-between">
          <p className="font-rubic_light text-lg m-5 font-semibold">Представительские расходы:</p>
          <div>
            <input 
              type="number" 
              className="text-center outline-none border-b-[1px] border-h3 font-rubic_light bg-transparent" 
              min={0}
              onChange={(e)=>{setSumm((prev)=>{return{...prev,representative:Number(e.target.value)}})}}
              ></input>
              <p className="inline-block font-rubic_light">руб.</p>
            <File />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-rubic_light text-lg m-5 font-semibold">Командировочные расходы:</p>
          <div>
            <input 
              type="number" 
              className="text-center outline-none border-b-[1px] border-h3 font-rubic_light bg-transparent" 
              min={0}
              onChange={(e)=>{setSumm((prev)=>{return{...prev,business_trips:Number(e.target.value)}})}}>
            </input>
            <p className="inline-block font-rubic_light">руб.</p>
            <File />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-rubic_light text-lg m-5 font-semibold">Расходы на автомобиль:</p>
          <div>
            <input 
              type="number" 
              className="text-center outline-none border-b-[1px] border-h3 font-rubic_light bg-transparent" 
              min={0}
              onChange={(e)=>{setSumm((prev)=>{return{...prev,auto:Number(e.target.value)}})}}>
            </input>
            <p className="inline-block font-rubic_light">руб.</p>
            <File />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-rubic_light text-lg m-5 font-semibold">Прочие расходы:</p>
          <div>
            <input 
              type="number" 
              className="text-center outline-none border-b-[1px] border-h3 font-rubic_light bg-transparent" 
              min={0}
              onChange={(e)=>{setSumm((prev)=>{return{...prev,other:Number(e.target.value)}})}}>
            </input>
            <p className="inline-block font-rubic_light">руб.</p>
            <File />
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-center items-center">
          <p className="font-rubic_light text-center text-lg m-5 font-semibold">Итого:</p>
          <p className="font-rubic_light">{sum}</p>
          <p className="inline-block font-rubic_light"> руб.</p>
          </div>
          <div className="flex justify-center">
            <button disabled={validate()}
              onClick={()=>{
                reportsContext.addReport({date:(startDate ? startDate as Date : dateRange as [Date,Date]),totalAmount:sum, status:"Сохранен", compiler:"Пахомов О.В."})
                history.back()
              }}
              className="m-2 hover:bg-h3 active:bg-transparent rounded-full p-2 transition-all text-h1 font-thin flex items-center justify-center active:text-h2 bg-slate-500 disabled:bg-slate-300"
            >
              <p className="font-rubic_light mx-2">Сохранить</p>
            </button>
            <button disabled={validate()}
              onClick={()=>{
                reportsContext.addReport({date:(startDate ? startDate as Date : dateRange as [Date,Date]),totalAmount:sum, status:"На рассмотрении", compiler:"Пахомов О.В."})
                history.back()
              }}
              className="m-2 hover:bg-h3 active:bg-transparent rounded-full p-2 transition-all text-h1 font-thin flex items-center justify-center active:text-h2 bg-h4 disabled:bg-slate-300"
            >
              <p className="font-rubic_light mx-2">Отправить</p>
            </button>
            </div>
            
        </div>
      </div>

    </div>
  )
}

export default NewFolder