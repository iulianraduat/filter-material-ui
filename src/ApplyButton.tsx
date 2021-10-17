import React from 'react';

import { Button } from '@mui/material';

const ApplyButton = (props: ApplyButtonProps) => (
  <Button color="primary" onClick={props.onApply} style={props.style} variant="contained">
    Apply
  </Button>
);

interface ApplyButtonProps {
  onApply: () => void;
  style?: React.CSSProperties;
}

export default ApplyButton;
