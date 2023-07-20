// module for creating menu Page

const createmenupage = () =>{
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent="Our Menu";

    const menulist = document.createElement("ul");
    const menuItem1 = document.createElement("li");
    menuItem1.textContent = "Pomodoro";


    const menuItem2 = document.createElement("li");
    menuItem2.textContent = "Bolognesa";


    const menuItem3 = document.createElement("li");
    menuItem3.textContent = "Alfredo";

    menulist.appendChild(menuItem1);
    menulist.appendChild(menuItem2);
    menulist.appendChild(menuItem3);

    pageContent.appendChild(heading);
    pageContent.appendChild(menulist);
    content.appendChild(pageContent);
}

export default createmenupage;