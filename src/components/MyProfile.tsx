
const MyProfile = () => {
  return (
    <div className="w-1/3 h-full border-l-2 border-h5">
      <div className="p-5">
        <label className="underline font-rubic_light text-sm">ФИО:</label>
        <p className="font-rubic_light text-xl font-semibold mb-5">Пахомов Олег Владимирович</p>
        <label className="underline font-rubic_light text-sm">Город:</label>
        <p className="font-rubic_light font-semibold  mb-5">Санкт-Петербург</p>
        <label className="underline font-rubic_light text-sm">Должность:</label>
        <p className="font-rubic_light font-semibold mb-5">Разработчик</p>
        <label className="underline font-rubic_light text-sm">Руководитель:</label>
        <p className="font-rubic_light font-semibold mb-5">Нет</p>
      </div>
    </div>
  )
}

export default MyProfile