import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filter = () => {

  const [month, setMonth] = useState<Date | null>(null);
  const [year, setYear] = useState<Date | null>(null);

  return (
    <div className="w-1/3 h-full border-l-2 border-h5">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <p className="font-rubic_light text-lg m-5 font-semibold">Месяц:</p>
          <div className="flex">
            <DatePicker
              className="text-center outline-none border-b-[1px] border-h3 font-rubic_light bg-transparent inline-block"
              selected={month}
              onChange={(date) => setMonth(date as Date)}
              showMonthYearPicker
              dateFormat="MMMM"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-rubic_light text-lg m-5 font-semibold">Год:</p>
          <div className="flex">
            <DatePicker
              className="text-center outline-none border-b-[1px] border-h3 font-rubic_light bg-transparent inline-block"
              selected={year}
              onChange={(date) => setYear(date as Date)}
              showYearPicker
              dateFormat="yyyy"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-rubic_light text-lg m-5 font-semibold">Статус:</p>
          <div className="flex">
            <p className="text-center font-rubic_light inline-block"></p>
            <select className="outline-none font-rubic_light bg-transparent border-none">
              <option value='null'></option>
              <option value='saved'>Сохранено</option>
              <option value='accepted'>Принято</option>
              <option value='cancelled'>Не принято</option>
              <option value='sent'>Отправлено</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="m-5 hover:bg-h3 active:bg-transparent rounded-full p-2 transition-all text-h1 flex items-center justify-center active:text-h2 bg-h4 overflow-hidden"
          >
            <p className="font-rubic_light mx-2">Найти</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filter