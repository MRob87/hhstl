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
import ContactCard from './ContactCard';
import IncidentHistoryTable from './IncidentHistoryTable';
import IncidentService from '../Services/IncidentService';

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
  });

  const data = IncidentService.getIncidentsById(3); 

  class IncidentHistory extends Component {
    state = {
      incidents: data,
      incident: '',
      spacing: '16'
    };
  
    componentDidMount() {
    }
  
    nextPath(path) {
      this.props.history.push(path);
    }
  
    render() {
      const { classes } = this.props;
      const { spacing } = this.state;
  
      return (
        <div className="IncidentHistory">
          <Paper className={classes.root} elevation={4}>
            <Typography variant="headline" component="h3">
                {this.state.incidents[0].data.name} - Incident History
            </Typography>
            <Grid container spacing={16} className={classes.root}>
                <Grid container justify="center" spacing={Number(spacing)}>
                    <Grid item sm={3}>
                        <ContactCard
                          patientId={this.props.match.params.id}
                        />
                    </Grid>
                    <Grid item sm={9}>
                        <IncidentHistoryTable 
                          tableData={this.state.incidents}
                          nextPath={this.nextPath.bind(this)}
                        />
                    </Grid>
                </Grid>
            </Grid>
          </Paper>
        </div>
      );
    }
  }
  export default withStyles(styles)(IncidentHistory);