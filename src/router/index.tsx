import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

import Discover from '@/views/discover'
import Focus from '@/views/focus'
import Mine from '@/views/mine'

const routes: RouteObject[] = [
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  }
]

export default routes
