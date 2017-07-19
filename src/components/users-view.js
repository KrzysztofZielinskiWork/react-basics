import React from 'react';
import users from './../data/users.json';
import { Grid, Row, Col, Table } from 'react-bootstrap';

export default class UsersView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      test: 'Hello stranger'
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
        <h1>UsersView</h1>
        <p> {this.state.test} </p>

        <Table striped bordered condensed >
          <thead>
            <tr>
              <th>l.p.</th>
              <th>Avatar</th>
              <th>Firts name</th>
              <th>Last name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {
              users && users.map((user, index) =>
                <tr key={index}>
                  <td key={index + 1}>{user.id}.</td>
                  <td key={index}><img src={user.avatar} alt={user.first_name} /></td>
                  <td key={index + 2}>{user.first_name}</td>
                  <td key={index + 3}>{user.last_name}</td>
                  <td key={index + 4}>{user.gender}</td>
                  <td key={index + 5}>{user.age}</td>
                  <td key={index + 6}>{user.grade}</td>
                </tr>
              )
            }
          </tbody>
        </Table>
        </Col>
        </Row>
      </Grid>
    )
  }
}