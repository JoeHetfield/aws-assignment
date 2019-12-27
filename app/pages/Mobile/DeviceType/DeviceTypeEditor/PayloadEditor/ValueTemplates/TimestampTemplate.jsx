import React from 'react';
import { Field } from 'formik';

import { TextField, SelectField } from 'components/Form';

const TimestampTemplate = () => (
  <>

    <Field
      label="Timestamp Format"
      required
      fullWidth
      name="tsformat"
      margin="normal"
      variant="outlined"
      component={SelectField}
      options={[
        { label: 'Default (YYYY-MM-DDTHH:mm:ss)', value: 'default' },
        { label: 'Unix', value: 'unix' },
      ]}
      helperText="The format of timestamp send in the payload."
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

export default TimestampTemplate;
