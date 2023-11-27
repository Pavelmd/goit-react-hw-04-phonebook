// import css from './StyleContainer.module.css';
// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactForm/ContactList/ContactList';
// import { Filter } from './Filter/Filter';

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   componentDidMount() {
//     const contactsFromLocalStorage = localStorage.getItem('contactList');
//     const parsedContacts = JSON.parse(contactsFromLocalStorage);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }
// componentDidUpdate(prevProps, prevState) {
//   const prevStateContacts = prevState.contacts;
//   const nextStayContacts = this.state.contacts;

//   if (prevStateContacts !== nextStayContacts) {
//     localStorage.setItem('contactList', JSON.stringify(nextStayContacts));
//   }
// }

  

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     const id = nanoid();
//     const name = e.name;
//     const number = e.number;
//     const contactsLists = [...this.state.contacts];

//     if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
//       alert(`${name} is already in contacts.`);
//     } else {
//       contactsLists.push({ name, id, number });
//     }

//     this.setState({ contacts: contactsLists });
//   };

//   handleDelete = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };


//   // handleDelete = e => {
//   //   this.setState(prevState => ({
//   //     contacts: prevState.contacts.filter(contact => contact.id !== e),
//   //   }));
//   // };

//   getFilteredContacts = () => {
//     const filterContactsList = this.state.contacts.filter(contact => {
//       return contact.name
//         .toLowerCase()
//         .includes(this.state.filter.toLowerCase());
//     });

//     return filterContactsList;
//   };

//   render() {
//     const { filter } = this.state;
//     return (
//       <div className={css.container}>
//         <h1>Phonebook</h1>
//         <ContactForm handleSubmit={this.handleSubmit} />
//         <h2> Contacts</h2>
//         <Filter filter={filter} handleChange={this.handleChange} />
//         <ContactList
//           contacts={this.getFilteredContacts()}
//           handleDelete={this.handleDelete}
//         />
//       </div>
//     );
//   }
// }
