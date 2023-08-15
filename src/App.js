import './App.css';

import Listing from './components/Listing/Listing';
import data from './components/Listing/data.json';


function App() {
  console.log(typeof JSON.parse(JSON.stringify(data))[0].MainImage.url_570xN)
  return (
    <>
    <Listing items={data}/>
    </>
  );
}

export default App;
