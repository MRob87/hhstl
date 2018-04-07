import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

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
    height: 140,
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
});

let id = 0;
function createIncidentAlert(name, address, age, incidentCount) {
  id += 1;
  return { id, name, address, age, incidentCount };
}

const data = [
  createIncidentAlert('Potential Overdose', "11:38PM April 7th 2018", '123 Overdose Street', 'N/A'),
  createIncidentAlert('Ahead of Schedule', '5:38AM April 7th 2018', '123 Breakfast Street', 1),
];

class IncidentView extends Component {
  state = {
    greetings: ['404 Greetings Not Found!'],
    greeting: '',
    spacing: '16'
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  nextPath(path) {
    this.props.history.push(path);
  }
  

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <div className="IncidentView">
        <Grid container spacing={16} className={classes.root}>
            <Grid container justify="center" spacing={Number(spacing)}>
                <Grid item sm={12}>
                    <ExpansionPanel>
                      <ExpansionPanelSummary className={classes.alertPanel} expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.alertHeading}>2 Alerts!</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Grid item xs={12}>
                          <Grid item xs={12}>
                            <Typography className={classes.heading}>Incident</Typography>
                            <FormControl className={classes.incidentType}>
                              <InputLabel>Incident Type</InputLabel>
                              <Input id="incident-type" value='Potential Overdose' disabled/>
                            </FormControl>
                            <FormControl className={classes.incidentDateTime}>
                              <InputLabel>Incident Date/Time</InputLabel>
                              <Input id="incident-time" value='11:38PM April 7th 2018' disabled/>
                            </FormControl>
                            <FormControl className={classes.incidentLocation}>
                              <InputLabel>Incident Location</InputLabel>
                              <Input id="incident-Location" value='123 Overdose Street' disabled/>
                            </FormControl>
                            <Button variant="raised" className={classes.button} color="secondary" onClick={() => this.nextPath('/incident/' + 3) }>
                              View Incident
                            </Button>
                          </Grid>
                          <Grid item xs={12}>
                            <FormControl fullWidth className={classes.incidentNote}>
                              <InputLabel>Patient Note</InputLabel>
                              <Input id="incident-note" value='N/A' disabled/>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography className={classes.heading}>Incident</Typography>
                            <FormControl className={classes.incidentType}>
                              <InputLabel>Incident Type</InputLabel>
                              <Input id="incident-type" value='Ahead of Schedule' disabled/>
                            </FormControl>
                            <FormControl className={classes.incidentDateTime}>
                              <InputLabel>Incident Date/Time</InputLabel>
                              <Input id="incident-time" value='5:38AM April 7th 2018' disabled/>
                            </FormControl>
                            <FormControl className={classes.incidentLocation}>
                              <InputLabel>Incident Location</InputLabel>
                              <Input id="incident-Location" value='123 Breakfast Street' disabled/>
                            </FormControl>
                            <Button variant="raised" className={classes.button} color="secondary" onClick={() => this.nextPath('/incident/' + 3) }>
                              View Incident
                            </Button>
                          </Grid>
                          <Grid item xs={12}>
                            <FormControl fullWidth className={classes.incidentNote}>
                              <InputLabel>Patient Note</InputLabel>
                              <Input id="incident-note" value='Ate early and needed to take my pills with a full stomach' disabled/>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
                <Grid item sm={4}>
                    <Paper className={classes.contactInfo} elevation={4}/>
                </Grid>
                <Grid item sm={8}>
                    <Paper className={classes.scheduleTable} elevation={4}/>
                </Grid>
            </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(IncidentView);