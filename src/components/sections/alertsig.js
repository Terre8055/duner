import * as React from 'react';
import Alert from '@mui/material/Alert';

import Stack from '@mui/material/Stack';

export default function IconAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert icon={false} severity="success">
        Get the article 📖{' '}
        <a href="https://michaeladev.medium.com/improving-deployment-frequency-a-60-boost-in-our-teams-release-strategy-9a3fa413bb56">
          here 😃
        </a>
      </Alert>
    </Stack>
  );
}
