import './App.scss';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index/IndexPages';
import DefaultLayout from './components/layouts/DefaultLayouts';

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<DefaultLayout/>}>
        <Route index element={<IndexPage/>} />
        </Route>
      </Routes>
  );
}

export default App;
