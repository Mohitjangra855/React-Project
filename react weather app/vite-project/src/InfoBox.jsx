import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({ info }) {
  const IMAGE_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_NviU12eWItLFfPTfYlhkvtsy6VOrsB_quNYu4v-9mw&s";
  return (
    <div className='InfoBox'>
      <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={IMAGE_URL}
            title="weatherPic"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city.toUpperCase()}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>Feels Like = {info.feelsLike}</p>
              <p>The weather can be descibed as <i>{info.weather}</i> feels like {info.feelsLike}&deg;C </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}