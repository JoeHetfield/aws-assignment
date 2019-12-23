import React from 'react';
import { Field } from 'formik';

import { TextField } from 'components/Form';

const FloatTemplate = () => (
  <>

    <Field
      label="Float precision"
      required
      fullWidth
      name="precision"
      type="number"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="The precision of the float value."
    />

    <Field
      label="Integer minimum value"
      required
      fullWidth
      name="imin"
      type="number"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="Minimum value for the integer precision."
    />

    <Field
      label="Integer maximum value"
      required
      fullWidth
      name="imax"
      type="number"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="Maximum value for the integer precision."
    />

    <Field
      label="Decimal precision minimum value"
      required
      fullWidth
      name="dmin"
      type="number"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="Minimum value for the decimal precision."
    />

    <Field
      label="Decimal precision maximum value"
      required
      fullWidth
      name="dmax"
      type="number"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="Maximum value for the decimal precision."
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

export default FloatTemplate;
