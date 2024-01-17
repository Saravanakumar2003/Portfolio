import { Box } from "@mantine/core";
import { forwardRef } from "react";

// ----------------------------------------------------------------------------

const BoxWrapper = forwardRef<HTMLDivElement, any>(
  ({ children, align, withBackground, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default BoxWrapper;