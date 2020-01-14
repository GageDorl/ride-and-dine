import React, { Component} from "react";
import { Col, Row, Container } from "../components/Grid";
import { RadiusDropDown } from "../components/RadiusDropDown/index.js"; ///maybe take this out
import SmallCard from "../components/Small Cards";
import "../components/RadiusDropDown/style.css"
import { CategoryButton } from "../components/CategoryButton/index.js"
import axios from "axios";
import {Grid} from 'mauerwerk';
import BigCard from "../components/BigCard";

const pass ="cYmchs-D7ks1z6zf7ZmYjUaQA9520b_efKJEruSleDKTTrcIbFohp9JLOHOr186XIPlnC8Sj9dOZRY_QsNyLU0_FgLdsmQXsINQWEBHQdcoLjRc-qfDUJhEhRfYPXnYx"
let lat='';
let lng='';

class Dashboard extends Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      error: null,
      isLoading: true,
      data: [],
      name: "all",
      value: 10000,
      location:false,
      width: window.innerWidth || document.documentElement.clientWidth
    };
  
   this.handleChange=this.handleChange.bind(this);
   this.handleCategoryChange=this.handleCategoryChange.bind(this);
    this.searchRes=this.searchRes.bind(this); 
    
    }
  updateWidth=()=>{
    this.setState({width:window.innerWidth || document.getElementById.clientWidth})
  }
  componentDidMount() {
    window.addEventListener("resize",this.updateWidth());
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
      
    }
    else{
      
    }
  
  }
  displayLocationInfo=position=>{
    lng = position.coords.longitude;
    lat = position.coords.latitude;
    this.setState({
      location:true
    })
    this.searchRes(this.state.value, this.state.name);
  }
  searchRes(name) {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?`, {
      headers: {
        Authorization: `Bearer ${pass}`
    },
      params: {
      latitude: lat,
      longitude: lng,
      rating: 5,
      categories: name,
      limit: 8,
      radius: this.state.value
    }
    })
    .then((res) => {
      this.setState({
        isLoading: false,
        data: res.data.businesses,
        value: this.state.value,
        name: this.state.name
      },()=>console.log(this.state))
    })

  }
  
  handleChange = (newValue) => {
    this.searchRes(newValue)
    this.setState({ value: newValue } )
  }

  handleCategoryChange = (newName) => {
    this.searchRes((newName),
    this.setState({ name: newName } ))
    
  } 

  render() {
    
    const { error, isLoading, data, location } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }else if(!location){
      return <div>You must enable location</div>
    }  else if(isLoading){
      return <div>Loading</div> 
    } else{
      
    return (


      <Container fluid>
        
        <RadiusDropDown  value={this.state.value} handleChange={this.handleChange} />
        <CategoryButton  name={this.state.name} onClick={this.handleCategoryChange} />
        
        <a className="btn-btn"  href="https://m.uber.com/ul/?action=setPickup&client_id=lK4eQqhizA2dFcgORkCRvI6pdkgfQhyt&pickup=my_location&dropoff[formatted_address]=Richmond%2C%20VA%2C%20USA&dropoff[latitude]=37.540725&dropoff[longitude]=-77.436048">UBER BTN</a>
       {/* this is just a link, we can make  it its own component and update the latitude and longitude at the end of the link */}
        <Grid
        className="grid"
        // Arbitrary data, should contain keys, possibly heights, etc.
        data={data}
        // Key accessor, instructs grid on how to fet individual keys from the data set
        keys={d => d.name}
        // Can be a fixed value or an individual data accessor
        heights={400}
        // Number of columns
        columns={this.state.width>640 ? 4 : 1}>
          
        {(data, maximized, toggle) => (
         
          <div className="cell">
            {maximized && (
              <BigCard name={data.name} img={data.image_url} toggle={toggle} />
            )}
            {!maximized && <SmallCard name={data.name} img={data.image_url} toggle={toggle} />}
          </div>
        )}
      </Grid>
      </Container>
      
    );
  }
  }
}
export default Dashboard;