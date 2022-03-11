import Navbar from "./components/navbar";
import _styles from './App.module.css';
import Display from "./components/display";
import Footer from "./components/Footer";

const jumb = {
  'height' : '400px',
  'color' : 'white',
  'backgroundImage': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwsrzMx0tuytCqAecpAvrrQkIJutbvvYXlg&usqp=CAU')",
  'display' : 'flex',
  'justifyContent' : 'center',
  'alignItems' : 'center',
  'textAlign': 'center',
}

function Jumbotron() {
  return (
    <div style = {jumb}>
      <div>
        <span style={{"fontSize":"60px"}}><b>thin<br />CRUST PIZZA</b></span>
      </div>
    </div>
  )
}

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Jumbotron />
      <Display />
      <Footer />
    </div>
  );
}

export default App;
