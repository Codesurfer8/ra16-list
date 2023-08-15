import './App.css';

import Listing from './components/Listing/Listing';
import data from './components/Listing/data.json';

function App() {
  let list = JSON.parse(JSON.stringify(data));
  let arr = list.filter(item => item.MainImage !== undefined)



  return (
    <div className='container'>
      <Listing items={arr} />
    </div>
  );
}

export default App;
