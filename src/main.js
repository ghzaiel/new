import React, {useState} from 'react';
import Form from "./component/form";
import List from "./component/list";

import "./component/Style.css";

    function main() {
        const [list, setList]=useState([
            {text : "aller au parc",src:"https://fontawesome.com/icons/snowflake?style=regular",
             isok : true},
            {text : "prendre un cafe ",
            src:"https://fontawesome.com/icons/coffee?style=solid",
             isok : true},
            {text : "aller au travail",src:"https://fontawesome.com/icons/lightbulb?style=regular",
             isok : true},
            {text : "faire du shopping en ligne",
            src:"https://fontawesome.com/icons/toilet-paper?style=solid",
             isok : true},
            {text : "aller au parc",src:"https://fontawesome.com/icons/snowflake?style=regular",
             isok : true},
            {text : "prendre un cafe ",
            src:"https://fontawesome.com/icons/coffee?style=solid",
             isok : true},
            {text : "aller au travail",src:"https://fontawesome.com/icons/lightbulb?style=regular",
             isok : true},
            {text : "faire du shopping en ligne",
            src:"https://fontawesome.com/icons/toilet-paper?style=solid",
             isok : true},
            
          ]);


          const addlist = (text) =>{
              const img="https://fontawesome.com/icons/lightbulb?style=regular";
            const newlist = [...list, {text}];
            setList(newlist)
          }
        
          const modif = index=>{
            const newlist = [...list];
            newlist[index].isok = !newlist[index].isok;
          
            setlist(newlist)
          
          };

          const supplist= index=>{
            const newList = list.filter((list) => list[index] !== index);
             setList(newList);
          }


        return (
            <div>
              
          <List key={index} index={index} list={list} modif={modif} supplist={supplist}/>
        <Form addlist={addlist}/>
            </div>
        )
    }
    export default main;