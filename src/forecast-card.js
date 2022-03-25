import React from 'react'

function ForecastCard(props) {
  return (
    <div className='ForecastCard'>
      <ul>
        { props.data?.map((item) => {
          return(
            <li key={item.number}>
              {item.name}: {item.temperature}F, {item.shortForecast}
             </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ForecastCard
