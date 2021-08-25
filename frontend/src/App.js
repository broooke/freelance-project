import Products from './screens/Products'
import './styles/main.scss'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Route  } from 'react-router-dom'
import SignUp from './screens/SignUp'
import Footer from './components/Footer'
import Login from './screens/Login'
import Cart from './screens/Cart'
import ProductDetail from './screens/ProductDetail'
import About from './screens/About'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={Products} exact />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart}/>
        <Route path="/detail" component={ProductDetail} />
        <Route path="/about" component={About} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
