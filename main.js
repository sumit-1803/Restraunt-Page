(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.classList.add("head"),n.textContent="Welcome to Restraurant-Website",t.appendChild(n);const c=document.createElement("img");c.src="/images/restraurant.jpg",c.style.width="200px",t.appendChild(c);const d=document.createElement("p");d.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque provident hic accusantium ut perspiciatis magnam voluptatibus quia, natus harum quibusdam excepturi facere ducimus, molestiae blanditiis tempore ipsa laborum voluptates nostrum similique minus distinctio voluptatem possimus?",t.appendChild(d),e.appendChild(t)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}document.querySelector("#newdiv");(()=>{const n=document.querySelector("#navbar");n.classList.add("navbar");const c=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div");c.setAttribute("id","home-btn"),d.setAttribute("id","menu-btn"),a.setAttribute("id","contact-btn"),c.classList.add("tab"),d.classList.add("tab"),a.classList.add("tab"),c.textContent="Home",d.textContent="Menu",a.textContent="Contact",n.appendChild(c),n.appendChild(d),n.appendChild(a),c.addEventListener("click",(()=>{t(),e()})),d.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Our Menu";const c=document.createElement("ul"),d=document.createElement("li");d.textContent="Pomodoro";const a=document.createElement("li");a.textContent="Bolognesa";const o=document.createElement("li");o.textContent="Alfredo",c.appendChild(d),c.appendChild(a),c.appendChild(o),t.appendChild(n),t.appendChild(c),e.appendChild(t)})()})),a.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("form");n.classList.add("contact-form");const c=document.createElement("input");c.type="text",c.placeholder="Enter Heading",n.appendChild(c);const d=document.createElement("input");d.type="text",d.placeholder="Enter Address",n.appendChild(d);const a=document.createElement("input");d.type="text",a.placeholder="Enter Phone",n.appendChild(d);const o=document.createElement("input");o.type="submit",o.value="Submit",n.appendChild(o),t.appendChild(n),e.appendChild(t)})()}))})(),e()})();