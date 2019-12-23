import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isImmutable } from 'immutable';
import { makeStyles } from '@material-ui/core/styles';
import { AutoSizer, Table, Column } from 'react-virtualized';

import Box from '@material-ui/core/Box';
import TablePagination from '@material-ui/core/TablePagination';

import { scrollBarWidth } from 'utils';

import Container from 'components/Container';
import Typography from 'components/Typography';
import Placeholder from 'components/Placeholder';

const useStyles = makeStyles(({
  palette,
  spacing,
  typography,
  breakpoints,
}) => ({
  row: {
    display: 'flex',
    fontSize: typography.pxToRem(12),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: palette.divider,
    '&>div:first-child': {
      paddingLeft: spacing(3),
    },
    '&>div:last-child': {
      paddingRight: spacing(3),
    },
  },
  hovered: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: palette.action.hover,
    },
  },
  cell: {
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
  },
  headerCell: {
    // color: palette.text.secondary,
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
  },
  numeric: {
    textAlign: 'right',
  },
  // on mobile
  [breakpoints.down('md')]: {
    row: {
      '&>div:first-child': {
        paddingLeft: spacing(5),
      },
      '&>div:last-child': {
        paddingRight: spacing(5),
      },
    },
    cell: {
      paddingLeft: spacing(5),
      paddingRight: spacing(5),
    },
    headerCell: {
      paddingLeft: spacing(5),
      paddingRight: spacing(5),
    },
  },
  padForScrollBar: {
    paddingRight: `${scrollBarWidth}px !important`,
  },
}));

const CustomTable = ({
  data,
  loading,
  columns,
  page,
  count,
  rowsPerPage,
  onChangePage,
  ...props
}) => {
  const classes = useStyles();

  const noRowsRenderer = () => {
    if (loading) {
      return <Placeholder loading />;
    }

    return <Placeholder empty />;
  };

  const rowGetter = ({ index }) => isImmutable(data) ? data.get(index) : data[index];

  const rowClassGetter = (height) => ({ index }) => {
    const rowNumber = isImmutable(data) ? data.size : data.length;

    if (index === -1) {
      return classNames(
        classes.row,
        (props.rowHeight * rowNumber) < height && classes.padForScrollBar,
      );
    }

    return classNames(
      classes.row,
      classes.hovered,
      (props.rowHeight * rowNumber) < height && classes.padForScrollBar,
    );
  };

  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
    >

      <Container>

        <AutoSizer>

          {({ height, width }) => (

            <Table
              {...props}
              width={width}
              height={height}
              rowCount={isImmutable(data) ? data.size : data.length}
              rowGetter={rowGetter}
              rowClassName={rowClassGetter(height)}
              noRowsRenderer={noRowsRenderer}
            >
              {columns.map(({
                label,
                numeric,
                dataKey,
                ...restConfig
              }) => (
                <Column
                  {...restConfig}
                  key={dataKey}
                  dataKey={dataKey}
                  label={label && (
                    <Typography
                      variant="subtitle2"
                      message={label}
                    />
                  )}
                  className={classNames(classes.cell, numeric && classes.numeric)}
                  headerClassName={classNames(classes.headerCell, numeric && classes.numeric)}
                />
              ))}
            </Table>

          )}

        </AutoSizer>

      </Container>

      {Boolean(count) && (
        <TablePagination
          page={page}
          count={count}
          component="div"
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[rowsPerPage]}
          onChangePage={onChangePage}
        />
      )}

    </Box>
  );
};

CustomTable.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  loading: PropTypes.bool.isRequired,
  rowHeight: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  // pagination
  page: PropTypes.number,
  count: PropTypes.number,
  rowsPerPage: PropTypes.number,
  onChangePage: PropTypes.func,
};

CustomTable.defaultProps = {
  page: null,
  count: null,
  rowsPerPage: null,
  onChangePage: null,
};

export default CustomTable;
