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
      <CardContent style={{ padding: "1% 1% 1% 1%" }}>
        <Typography variant="h3" gutterBottom>
         {card.title}
        </Typography>
        <Typography variant="h7" component="div">
          {card.author}
        </Typography>
        <CardMedia
        component="img"
        image={card.urlToImage}
        style={{ width: "300px", alignContent: "center", paddingBottom: "1%" }}
      />
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          {card.description}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
return(
<>

<Box sx={{ minWidth: 275 }} ml={5} mr={5} pl={5} pr={5} mt={2} pt={2} mb={5} pb={5}>
      <Card style={{ border: "3px solid black" }}>{cardd}</Card>
</Box>

</>
)
}

export default LearnMore