import logo from './logo.svg';
import './App.css';
import Item from './component/Item';
import ItemDate from './component/ItemsDate';
function App() {
  // const itemname = "John Doe"; another way to access
  
  const response = [

    {
      itemName :"SurfExcel",
      itemDate : "20",
      itemMonth : "July",
      itemYear : "2008"
    },
    {
      itemName :"Nirma",
      itemDate : "31",
      itemMonth : "December",
      itemYear : "2000"
    },
    {
      itemName :"LifeBoy",
      itemDate : "24",
      itemMonth : "january",
      itemYear : "1999"
    }
  ];
  
  
  return (
    <div>
  
      <Item name={response[0].itemName}>
        Hello Bhai Log KYa Haal Chaal Hia
      </Item>

      <ItemDate day={response[0 ].itemDate} month={response[0].itemMonth} year = {response[0].itemYear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year = {response[1].itemYear}></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year = {response[2].itemYear} ></ItemDate>
     <div className="App"> Hello! Bachooooooo....</div>
    
    </div>
  );
}

export default App;
