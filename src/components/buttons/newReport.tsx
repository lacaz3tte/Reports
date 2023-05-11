import { useNavigate } from "react-router-dom";

const NewReport = () => {

  const navigate = useNavigate();

  return (
    <button
      className="m-3 hover:bg-h3 active:bg-transparent rounded-full p-2 transition-all text-h1 flex items-center justify-center active:text-h2 bg-h4 overflow-hidden"
      onClick={() => {navigate('/newreport')} }
    >
      <p className="font-rubic_light mx-2">Новый отчет</p>
    </button>
  )
}

export default NewReport