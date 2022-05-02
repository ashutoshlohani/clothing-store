import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Nav from './routes/navigation/navigation.component';

function Shop() {
   return <h1>Shop</h1>;
}

function Cart() {
   return <h1>Cart</h1>;
}

function App() {
   return (
      <Routes>
         <Route path='/' element={<Nav />}>
            <Route index element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            {/* <Route path='/contact' element={<Contact />} />
            <Route path='/signin' element={<Signin />} /> */}
            <Route path='/cart' element={<Cart />} />
         </Route>
      </Routes>
   );
}

export default App;