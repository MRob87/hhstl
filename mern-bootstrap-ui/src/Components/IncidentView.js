import React, { Component } from 'react';

import HelloService from '../Services/HelloService'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    width: '40%',
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
  leftPane: {
    height: 140,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  rightPane: {
    height: 140,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
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

class IncidentView extends Component {
  state = {
    greetings: ['404 Greetings Not Found!'],
    greeting: '',
    spacing: '16'
  };

  componentDidMount() {
    this.getAllGreetings();
  }

  getAllGreetings() {
    HelloService.getGreeting()
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          greetings: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  postGreetingAndReset() {
    HelloService.postGreeting(this.state.greeting).then((response) => response.json())
      .then((responseJson) => {
        this.getAllGreetings()
      })
      .catch((error) => {
        console.error(error);
      });
  }

  clearGreetingAndReset() {
    HelloService.deleteGreetings().then((responseJson) => {
      this.getAllGreetings()
    })
    .catch((error) => {
      console.error(error);
    });
  }

  deleteGreetingAndReset(greetingId) {
    HelloService.deleteGreeting(greetingId).then((responseJson) => {
      this.getAllGreetings()
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <div className="IncidentView">
        <Grid container spacing={16} className={classes.mainContent}>
            <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                <Grid item sm={2}>
                    <Paper className={classes.leftPane} />
                </Grid>
                <Grid item sm={6}>
                    <Paper className={classes.alertTable} />
                </Grid>
                <Grid item sm={2}>
                    <Paper className={classes.rightPane} />
                </Grid>
            </Grid>
            </Grid>
        </Grid>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
              Enter Schedule!
            </Typography>
          <Grid container spacing={24}>
            <Grid item sm={12}>
              <TextField
                id="greeting-input"
                label="Greeting"
                placeholder="Hello, Ladie!"
                className={classes.textField}
                margin="normal"
                value={this.state.greeting}
                onChange={(event) => this.setState({greeting: event.target.value})}
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <Button variant="raised" color="primary" className={classes.button} onClick={(e) => HelloService.postGreeting(this.state.greeting)}>
              Submit
              </Button>
            </Grid>
              <Grid item sm={12} md={4}>
              <Button variant="raised" color="primary" className={classes.button} onClick={this.postGreetingAndReset.bind(this)}>
              Submit and Reset
              </Button>
            </Grid>
            <Grid item sm={12} md={4}>
              <Button variant="raised" color="secondary" className={classes.button} onClick={this.clearGreetingAndReset.bind(this)}>
              Clear and Reset
              </Button> 
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.root} elevation={4}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Greeting</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.greetings.map(n => {
                return (
                  <TableRow key={n._id}>
                    <TableCell>{n.text}</TableCell>
                    <TableCell>
                      <Button variant="raised" color="secondary" className={classes.deleteButton} onClick={(e) => this.deleteGreetingAndReset(n._id)}>
                        Delete
                      </Button>
                    </TableCell>
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
export default withStyles(styles)(IncidentView);