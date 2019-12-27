import React from 'react';
import { Field } from 'formik';

import { TextField, SelectField } from 'components/Form';

const StringTemplate = () => (
  <>

    <Field
      label="String minimum length"
      required
      fullWidth
      name="smin"
      type="number"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="The minimum length of the random string generated."
    />

    <Field
      label="String maximum length"
      required
      fullWidth
      name="smax"
      type="number"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="The maximum length of the random string generated."
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

    <Field
      label="Default Value (Optional)"
      fullWidth
      name="default"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="The default value will consistently be the value sent with this attribute."
    />

  </>
);

export default StringTemplate;
