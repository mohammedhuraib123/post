import React, { Component } from 'react'
import Nicomponent from './Nicomponent'

export default class Newsitem extends Component {
  
  articles=[
    
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Emma Tucker",
        "title": "What we know about the gunman who opened fire at a Louisville bank - CNN",
        "description": "A 25-year-old bank employee in Louisville, Kentucky, knew he was going to be fired and wrote a note to loved ones before heading to his job Monday morning and opening fire -- killing five people and injuring eight others, according to a law enforcement source…",
        "url": "https://www.cnn.com/this.props.pagesize23/04/10/us/connor-sturgeon-louisville-bank-mass-shooting/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230410145008-14-louisville-shooting-incident-041023.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "this.props.pagesize23-04-11T04:41:00Z",
        "content": "A 25-year-old bank employee in Louisville, Kentucky, knew he was going to be fired and wrote a note to loved ones before heading to his job Monday morning and opening fire killing five people and inj… [+5500 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Amanda Macias, Natasha Turak",
        "title": "Ukraine war live updates: State Department designates Evan Gershkovich wrongfully detained by Russia; U.S. grapples with fallout from intelligence leak - CNBC",
        "description": "The documents contained sensitive information on not just Ukraine but China, the Middle East and Africa.",
        "url": "https://www.cnbc.com/this.props.pagesize23/04/10/russia-ukraine-live-updates.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/106106340-1567269275164gettyimages-853699560.jpeg?v=1681121462&w=19this.props.pagesize&h=1080",
        "publishedAt": "this.props.pagesize23-04-11T04:24:00Z",
        "content": "More than this.props.pagesize0 Russian and Ukrainian soldiers have returned home in a prisoner swap, the warring countries said Monday.\r\nRussia's Defense Ministry said 106 Russian soldiers were released from Ukrainia… [+1253 chars]"
    },
    
    {
        "source": {
            "id": null,
            "name": "The Athletic"
        },
        "author": "Bruce Feldman, Antonio Morales",
        "title": "USC hiring Kliff Kingsbury as senior offensive analyst, per source: What it means for the Trojans - The Athletic",
        "description": "Kingsbury was fired by the Cardinals in January after Arizona posted a 4-13 record in this.props.pagesize22.",
        "url": "https://theathletic.com/4399663/this.props.pagesize23/04/10/usc-kliff-kingsbury/",
        "urlToImage": "https://cdn.theathletic.com/app/uploads/this.props.pagesize23/04/10215032/Kingsbury-1024x729.jpg",
        "publishedAt": "this.props.pagesize23-04-11T03:04:45Z",
        "content": "USC is expected to hire former Arizona Cardinals coach Kliff Kingsbury as a senior offensive analyst, a program source told The Athletic on Monday. NFL Network was first to report the Trojans were hi… [+2303 chars]"
    },
    
 
]
  constructor(){
    super();
    this.state={
      articles:this.articles,
      loading:false,
      page:1
    }
  }
 async componentDidMount(){
  let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=de77cfa0627b4f6392ca99e4c59c9ced&page=1&pagesize=${this.props.pagesize}`
    let data= await fetch(url)
    let parseddata=await data.json()
    this.setState({articles: parseddata.articles,
      totalresults:parseddata.totalResults
    })

  }
  handlenext=async()=>{
    
      if(this.state.page+1>Math.ceil(this.state.totalresults/this.props.pagesize)){

      }
      else{
        let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=de77cfa0627b4f6392ca99e4c59c9ced&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
        let data= await fetch(url)
        let parseddata=await data.json()
        this.setState({
          page:this.state.page+1,
          articles:parseddata.articles
        }
        )
      }
    
    

  }
  handleprev=async()=>{
    let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=de77cfa0627b4f6392ca99e4c59c9ced&page=${this.state.page-1}&pagesize=${this.props.pagesize}`
    let data= await fetch(url)
    let parseddata=await data.json()
    this.setState({
      page:this.state.page-1,
      articles:parseddata.articles
    }
    )
    
  }
  render() {
    
 let {pagesize}=this.props;
    return (
      <div className="container my-3">
        <h1>MARS Top-Headlines...</h1>

      <div className="row my-5 mx-3">
{this.state.articles.map((element)=>{
  return <div className="col-md-4"  key={element.url}>
  <Nicomponent title={element.title} content={element.content} newsurl={element.url} imageurl={element.urlToImage} author=<h6>{element.author}</h6> date=<h6>{element.publishedAt}</h6> source={element.source.name}/>
  </div> 
  
})}
        
   <div className="container d-flex justify-content-between my-3">
    
<button type="button" disabled={this.state.page<=1} onClick={this.handleprev} className="btn btn-dark">&larr; Previous</button>

<button type="button" onClick={this.handlenext} disabled={this.state.page+1>Math.ceil(this.state.totalresults/this.props.pagesize)}  className="btn btn-dark">Next &rarr;</button>
    </div>        
        
    
    
   
    
        
      </div>
      </div>
    )
  }
}
