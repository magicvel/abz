import React, { Component } from 'react';

import './appPost.scss'

const PHONE_REGEX = /^[\+]{0,1}380([0-9]{9})$/
const EMAIL_REGEX = /^(?:[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

class AppPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      mail:'',
      phone:'',
      select: '',
      photo:'',
    }
    this.onValueSelect = this.onValueSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onValueSelect(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onValueChanhe = (e) => {

    if (e.target.name === 'phone') {
        if (!PHONE_REGEX.test(e.target.value)) {
            console.log('INVALID phone')
        }
    } else if (e.target.name === 'mail') {
        if (!EMAIL_REGEX.test(e.target.value)) {
            console.log('INVALID email')
        }
    }



    this.setState({
      [e.target.name]: e.target.value
    })
  }



  onSelectImageHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0]
    })
  }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        var formData = new FormData();
        formData.append('position_id', this.state.select);
        formData.append('name', this.state.name);
        formData.append('email', this.state.mail);
        formData.append('phone', this.state.phone);
        formData.append('photo', this.state.photo);

        const TOKEN = 'eyJpdiI6Im9mV1NTMlFZQTlJeWlLQ3liVks1MGc9PSIsInZhbHVlIjoiRTJBbUR4dHp1dWJ3ekQ4bG85WVZya3ZpRGlMQ0g5ZHk4M05UNUY4Rmd3eFM3czc2UDRBR0E4SDR5WXlVTG5DUDdSRTJTMU1KQ2lUQmVZYXZZOHJJUVE9PSIsIm1hYyI6ImE5YmNiODljZjMzMTdmMDc4NjEwN2RjZTVkNzBmMWI0ZDQyN2YzODI5YjQxMzE4MWY0MmY0ZTQ1OGY4NTkyNWQifQ='
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',
            { method: 'POST',
                body: formData,
                headers: {
                    'Token': TOKEN,
                    // get token with GET api/v1/token method
            },
    })
    .then(function(response) { return response.json(); })
            .then(function(data) { console.log(data);
                if(data.success) {
                    console.log('SUCCESS')
                    console.log(data)
                } else {
                    console.log('ERROR')
                    console.log(data)
                } })
            .catch(function(error) {
                console.log('Network ERROR')
            });


        // const response = fetch(API_URL, {
        //     method: 'POST',
        //     body: ,
        // });

    }

  render() {
    const {name, mail, phone} = this.state;
        return (
        <section>
        <div className="container">
            <form className="post" onSubmit={this.handleSubmit}>
              <div className="form">
                <h1 className="form__header">
                    Working with POST request
                </h1>
                <div className="">
                    <input required
                    type="text" 
                    className="form__input input" 
                    placeholder="Your name" 
                    onChange={this.onValueChanhe}
                    name="name"
                    value={name}
                    />
                    <input required
                    type="email" 
                    className="form__input input" 
                    placeholder="Email" 
                    onChange={this.onValueChanhe}
                    name="mail"
                    value={mail}
                    />
                    <input required
                    type="tel" 
                    className="form__input__phone form__input input" 
                    placeholder="Phone" 
                    onChange={this.onValueChanhe}
                    name="phone"
                    value={phone}
                    />
                    <span className="helper_text" data-error="wrong" data-success="right">+38 (XXX) XXX - XX - XX</span>
                </div>
                <div  
                onChange={this.onValueSelect}
                required 
                className="form__position">
                    <h3>Select your position</h3>
                    <label>Frontend developer
                        <input type="radio" 
                        name="select" 
                        value="1"
                         />
                        <span></span>
                      </label>
                      <label> Backend developer
                        <input type="radio" 
                        name="select"
                        value="2"/>
                        <span></span>
                      </label>
                      <label>Designer
                        <input type="radio" 
                        name="select"
                        value="3"/>
                        <span></span>
                      </label>
                      <label>QA
                        <input type="radio" 
                        name="select"
                        value="4"/>
                        <span></span>
                      </label>

                </div>
                <input required type="file" className="form__input__upload"
                name="photo"
                onChange={this.onSelectImageHandler}
                />

                <button className="form__btn btn" type="submit">
                    Sign up
                </button>
            </div>
        </form>
            </div>

    </section>
    )
  }

}

export default AppPost;


//правильно?

// const sendHuman = () => {
//   const humanForm = document.querySelector('.')
//   const data = {
//
//   };
//   humanForm.addEventListener('submit', e => {
//     e.preventDefault();
//
//     const formData = new FormData();
//     const humanList = JSON.stringify(data);
//
//     // sendData('https://frontend-test-assignment-api.abz.agency/api/v1/users', humanList)
//     .then(() => {
//       sendHuman.reset();
//     })
//     .catch((err) => {
//       console.log(err)
//     })
//   })
// }