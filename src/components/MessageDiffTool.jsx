import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DiffTable from './DiffTable'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function MessageDiffTool() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
            Message
        </Grid>
        <Grid item xs={10}>
        </Grid>
        <Grid item xs={6}>
            <TextField id="standard-basic" label="Message 1" variant="outlined" multiline fullWidth/>
        </Grid>
        <Grid item xs={6}>
            <TextField id="standard-basic" label="Message 2" variant="outlined" multiline fullWidth/>
        </Grid>
        <Grid item xs={12}>
            <DiffTable />
        </Grid>
      </Grid>
    </div>
  );
}