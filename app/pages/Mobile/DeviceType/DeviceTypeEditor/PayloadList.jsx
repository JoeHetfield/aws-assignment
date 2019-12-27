import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedTime, FormattedMessage } from 'react-intl';
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

import { DeviceType as msgs, Common as commonMsgs } from 'messages';

import PayloadDetail from './PayloadDetail';

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

  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedPayload, setSelectedPayload] = useState({});

  const openDetailDialog = (payload) => {
    setSelectedPayload(payload);
    setDetailOpen(true);
  };

  const closeDetailDialog = () => {
    setDetailOpen(false);
  };

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
            message={msgs.nonu.messagePayload}
          />

          <Typography
            color="textSecondary"
            variant="caption"
            message={msgs.phrase.hintMessagePayload}
          />
        </Box>

        <Button
          color="secondary"
          label={msgs.phrase.addAttribute}
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={openEditor}
          className="btnAddAttribute"
        />
      </Box>

      <TableContainer className={classes.table}>

        <Table>

          <TableHead>
            <TableRow>

              <TableCell>
                <FormattedMessage {...msgs.nonu.messageAttribute} />
              </TableCell>

              <TableCell>
                <FormattedMessage {...msgs.nonu.dataType} />
              </TableCell>

              <TableCell>
                <FormattedMessage {...msgs.nonu.staticValue} />
              </TableCell>

              <TableCell align="right">
                <FormattedMessage {...msgs.nonu.actions} />
              </TableCell>

            </TableRow>
          </TableHead>

          <TableBody>
            {payload.map((row, index) => (
              <TableRow key={row.name}>

                <TableCell component="th" scope="row" id={`labelAttributeName-${index}`}>
                  {row.name}
                </TableCell>

                <TableCell id={`labelAttributeType-${index}`}>
                  {row.type.toUpperCase()}
                </TableCell>

                <TableCell id={`labelAttributeStatic-${index}`}>
                  {row.static && 'TRUE'}
                </TableCell>

                <TableCell
                  align="right"
                  className={classes.actionCell}
                >

                  <ThemeProvider theme={theme}>
                    <Button
                      id={`btnRemove-${index}`}
                      size="small"
                      label={commonMsgs.verb.remove}
                      color="primary"
                      startIcon={<DeleteIcon />}
                      onClick={_deletePayload(row._id_)}
                    />
                  </ThemeProvider>

                  <Box width={16} />

                  <Button
                    id={`btnViewConfig-${index}`}
                    color="secondary"
                    size="small"
                    label={msgs.phrase.viewConfig}
                    startIcon={<InfoIcon />}
                    onClick={() => openDetailDialog(row)}
                  />

                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>

      </TableContainer>

      <PayloadDetail
        open={detailOpen}
        closeDialog={closeDetailDialog}
        selectedPayload={selectedPayload}
      />
    </>
  );
};

PayloadList.propTypes = {
  payload: PropTypes.object.isRequired,
  openEditor: PropTypes.func.isRequired,
  deletePayload: PropTypes.func.isRequired,
};

export default PayloadList;
