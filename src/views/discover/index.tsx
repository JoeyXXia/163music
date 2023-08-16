import React, { FC, memo, ReactNode, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}
const Discover: FC<IProps> = () => {
  return (
    <div>
      discover
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
