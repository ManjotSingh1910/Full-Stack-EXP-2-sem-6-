import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import type { FC } from 'react'

const formatNumber = (n: number) => n.toLocaleString()

// Pure, deterministic pseudo-random generator based on a string seed.
// This avoids calling impure functions like Math.random() during render.
const seededRandom = (seed: string) => {
  let h = 2166136261 >>> 0
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return (h >>> 0) / 4294967295
}

const PlaceholderCard = ({ title, max = 10000 }: { title: string; max?: number }) => {
  const value = Math.floor(seededRandom(`${title}:${max}`) * max) + 1
  const change = (seededRandom(`${title}:change`) * 10 - 5).toFixed(1)
  const positive = Number(change) >= 0

  return (
    <Paper sx={{ p: 2, height: 200, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} elevation={3}>
      <div>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4" sx={{ mt: 1 }}>
          {formatNumber(value)}
        </Typography>
      </div>
      <div>
        <Typography variant="subtitle2" sx={{ color: positive ? 'success.main' : 'error.main' }}>
          {positive ? `+${change}%` : `${change}%`} vs last week
        </Typography>
      </div>
    </Paper>
  )
}

const Dashboard: FC = () => {
  return (
    <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' } }}>
      <PlaceholderCard title="Users" max={12000} />
      <PlaceholderCard title="Revenue" max={250000} />
      <PlaceholderCard title="Conversions" max={2000} />
      <PlaceholderCard title="Uptime (hrs)" max={168} />

      <Box sx={{ gridColumn: '1 / -1' }}>
        <Paper sx={{ p: 2 }} elevation={2}>
          <Typography variant="h6">Activity Feed</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Recent events and logs go here.
          </Typography>
        </Paper>
      </Box>
    </Box>
  )
}

export default Dashboard