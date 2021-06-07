import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import PropTypes from "prop-types";



class App extends React.Component {

    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', sex: 'female'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12', sex: 'female'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79', sex: 'male'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26', sex: 'female'},
        ],
        filter: ''
        
    }

    addNewContact = (data) => {
        this.setState(prevState => ({
           contacts: [...prevState.contacts, data]
        }))
    }

    delContact = e => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts.filter(contact => contact.id !== e.target.id)]
        }))
    }

    changeFilter = e => {
        const {value} = e.currentTarget
        this.setState({filter: value})
    }


    render() {


     const lowerFilter = this.state.filter.toLowerCase()

     const filteredContacts = this.state.contacts.filter(contact =>
         contact.name.toLowerCase().includes(lowerFilter))

    return <>
        <h1>Phonebook</h1>
         <ContactForm
             contacts={this.state.contacts}
             onSubmit={this.addNewContact}/>

        <h2>Contacts</h2>
        <Filter handlerFilter={this.changeFilter}
                filter={this.state.filter}/>
        <ContactList contacts={filteredContacts}
                     handlerDel={this.delContact}
        />
    </>
  }
}

export default App;


App.propTypes = {
    filter: PropTypes.string,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string,
            sex: PropTypes.bool.isRequired
        })
    )
};
