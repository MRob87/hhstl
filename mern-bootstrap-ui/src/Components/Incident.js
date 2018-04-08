import React, { Component } from 'react';

import HelloService from '../Services/HelloService'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import ContactCard from './ContactCard';
import Alert from './Alert';
import IncidentService from '../Services/IncidentService';
import IncidentHistoryTable from './IncidentHistoryTable';
import MessageService from '../Services/MessageService';
import AlertService from '../Services/AlertService'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    width: '40%',
    marginTop: theme.spacing.unit * 2,
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
  mainContent: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 2,
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
    width: 150,
    float: 'right'
  },
  incidentButton: {
    margin: theme.spacing.unit,
    width: '20%',
    float: 'right'
  },
  leftPane: {
    height: 140,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 1,
    textAlign: 'center'
  },
  rightPane: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 1,
    textAlign: 'left'
  },
  incidentHeader: {
    padding: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '8px 24px 24px',
    height: 190
  },
  incidentTable: {
    height: 275,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    verticalAlign: 'middle',
    textAlign: 'center'
  },
  incidentNotesSection: {
    height: 120,
    padding: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    verticalAlign: 'middle',
    textAlign: 'center'
  },
  messageHistoryHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    marginLeft: 8,
    marginTop: 20,
    textAlign: 'left'
},
});

const incidentHistory = IncidentService.getIncidentsById(3);

class Incident extends Component {
  state = {
    message: 'Contact Made: Forgot Dose',
    messages: [],
    spacing: '16',
    status: 'In Progress'
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.setState({
      messages: MessageService.getMessagesByPatientId()
    });
  }

  createMessage() {
    MessageService.createMessage(this.state.message, "Anna Bronner");
    const newMessages = MessageService.getMessagesByPatientId();
    this.setState({
      messages: newMessages
    });
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  resolveIncident() {
    this.setState({
      status: 'Completed'
    });
    AlertService.updateActivityById();
  }
  
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <div className="Incident">
        <Grid container spacing={16} className={classes.mainContent}>
          <Grid item xs={12} sm={12} spacing={16} margin="normal">
            <Paper margin="normal" className={classes.incidentHeader}>
              <Alert 
                incidentType="Potential Overdose"
                datetime="11:38PM April 7th 2018"
                address="123 Fake Street"
                patientNote="N/A"
                incidentStatus={this.state.status}
                />
                <Button variant="raised" color="primary" className={classes.incidentButton} onClick={this.resolveIncident.bind(this)}>
                  Resolve
                </Button>
                <Button variant="raised" color="primary" className={classes.incidentButton} onClick={() => this.nextPath('/patient/' + 6) }>
                  Back
                </Button>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.incidentNotesSection}>
            <TextField
              id="new-incident-note"
              label="Enter Incident Note"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder={this.state.message}
              onChange={(event) => this.updateMessage(event)}
              fullWidth
              margin="normal"
            />
            <Button variant="raised" color="primary" className={classes.incidentButton} onClick={this.createMessage.bind(this)}>
              Submit Message
            </Button>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
              <Grid item sm={3} margin="normal">
                  <ContactCard 
                    patientId={this.props.match.params.id}
                    nextPath={this.nextPath.bind(this)} 
                  />
              </Grid>
              <Grid item sm={5} margin="normal">
                <Paper className={classes.rightPane}>
                <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                          <Typography className={classes.messageHistoryHeading} variant="title">Message History</Typography>
                      </TableRow>
                    </TableHead>
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Contact</TableCell>
                        <TableCell>Message</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.messages.map(n => {
                        return (
                          <TableRow key={n.id}>
                            <TableCell>{n.timestamp}</TableCell>
                            <TableCell>{n.creator}</TableCell>
                            <TableCell>{n.message}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </Paper>
              </Grid>
              <Grid item sm={4} margin="normal">
                <Paper className={classes.rightPane}>
                <IncidentHistoryTable 
                  tableData={incidentHistory}
                  nextPath={this.nextPath.bind(this)}
                />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </div>
    );
  }
}
export default withStyles(styles)(Incident);