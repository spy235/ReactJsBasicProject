import './App.css';
import Accordian from './components/accordian/Accordian';
import Imageslider from './components/imageslider/Imageslider';
import LoadMore from './components/loadmore/LoadMore';
import Random from './components/randomcolor/Random';
import Star from './components/starrating/Star';

function App() {
  
  
  return (
    <div className="App">
    {/* <Star noOfStar={6} /> */}
    {/* <Imageslider url={"https://dummyjson.com/products/"} limit={10} /> */}
    <LoadMore />
    </div>
  );
}

export default App;
