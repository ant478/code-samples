import React, { memo } from 'react';
import NumberFormat from 'react-number-format';

const LargeNumberFormal = memo(({
  ...props
}) => (
  <NumberFormat
    displayType="text"
    thousandSeparator=" "
    decimalSeparator=","
    decimalScale={2}
    {...props}
  />
));

export default LargeNumberFormal;
