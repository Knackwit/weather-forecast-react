import useFetch from './useFetch';

function App() {
  const { data, loading, error } = useFetch("https://api.weather.gov/gridpoints/TOP/32,34/forecast");

  if (loading) return <h1>LOADING...</h1>;

  if (error) console.log(error);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <ul>
        { data?.map((item) => {
          return(
            <li key={item.number}>
              {item.name}: {item.temperature}F
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
