import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ErrorMessage({ variant = 'error', message }) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={variant}>{message}</Alert>
    </Stack>
  );
}
