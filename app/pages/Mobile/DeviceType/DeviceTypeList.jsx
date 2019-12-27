/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

import List from 'components/List';

import { DeviceType } from 'actions';

const useStyles = makeStyles(({ palette }) => ({
  item: {
    width: '100%',
    height: '100%',
    borderBottom: `1px solid ${palette.divider}`,
  },
}));

const DeviceTypeList = () => {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const page = 0;

  const refresh = () => {
    setData([]);
    setLoading(true);
    DeviceType
      .load()
      .then(setData)
      .then(() => setLoading(false));
  };

  useEffect(refresh, []);

  const rowRenderer = ({
    index,
    key,
    style,
  }) => {
    const device = data[index];

    return (
      <ListItem
        key={key}
        style={style}
        className={classes.item}
      >
        <ListItemAvatar>
          <Avatar>
            <DeveloperModeIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText
          primary={device.name}
          secondary={device.typeId}
        />

      </ListItem>
    );
  };

  return (
    <List
      data={data}
      page={page}
      count={data.length}
      loading={loading}
      rowsPerPage={20}
      rowHeight={72}
      rowRenderer={rowRenderer}
    />
  );
};

export default DeviceTypeList;
