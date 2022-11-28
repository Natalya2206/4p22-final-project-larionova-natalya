import './App.scss';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index/IndexPages';
import DefaultLayout from './components/layouts/DefaultLayouts';
import Entry from './pages/Entry/Entry';
import Registration from './pages/Registration/Registration';

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<DefaultLayout/>}>
        <Route index element={<IndexPage/>} />
        <Route path='/entry' element={<Entry/>} />
        <Route path='/registration' element={<Registration/>} />
        </Route>
      </Routes>
  );
}

export default App;
