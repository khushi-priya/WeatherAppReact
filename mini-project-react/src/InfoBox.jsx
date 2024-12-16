import Card from '@mui/material/Card';
import "./InfoBox.css";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1561553590-267fc716698a?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL="https://images.unsplash.com/photo-1714327278315-a614fd2ee484?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";
    return(
        <div className="InfoBox">
            
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia 
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL: info.temp>15 ? HOT_URL : COLD_URL}
        title="green iguana"
        />
      <CardContent style={{color:"brown"}}>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity>80?<ThunderstormIcon/>: info.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography style={{color:"blue"}}variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p>Feels Like ={info.feelsLike}&deg;C</p>
          <p>Weather={info.weather}</p>
          
        </Typography>
      </CardContent>
    
    </Card>
    </div>
        </div>
    )
}