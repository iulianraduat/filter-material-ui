import * as React from "react";

import Button from "@material-ui/core/Button/Button";

const ApplyButton = (props: ApplyButtonProps) => (
  <Button
    color="primary"
    onClick={props.onApply}
    style={props.style}
    variant="outlined"
  >
    Apply
  </Button>
);

interface ApplyButtonProps {
  onApply: () => void;
  style?: React.CSSProperties;
}

export default ApplyButton;
