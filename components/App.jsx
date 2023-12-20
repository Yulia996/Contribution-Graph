import './style.css'

const months = ['Янв.','Февр.','Март','Апр.','Май','Июнь','Июль','Авг.','Сент.','Окт.','Нояб.','Дек.' ];
const weekdays = ['Пн', '', 'Ср', '','Пт', '', ''];

let days = Array.from(new Array(357))
function Days(){ 
  return(
    <div className='days'>
      {days.map((day, index) => (<div className='day' key={index}>{day}</div>))}
    </div> 
  )
}

function Graph() {
  return (
    <section className='graph'>
        <div className='months'>{months.map((month, index) => (<p className='month' key={index}>{month}</p>))}</div>
        <div className='block'>
          <div className=''>{weekdays.map((weekday, index) => (<p className='weekday' key={index}>{weekday}</p>))}</div>
          <Days/>   
        </div>          
      <div className=''></div> 
    </section>
  )
}

function App() {
  return (
    <>
     <Graph/>
    </>
  )
}

export default App
