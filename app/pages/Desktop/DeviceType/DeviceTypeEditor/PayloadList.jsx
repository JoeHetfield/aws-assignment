import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import reject from 'ramda/es/reject';

import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';

import pink from '@material-ui/core/colors/pink';

import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';

import Button from 'components/Button';
import Typography from 'components/Typography';

const useStyles = makeStyles(({ spacing }) => ({
  table: {
    marginBottom: spacing(4),
  },
  actionCell: {
    display: 'flex',
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: pink,
  },
  typography: {
    fontFamily: 'Roboto Condensed,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,PingFang SC,Microsoft Yahei,Arial,sans-serif',
  },
});

const PayloadList = ({
  payload,
  openEditor,
  deletePayload,
}) => {
  const classes = useStyles();

  const _deletePayload = (id) => () => {
    const findById = (item) => item._id_ === id;
    deletePayload('spec.payload', reject(findById, payload));
  };

  return (
    <>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          my={2}
          display="flex"
          flexDirection="column"
        >
          <Typography
            message="Message Payload"
          />

          <Typography
            color="textSecondary"
            variant="caption"
            message="Define the message payload that will be simulated for the device."
          />
        </Box>

        <Button
          color="secondary"
          label="Add Attribute"
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={openEditor}
        />
      </Box>

      <TableContainer className={classes.table}>

        <Table>

          <TableHead>
            <TableRow>
              <TableCell>Message Attribute</TableCell>
              <TableCell>Data Type</TableCell>
              <TableCell>Static Value</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {payload.map((row) => (
              <TableRow key={row.name}>

                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>

                <TableCell>
                  {row.type.toUpperCase()}
                </TableCell>

                <TableCell>
                  {row.static && 'TRUE'}
                </TableCell>

                <TableCell
                  align="right"
                  className={classes.actionCell}
                >

                  <ThemeProvider theme={theme}>
                    <Button
                      size="small"
                      label="Remove"
                      color="primary"
                      startIcon={<DeleteIcon />}
                      onClick={_deletePayload(row._id_)}
                    />
                  </ThemeProvider>

                  <Box width={16} />

                  { row.type === 'object' ? (
                    <Button
                      size="small"
                      label="Add Attribute"
                      startIcon={<AddIcon />}
                      onClick={openEditor}
                    />
                  ) : (
                    <Button
                      color="secondary"
                      size="small"
                      label="View Config"
                      startIcon={<InfoIcon />}
                    />
                  )}

                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>

      </TableContainer>
    </>
  );
};

PayloadList.propTypes = {
  payload: PropTypes.object.isRequired,
  openEditor: PropTypes.func.isRequired,
  deletePayload: PropTypes.func.isRequired,
};

export default PayloadList;
