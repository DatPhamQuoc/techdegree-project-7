import React, {Component} from 'react';
import './index.css'
import apiKey from "./config.js"
import Search from "./Search.js"
import ImagesList from "./ImagesList.js"
import MainNav from "./MainNav.js" // Main Navigation Buttons
import Error from "./404.js"  //404 Page Not Found

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'


class App extends Component {
  state ={
    images: [],
    keyword: "",
    isLoading: true
  }


  componentDidMount(){
    this.handleQuery()
  }

  searchIsloading = () => {
    this.setState({isLoading: true})
  }

  handleQuery = (query='cats') => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response =>  response.json())
        .then(responseData => {
          this.setState({
            images: responseData.photos.photo,
            keyword: query,
            isLoading: false
          })
        })
        .catch(err => {
          console.log('Something went wrong', err)
        })
    }

  render(){
      // Conditional test
      let content;
      (this.state.isLoading)?
        content= <h2>Loading...</h2>:
        content =
           <Switch>
              <Route exact path="/" render={() => <Redirect to="/cats" />} />
              <Route path="/search/:object" render={()=> <ImagesList keyword={this.state.keyword} data={this.state.images} /> } />
              <Route path="/cats" render={()=> <ImagesList keyword={this.state.keyword} data={this.state.images} /> }/>
              <Route path="/dogs" render={()=> <ImagesList keyword={this.state.keyword} data={this.state.images} /> }/>
              <Route path="/computers" render={()=> <ImagesList keyword={this.state.keyword} data={this.state.images} /> }/>
              <Route component={Error}/>
            </Switch>

    return(
      <BrowserRouter>
      <div className="container">
        <Search  loading={this.loading} search={this.handleQuery}/>
        <MainNav search={this.handleQuery}/>
        {content}
      </div>
      </BrowserRouter>
    );
  };
}


export default App;
