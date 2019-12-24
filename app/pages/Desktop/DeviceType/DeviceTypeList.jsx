/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FormattedTime } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import RefreshIcon from '@material-ui/icons/Refresh';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

import Table from 'components/Table';
import Button from 'components/Button';
import Typography from 'components/Typography';

import { DeviceType } from 'actions';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const DeviceTypeList = () => {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const page = 0;

  const refresh = () => {
    setLoading(true);
    DeviceType
      .load()
      .then(setData)
      .then(() => setLoading(false));
  };

  useEffect(refresh, []);

  const iconCellRenderer = () => (
    <Avatar>
      <DeveloperModeIcon />
    </Avatar>
  );

  const chipCellRenderer = ({ cellData, rowIndex }) => (
    <Chip
      id={`labelVisibility-${rowIndex}`}
      label={cellData}
      color={cellData === 'public' ? 'secondary' : 'default'}
    />
  );

  const textCellRenderer = ({ rowData, cellData, rowIndex }) => (
    <Box
      display="flex"
      flexDirection="column"
    >

      <Typography
        id={`labelName-${rowIndex}`}
        message={cellData}
      />

      <Typography
        id={`labelTypeId-${rowIndex}`}
        variant="caption"
        color="textSecondary"
        message={rowData.typeId}
      />

    </Box>
  );

  const dateCellRenderer = ({ cellData }) => (
    <Typography
      message={(
        <FormattedTime
          hour12={false}
          year="numeric"
          month="numeric"
          day="numeric"
          hour="numeric"
          minute="numeric"
          second="numeric"
          value={cellData}
        />
      )}
    />
  );

  const operationCellRenderer = ({ cellData }) => (
    <Button
      size="small"
      label="Edit"
      color="secondary"
      startIcon={<EditIcon />}
      to={`/deviceType/${cellData}`}
      component={Link}
    />
  );

  return (
    <Paper className={classes.root}>

      <Toolbar>

        <Typography
          variant="h6"
          message={`Device Types (${data.length})`}
        />

        <Box flex={1} />

        <Button
          color="secondary"
          label="Add Device Type"
          startIcon={<AddIcon />}
          to="/deviceType/new"
          component={Link}
          className="btnAddDeviceType"
        />

        <Box width={24} />

        <Button
          label="Refresh"
          color="secondary"
          startIcon={<RefreshIcon />}
          onClick={() => setLoading(true)}
        />

      </Toolbar>

      <Table
        data={data}
        page={page}
        count={data.length}
        loading={loading}
        rowsPerPage={20}
        // onChangePage={(event, index) => setPage(index + 1)}
        rowHeight={72}
        headerHeight={36}
        columns={[{
          dataKey: 'icon',
          width: 10,
          flexGrow: 1,
          cellRenderer: iconCellRenderer,
        }, {
          label: 'Device Type',
          dataKey: 'name',
          width: 10,
          flexGrow: 1,
          cellRenderer: textCellRenderer,
        }, {
          label: 'Visibility',
          dataKey: 'visibility',
          width: 10,
          flexGrow: 1,
          cellRenderer: chipCellRenderer,
        }, {
          label: 'Created At',
          dataKey: 'createdAt',
          width: 10,
          flexGrow: 1,
          numeric: true,
          cellRenderer: dateCellRenderer,
        }, {
          label: 'Last Updated At',
          dataKey: 'updatedAt',
          width: 10,
          flexGrow: 1,
          numeric: true,
          cellRenderer: dateCellRenderer,
        }, {
          dataKey: 'typeId',
          width: 10,
          flexGrow: 1,
          numeric: true,
          cellRenderer: operationCellRenderer,
        }]}
      />

    </Paper>
  );
};

export default DeviceTypeList;
