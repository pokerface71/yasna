import React from "react";

const CardCounter = ({ detail, stateCounterfunc ,indexItem}) => {


  return (
      
    <>
      <div className="col-md-3 col-12">
        <div className="card">
          <div className="card-header">
            <span>step{indexItem+1}</span>
          </div>
          <div className="card-body text-center">
            <div className="number">{parseInt(detail.value)}</div>
            <button
              className="btn btn-primary w-75"
              onClick={()=>stateCounterfunc(detail.id, detail.run, detail.counterPlus,detail.value)}
            >
              {detail.run===true ? "stop" : "run"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCounter;
