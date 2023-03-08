import {useState, useEffect} from 'react'
import {RotatingLines} from 'react-loader-spinner'

import {
  AppContainer,
  ContentContainer,
  MainDataContainer,
  TempContainer,
  OtherDataContainer,
  ParamItemContainer,
  IconAndDescContainer,
  LoadingViewContainer,
  MainTemperatureText,
  ParamItemHeading,
  ParamItemPara,
  Para,
  AppTitle,
  InputContainer,
  Image,
  Input,
  Button,
  WeatherTitle,
  WeatherText,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const API_KEY = '44f9a2cee5526eeeebb00ac9b5f45ac9'

const WeatherApp = () => {
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [data, setData] = useState({city, country})
  const [weatherData, setWeatherData] = useState('')
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    errorMsg: null,
  })

  const handleCityChange = event => {
    setCity(event.target.value)
  }

  const handleCountryChange = event => {
    setCountry(event.target.value)
  }

  const handleDataChange = event => {
    event.preventDefault()
    if (city === '') {
      // eslint-disable-next-line no-alert
      alert('Please Enter City')
    } else if (country === '') {
      // eslint-disable-next-line no-alert
      alert('Please Enter Country')
    } else {
      setData({city, country})
    }
  }

  useEffect(() => {
    const getWeatherData = async () => {
      setApiResponse({
        status: apiStatusConstants.inProgress,
        data: null,
        errorMsg: null,
      })
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`

      if (city === '' && country === '') {
        url = `https://api.openweathermap.org/data/2.5/weather?q=mumbai,india&appid=${API_KEY}&units=metric`
      }
      //   console.log(city === '', country, url)

      const options = {
        method: 'GET',
      }
      let response = await fetch(url, options)
      response = await response.json()

      if (response.cod === 200) {
        setWeatherData({
          date: new Date(response.dt * 1000).toLocaleTimeString().toUpperCase(),
          name: response.name,
          visibility: response.visibility / 1000,
          country: response.sys.country,
          sunrise: new Date(response.sys.sunrise * 1000)
            .toLocaleTimeString()
            .toUpperCase(),
          sunset: new Date(response.sys.sunset * 1000)
            .toLocaleTimeString()
            .toUpperCase(),
          temp: Math.round(response.main.temp),
          humidity: response.main.humidity,
          pressure: response.main.pressure,
          tempMax: Math.round(response.main.temp_max),
          tempMin: Math.round(response.main.temp_min),
          description: response.weather[0].description,
          icon: response.weather[0].icon,
          mainDescription: response.weather[0].main,
          windDirection: response.wind.deg,
          windSpeed: response.wind.speed,
        })

        setApiResponse({
          status: apiStatusConstants.success,
        })
      } else {
        setApiResponse({
          status: apiStatusConstants.failure,
          errorMsg: response.message,
        })
        console.log(response)
      }
    }

    getWeatherData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
  //   console.log(weatherData)

  const params = [
    {
      id: 1,
      paramName: 'High/Low',
      value: `${weatherData.tempMin}/${weatherData.tempMax}`,
    },
    {id: 2, paramName: 'Wind', value: `${weatherData.windSpeed} km/hr`},
    {id: 3, paramName: 'Humidity', value: `${weatherData.humidity} %`},
    {
      id: 4,
      paramName: 'Wind Direction',
      value: `${weatherData.windDirection}° deg`,
    },
    {id: 5, paramName: 'Pressure', value: `${weatherData.pressure} hPa`},
    {id: 6, paramName: 'Sunrise', value: `${weatherData.sunrise}`},
    {id: 7, paramName: 'Visibility', value: `${weatherData.visibility} Km`},
    {id: 8, paramName: 'Sunset', value: `${weatherData.sunset}`},
  ]

  const renderFailureView = () => (
    <LoadingViewContainer>
      <h1>City Not Found</h1>
    </LoadingViewContainer>
  )

  const renderSuccessView = () => (
    <>
      <MainDataContainer>
        <WeatherTitle>
          {weatherData.name}, {weatherData.country}. Weather
        </WeatherTitle>
        <Para>As of {weatherData.date}</Para>
        <TempContainer>
          <MainTemperatureText>{weatherData.temp}°</MainTemperatureText>
          <IconAndDescContainer>
            <Image
              src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt="icon"
            />
            <WeatherText>{weatherData.mainDescription}</WeatherText>
          </IconAndDescContainer>
        </TempContainer>
        <Para>{weatherData.description}</Para>
      </MainDataContainer>

      <OtherDataContainer>
        {params.map(eachItem => (
          <ParamItemContainer key={eachItem.id}>
            <ParamItemHeading>{eachItem.paramName}</ParamItemHeading>
            <ParamItemPara>{eachItem.value}</ParamItemPara>
          </ParamItemContainer>
        ))}
      </OtherDataContainer>
    </>
  )

  const renderLoadingView = () => (
    <LoadingViewContainer>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
      />
    </LoadingViewContainer>
  )

  const renderWeatherApp = () => {
    const {status} = apiResponse

    switch (status) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <AppContainer>
      <ContentContainer>
        <AppTitle>Weather App</AppTitle>

        <InputContainer onSubmit={handleDataChange}>
          <Input
            type="text"
            placeholder="Please Enter City"
            value={city}
            onChange={handleCityChange}
          />
          <Input
            type="text"
            placeholder="Please Enter Country"
            value={country}
            onChange={handleCountryChange}
          />
          <Button onClick={handleDataChange}>Submit</Button>
        </InputContainer>

        {renderWeatherApp()}
      </ContentContainer>
    </AppContainer>
  )
}

export default WeatherApp
