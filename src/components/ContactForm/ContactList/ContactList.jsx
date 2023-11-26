import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => (
  <div>
    <ul>
      {contacts.map((contact, id) => (
        <li key={id} className={css.contactListItem}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.contactListItemBtn}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);
