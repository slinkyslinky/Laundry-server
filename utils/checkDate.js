export default function () {


   let refreshDate = new Date()
   const initCorrection = refreshDate.getTime() - (refreshDate.getDay() - 0) * (24 * 3600 * 1000)
   refreshDate.setTime(initCorrection)
   // const nextCorrection = refreshDate.getTime() + (7 * 24 * 3600 * 1000)
   const nextCorrection = refreshDate.getTime() + (120 * 1000)
   refreshDate.setTime(nextCorrection)

   console.log(refreshDate.getDate(), "-", refreshDate.getHours(), "-", refreshDate.getMinutes());
   setInterval(() => {
      const curDate = new Date()

      if (curDate.getTime() >= refreshDate.getTime()) {
         console.log("next");
         refreshDate = new Date(refreshDate.getTime() + 120 * 1000)
      } else (console.log('last')
      )
   }, 60 * 1000)
}