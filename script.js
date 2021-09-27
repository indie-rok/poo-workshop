const addContact = () => {

    let newContact = document.createElement('div');
    let contactTitle = document.createElement('h3');
    let contactPhone = document.createElement('p');

    let contactContainer = document.getElementById('contact_container');
    let newContactPhone = document.getElementById('new-contact-phone');
    let newContactName = document.getElementById('new-contact-name');
    
    contactTitle.innerText = newContactName.value;
    contactPhone.innerText = newContactPhone.value;

    newContact.appendChild(contactTitle);
    newContact.appendChild(contactPhone);

    contactContainer.appendChild(newContact);
}

document.getElementById('add-contact').addEventListener('click', addContact)