import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import { render } from '@testing-library/react';

const customer = [
  {

  'id': 1,
  'image': 'http://placeimg.com/64/64/any',
  'name': '나동빈',
  'birthday': '961222',
  'gender': '남',
  'job': '대학생'
},

{

  'id': 2,
  'image': 'http://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '681222',
  'gender': '여',
  'job': '대학생'
},

{

  'id': 3,
  'image': 'http://placeimg.com/64/64/any',
  'name': '아무개',
  'birthday': '561222',
  'gender': '남',
  'job': '대학생'
}

]

 function App() {

  return (

    <div>
       {
         customer.map(c => {
           return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> );
         })
       } 

    </div>

    )
  }

export default App;
