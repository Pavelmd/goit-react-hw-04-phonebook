import React from 'react';
import css from './ContactForm.module.css';
import { useState } from 'react';

export const ContactForm =({handleSubmit}) => {
const[name,setName] = useState('');
const[number,setNumber] = useState('');

  const handleChangeName = e => {
    const { value } = e.target;
    setName(value);
  };
  const handleChangeNumber = e => {
    const {value} = e.target;
    setNumber(value);
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    handleSubmit({ name: name, number: number });
    form.reset();
  };

 

    return (
      <form className={css.form} onSubmit={handleFormSubmit}>
        <label className={css.formLabel}>Name </label>
        <input
          className={css.formName}
          type="text"
          name="name"
          required
          placeholder="Enter name"
          value={name}
          onChange={handleChangeName}
        />
        <label className={css.formLabel}>Number </label>
        <input
          className={css.formNumber}
          type="tel"
          name="number"
          required
          placeholder="Enter phone number"
          value={number}
          onChange={handleChangeNumber}
        />
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }

