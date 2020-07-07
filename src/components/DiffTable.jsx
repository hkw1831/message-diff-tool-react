import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DiffTable({diff}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Tag</TableCell>
            <TableCell align="left">Value - Left</TableCell>
            <TableCell align="left">Value - Right</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          Object.keys(diff).map((key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">{key}</TableCell>
              <TableCell align="left">{diff[key].left}</TableCell>
              <TableCell align="left">{diff[key].right}</TableCell>
          </TableRow>
          ))
        }
        </TableBody>
      </Table>
    </TableContainer>
  );
}