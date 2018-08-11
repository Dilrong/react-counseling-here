import React, {Component} from 'react'
import {Button, Input, TextArea, Form} from 'semantic-ui-react'
import axios from 'axios'

export default class SubmitContainer extends Component{
    state = {
        name: '',
        phoneNumber: '',
        description: '',

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const postdata = {
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            description: this.state.description
        }
        const result = await axios.post('http://6a970471.ngrok.io/users/', postdata)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        this.setState({
            name: '',
            phoneNumber: '',
            description: '',
        })
        result
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <Input fluid name='name' type='text' value={this.state.name} onChange={this.handleChange} placeholder='이름'/><p/>
                <Input fluid name='phoneNumber' value={this.state.phoneNumber} onChange={this.handleChange} placeholder='전화번호'/><p/>
                <TextArea name='description' value={this.state.description} onChange={this.handleChange} placeholder='상담 내용'/><p/>
                <Button circular icon='check' type='submit' floated='right'/>
            </Form>
        );
    }
}