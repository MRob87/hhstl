import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    backgroundColor: 'lightgrey',
    height: 352,
  },
  media: {
    height: 200,
  },
  contactLine: {
    margin: 16,
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
  }
};

class ContactCard extends Component {
  constructor(props) {
    super(props);
    this.nextPath = this.nextPath.bind(this);
  }
  state = {};
  propTypes = {
    classes: PropTypes.object.isRequired,
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
      <div>
        <Card className={classes.card}>
          <CardContent >
            <Typography gutterBottom variant="headline" component="h2">
              Jesse Ginnever
            </Typography>
            <Typography component="p" className={classes.contactLine}>
              (666) 666-6666
            </Typography>
            <Typography component="p" className={classes.contactLine}>
              JesseGinnever@AOLHotmail.com
            </Typography>
            <Typography component="p" className={classes.contactLine}>
              123 Overdose St. O'fallon, MO
            </Typography>
            <Typography component="p" className={classes.contactLine}>
              United States
            </Typography>
          </CardContent>
          <CardActions>
          {this.props.nextPath ?
            <Button className={classes.button} 
                    variant="raised" color="secondary"
                    onClick={() => this.nextPath('/patients/'+1+'/incidents')}>
                    View Incident History
            </Button>
          : ''}
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(ContactCard);