import './App.css';
import Header from "./container/Header";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import ProductListning from './container/productListning';
import productDetails from './container/productDetails';

function App() {
  return (

    <div>
      <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={ProductListning}></Route>
          <Route path="/product/:productid" exact component={productDetails}></Route>
          <Route>404 page</Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
