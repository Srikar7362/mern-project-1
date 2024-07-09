

// import React,{useState} from 'react';
// import "../../styles/booking-form.css" ;
// import { Form , FormGroup } from 'reactstrap';
// import axios from 'axios';

// const BookingForm = () => {
//         const [fullname, setFullname] = useState('');
//         const [lastname, setLastname] = useState('');
//         const [email, setEmail] = useState('');
//         const [mobileno, setMobileno] = useState('');
//         const [fromaddress, setFromaddress] = useState('');
//         const [toaddress, setToaddress] = useState('');
//         const handleSubmit = (e) => {
//                 e.preventDefault();
//                 axios.post('http://localhost:3004/Cars', { fullname,lastname,email,mobileno,fromaddress,toaddress})
//                   .then(result => {
//                     console.log(result);
//                     alert('Form submitted successfully');
//                   })
//                   .catch(err => {
//                     console.error(err);
//                     alert('Error submitting form');
//                   });
//               };


// //     const submitHandler = event =>{
// //         event.preventDefault();
// //     }

//     return <Form onSubmit={handleSubmit}>
//         {/* <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required /> */}

//         <FormGroup className='booking__form d-inline-block me-4 mb-b' >
//                 <input type="text" placeholder='First Name' id="fullname" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
//         </FormGroup>
//         <FormGroup className='booking__form d-inline-block ms-1 mb-b' >
//                 <input type="text" placeholder='Last Name' id="lastname" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required/>
//         </FormGroup>

//         <FormGroup className='booking__form d-inline-block me-4 mb-b' >
//                 <input type="email" placeholder='Email' id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
//         </FormGroup>
//         <FormGroup className='booking__form d-inline-block ms-1 mb-b' >
//                 <input type="number" placeholder='Mobile Number' id="mobileno" name="mobileno" value={mobileno} onChange={(e) => setMobileno(e.target.value)} required/>
//         </FormGroup>

//         <FormGroup className='booking__form d-inline-block me-4 mb-b' >
//                 <input type="text" placeholder='Form Address' id="fromaddress" name="fromaddress" value={fromaddress} onChange={(e) => setFromaddress(e.target.value)} required/>
//         </FormGroup>
//         <FormGroup className='booking__form d-inline-block ms-1 mb-b' >
//                 <input type="text" placeholder='To Address' id="toaddress" name="toaddress" value={toaddress} onChange={(e) => setToaddress(e.target.value)} required/>
//         </FormGroup>

//         <FormGroup className='booking__form d-inline-block me-4 mb-b' >
//                 <select name="" id="">
//                     <option value="1 person"> 1 Person</option>
//                     <option value="2 person"> 2 Person</option>
//                     <option value="3 person"> 3 Person</option>
//                     <option value="4 person"> 4 Person</option>
//                     <option value="6+ person">6+ Person </option>
//                 </select>
//         </FormGroup>
//         <FormGroup className='booking__form d-inline-block ms-1 mb-b' >
//                 <select name="" id="">
//                     <option value="1 luggage"> 1 Luggage</option>
//                     <option value="2 luggage"> 2 Luggage</option>
//                     <option value="3 luggage"> 3 Luggage</option>
//                     <option value="4 luggage"> 4 Luggage</option>
//                     <option value="5+ luggage">5+ Luggage</option>
//                 </select>
//         </FormGroup>

//         <FormGroup className='booking__form d-inline-block me-4 mb-b' >
//                 <input type="date" placeholder='Journey Date'/>
//         </FormGroup>
//         <FormGroup className='booking__form d-inline-block ms-1 mb-b' >
//                 <input type="time" placeholder='Journey Time' className='time__picker'/>
//         </FormGroup>

//         <FormGroup>
//                 <textarea rows={5} type="textarea" className='textarea' placeholder='Write'></textarea>
//         </FormGroup>

        

//     </Form>
// };

// export default BookingForm;

import React, { useState } from 'react';
import "../../styles/booking-form.css";
import { Form, FormGroup } from 'reactstrap';
import axios from 'axios';
import { Link } from "react-router-dom";
import Status from '../../pages/Status';

const BookingForm = () => {
  const [fullname, setFullname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [fromaddress, setFromaddress] = useState('');
  const [toaddress, setToaddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3004/Cars', { fullname, lastname, email, mobileno, fromaddress, toaddress })
      .then(result => {
        console.log(result);
        alert('Form submitted successfully');
        alert('Check your status in 2hrs');
      })
      .catch(err => {
        console.error(err);
        alert('Error submitting form');
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className='booking__form d-inline-block me-4 mb-b'>
        <input type="text" placeholder='First Name' id="fullname" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
      </FormGroup>
      <FormGroup className='booking__form d-inline-block ms-1 mb-b'>
        <input type="text" placeholder='Last Name' id="lastname" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
      </FormGroup>
      <FormGroup className='booking__form d-inline-block me-4 mb-b'>
        <input type="email" placeholder='Email' id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </FormGroup>
      <FormGroup className='booking__form d-inline-block ms-1 mb-b'>
        <input type="number" placeholder='Mobile Number' id="mobileno" name="mobileno" value={mobileno} onChange={(e) => setMobileno(e.target.value)} required />
      </FormGroup>
      <FormGroup className='booking__form d-inline-block me-4 mb-b'>
        <input type="text" placeholder='From Address' id="fromaddress" name="fromaddress" value={fromaddress} onChange={(e) => setFromaddress(e.target.value)} required />
      </FormGroup>
      <FormGroup className='booking__form d-inline-block ms-1 mb-b'>
        <input type="text" placeholder='To Address' id="toaddress" name="toaddress" value={toaddress} onChange={(e) => setToaddress(e.target.value)} required />
      </FormGroup>
      <FormGroup className='booking__form d-inline-block me-4 mb-b'>
        <select name="persons" id="persons">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="6+ person">6+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className='booking__form d-inline-block ms-1 mb-b'>
        <select name="luggage" id="luggage">
          <option value="1 luggage">1 Luggage</option>
          <option value="2 luggage">2 Luggage</option>
          <option value="3 luggage">3 Luggage</option>
          <option value="4 luggage">4 Luggage</option>
          <option value="5+ luggage">5+ Luggage</option>
        </select>
      </FormGroup>
      <FormGroup className='booking__form d-inline-block me-4 mb-b'>
        <input type="date" placeholder='Journey Date' />
      </FormGroup>
      <FormGroup className='booking__form d-inline-block ms-1 mb-b'>
        <input type="time" placeholder='Journey Time' className='time__picker' />
      </FormGroup>
      <FormGroup>
        <textarea rows={5} type="textarea" className='textarea' placeholder='Write'></textarea>
      </FormGroup>
      <button  className='paymentt text-end mt-5'type="submit">Reserve Now</button> 
      <Link to="/Status"><button  className='paymentt text-end mt-5'type="submit">Status</button></Link>
      
    </Form>
  );
};

export default BookingForm;
