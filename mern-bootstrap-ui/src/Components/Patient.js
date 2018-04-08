import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import ContactCard from './ContactCard';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Alert from './Alert';
import ActivityService from '../Services/ActivityService';

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

let incidentId = 0;
function createIncidentAlert(type, datetime, address, patientNote, incidentStatus) {
  incidentId += 1;
  return { incidentId, type, datetime, address, patientNote, incidentStatus};
}

const incidents = [
  createIncidentAlert('Potential Overdose', "11:38PM April 7th 2018", '123 Overdose Street', 'N/A', 'In Progess'),
  createIncidentAlert('Ahead of Schedule', '5:38AM April 7th 2018', '123 Breakfast Street', 'Ate early and needed to take it with a full stomach', 'In Progress'),
];

class Patient extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    activityHistory: [],
    spacing: '16',
  };

  componentDidMount() {
    const activityHistory = ActivityService.getActivityByPatientId(this.props.match.params.id);
    
    this.setState({
      activityHistory: activityHistory
    });
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
                          {incidents.map(n => {
                            return (
                             <Alert 
                                incidentType={n.type} 
                                datetime={n.datetime}
                                address={n.address}
                                patientNote={n.patientNote}
                                incidentStatus={n.incidentStatus}
                                nextPath={this.nextPath.bind(this)}
                                />
                            );
                          })}
                        </Grid>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
                <Grid item sm={3}>
                    <ContactCard 
                      patientId={this.props.match.params.id}
                      nextPath={this.nextPath.bind(this)} 
                    />
                </Grid>
                <Grid item sm={9}>
                    <Paper className={classes.scheduleTable} elevation={4}>
                      <Table className={classes.table}>
                      <TableHead>
                          <TableRow>
                          <Typography className={classes.activityHistoryHeading} variant="title">Activity History</Typography>
                          </TableRow>
                        </TableHead>
                        <TableHead>
                          <TableRow>
                            <TableCell>Medicine</TableCell>
                            <TableCell>Ingestion Time</TableCell>
                            <TableCell>Scheduled Time</TableCell>
                            <TableCell>Location</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {this.state.activityHistory.map(n => {
                            return (
                              <TableRow hover={(n.type === 'Missed' || n.type === 'Unscheduled' ? false : true)} 
                                        key={n.id} 
                                        className={(n.type === 'Scheduled' ? '' : (n.type === 'Missed' ? classes.missedRow : classes.unscheduledRow))}>
                                <TableCell>{n.medicineType}</TableCell>
                                <TableCell>{n.ingestionDatetime}</TableCell>
                                <TableCell>{n.scheduledDatetime}</TableCell>
                                <TableCell>{n.location}</TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Patient);