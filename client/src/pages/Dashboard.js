import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { RadiusDropDown } from "../components/RadiusDropDown/index.js"; ///maybe take this out
import SmallCard from "../components/Small Card";
import "../components/RadiusDropDown/style.css"
import axios from "axios";
const pass ="cYmchs-D7ks1z6zf7ZmYjUaQA9520b_efKJEruSleDKTTrcIbFohp9JLOHOr186XIPlnC8Sj9dOZRY_QsNyLU0_FgLdsmQXsINQWEBHQdcoLjRc-qfDUJhEhRfYPXnYx"

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      distance: "",
      showMenu: false,
      value: 1000
    };

   this.handleChange=this.handleChange.bind(this);
    this.searchRes=this.searchRes.bind(this); 
    
    }
  componentDidMount() {
    
    this.searchRes(this.state.value);

  }
  searchRes(radius) {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=Richmond`, {
      headers: {
        Authorization: `Bearer ${pass}`
    },
      params: {
      rating: 5,
      categories: 'food, ALL',
      limit: 8,
      radius: radius
    }
    })
    .then((res) => {
      this.setState({
        isLoaded: true,
        data: res.data.businesses
      },()=>console.log(this.state))
    })

  }

  handleChange = (newValue) => {
    this.searchRes(newValue)
    this.setState({ value: newValue } )
  }

  render() {
    
    console.log("dashboard" + this.state.value)
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }   else if (!isLoaded) {
      return <div>Loading...</div>;
    }  else { 

    return (


      <Container fluid>
        
        <RadiusDropDown  value={this.state.value} handleChange={this.handleChange} />

        <Row>
        {data.map(place=>
          <Col size="md-3">
            {console.log(data)}

              <SmallCard name={place.name} img={place.image_url} />

          </Col>
          )}
        </Row>
      </Container>
    );
  }
  }
}
export default Dashboard;