const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');



menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

menuLinks.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');    
  
});
  


class Contacts {
  constructor(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
  }
}

const contactsList = [];
contactsList.push(new Contacts('John Doe', "j@mail.com", "Hello, I am John Doe"));
contactsList.push(new Contacts('Jane Doe', "ja@mail.com", "Hello, I am Jane Doe"));

function displayContactsList() {
  const contactsListContainer = document.getElementById('message-list');
  contactsListContainer.innerHTML = '';
  contactsList.forEach((contact, index) => {
    const contactDiv = document.createElement('li');
    contactDiv.innerHTML = `<strong>${contact.name}</strong> - ${contact.email} - ${contact.message}`;
    
    contactDiv.addEventListener('click', () => {
      contactsList.splice(index, 1); // Remove the clicked contact from the contactsList array
      displayContactsList(); // Re-render the list after removal
    });
    contactsListContainer.appendChild(contactDiv);
  });
}



function addContactToList(contact) {
  contactsList.push(contact);
} 


displayContactsList();

const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  const name = document.querySelector('#nameInput').value;
  const email = document.querySelector('#emailInput').value;
  const message = document.querySelector('#messegeInput').value;
  
  const contact = new Contacts(name, email, message);
  addContactToList(contact);
  displayContactsList();
  document.querySelector('#nameInput').value = '';
  document.querySelector('#emailInput').value = '';
  document.querySelector('#messegeInput').value = '';
} );


