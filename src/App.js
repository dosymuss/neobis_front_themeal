import './App.css';
import {Route,Routes, Link } from "react-router-dom"
import PageHome from './pages/PageHome';
import MealPage from './pages/MealPage';

function App() {
  return (
    <div className="App">
<header>
        <Link to='/'><h1>The Meal</h1></Link>
        {/* <Link to='/about'>about</Link>
        <Link to='/posts'>blog</Link> */}
      </header>
      
<Routes>
  <Route path='/meals/:id' element={<MealPage/>}/>
  <Route path='/' element={<PageHome/>}/>
  {/* <Route path='*' element={<NotFoundPage/>}/> */}
</Routes>


    </div>
  );
}

export default App;
