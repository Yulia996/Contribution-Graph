import './style.css'
import Days from '../Days/Days';

const months = ['Янв.','Февр.','Март','Апр.','Май','Июнь','Июль','Авг.','Сент.','Окт.','Нояб.','Дек.' ];
const weekdays = ['Пн', '', 'Ср', '','Пт', '', ''];

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

export default Graph;