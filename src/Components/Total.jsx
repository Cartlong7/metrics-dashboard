import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

export default function Total() {
  return (
    <React.Fragment>
      <Title>Total Violations</Title>
      <Typography component="p" variant="h4">
        1000
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on {new Date().toLocaleDateString()}
      </Typography>
      <div>
        <Link
          color="primary"
          href="https://data.cityoftacoma.org/datasets/c8bcb79c5df9440cbdb548f54110a411_0/explore"
          target="_blank"
        >
          View Violation Map
        </Link>
      </div>
    </React.Fragment>
  );
}
