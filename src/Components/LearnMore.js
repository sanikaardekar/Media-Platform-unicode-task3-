//import react from 'react';
//import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
function LearnMore({card,setCard}) {
// console.log(card)
const cardd = (
    <React.Fragment >
      <CardContent style={{ backgroundColor: "#5ACEAB", color: "white", padding: "1% 1% 1% 1%" }}>
        <Typography variant="h3" gutterBottom>
         {card.title}
        </Typography>
        <Typography variant="h6" component="div">
          {card.author}
        </Typography>
        <CardMedia
        component="img"
        image={card.urlToImage}
        style={{ width: "300px", alignContent: "center" }}
      />
        <Typography variant="h5" sx={{ mb: 1.5 }} style={{ paddingTop: "1%"}}>
          {card.description}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
return(
<>

<Box sx={{ minWidth: 275 }} ml={5} mr={5} pl={5} pr={5} mt={2} pt={2} mb={5} pb={5}>
      <Card style={{ border: "3px solid white"}}>{cardd}</Card>
</Box>

</>
)
}

export default LearnMore