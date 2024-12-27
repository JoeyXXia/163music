import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const PlayerSongs: FC<IProps> = () => {
  return <h2>player songs</h2>
}

export default memo(PlayerSongs)
