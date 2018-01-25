import React, { Component } from 'react';
var googleApi = require('./apiKey');
var apiKey = googleApi.apiKey;

export class DistanceCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = { originValue: '', destinationValue: '', submittedIP: false, originLocation: '', destinationLocation: '', duration: '', googleApi: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.calculateDistance = this.calculateDistance.bind(this);
    this.fetchOriginURL = this.fetchOriginURL.bind(this);
    this.fetchDestinationURL = this.fetchDestinationURL.bind(this);
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({ [propertyName]: event.target.value });
  }

  fetchOriginURL(url, destURL){
    fetch(url)
    .then((result) => {
      // Get the result
      // If we want text, call result.text()
      return result.json();
    }).then((jsonResult) => {
      // Do something with the result
      if(jsonResult.data.getLocation === null){
        alert("Origin location address is invalid, try again!");
        return;
      }
      var originLocation = jsonResult.data.getLocation.location.latitude + "," + jsonResult.data.getLocation.location.longitude;
      this.setState({
        originLocation: originLocation
      });
      this.fetchDestinationURL(destURL);
    })
  }

  fetchDestinationURL(url){
    fetch(url)
    .then((result) => {
      // Get the result
      // If we want text, call result.text()
      return result.json();
    }).then((jsonResult) => {
      // Do something with the result
      if(jsonResult.data.getLocation === null){
        alert("Destination location address is invalid, try again!");
        return;
      }
      var destinationLocation = jsonResult.data.getLocation.location.latitude + "," +  jsonResult.data.getLocation.location.longitude;
      this.setState({
        destinationLocation: destinationLocation
      });
      this.calculateDistance();
    })
  }

  calculateDistance(){
    if(this.state.originLocation === this.state.destinationLocation){
      alert("Both locations are the same. Enter two different locations!");
      return;
    }
    this.setState({
      submittedIP: true
    });
    if(this.state.originLocation !== "" && this.state.destinationLocation !== ""){
      var googleMapsURL = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" + this.state.originLocation + "&destinations=" + this.state.destinationLocation + "&key=" + apiKey;
      fetch(googleMapsURL).then((result) => {
        // Get the result
        // If we want text, call result.text()
        return result.json();
      }).then((jsonResult) => {
        // Do something with the result
        var originAddress = jsonResult.origin_addresses[0];
        var destinationAddress = jsonResult.destination_addresses[0];
        var duration = jsonResult.rows[0].elements[0].duration.text;
        if(duration === undefined){
          return -1;
        }
        this.setState({
          originLocation: originAddress,
          destinationLocation: destinationAddress,
          duration: duration
        });
      });
    }
  }

  handleSubmit(){
    var originGraphURL = "https://api.graphloc.com/graphql?query=%7B%0A%20%20getLocation(ip%3A%20%22" + this.state.originValue + "%22)%20%7B%0A%20%20%20%20location%20%7B%0A%20%20%20%20%20%20latitude%0A%20%20%20%20%20%20longitude%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A";
    var destinationGraphURL = "https://api.graphloc.com/graphql?query=%7B%0A%20%20getLocation(ip%3A%20%22" + this.state.destinationValue + "%22)%20%7B%0A%20%20%20%20location%20%7B%0A%20%20%20%20%20%20latitude%0A%20%20%20%20%20%20longitude%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A";
    this.fetchOriginURL(originGraphURL, destinationGraphURL);
  }

  handleClick(){
    this.setState({
      submittedIP: false
    });
  }

  render() {
    const submittedIP = this.state.submittedIP;
    const originAddress = this.state.originLocation.split(",", 3);
    const destinationAddress = this.state.destinationLocation.split(",", 3);

    return(
     <div>
      <div className="ip-inputs">
        {submittedIP &&
          <button className="back-button" onClick={this.handleClick.bind(this)}>Back</button>
        }
        <h1 className="App-title">How long is the drive?</h1>
        <div>
              {submittedIP &&
                <div className="origin-input-label">
                <label>Origin:</label>
                <p className="address">{originAddress[0]}</p>
                <p className="address2">{originAddress[1]} ,{originAddress[2]}</p>
                </div>
              }
              {!submittedIP &&
                <div className="origin-input-label">
                <label>Origin:</label>
                <input type="text" value={this.state.originValue} onChange={this.handleChangeFor('originValue')} />
                </div>
              }
                {submittedIP &&
                  <div className="destination-input-label">
                  <label>Destination:</label>
                  <p className="address">{destinationAddress[0]}</p>
                  <p className="address2">{destinationAddress[1]} ,{destinationAddress[2]}</p>
                  </div>
                }
                {!submittedIP &&
                  <div className="destination-input-label">
                  <label>Destination:</label>
                  <input type="text" value={this.state.destinationValue} onChange={this.handleChangeFor('destinationValue')} />
                  </div>
                }
         </div>
        </div>
        {
          !submittedIP &&
          <button className="submit-button" onClick={this.handleSubmit}><h3>Gimme the distance!</h3></button>
        }
        {
          submittedIP &&
            <h3>{this.state.duration}</h3>
        }
      </div>
    );
  }
}
