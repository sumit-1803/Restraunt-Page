// responsible for creating the topmost tabs

import createRestrauranthomePage from "./restraurant";
import createcontactpage from "./contact";
import createmenupage from "./menu";

const createTabs=()=>{
    const content = document.querySelector("#navbar");
    content.classList.add("navbar");

    // creating 3 divs
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    // set id's for divs 
    div1.setAttribute('id','home-btn');
    div2.setAttribute('id','menu-btn');
    div3.setAttribute('id','contact-btn');

    // set classes for styles 
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    // set text content for divs
    div1.textContent="Home";
    div2.textContent="Menu";
    div3.textContent="Contact";

    // append to content div 
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    div1.addEventListener("click",()=>{
        clearContent();
        createRestrauranthomePage();
    })
    div2.addEventListener("click",()=>{
        clearContent();
        createmenupage();
    })
    div3.addEventListener("click",()=>{
        clearContent();
        createcontactpage();
    })
}
const newdiv = document.querySelector('#newdiv');
function clearContent(){
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    if(pageContent){
        content.removeChild(pageContent);
    }
    
}

export default createTabs;