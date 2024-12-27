import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const PlayerInfo: FC<IProps> = () => {
  return <h2>player info</h2>
}

export default memo(PlayerInfo)
