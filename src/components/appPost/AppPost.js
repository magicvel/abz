import React, { Component } from 'react';

import './appPost.scss'


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
  }

  onValueSelect(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  onValueChanhe = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSelectImageHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    const {name, mail, phone} = this.state;
        return (
        <section>
        <div className="container">
            <div className="post">
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
                        value="Frontend developer"
                         />
                        <span></span>
                      </label>
                      <label> Backend developer
                        <input type="radio" 
                        name="select" 
                        value="Backend developer"/>
                        <span></span>
                      </label>
                      <label>Designer
                        <input type="radio" 
                        name="select" 
                        value="Designer"/>
                        <span></span>
                      </label>
                      <label>QA
                        <input type="radio" 
                        name="select" 
                        value="QA"/>
                        <span></span>
                      </label>

                </div>
                <input required type="file" className="form__input__upload" 
                name="photo" 
                onChange={this.onSelectImageHandler}
                />
                <button className="form__btn btn" 
                type="submit" 
              
                
                > Sign up</button>
            </div>
        </div>
            </div>

    </section>
    )
  }

}

export default AppPost;

// var formData = new FormData(); 
// file from input type='file' var fileField = document.querySelector('input[type="file"]');
//  formData.append('position_id', 2); formData.append('name', 'Jhon');
//  formData.append('email', 'Jhon@gmail.com'); 
//  formData.append('phone', '+380955388485'); formData.append('photo', fileField.files[0]);
//  fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',
// { method: 'POST', 
//   body: formData, 
//   headers: { 
//     'Token': token,
//             get token with GET api/v1/token method 
//     },
//  }) 
//  .then(function(response) { return response.json(); }) 
//  .then(function(data) { console.log(data);
//    if(data.success) { 
//      process success response 
//     } else { 
//       proccess server errors 
//     } }) 
//     .catch(function(error) {
//        proccess network errors
//        });



//правильно?
const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: data,
  });
  if(!response.ok) {
    throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
  }
  return await response.json();
}

const sendHuman = () => {
  const humanForm = document.querySelector('.')
  const data = {

  };
  humanForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData();
    const humanList = JSON.stringify(data);

    sendData('https://frontend-test-assignment-api.abz.agency/api/v1/users', humanList)
    .then(() => {
      sendHuman.reset();
    })
    .catch((err) => {
      console.log(err)
    })
  })
}