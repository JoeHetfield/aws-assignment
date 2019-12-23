import React from 'react';
import { Field } from 'formik';

import { TextField } from 'components/Form';

const LoactionTemplate = () => (
  <>

    <Field
      label="Center position latitude"
      required
      fullWidth
      name="lat"
      type="number"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="The latitude of the center position for the random coordinates to be generated."
    />

    <Field
      label="Center position longitude"
      required
      fullWidth
      name="long"
      type="number"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="The longitude of the center position for the random coordinates to be generated."
    />

    <Field
      label="Radius"
      required
      fullWidth
      name="radius"
      type="number"
      margin="normal"
      variant="outlined"
      component={TextField}
      helperText="The radius from the center position for the random coordinates to be generated (in meters)."
    />

  </>
);

export default LoactionTemplate;
