import React, {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@material-ui/styles'
import {Link} from 'react-router-dom';
//import Footer from './Footer';

const useStyles = makeStyles(() => ({
  app:{
    display: "flex",
    justifyContent: "center",
    color: "#696969 !important",
  },
  text:{
    fontSize: "1.25rem !important",
  },
}));

const Api = ({card,setCard}) => {
  
    const [news, setNews] = useState([]);
    const [currentNews, setcurrentNews] = useState(1);
    //console.log(news);
    useEffect(() => {
    const getNews = async () => {
     let list = [];
      
      try {
        const response = await axios.get("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json");
        list = response.data;
        setNews(list.articles);
        
      } catch (error) {
        console.log(error);
      }
    }; getNews();
  }, []);
  function handleChange(event, value){
    setcurrentNews(value);
  }
  const classes = useStyles();
return (
  <>
    <h1 style={{textAlign:"center", color: "black"}}>Latest News Feed</h1>
    <Pagination count={15} currentNews={currentNews} onChange={handleChange} variant="outlined" className={classes.app}/>
  
     <Box ml={5} mr={5} pl={7} pr={3} mt={3} pt={3} mb={1} pb={1} >
     <Grid container spacing={  3 } alignContent="flex-start" justify="center">
    {news.slice((currentNews-1)*4,currentNews*4).map((user, index) => {
     return (
      
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
        <Card sx={{ maxWidth: 345 }} style={{ height: "55vh" }}>
          
      <CardMedia
        component="img"
        height="150"
        image={user.urlToImage}
      />
      <CardContent>
        <Typography style={{ color: "black" }} gutterBottom variant="h5" component="div" className={classes.text}>
         {user.title}
        </Typography>
        
        <Typography variant="body3" color="text.secondary">
        {user.publishedAt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{ color: "green" }} size="big" onClick={()=>{setCard(user)}}>
        <Link to={user.title.replaceAll(" ","+").replaceAll("%"," ")} style={{textDecoration: "none"}}>LEARN MORE</Link>
        </Button>
      </CardActions>
      </Card>
    </Grid>
      );
})} 
</Grid></Box>
</>
);
}
export default Api

/*
{news.map((user, index) => {
     return (
      <div className="card" key={index}>
      <div className="card-title">Title: {user.title}</div>
      <div className="card-body">
      <div><span className="card-description">{user.description}</span></div>
      <div><span className="card-publishedAt">{user.publishedAt}</span></div>
      <div className="card__image"><img src={user.urlToImage} alt=""/></div>
      </div>
      </div>)
      https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=ec6a39d970904fb186472d96e149b577
})} 
*/