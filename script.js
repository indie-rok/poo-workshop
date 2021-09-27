class Contact {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }

    formatPhoneNumber(){
        this.phone =  this.phone.split('').join('-')
    }

    getHTML() {
        let newContactHTML = document.createElement('div');
        let contactTitle = document.createElement('h3');
        let contactPhone = document.createElement('p');
        
        this.formatPhoneNumber();

        contactTitle.innerText = this.name;
        contactPhone.innerText = this.phone;

        newContactHTML.appendChild(contactTitle);
        newContactHTML.appendChild(contactPhone);

        return newContactHTML;
    }
}


const addContact = () => {

    let contactContainer = document.getElementById('contact_container');
    let newContactPhone = document.getElementById('new-contact-phone');
    let newContactName = document.getElementById('new-contact-name');

    const contact = new Contact(newContactName.value, newContactPhone.value);

    contactContainer.appendChild(contact.getHTML());
}

document.getElementById('add-contact').addEventListener('click', addContact)