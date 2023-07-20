const createRestrauranthomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    
    // const navbar = document.querySelector('#navbar');
    // creating new div and appending adjacenly
    // const newdiv = document.createElement('div');
    // navbar.insertAdjacentElement('beforebegin',newdiv);
    
    
    // create and append headline element
    const headline = document.createElement('h1');
    headline.classList.add("head")
    headline.textContent="Welcome to Restraurant-Website";
    pageContent.appendChild(headline);
    
    // create and append image element
    const image = document.createElement('img');
    image.src= "/images/restraurant.jpg";
    image.style.width='200px';
    pageContent.appendChild(image);


    // create and append copy element 
    const copy = document.createElement('p');
    copy.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque provident hic accusantium ut perspiciatis magnam voluptatibus quia, natus harum quibusdam excepturi facere ducimus, molestiae blanditiis tempore ipsa laborum voluptates nostrum similique minus distinctio voluptatem possimus?";
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}

export default createRestrauranthomePage; 




// <h1>Welcome to Website</h1>
//         <div class="left-right">
//             <img class="back-img" src="/images/restraurant.jpg" alt="restraurant">
//         <p></p>
//         </div>