import ReactDOM from 'react-dom/client'
import { App } from './components/app.tsx'
import './globals.css'
import { Toaster } from './components/ui/sonner.tsx'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <Toaster />
  </>,
)
