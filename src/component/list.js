import React from 'react'

 function list({list,supplist,modif,index}) {
    return (
        <div className= {list.isok ? "isselect" : ""} >
            <table className="table table-hover">
            {list.map(element=>(
                <tr >
                <td><img src={element.src}/></td>
               <td> <input type="checkbox"></input></td>
                <td>{element.text }</td>
            <td>
           <button onClick={()=>supplist(index)}>X</button> 
          <button onClick={()=>modif(index)}>Urgent</button></td>
     </tr>
     ))}
        </table>
  </div>
    )
}
export default list;




