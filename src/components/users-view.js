import React from 'react';
import users from './../data/users.json';
import { Grid, Row, Col, Table, Button } from 'react-bootstrap';

import FilterButtons from './filter-buttons'

export default class UsersView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      test: 'Hello stranger',
      filter: '',
      activeFilterName: ''
    }

    this.asc = this.asc.bind(this)
    this.ascGrade = this.ascGrade.bind(this)

    this.desc = this.desc.bind(this)
    this.descGrade = this.descGrade.bind(this)

  }

  handleClickSortByName = () => console.log('name');

  handleSortFilter = () =>
    this.state.filter === this.asc ?
      this.setState({
        filter: this.desc,
        filterName: 'Sort'
      }) :
      this.setState({
        filter: this.asc,
        filterName: 'Sort'
      })

  handleClickSortBySurname = () => console.log('surname');

  handleClickSortByGender = () => this.state.filter === 'Male' ?
    this.setState({
      filter: 'Female',
      activeFilterName: 'Gender'
    }) :
    this.setState({
      filter: 'Male',
      activeFilterName: 'Gender'
    })

  handleClickSortByAge = () => console.log('age');
  handleClickSortByGrade = () => console.log('grade');
  handleClickUnsort = () =>
    this.setState({
      filter: '',
      activeFilterName: 'unset'
    })


  asc(a, b) { return (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0); }
  ascGrade(a, b) { return (a.grade > b.grade) ? 1 : ((b.grade > a.grade) ? -1 : 0); }

  desc(a, b) { return (a.first_name < b.first_name) ? 1 : ((b.first_name < a.first_name) ? -1 : 0); }
  descGrade(a, b) { return (a.grade < b.grade) ? 1 : ((b.grade < a.grade) ? -1 : 0); }

  componentWillMount() {
    this.setState({
      filter: '',
      activeFilterName: 'unset'
    })
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <h1>UsersView</h1>
            <p> {this.state.test} </p>
            <FilterButtons
              first_name={this.handleClickSortByName}
              last_name={this.handleClickSortBySurname}
              gender={this.handleClickSortByGender}
              age={this.handleClickSortByAge}
              grade={this.handleClickSortByGrade}
              reset={this.handleClickUnsort}
            />

            <div>
              <Button bsStyle='primary' onClick={this.handleClickSortByName}> Sort by name </Button>
              <Button bsStyle='primary' onClick={this.handleClickSortBySurname}> Sort by surname </Button>
              <Button bsStyle='primary' onClick={this.handleClickSortByGender}> sort by gender </Button>
              <Button bsStyle='primary' onClick={this.handleClickSortByAge}> sort by age </Button>
              <Button bsStyle='primary' onClick={this.handleClickSortByGrade}> sort by grade </Button>
            </div>

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
                  this.state.activeFilterName === 'unset' &&
                  users.map(
                    (user, index) =>
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
                {
                  this.state.activeFilterName === 'Gender' &&
                  users.filter(user => user.gender === this.state.filter).map((user, index) =>
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