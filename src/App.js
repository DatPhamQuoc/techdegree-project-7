import React, {Component} from 'react';
import './index.css'
import apiKey from "./config.js"
import Search from "./Search.js"
import ImagesList from "./ImagesList.js"
import MainNav from "./MainNav.js"
import NotFound from "./NotFound.js"
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'


class App extends Component {
  state ={
    images: []
  }

  componentDidMount(){
    this.handleQuery()
  }

  handleQuery = (query='cats') => {
    console.log(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response =>  response.json())
        .then(responseData => {
          console.log(this)
          this.setState({images: responseData.photos.photo})
        })
        .catch(err => {
          console.log('Something went wrong')
        })
    }

  render(){
    return (
      <BrowserRouter>
      <div className="container">
        <Search search={this.handleQuery}/>
        <MainNav search={this.handleQuery}/>
        <Switch>
          <Route exact path="/" render={()=> <Redirect to="/cats"/>} />
          <Route path="/dogs" render={() => <ImagesList title='dogs' data={this.state.images} />}/>
          <Route path="/cats" render={() => <ImagesList title='cats' data={this.state.images} />}/>
          <Route path="/computers" render={() => <ImagesList title='computers' data={this.state.images} />}/>
          <Route component={NotFound} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  };
}


export default App;
