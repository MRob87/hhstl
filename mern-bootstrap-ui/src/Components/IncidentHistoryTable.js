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

let id = 0;
function createIncident(type, ptId, name, geo, timestamp, notes) {
  id += 1;
  let incidentId = ptId + "-" + id;
  let address = geo;
  return {incidentId, type, data:{ptId, name, timestamp, address, notes}};
}

const data = [
    createIncident("Overdose", 0, 'Brandon Hunter', "123 Fake Street", "04/07/2018 - 7:29pm", ["Pt took 4x prescribed dose, did not state reason. -HS,MSW"]),
    createIncident("Tx Violation", 0, 'Brandon Hunter', "987 Ekaf Circle", "04/04/2018 - 2:27pm", ["Pt stated accidently took double dose having forgot about taking the first. -CG,CNA"]),
    createIncident("Tx Violation", 0, 'Brandon Hunter', "123 Fake Street", "04/01/2018 - 4:29am", ["Pt took 4x prescribed dose, did not state reason. -HS,MSW"]),
    createIncident("Rx Qty Unaccounted For", 0, 'Brandon Hunter', "123 Fake Street", "03/25/2018 - 3:26pm", ["Pt stated taking per Tx plan but records show 10 pills unaccounted for. -MR,MD"]),
    createIncident("Lapse in Active Patch", 0, 'Brandon Hunter', "123 Fake Street", "03/22/2018 - 8:25am", ["Pt patch came off while in shower, was replaced by patient once dry. -HS,MSW"]),
    createIncident("Overdose", 0, 'Brandon Hunter', "456 Faux Way", "03/17/2018 - 3:31pm", ["Pt took 4x prescribed dose, did not state reason. -HS,MSW"]),
    createIncident("Tx Violation", 0, 'Brandon Hunter', "123 Fake Street", "03/07/2018 - 7:29am", ["Early dose, pt stated feeling 'unbearable' pain. -BL,RN"]),
  ];

  class IncidentHistoryTable extends Component {
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
            <Table className={classes.table}>
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
                    <TableRow key={n.incidentId} hover onClick={() => this.nextPath('/patients/'+n.data.ptId+'/incident/'+n.incidentId) }>
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