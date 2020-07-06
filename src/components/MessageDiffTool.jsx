import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DiffTable from './DiffTable'
import { useDispatch, useSelector } from 'react-redux'
import { updateLeftMessage, updateRightMessage } from '..//actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function MessageDiffTool() {
  const dispatch = useDispatch()
    return (
      <div className={useStyles.root}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
              Message
          </Grid>
          <Grid item xs={10}>
          </Grid>
          <Grid item xs={6}>
              <TextField id="standard-basic" label="Message 1" variant="outlined" multiline fullWidth onChange={(e) => dispatch(updateLeftMessage(e.target.value))}/>
          </Grid>
          <Grid item xs={6}>
              <TextField id="standard-basic" label="Message 2" variant="outlined" multiline fullWidth onChange={(e) => dispatch(updateRightMessage(e.target.value))}/>
          </Grid>
          <Grid item xs={12}>
              <DiffTable />
          </Grid>
        </Grid>

        Left: {useSelector(state => state.value.left)}
        <br/>
        Right: {useSelector(state => state.value.right)}
      </div>
    );
    }

export default MessageDiffTool;