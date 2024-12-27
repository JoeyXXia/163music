import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const PlayerComment: FC<IProps> = () => {
  return <h2>player comment</h2>
}

export default memo(PlayerComment)
