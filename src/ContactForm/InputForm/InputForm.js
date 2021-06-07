import React from 'react';
import s from "./InputForm.module.css";

const InputForm = ({state: {name, number, sex}, handleChange, addContact}) => {

    return <div className={s.contactFormContainer}>
        <h3>Name</h3>
        <form onSubmit={addContact}
        >
            <input onChange={handleChange}
                   type="text"
                   name="name"
                   value={name}
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                   required
            />
            <h3>Number</h3>
            <input onChange={handleChange}
                   type="tel"
                   name="number"
                   value={number}
                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                   title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                   required
            />
            <div>
                <button type="submit"
                        className={s.btn}>Add contact</button>
            </div>
            <label>
                <input type="radio" name="sex" value="male" checked={sex === "male"} onChange={handleChange} /> 👨
                <input type="radio" name="sex" value="female" checked={sex === "female"} onChange={handleChange} /> 👩
            </label>
        </form>
    </div>
}

export default InputForm