import React from "react";

const ContactList = ({contacts, handlerDel}) => {
    return <div>
        <ul>
            {contacts.map(({ name, number, sex, id }) => (
                <li key={id}>{name}: {number} ({sex})
                    <button onClick={handlerDel} type="submit" id={id}>delete</button>
                </li>
            ))}
        </ul>
    </div>
}

export default ContactList