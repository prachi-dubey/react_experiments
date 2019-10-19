import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(users => {
        console.log('users' + users);
        const persons = users.data;
        this.setState({ persons });
        console.log('persons' + persons);
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li key={person.id}>{person.name}  
        {person.email}  {person.address.city}</li>)}
      </ul>
    )
  }
}