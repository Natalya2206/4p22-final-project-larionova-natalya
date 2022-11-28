import './App.scss';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index/IndexPages';
import DefaultLayout from './components/layouts/DefaultLayouts';
import Entry from './pages/Entry/Entry';
import Registration from './pages/Registration/Registration';
import ProductPage from './pages/Products/Products';

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<DefaultLayout/>}>
        <Route index element={<IndexPage/>} />
        <Route path={'/entry'} element={<Entry/>} />
        <Route path={'/registration'} element={<Registration/>} />
        <Route path={'/products'} element={<ProductPage/>}>
        <Route path={':userId'} element={<ProductPage/>}/>
        </Route>
        </Route>
      </Routes>
  );
}

export default App;