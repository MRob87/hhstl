import React, { Component } from 'react';

import HelloService from '../Services/HelloService'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        width: '90%',
        marginTop: theme.spacing.unit * 3,
        marginLeft: 'auto',
        marginRight: 'auto',
      }),
      contactInfo: {
        height: 140,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      alertInfo: {
        height: 60,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      scheduleTable: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      control: {
        padding: theme.spacing.unit * 2,
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
      alertHeading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        color: 'white'
      },
      activityHistoryHeading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        marginLeft: 20,
        marginTop: 20,
      },
      alertPanel: {
        backgroundColor: 'crimson',
      },
      incidentType: {
        margin: theme.spacing.unit,
        marginRight: 16,
      },
      incidentDateTime: {
        margin: theme.spacing.unit,
        marginRight: 16,
      },
      incidentNote: {
        margin: theme.spacing.unit,
        marginRight: 16,
      },
      incidentLocation: {
        margin: theme.spacing.unit,
        marginRight: 16,
      },
      button: {
        margin: theme.spacing.unit,
        float: 'right'
      },
      unscheduledRow: {
        backgroundColor: 'crimson',
      },
      missedRow: {
        backgroundColor: '#f4cb42',
      },
      title: {
        flex: '0 0 auto',
      },
});

class Incident extends Component {
  constructor(props) {
      super(props);
      this.nextPath = this.nextPath.bind(this);
  }
  state = {
   
  };

  componentDidMount() {
  }

  handleChange(string) {
  }
  
  nextPath(path) {
    this.props.nextPath(path);
  }

  render() {
      
    const { classes } = this.props;

    return (
      <div className="alert">
         <Grid item xs={12}>
            <Grid item xs={12}>
                <Typography className={classes.heading}>Incident</Typography>
                <FormControl className={classes.incidentType}>
                    <InputLabel>Incident Type</InputLabel>
                    <Input id="incident-type" value={this.props.incidentType} disabled/>
                </FormControl>
                <FormControl className={classes.incidentDateTime}>
                    <InputLabel>Incident Date/Time</InputLabel>
                    <Input id="incident-time" value={this.props.datetime} disabled/>
                </FormControl>
                <FormControl className={classes.incidentLocation}>
                    <InputLabel>Incident Location</InputLabel>
                    <Input id="incident-Location" value={this.props.address} disabled/>
                </FormControl>
                <FormControl className={classes.incidentType}>
                    <InputLabel>Incident Status</InputLabel>
                    <Input id="incident-status" value={this.props.incidentStatus} disabled/>
                </FormControl>
                {this.props.nextPath ?
                    <Button variant="raised" className={classes.button} color="secondary" onClick={() => this.nextPath('/incident/' + 6) }>
                        View Incident
                    </Button>
                : ''}
            </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth className={classes.incidentNote}>
                        <InputLabel>Patient Note</InputLabel>
                        <Input id="incident-note" value={this.props.patientNote} disabled/>
                    </FormControl>
                </Grid>
            </Grid>
            
      </div>
    );
  }
}
export default withStyles(styles)(Incident);