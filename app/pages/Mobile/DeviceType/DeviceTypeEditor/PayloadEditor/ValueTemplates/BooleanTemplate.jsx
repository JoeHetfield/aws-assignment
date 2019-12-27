import React from 'react';
import { Field } from 'formik';

import { TextField } from 'components/Form';

const BooleanTemplate = () => (
  <>

    <Field
      label="Boolean minimum"
      required
      fullWidth
      name="bmin"
      type="number"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="The minimum value range for random boolean generated."
    />

    <Field
      label="Boolean maximum"
      required
      fullWidth
      name="bmax"
      type="number"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="The maximum value range for random boolean generated."
    />

    <Field
      label="Boolean seed"
      required
      fullWidth
      name="bseed"
      type="number"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="The seed value for random boolean generated."
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

export default BooleanTemplate;
