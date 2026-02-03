import { type FC, type ReactNode, useState } from 'react'
import Box from '@mui/material/Box'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: ReactNode
  onNavigate?: (page: string) => void
}

const Layout: FC<LayoutProps> = ({ children, onNavigate }) => {
  const [open, setOpen] = useState(true)
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Topbar onMenuClick={() => setOpen((s) => !s)} />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar open={open} onNavigate={(p) => onNavigate?.(p)} />
        <Box component="main" sx={{ flex: 1, p: 2 }}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
