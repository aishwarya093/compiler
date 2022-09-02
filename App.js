
// import logo from './logo.svg';
import './App.css';
// import {ide} from './pages/ide';
import Header from './components/header';
import {Ide} from './components/input';
import OutlineTypesExample from './components/button';

function App(){
  return (
    <>
    <Header/>
    <div id= "page">

   {<OutlineTypesExample/>}
    <Ide/>
    </div>
    
   
    </>
  )

};

export default App;
