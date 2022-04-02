import {displayAtoZ}  from "../brand.js";
import { alphabeticalBrands } from "../Constants/constants.js";
const Displaybrands=()=>{   
    const alphabets =displayAtoZ();
    console.log(alphabets)
    const displayNew=isNew=>{
        return isNew?`
        <span class="isNew">NEW</span>
        `:""
    }
    const displayBrandsAlphabetical=(alphabet)=>{
    
        const brands=alphabeticalBrands[alphabet];
        console.log(brands);
        return (brands||[]).map(res => {
            return `<li><a class="brandList" href=${res.url}>${res.brand}${displayNew(res.isNew)}</a></li>`
        }).join("")
    }
    const displayAlphabets=()=>alphabets.map(res=>{
        return (alphabeticalBrands[res]||[]).length?`<div id=${res} class="gridBrands">
        <div class="alphabet">${res}</div>
        <div><ul class="gridList">${displayBrandsAlphabetical(res)}</ul></div>
        </div>    <div class="divider"></div>
        `:""
    }).join("")
    return `<div>${displayAlphabets()}</div>`
 }

 export default Displaybrands;
 