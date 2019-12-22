import React from 'react';
import PropTypes from 'prop-types';
import { isImmutable } from 'immutable';
import { AutoSizer, List } from 'react-virtualized';

import Box from '@material-ui/core/Box';
import TablePagination from '@material-ui/core/TablePagination';

import Container from 'components/Container';
import Placeholder from 'components/Placeholder';

const CustomTable = ({
  data,
  loading,
  page,
  count,
  rowsPerPage,
  onChangePage,
  ...props
}) => {
  const noRowsRenderer = () => {
    if (loading) {
      return <Placeholder loading />;
    }

    return <Placeholder empty />;
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

            <List
              {...props}
              width={width}
              height={height}
              rowCount={isImmutable(data) ? data.size : data.length}
              noRowsRenderer={noRowsRenderer}
            />

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
