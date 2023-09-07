import React, { FC, memo, ReactNode, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '@/views/discover/c-cpns/nav-bar'

interface IProps {
  children?: ReactNode
}
const Discover: FC<IProps> = () => {
  return (
    <div>
      <Suspense fallback="">
        <NavBar />
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
