import React, {useState} from 'react';


export default function form ({addlist}) {
  

        const [value , setValue]=useState("");


        const addlist= e =>{
            e.preventDefault()
            if(value.trim()){
           addlist(value);
            setValue("")
            }
        };

        return (

               <form onSubmit={addlist}>
        <input type="text"  value={value} onChange={e=> setValue(e.target.value)}></input>
       
           </form>
        
    )
}
