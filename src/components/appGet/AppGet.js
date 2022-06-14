import { Component } from 'react';

import AbzService from '../../services/AbzService';

import './appGet.scss'


const abzService = new AbzService();
abzService.getHuman(3).then(res => console.log(res));

class AppGet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            error: null,
            isLoaded: false,
            items: [],
        };
    }
    
    componentDidMount() {
        fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6")
        .then(res =>res.json())
        .then (
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.users,
                });
            },
            (error)=> {
                this.setState({
                    isLoaded: true,
                    error
                });

            }
        )
    }

    render() {
        const {error,isLoaded, items} = this.state;
        if (error) {
            return <p> Error {error.massage} </p>
        } else if (!isLoaded) {
            return <p> Loading... </p>
        } else {
            return (

                <section className="get">
                    <div className="container">
                        <div className="request">
                            <h1 className="request__header text_black">Working with GET request</h1>
                            
                                {items.map (item => (
                                    <div key={item.id} className="request__cards">
                                        <img className="request__cards__img" src={item.photo} alt="photo"/>
                                        <p className="request__cards__info">{item.name}</p>
                                        <p></p>
                                        <p className="request__cards__info">{item.position}</p>
                                        <a href='tel:{item.phone}' className="request__cards__info"> {item.phone} </a>
                                        <a href='mailto:{item.email}' className="request__cards__info"> {item.email} </a>
                                    </div>
                                ))}
                                
                            
                            <button className="btn request__btn">Show more</button>
                        </div>
                    </div>
                </section>
            )
        }
        

    }
}

export default AppGet;