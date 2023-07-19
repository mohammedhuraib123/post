import React, { Component } from 'react'

export default class Nicomponent extends Component {
  render() {
    let { title, content, imageurl, url, newsurl, author, date, source } = this.props;
    return (
      <div>
        <div className="card" >
          <img src={this.props.imageurl === null ? 'https://media.cnn.com/api/v1/images/stellar/prod/230410145008-14-louisville-shooting-incident-041023.jpg?c=16x9&q=w_800,c_fill' : imageurl} alt="did not got uploaded" />
          <div className="card-body">
            <h5 className="card-title">{title} <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
              {source}
            </span></h5>
            <p className="card-text">{content}</p>
            <p className="card-text"><small className="text-muted">by {author == 'null' ? 'Unknown' : author} on {date}</small></p>

            <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
