const months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]

export const getDate = (value:Date|[Date,Date]) => {
  let newVal =''

  if(value instanceof Date){
    newVal = makeString(value)
  } else {
    newVal = makeString(value[0]) + ' - ' + makeString(value[1])
  }

  
  return newVal
} 

const makeString = (value:Date) => {
  return value.getUTCDate() + 1 + '.' +  months[value.getMonth()] + '.' + value.getFullYear()
}