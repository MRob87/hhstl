import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import PatientListService from '../Services/PatientListService';

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
  endageredPatientRow: {
    backgroundColor: 'crimson',
  }
});

const data = PatientListService.getAllPatients();


class PatientList extends Component {
  state = {
  };

  componentDidMount() {
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    const { classes } = this.props;

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
              {data.sort(function(a, b) {
                return a.incidentCount < b.incidentCount;
              }).map(n => {
                return (
                  <TableRow key={n.id} hover onClick={() => this.nextPath('/patient/' + n.id) }
                            className={(n.incidentCount > 0 ? classes.endageredPatientRow : '')}
                            hover={(n.incidentCount > 0 ? false : true)} >
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