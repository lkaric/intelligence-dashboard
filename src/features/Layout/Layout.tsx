import { Outlet } from 'react-router';
import { alpha, Box, Stack } from '@mui/material';

import { Header, SideMenu } from './components';

const Layout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu />
      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          backgroundColor: theme.vars
            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
            : alpha(theme.palette.background.default, 1),
          overflow: 'auto',
        })}
      >
        <Stack
          spacing={2}
          sx={{
            position: 'relative',
            alignItems: 'center',
            mx: 3,
            pb: 5,
            mt: { xs: 8, md: 0 },
          }}
        >
          <Header />
          <Outlet />
        </Stack>
      </Box>
    </Box>
  );
};

export { Layout };
