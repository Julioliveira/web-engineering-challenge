import React, { Component } from 'react';
import Layout from './hoc/Layouts/Layout';
import WasteItemList from './components/WasteItemList/WasteItemList'
import './App.css';

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        "body": "&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;/strong&gt;&lt;/li&gt; \n&lt;/ul&gt;",
        "category": "Garbage",
        "title": "Garbage (wrapping and tying)",
        "keywords": "bread bag tag, milk bag tag, elastic band, rubber band, twist tie, rope, twine, string, hemp, ribbon, bow, burlap, staple, fastener, wire, florists wire, plastic tag, tape, duct tape, electrical tape, masking tape, scotch tape, painters tape, tape dispenser, chain, nylon, thread"
      },
      {
        id: 2,
        "body": "&lt;ul&gt; \n &lt;li&gt;Place this item in the&amp;nbsp;&lt;strong&gt;Blue Bin&lt;/strong&gt;.&lt;/li&gt; \n&lt;/ul&gt;",
        "category": "Blue Bin",
        "title": "Blue Bin (metal lid)",
        "keywords": "metal lids, glass bottle lids, glass jar lids, Mason jar lids"
      },
      {
        id: 3,
        "body": "Items that would never fit in your Garbage Bin, when empty, are considered oversize and collected curbside. Please place this item 0.5 metre (2 feet) away from your Garbage Bin on your scheduled garbage collection day for free pick-up. Bag tags are not required.",
        "category": "Oversize",
        "title": "Oversize (home items)",
        "keywords": "laundry basket, clothes basket, hamper, sewing machine, vacuum cleaner, carpet steamer, water softener, water softening system, plastic fan, ceiling fan"
      },
      {
        id: 4,
        "body": "&lt;ul&gt; \n &lt;li&gt;Place this empty item in your &lt;strong&gt;Blue Bin&lt;/strong&gt;, though if it is soiled with food, please place it in your &lt;strong&gt;Green Bin&lt;/strong&gt;.&lt;/li&gt; \n&lt;/ul&gt;",
        "category": "Blue Bin",
        "title": "Blue Bin (molded paper)",
        "keywords": "molded paper, paper egg cartons, paper take-out coffee trays, paper berry boxes"
      }
    ],
    favorites: []
  }

  addFavoriteHandler = (id) => {
    let favorites = this.state.favorites
    let items = this.state.items
    let index = items.findIndex(item => item.id === id)
    items[index].favorite = !items[index].favorite
    favorites.push(items[index])
    this.setState({ favorites: favorites })
  }

  removeFavoriteHandler =(id) =>{
    let favorites = this.state.favorites
    let items = this.state.items
    let index = favorites.findIndex(item => item.id === id)
    let indexItem = items.findIndex(item => item.id === id)
    items[indexItem].favorite = !items[indexItem].favorite
    favorites.splice(index, 1)
    this.setState({favorites:favorites, list: items})
  }
  
  render() {
    let itemsFiltered = this.state.items
    return (
      <Layout>

        <WasteItemList list={itemsFiltered} addFavoriteHandler={this.addFavoriteHandler} removeFavoriteHandler={this.removeFavoriteHandler}/>
        <WasteItemList list={this.state.favorites} addFavoriteHandler={this.addFavoriteHandler} removeFavoriteHandler={this.removeFavoriteHandler} title="Favourites" />
        {/* <WasteItem item={this.state.item} click={()=>this.favoriteHandler(this.state.item)}/> */}
      </Layout>
    );
  }
}

export default App;
