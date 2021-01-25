import React from 'react';

const Form = props => {
    return (
      
        <form onSubmit={props.submit}>
          <div class="input-group mb-3">
           <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" value={props.value} onChange={props.change} placeholder="Wpisz miasto"/>
           <div class="input-group-append">
             <button class="btn btn-info" type="submit" value="Submit">Szukaj</button>
           </div>
          </div>   
        </form>
      
    ) 
}

export default Form;