import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import Recommend from '@/views/discover/c-views/recommned'
import Ranking from '@/views/discover/c-views/ranking'
import Songs from '@/views/discover/c-views/songs'
import Djradio from '@/views/discover/c-views/djradio'
import Artist from '@/views/discover/c-views/artist'
import Album from '@/views/discover/c-views/album'
import XXPlayer from '@/views/player'

const Discover = lazy(() => import('@/views/discover'))
const Focus = lazy(() => import('@/views/focus'))
const Mine = lazy(() => import('@/views/mine'))
const Download = lazy(() => import('@/views/download'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/player',
        element: <XXPlayer />
      }
    ]
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
