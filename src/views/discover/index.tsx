import React, { FC, memo, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}
const Discover: FC<IProps> = () => {
  return (
    <div>
      discover
      <Outlet />
    </div>
  )
}

export default memo(Discover)
