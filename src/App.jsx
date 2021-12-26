import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
   const [ count, setCount ] = React.useState(0);

 
  return (
    
     <div className='App'>
       <Counter count={count} setCount={setCount} />
     </div>
      


    

  );
}

export default App;
