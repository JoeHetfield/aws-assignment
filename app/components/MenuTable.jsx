import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isImmutable } from 'immutable';
import { makeStyles } from '@material-ui/core/styles';
import { AutoSizer, Table, Column } from 'react-virtualized';

import { scrollBarWidth } from 'utils';

import Container from 'components/Container';
import Typography from 'components/Typography';
import Placeholder from 'components/Placeholder';

const useStyles = makeStyles(({
  palette,
  spacing,
  typography,
}) => ({
  row: {
    display: 'flex',
    fontSize: typography.pxToRem(12),
    alignItems: 'center',
    '&>div:first-child': {
      paddingLeft: spacing(1.5),
    },
    '&>div:last-child': {
      paddingRight: spacing(1.5),
    },
  },
  hovered: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: palette.action.hover,
    },
  },
  selected: {
    backgroundColor: palette.action.selected,
  },
  cell: {
    paddingLeft: spacing(1.5),
    paddingRight: spacing(1.5),
  },
  headerCell: {
    color: palette.text.secondary,
    paddingLeft: spacing(1.5),
    paddingRight: spacing(1.5),
  },
  headerLabel: {
    color: palette.text.secondary,
    fontWeight: 500,
  },
  numeric: {
    textAlign: 'right',
  },
  padForScrollBar: {
    paddingRight: `${scrollBarWidth}px !important`,
  },
}));

const CustomTable = ({
  data,
  loading,
  columns,
  selected,
  rowClassName,
  isAskDepth,
  ...props
}, ref) => {
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
      selected && selected(index) && classes.selected,
      rowClassName,
      (props.rowHeight * rowNumber) < height && classes.padForScrollBar,
    );
  };

  const getGridStyle = (height) => {
    if (!isAskDepth) {
      return {};
    }

    if ((props.rowHeight * data.length) < height) {
      return {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      };
    }

    return {};
  };

  return (
    <Container>

      <AutoSizer>

        {({ height, width }) => (

          <Table
            {...props}
            ref={ref}
            width={width}
            height={height}
            rowCount={isImmutable(data) ? data.size : data.length}
            rowGetter={rowGetter}
            rowClassName={rowClassGetter(height)}
            noRowsRenderer={noRowsRenderer}
            gridStyle={getGridStyle(height)}
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
                label={(
                  <Typography
                    variant="caption"
                    message={label}
                    className={classes.headerLabel}
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
  );
};

CustomTable.propTypes = {
  // data
  selected: PropTypes.func,
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  rowHeight: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowClassName: PropTypes.string.isRequired,
  isAskDepth: PropTypes.bool,
};

CustomTable.defaultProps = {
  selected: null,
  isAskDepth: false,
};

export default forwardRef(CustomTable);
