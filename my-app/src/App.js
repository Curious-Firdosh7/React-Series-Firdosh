import React from 'react';
import './App.css';

import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Button from './components/Button';
import ProductForm from './components/ProductForm';
import NewProduct from './components/NewProduct';

function App() {
  // const itemname = "John Doe"; another way to access
  const response = [
    {
      name :"Nirma",
      day : "21",
      month:"july", 
      year:" 2008",
    },
    {
      name :"Ariel",
      day : "13",
      month:"Decenber", 
      year:" 2023",
    },
    {
      name :"Tide",
      day : "4",
      month:"may", 
      year:" 1988",
    },
    {
      name :"Surf-Excel",
      day : "6",
      month:"April", 
      year:"1998",
    },

  ]
  function A(obj){
    console.log("I Am Inside The App.js");
    console.log(obj);
  }
    return( 
      <div>
        <h1>Data se khelna Sikhle Chutiye</h1>
        <NewProduct OnA = {A}></NewProduct>
        <Button></Button>
        <Item name= {response[0].name}></Item>
        <ItemDate day = {response[0].day} month = {response[0].month} year = {response[0].year}></ItemDate>

        <Item name= {response[1].name} ></Item>
        <ItemDate day = {response[1].day} month = {response[1].month} year = {response[1].year} ></ItemDate>

        <Item name= {response[2].name}></Item>
        <ItemDate day = {response[2].day} month = {response[2].month} year = {response[2].year}></ItemDate>

        <Item name= {response[3].name}></Item>
        <ItemDate day = {response[3].day} month = {response[3].month} year = {response[3].year}></ItemDate>
        
        <div className = "app">hello bachoooo</div>
        
      </div>
      
    );
  

}

export default App;
