import './App.css';
import Cart from './Components/Cart/Cart';
import AllItems from './Components/Filter/AllItems';
import Items from './Components/ItemsComponents/Items';

function App() {
return (
<div>
<nav className='nav'>
  <header className='item'>Wildberries</header>
</nav>


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

//git config --global user.token "ghp_nLS2pb7M0kzigBdMpZ2i6CE9S3hqVj40FC70"

export default App;
