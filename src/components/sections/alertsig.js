import * as React from 'react';
import Alert from '@mui/material/Alert';

import Stack from '@mui/material/Stack';

export default function IconAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert icon={false} severity="success">
        Get the article 📖 <a href="https://michaeladev.medium.com/">here 🤖</a>
      </Alert>
    </Stack>
  );
}
