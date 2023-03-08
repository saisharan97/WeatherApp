import styled from 'styled-components'

export const AppContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to top, #d6d6cd, white, white, white);
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  width: 90vw;
  max-width: 750px;
  margin: 20px;
  border-style: dotted;
  border-radius: 10px;
  border-color: grey;
  padding: 15px;
`

export const MainDataContainer = styled.div`
  width: 90%;
  margin: 20px;
  border-style: solid;
  border-radius: 20px;
  border-color: grey;
  padding: 15px;
  background-color: white;
`

export const InputContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 90%;
  @media all and (width<576px) {
    flex-direction: column;
  }
`

export const TempContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
`
export const OtherDataContainer = styled.ul`
  width: 90%;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const ParamItemContainer = styled.li`
  width: 40%;
  display: flex;
  border-bottom: dashed;
  justify-content: space-between;
  border-color: grey;
  @media all and (width<576px) {
    width: 100%;
  }
`

export const IconAndDescContainer = styled.li`
  display: flex;
  flex-direction: column;
`

export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`

export const MainTemperatureText = styled.h1`
  font-size: 75px;
  margin: 0;
`

export const ParamItemHeading = styled.h3``

export const ParamItemPara = styled.p`
  color: #474744;
  font-size: 15px;
`

export const Para = styled.p`
  color: black;
`

export const Image = styled.img`
  width: 75px;
  height: 75px;
`

export const Input = styled.input`
  height: 30px;
  width: 30%;
  font-size: 16px;
  padding: 0 10px;
  margin-right: 30px;
  border-style: dashed;
  border-width: 0 0 3px 0;
  outline: none;
  @media all and (width<576px) {
    width: 90%;
    margin-bottom: 20px;
    margin-right: 0;
  }
`

export const Button = styled.button`
  height: 30px;
  width: 100px;
  font-size: 16px;
  border-style: solid;
  border-color: black;
  border-radius: 15px;
  color: white;
  background-color: #476a8a;
  cursor: pointer;
`

export const AppTitle = styled.h1`
  margin: 0;
  font-size: 50px;
  margin-bottom: 30px;
  text-align: center;
`

export const WeatherTitle = styled.h2`
  margin-bottom: 10px;
  margin: 0;
`

export const WeatherText = styled.p`
  font-size: 20px;
  margin: 0;
  font-weight: bold;
`

export const ErrorText = styled.p`
  font-size: 20px;
  margin: 0;
  color: red;
  align-self: left;
  justify-self: left;
`
