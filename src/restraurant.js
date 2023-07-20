const createRestrauranthomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    
    const navbar = document.querySelector('#navbar');
    // creating new div and appending adjacenly
    const newdiv = document.createElement('div');
    newdiv.setAttribute('id', 'newDiv');
    navbar.insertAdjacentElement('beforebegin',newdiv);
    
    
    // create and append headline element
    const headline = document.createElement('h1');
    headline.classList.add("head")
    headline.textContent="Welcome to Restraurant-Website";
    newdiv.appendChild(headline);
    
    // create and append image element
    const image = document.createElement('img');
    image.src= "/images/restraurant.jpg";
    image.style.width='500px';
    image.style.height='590px';
    pageContent.appendChild(image);


    // create and append copy element 
    const copy = document.createElement('p');
    copy.textContent="Welcome to our Restaurant-Website! Discover mouthwatering dishes prepared with love and passion. Our menu offers a delightful range of Pomodoro, Bolognesa, and Alfredo, sure to tantalize your taste buds. Indulge in a culinary journey where exceptional flavors meet a cozy ambiance. Come, dine, and create cherished memories with us!";
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}

export default createRestrauranthomePage; 




// <h1>Welcome to Website</h1>
//         <div class="left-right">
//             <img class="back-img" src="/images/restraurant.jpg" alt="restraurant">
//         <p></p>
//         </div>