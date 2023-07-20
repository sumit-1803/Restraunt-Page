// module for creating the contact page

const createcontactpage = () =>{
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    // new div inside main div 
    const innerNewDiv = document.createElement('div');
    innerNewDiv.classList.add("innerNewDiv")
    pageContent.appendChild(innerNewDiv);
    pageContent.classList.add('page-content');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const headingInput = document.createElement('input');
    headingInput.type = "text";
    headingInput.placeholder = "Enter Name";
    form.appendChild(headingInput);

    const addressInput = document.createElement("input");
    addressInput.type = 'text';
    addressInput.placeholder = "Enter Email Address";
    form.appendChild(addressInput);

    const phoneinput = document.createElement("input");
    addressInput.type = 'text';
    phoneinput.placeholder = "Enter Phone";
    form.appendChild(addressInput);

    const submitButton = document.createElement("input");
    submitButton.classList.add('submitBtn')
    submitButton.type = 'submit';
    submitButton.value = "Submit";
    form.appendChild(submitButton);

    innerNewDiv.appendChild(form);
    pageContent.appendChild(innerNewDiv);   
    content.appendChild(pageContent);  
}

export default createcontactpage;