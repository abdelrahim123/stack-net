const axios = require('axios')
import React from 'react';

class MainPage extends React.component{
    
}



var div = document.getElementById("JS-Loader");

var ahmed = "Campaign";

function getRequests  ()async {
  try {
    var a = await axios.get('http://stacknet-api.herokuapp.com/api/requests');
      return a;
    console.log(a.)
  } catch (error) {
    console.error(error)
  }
}

div.addEventListener("load", function (){
    getRequests(); 
    
});