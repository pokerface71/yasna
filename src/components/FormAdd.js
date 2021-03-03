import React from "react";

const FormAdd = ({add}) => {
  return (
    <>
      <div className="row mt-3">
        <div className="col-12">
            <div className="card">
                <div className="card-body">
                    <div className="form-group">
                        <form className="row" onSubmit={(e)=>add(e)} >
                            <input className="form-control col-10" name="counter" type="text"/>
                            <button className="btn btn-dark col-2" type="submit">ADD</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default FormAdd;
