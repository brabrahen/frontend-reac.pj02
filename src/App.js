import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/shared/header/header';
import Home from './pages/Home/Home'
import Add from './pages/Add/Add'
import ById from './pages/ById/ById'
import Edit from './pages/Edit/Edit'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/byid/:id" element={<ById/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
