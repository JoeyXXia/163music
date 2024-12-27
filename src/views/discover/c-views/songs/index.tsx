import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const Songs: FC<IProps> = () => {
  return <div>songs</div>
}

export default memo(Songs)
