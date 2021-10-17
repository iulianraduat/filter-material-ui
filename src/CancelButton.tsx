import React from 'react';

import { Button } from '@mui/material';

const CancelButton = (props: CancelButtonProps) => (
  <Button color="secondary" onClick={props.onCancel} style={props.style} variant="outlined">
    Cancel
  </Button>
);

interface CancelButtonProps {
  onCancel: () => void;
  style?: React.CSSProperties;
}

export default CancelButton;
