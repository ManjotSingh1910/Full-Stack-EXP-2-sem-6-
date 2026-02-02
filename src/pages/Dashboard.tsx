import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

const formatNumber = (n: number) => n.toLocaleString()

const PlaceholderCard = ({ title, max = 10000 }: { title: string; max?: number }) => {
  const value = Math.floor(Math.random() * max) + 1
  const change = (Math.random() * 10 - 5).toFixed(1) // -5.0 .. +5.0
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
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={3}>
        <PlaceholderCard title="Users" max={12000} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <PlaceholderCard title="Revenue" max={250000} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <PlaceholderCard title="Conversions" max={2000} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <PlaceholderCard title="Uptime (hrs)" max={168} />
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{ p: 2 }} elevation={2}>
          <Typography variant="h6">Activity Feed</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Recent events and logs go here.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Dashboard
