import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { WeatherI } from '../../interfaces';
import { RootState } from '../../store/store';
import './owfont-regular.css';
import './WeatherWidget.css';

const WeatherWidget: FC = () => {
  const [city, setCity] = useState<string>('');
  const [language] = useState<string>('en');
  const [weather, setWeather] = useState<WeatherI>({
    icon: '',
    temperature: '',
    description: '',
    wind: '',
    humidity: '',
    error: ''
  });

  const { isWeatherDisplayed } = useSelector((state: RootState) => state.display);

  async function getWeather(): Promise<void> {
    if (city !== '') {
      const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&appid=ee1b35b18a742a851ea9c3d86068cba0&units=metric`;
      const res: Response = await fetch(url);
      const data = await res.json();

      if (data.cod === 200) {
        setWeather({
          icon: `weather-icon owf owf-${data.weather[0].id}`,
          temperature: `${Math.round(data.main.temp)}°`,
          description: data.weather[0].description,
          wind: `${Math.round(data.wind.speed)} m/c`,
          humidity: `${Math.round(data.main.humidity)}%`,
          error: ''
        });
      } else {
        setWeather({
          icon: '',
          temperature: '',
          description: '',
          wind: '',
          humidity: '',
          error: `Error! City not found for "${city}".`
        });
      }
    }
  }

  function changeCity(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.code === 'Enter') {
      const inputValue: string = (e.target as HTMLInputElement).value;

      setCity(inputValue);
      localStorage.setItem('city', inputValue);
      getWeather();
    }
  }

  function containerClassName(): string {
    const classes: string[] = ['weather-container'];

    !isWeatherDisplayed && classes.push('hidden');

    return classes.join(' ');
  }

  useEffect(() => {
    let savedCity: string | null = localStorage.getItem('city');

    if (savedCity !== null) {
      setCity(savedCity);
      getWeather();
    }
  }, [city]);

  return (
    <div className={containerClassName()}>
      <input type='text' className='city' placeholder='[Enter city]' defaultValue={city} onKeyDown={changeCity} />
      {city && <div className='summary'>
        <span>{weather.error}</span>
        {!weather.error && <>
          <span className='description'><i className={weather.icon}></i>{weather.description}</span>
          <div><span className='summary-item-title'>Feels like </span>{weather.temperature}</div>
          <div><span className='summary-item-title'>Wind </span>{weather.wind}</div>
          <div><span className='summary-item-title'>Humidity </span>{weather.humidity}</div>
        </>}
      </div>}
    </div>
  );
}

export { WeatherWidget };
