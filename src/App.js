import './App.css';

import Listing from './components/Listing/Listing';
import data from './components/Listing/data.json';

function App() {
  let list = JSON.parse(JSON.stringify(data));
  let arr = list.filter(item => item.MainImage !== undefined)

  console.log(arr)

  
  return (
    <div className='main-container'>
      <div className='container'>
        <Listing items={arr} />
      </div>

    </div>
  );
}

export default App;
