import './style.css'

let currentDate = new Date();
let days = Array.from(new Array(357))

function Days(){ 
  return(
    <div className='days'>
      {days.map((day, index) => (<div className='day' key={index} >{day}</div>))}
    </div> 
  )
}

export default Days;