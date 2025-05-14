import { Link, useLocation } from 'react-router';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';

import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';

const MenuContent: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        <ListItem
          key="/dashboard"
          disablePadding
          sx={{ display: 'block', color: 'text.primary' }}
          component={Link}
          to="/dashboard"
        >
          <ListItemButton selected={pathname === '/dashboard'}>
            <ListItemIcon>
              <AssignmentRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  );
};

export { MenuContent };
