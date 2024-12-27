import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const XXPlayer: FC<IProps> = () => {
  return <div>player</div>
}

export default memo(XXPlayer)
