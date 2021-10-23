import react from 'react';

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
function LearnMore({card,setCard}) {
console.log(card)
return(
<>
<div className="page">
<h2 className="heading">{card.title}</h2>
<img className="image" src={card.urlToImage}/>
<div className="div1"><h4 className="description">{card.description}</h4></div>
<h4 className="author">{card.author}</h4>
</div>
</>
)
}

export default LearnMore