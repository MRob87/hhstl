import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import {withRouter} from 'react-router-dom';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    width: '80%',
    marginTop: theme.spacing.unit * 3,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
  mainContent: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
    width: '100%'
  },
  deleteButton: {
    margin: theme.spacing.unit,
    float: 'right',
  },
  alertTable: {
    height: 140,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

let id = 0;
function createPatient(name, address, age, incidentCount) {
  id += 1;
  return { id, name, address, age, incidentCount };
}

const data = [
  createPatient('Mike Robinson', "123 Fake Street", 30, 1),
  createPatient('Brandon Hunter', "123 Fake Street", 30, 1),
  createPatient('Jesse Ginnever', "123 Fake Street", 30, 1),
  createPatient('Billy Bob', "123 Fake Street", 30, 1),
  createPatient('Bobby Bill', "123 Fake Street", 30, 1),
  createPatient('Mike Robinson', "123 Fake Street", 30, 1),
  createPatient('Brandon Hunter', "123 Fake Street", 30, 1),
  createPatient('Jesse Ginnever', "123 Fake Street", 30, 1),
  createPatient('Billy Bob', "123 Fake Street", 30, 1),
  createPatient('Bobby Bill', "123 Fake Street", 30, 1),
];


class PatientList extends Component {
  state = {
    greetings: ['404 Greetings Not Found!'],
    greeting: '',
    spacing: '16'
  };

  componentDidMount() {
  }

  handleClick = (event, id) => {
    alert("Test!");
  };

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <div className="PatientList">
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
              Patient List
          </Typography>
          <Table className={classes.table}>
            <TableHead>
              <TableRow> 
                <TableCell>Patient</TableCell>
                <TableCell>Address</TableCell>
                <TableCell numeric>Age</TableCell>
                <TableCell numeric>Active Incidents</TableCell>
                <TableCell ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(n => {
                return (
                  <TableRow key={n.id} hover onClick={() => this.nextPath('/home/' + n.id) }>
                    <TableCell>{n.name}</TableCell>
                    <TableCell>{n.address}</TableCell>
                    <TableCell numeric>{n.age}</TableCell>
                    <TableCell numeric>{n.incidentCount}</TableCell>
                    <TableCell ></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(PatientList);