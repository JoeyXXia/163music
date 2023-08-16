import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const Album: FC<IProps> = () => {
  return <div>discover</div>
}

export default memo(Album)
