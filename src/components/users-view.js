import React from 'react';
import users from './../data/users.json';

export default class UsersView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      test: 'Hello stranger'
    }
  }

  render() {
    return (
      <div>
        <h1>UsersView</h1>
        <p> {this.state.test} </p>

        <div>
          {
            users && users.map((user, index) =>
            <p key={index}> <img src={user.avatar} alt={user.first_name} /> {user.id}. {user.first_name} {user.last_name} {user.gender} {user.age} {user.grade}  </p>
            )
          }
        </div>
      </div>
    )
  }
}