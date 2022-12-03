import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Index/HomePage';
import DefaultLayout from './components/layouts/DefaultLayouts';
import Form from './pages/Form/Form';
import Registration from './pages/Registration/Registration';
import ProductPage from './pages/Products/Products';
import Basket from './pages/basket/basket';

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<DefaultLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path={'form'} element={<Form/>} />
        <Route path={'registration'} element={<Registration/>} />
        <Route path={'basket'} element={<Basket/>} />
        <Route path={'products'} element={<ProductPage/>}>
        <Route path={':userId'} element={<ProductPage/>}/>
        </Route>
        </Route>
      </Routes>
  );
}

export default App;
