import './App.css';
import Cart from './Components/Cart/Cart';
import AllItems from './Components/Filter/AllItems';
import Items from './Components/ItemsComponents/Items';

function App() {
return (
<div>

<div>
  <nav className='nav'>
      <h1 className='item'>Wildberries</h1>
  </nav>
</div>

<div>
<div className='App'>
<AllItems/>
<Cart/>
</div>
  <Items/>
</div>
</div>
);
}

export default App;
