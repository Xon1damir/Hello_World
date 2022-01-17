
import './App.css';

import HelloWorld from './tutorial/HelloWorld';
import  GetGreeting from './tutorial/Introducing_JSX';
import  Tick from './tutorial/RenderingElements';
import Clock from './tutorial/Lesson5';
import Phone from './tutorial/Phone';
import NameForm from './tutorial/Forms';


function App() {
     return (
    <div className="App">
      <header className="App-header">

      <h1>Hello World!</h1>
       < HelloWorld/>
       <h1>Introducing JSX 2- DARS</h1>
       <GetGreeting user='Chingiz'/>
       <h1>Rendering Elements 3-DARS</h1>
       <Tick/>
       <h1>State and Lifecycle 5-DARS</h1>
       <Clock myProp="test" />
       <h1>Ijodiy ish</h1>
       <Phone/>
       <h1>Forms</h1>
       <NameForm/>

      </header> 
    </div>
  );
}

 export default App;

