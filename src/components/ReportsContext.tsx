import { createContext, useEffect, useState } from 'react'

export interface IReport {
  date:Date|[Date,Date],
  compiler:string,
  status:string
}

interface ReportsContext {
  reports:IReport[]|[],
  addReport:(value:IReport)=>void

  filter:boolean
  changeFilter:(value:boolean)=>void
}

const initialReports:IReport[] = [
  {
    date:new Date("2017-01-26"),
    compiler:"Иванов И.И.",
    status:"Принят"
  },
  {
    date:[new Date("2018-06-28"),new Date("2021-12-26")],
    compiler:"Петров А.П.",
    status:"Не принят (превышен лимит)"
  },
  {
    date:new Date("2022-10-05"),
    compiler:"Дзюба А.П.",
    status:"Сохранен"
  },
  {
    date:[new Date("2023-04-01"),new Date("2023-04-30")],
    compiler:"Слуцкий Л.В.",
    status:"На рассмотрении"
  },
  {
    date:new Date("2023-03-20"),
    compiler:"Кварацхелия Х.",
    status:"На рассмотрении"
  },
]

export const ReportsContext = createContext<ReportsContext>({
  reports:initialReports,
  addReport:()=>{},

  filter:false,
  changeFilter:()=>{}
})

export const ReportsProvider = ({ children }: any) => {

  const [reports,setReports] = useState<IReport[]>(initialReports)

  const addReport = (value:IReport) => {
    setReports((prev)=>[value,...prev])
  }

  useEffect(()=>{
    console.log(reports)
  },[reports])

  const [filter,setFilter] = useState(false)

  const changeFilter = (value:boolean) =>{
    setFilter(value)
  }


  return (
    <ReportsContext.Provider value={{
      reports:reports,
      addReport:addReport,
      filter:filter,
      changeFilter:changeFilter
    }}>
      {children}
    </ReportsContext.Provider>
  )
}