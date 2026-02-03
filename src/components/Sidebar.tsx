import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import FormIcon from '@mui/icons-material/Description'
import SettingsIcon from '@mui/icons-material/Settings'
import PeopleIcon from '@mui/icons-material/People'
import GroupIcon from '@mui/icons-material/Group'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'
import React, { useState } from 'react'

interface SidebarProps {
  open: boolean
  onNavigate: (page: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ open, onNavigate }) => {
  const [managementOpen, setManagementOpen] = useState(false)

  return (
    <Drawer variant="persistent" open={open} anchor="left">
      <List sx={{ width: 240 }}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onNavigate('dashboard')}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ my: 1 }} />

        <ListItem disablePadding>
          <ListItemButton onClick={() => setManagementOpen((s) => !s)}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Management" />
            {managementOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse in={managementOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => onNavigate('users')}>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => onNavigate('teams')}>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Teams" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>

        <Divider sx={{ my: 1 }} />

        <ListItem disablePadding>
          <ListItemButton onClick={() => onNavigate('form')}>
            <ListItemIcon>
              <FormIcon />
            </ListItemIcon>
            <ListItemText primary="Form" />
          </ListItemButton>
        </ListItem>

      </List>
    </Drawer>
  )
}

export default Sidebar
