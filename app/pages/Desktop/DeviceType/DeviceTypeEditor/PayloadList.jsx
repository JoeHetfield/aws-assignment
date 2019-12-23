import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';

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

const PayloadList = ({
  payload,
  openEditor,
}) => {
  const classes = useStyles();

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

                  <Button
                    size="small"
                    label="Remove"
                    startIcon={<DeleteIcon />}
                  />

                  <Box width={16} />

                  <Button
                    size="small"
                    label="View Config"
                    startIcon={<InfoIcon />}
                  />

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
};

export default PayloadList;
