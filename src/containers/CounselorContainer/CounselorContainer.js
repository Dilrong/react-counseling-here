import React, {Component} from 'react'
import './CounselorContainer.css'
import { Container } from 'semantic-ui-react'
import { CounselorCard } from '../../components/';

export default class CounselorContainer extends Component{
    state = {
        data: [],
    }

    componentDidMount(){
        this._getCounselordata()
    }

    _getCounselordata = async() => {
        const data = await this._callCounselorAPI()
        this.setState({
            data: data[0]
        })
        console.log(this.state.data)
    }

    _callCounselorAPI = async() => {
        return fetch('http://6a970471.ngrok.io/counsels/1')
            .then(request => request.json())
            .then(json => json)
            .catch(err => console.log(err))
    }

    render(){
        return(
            <Container>
                <CounselorCard data={this.state.data}/>
            </Container>
        )
    }
}