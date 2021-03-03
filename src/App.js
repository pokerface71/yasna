
import './App.css';
import Counters from './components/Counters';
import FormAdd from './components/FormAdd';
import { useState } from 'react';
import { initialState } from './context/Context';
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [counter, setCounter] = useState(initialState);


  const stateCounter = (id, state, counterPlus,value) => {
    const temp = [...counter];

    const index = temp.findIndex((q) => q.id === id);
    const findUtem=temp.find((q) => q.id === id);
    temp[index].run = !state;
    if(findUtem.run ===true){
      let newvalue=value;
      setInterval(
          ()=>{
            
           
            const temp = [...counter];
            console.log(findUtem.value)
            findUtem.value = parseInt(newvalue)+parseInt(counterPlus);
            newvalue=parseInt(newvalue)+parseInt(counterPlus)
            setCounter([...temp]);
          }
        
        ,1000)
    }else{
      clearInterval()
    }
    setCounter([...temp]);
    console.log(temp)
  };
 

  const addCounter = (e) => {
    e.preventDefault();
    const form=new FormData(e.target);
    const newCounter={
      id:uuidv4(),
      run:false,
      counterPlus: form.get('counter'),
      value:0
    }
    setCounter([...counter,newCounter])

  }


  // const funcCounterPlus = (counterPlus) => {
  //   counterPlus += counterPlus
  // }



  return (
    <div className="container">
      <FormAdd add={addCounter} />
      <div className="row mt-3">
       <Counters counter={counter} stateCounter={stateCounter} />

      </div>
    </div>
  );
}

export default App;
