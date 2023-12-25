import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './routes/Route.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'

const query = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={query}>
    <AuthProvider>
      <RouterProvider router={myCreatedRoute} />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
