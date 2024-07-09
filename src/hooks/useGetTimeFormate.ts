// const meses = {
//   1: "En",
//   2: "Feb",
//   3: "Mar",
//   4: "Abr",
//   5: "May",
//   6: "Jun",
//   7: "Jul",
//   8: "Agto",
//   9: "Sept",
//   10: "Oct",
//   11: "Nov",
//   12: "Dic",
// };
interface month {
  mesNum: number;
  mesNombre: string;
}
const meses: month[] = [
  { mesNum: 1, mesNombre: "En" },
  { mesNum: 2, mesNombre: "Feb" },
  { mesNum: 3, mesNombre: "Mar" },
  { mesNum: 4, mesNombre: "Abr" },
  { mesNum: 5, mesNombre: "May" },
  { mesNum: 6, mesNombre: "Jun" },
  { mesNum: 7, mesNombre: "Jul" },
  { mesNum: 8, mesNombre: "Agto" },
  { mesNum: 9, mesNombre: "Sept" },
  { mesNum: 10, mesNombre: "Oct" },
  { mesNum: 11, mesNombre: "Nov" },
  { mesNum: 12, mesNombre: "Dic" },
];
const useGetTimeFormated = () => {
  const dateNow = new Date();
  let day;
  let month;
  meses.map((m) => {
    if (m.mesNum === dateNow.getMonth() + 1) {
      month = m.mesNombre;
    }
  });
  if (dateNow.getDay()< 10) {
    day = `0${dateNow.getDate()}`    
  }else{
    `${dateNow.getDate()}`
  }
  return {dayFormated:`${day}/${month}/${dateNow.getFullYear()}`}
};
export default useGetTimeFormated;
