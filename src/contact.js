// module for creating the contact page

const createcontactpage = () =>{
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const headingInput = document.createElement('input');
    headingInput.type = "text";
    headingInput.placeholder = "Enter Heading";
    form.appendChild(headingInput);

    const addressInput = document.createElement("input");
    addressInput.type = 'text';
    addressInput.placeholder = "Enter Address";
    form.appendChild(addressInput);

    const phoneinput = document.createElement("input");
    addressInput.type = 'text';
    phoneinput.placeholder = "Enter Phone";
    form.appendChild(addressInput);

    const submitButton = document.createElement("input");
    submitButton.type = 'submit';
    submitButton.value = "Submit";
    form.appendChild(submitButton);

    pageContent.appendChild(form);
    content.appendChild(pageContent);    
}

export default createcontactpage;