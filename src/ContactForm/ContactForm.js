import React from "react";
import InputForm from "./InputForm/InputForm";
import {v4 as uuidv4} from "uuid";


class ContactForm extends React.Component {


    state = {
        name: '',
        number: '',
        id:'',
        sex: 'male'
    }

    handleChange = e => {
        const { name, value} = e.currentTarget
        this.setState({[name]: value})
        this.setState({id: uuidv4()})
    }

    addContact = e => {
        e.preventDefault();
        console.log(this.state.id)

        this.props.contacts.some( elem => elem.name === this.state.name )
            ? alert(`${this.state.name} is already exist in contacts`)
            : this.props.onSubmit(this.state)

        this.reset()
    }



    reset = () => {
        this.setState({
            name: '',
            number: '',
            id: ''
        })
    }


    render() {
        return (
            <InputForm
                state={this.state}
                handleChange={this.handleChange}
                addContact={this.addContact}
                handleSexRadio={this.handleChange}
            />
        );
    }
}

export default ContactForm