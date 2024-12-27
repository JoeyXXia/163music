import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const PlayerRelevant: FC<IProps> = () => {
  return <h2>player relevant</h2>
}

export default memo(PlayerRelevant)
