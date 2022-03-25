import React from 'react'

function ForecastCard(props) {
  return (
    <div className='ForecastCard'>
      { props.data?.map((item) => {
        return(
          <table key={item.number}>
            <tbody>
              <tr>
                <th>{item.name}</th>
              </tr>
              <tr>
                <td>Temperature</td>
                <td>{item.temperature}{item.temperatureUnit}</td>
              </tr>
              <tr>
                <td>Forecast</td>
                <td>{item.shortForecast}</td>
              </tr>
            </tbody>
          </table>
        )
      })}
    </div>
  )
}

export default ForecastCard
