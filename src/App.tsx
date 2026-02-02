import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import FormExample from './pages/FormExample'

function App() {
  const [page, setPage] = useState<'dashboard' | 'form'>('dashboard')

  return (
    <Layout onNavigate={(p) => setPage(p as any)}>
      {page === 'dashboard' ? <Dashboard /> : <FormExample />}
    </Layout>
  )
}

export default App
