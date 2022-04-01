import {displayAtoZ}  from "../index.js";
import Displaybrands from "./Displaybrands.js";
// import "../styles.css";
const DisplayAtoZ=()=>{   
    const alphabets =displayAtoZ();
    console.log(alphabets)
    const displayAlphabets=()=>alphabets.map(res=>{
        return `<a class="displayAlphabetLink" href="#${res}">${res}</a>`
    }).join("")
    return `<div>
    <div class="displayAlphabet">${displayAlphabets()}</div>
    <div class="divider"></div>
    <div>${Displaybrands()}</div>
    </div>`
 }

 export default DisplayAtoZ;
 