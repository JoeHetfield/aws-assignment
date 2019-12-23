import React from 'react';
import { Field } from 'formik';

import { TextField, SelectField } from 'components/Form';

const PickOneTemplate = () => (
  <>

    <Field
      label="Array"
      required
      fullWidth
      name="arr"
      type="number"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="The array of values from which one value is randomly picked. [comma separated values]"
    />

    <Field
      label="Static"
      required
      fullWidth
      name="static"
      margin="normal"
      variant="outlined"
      component={SelectField}
      options={[
        { label: 'true', value: true },
        { label: 'false', value: false },
      ]}
      helperText="Is the data value generated only once per simulation?"
    />

  </>
);

export default PickOneTemplate;
