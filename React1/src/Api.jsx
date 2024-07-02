import { useRef, useState} from "react"
import axios from 'axios'
// import pic01d from './assets/01d.png'



function Weather(){
    const[cityname,setcityname]=useState('')
    const[weatherdata,setweatherdata]=useState('')
    const[icon,seticon]=useState('')
    // creating a referencevariable(object) using useRef hook; 
    const inputref=useRef(null)


    let clickhandler = (e) =>{
        e.preventDefault()
        if(cityname){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=560dc8bfa2794a7872a2c953177e7dd9`)
        .then(function(response){
            console.log(response.data)
            setweatherdata(response.data)
            seticon(response.data.weather[0].icon)
            inputref.current.value=''
            // console.log(inputref)

        })
        .catch(function(error){
            console.log(error)
            alert("Invalid City Name")
        })
    }
    }



    return(
        <div className="maindiv">
            <div className="formdiv">
            <form onSubmit={clickhandler}>
                <input type="text" name="" id="" placeholder="Enter Your City Name" required ref={inputref} onChange={(x)=>{
                    // console.log(e.target.value)\
                    // console.log(e)
                    setcityname(x.target.value)
                    
                }} />
                <br />
                <button>Enter</button>
            </form>
            </div>
            <div className="datadiv">
            <h3>{weatherdata.name?weatherdata.name:"No Data Found"}</h3>
            <h3>{weatherdata.main ? `${Math.trunc(weatherdata.main.temp)}°C`:'No Data Found'}</h3>
            <h3>{weatherdata.weather ? weatherdata.weather[0].main:'No Data Found'}</h3>
            <img src={`/src/assets/${icon}.png`} alt="img" />
            </div>

        </div>
    )
}

export default Weather;