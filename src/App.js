import { useEffect } from 'react';
import { messaging } from "./firebase";
import { getToken} from "firebase/messaging";
import logo from './logo.svg';
import './App.css';

function App() {
async function requestPermission(){
 const permission =  await Notification.requestPermission();

 if(permission === "granted"){
 const token = await getToken(messaging,{ vapidKey: "BHoXkcfazl49nTMB5Cne2IKxRu2gN725SUwfn_Mmou1BnRNyOYmXpyXQsJ_hJSR-EJ0IXBIeGz0Pze3YowmEmeQ"});
 console.log('token generated', token);
 }else if(permission === "denied"){
    alert("you denied for the permission");
 }
}
useEffect(()=>{
requestPermission();
},[]);

return (
  <div className="App">
    <header className="App-header">
      <h1>Welcome to My React App</h1>
      <p>This is some static content in your React app.</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);
}
export default App;
