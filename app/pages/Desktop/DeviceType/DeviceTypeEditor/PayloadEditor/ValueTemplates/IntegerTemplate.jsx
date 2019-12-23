import React from 'react';
import { Field } from 'formik';

import { TextField } from 'components/Form';

const IntegerTemplate = () => (
  <>

    <Field
      label="Minimum value"
      required
      fullWidth
      name="min"
      type="number"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="The minimum value of the random integer generated."
    />

    <Field
      label="Maximum value"
      required
      fullWidth
      name="max"
      type="number"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="The maximum value of the random integer generated."
    />

    <Field
      label="Default Value (Optional)"
      fullWidth
      name="default"
      type="number"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="The default value will consistently be the value sent with this attribute."
    />

  </>
);

export default IntegerTemplate;
