
//

//olamundo-server.cloudapp.net/users/sign_in?user[email]=mh9898@gmail.com&user[password]=mh9696160


var api = {
  getSymbols(){
    var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=DEMO_KEY'
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;
