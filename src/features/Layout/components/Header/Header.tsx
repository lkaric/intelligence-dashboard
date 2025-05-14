import { Breadcrumbs, Stack, Typography } from '@mui/material';

import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

import { ColorModeIconDropdown } from '../../../../theme';

const Header: React.FC = () => {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <Breadcrumbs separator={<NavigateNextRoundedIcon fontSize="small" />}>
        {/* <Typography variant="body1">Dashboard</Typography> */}
        <Typography
          variant="body1"
          sx={{ color: 'text.primary', fontWeight: 600 }}
        >
          Dashboard
        </Typography>
      </Breadcrumbs>

      <Stack direction="row" sx={{ gap: 1 }}>
        <ColorModeIconDropdown />
      </Stack>
    </Stack>
  );
};

export { Header };
