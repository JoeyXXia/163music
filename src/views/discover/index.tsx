import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const Discover: FC<IProps> = () => {
  return <div>discover</div>
}

export default memo(Discover)
