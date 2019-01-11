import React, { Component } from 'react';
import Layout from './hoc/Layouts/Layout';
import WasteItemList from './components/WasteItemList/WasteItemList'
import axios from './services/axios-waste'

class App extends Component {
  state = {
    list: [],
    favorites: [],
    items: []
  }

  getJson(){
    axios.get("").then(success=>{
      let items = success.data.map((item, index)=> {
        if(!item.id){
          item.id = index
        }
        return item
      })

      this.setState({items: items, list: items})
    }).catch(error =>{
      console.log(error)
    })
  }

  addFavoriteHandler = (id) => {
    let favorites = this.state.favorites
    let items = this.state.list
    let index = items.findIndex(item => item.id === id)
    items[index].favorite = !items[index].favorite
    favorites.push(items[index])
    this.setState({ favorites: favorites })
  }

  removeFavoriteHandler =(id) =>{
    let favorites = this.state.favorites
    let items = this.state.list
    let index = favorites.findIndex(item => item.id === id)
    let indexItem = items.findIndex(item => item.id === id)
    items[indexItem].favorite = !items[indexItem].favorite
    favorites.splice(index, 1)
    this.setState({favorites:favorites, list: items})
  }
  
  render() {
    let itemsFiltered = this.state.list
    this.getJson()
    return (
      <Layout>

        <WasteItemList list={itemsFiltered} addFavoriteHandler={this.addFavoriteHandler} removeFavoriteHandler={this.removeFavoriteHandler}/>
        <WasteItemList list={this.state.favorites} addFavoriteHandler={this.addFavoriteHandler} removeFavoriteHandler={this.removeFavoriteHandler} title="Favourites" />
      </Layout>
    );
  }
}

export default App;
