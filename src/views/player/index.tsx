import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const Player: FC<IProps> = () => {
  return <div>player</div>
}

export default memo(Player)
