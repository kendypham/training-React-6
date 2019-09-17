import React from 'react'
import Authenticated from '../Authenticated';

const Home = props => {
  return (
    <Authenticated>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://images.unsplash.com/photo-1472508249545-917598a8c985?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b47c91eddce4da0ed40852160a4b622&auto=format&fit=crop&w=1350&q=80" style={{ height: "100vh", maxWidth: "100vw" }} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b95599cb95166892018645cd2a22923a&auto=format&fit=crop&w=1350&q=80" style={{ height: "100vh", width: "100vw" }} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=844d3a349e587ef4188df4ddc79c2a70&auto=format&fit=crop&w=1347&q=80" style={{ height: "100vh", width: "100vw" }} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </Authenticated>
  )
}

export default Home
