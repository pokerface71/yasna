import React from "react";
import CardCounter from "./CardCounter";



const Counters = ({counter,stateCounter}) => {

  return (
    <>
   
      {counter.map((item,index) => 
          <CardCounter
            key={index}
            detail={item}
            stateCounterfunc={stateCounter}
            indexItem={index}
          />
        )}
    </>
  );
};

export default Counters;
