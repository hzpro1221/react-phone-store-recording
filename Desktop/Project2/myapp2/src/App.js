import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Carts from './components/Cart/Carts';
import Default from './components/Default';
import Navbar from './components/Navbar';
import Modal from './components/modal';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<ProductList></ProductList>}></Route>
        <Route path='/details' element={<Details></Details>}></Route>
        <Route path='/carts' element={<Carts></Carts>}></Route>
        <Route path='*' element={<Default></Default>}></Route>
      </Routes>
      <Modal></Modal>
    </>
  );
}

export default App;
