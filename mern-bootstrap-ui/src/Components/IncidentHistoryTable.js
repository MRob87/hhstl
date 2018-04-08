import React, { Component } from 'react';

import HelloService from '../Services/HelloService'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
    }),
    mainContent: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      marginLeft: 'auto',
      marginRight: 'auto',
    }),
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    formLabel: {
        color: 'black'
    },
    formInput: {
        color: 'black',
        fontSize: 'small',
        textAlign: 'center'
    },
    contactInfo: {
        backgroundColor: 'lightgrey'
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
    incidentHistoryHeading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        marginLeft: 8,
        marginTop: 20,
        textAlign: 'left'
    },
  });

  class IncidentHistoryTable extends Component {
    constructor(props) {
        super(props);
        this.nextPath = this.nextPath.bind(this);
    }

    state = {
      incident: '',
      spacing: '16'
    };
  
    componentDidMount() {
    }
  
    nextPath(path) {
        this.props.nextPath(path);
    }
  
    render() {
      const { classes } = this.props;
      const { spacing } = this.state;
  
      return (
        <div className="IncidentHistory">
            <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <Typography className={classes.incidentHistoryHeading} variant="title">Incident History</Typography>
                </TableRow>
            </TableHead>
            <TableHead>
                <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Date/Time</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {this.props.tableData.map(n => {
                return (
                    <TableRow key={n.incidentId} hover onClick={() => this.nextPath('/incident/'+n.incidentId) }>
                    <TableCell>{n.type}</TableCell>
                    <TableCell>{n.data.address}</TableCell>
                    <TableCell>{n.data.timestamp}</TableCell>
                    </TableRow>
                );
                })}
            </TableBody>
            </Table>
        </div>
      );
    }
  }
  export default withStyles(styles)(IncidentHistoryTable);