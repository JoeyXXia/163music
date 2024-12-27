import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const Ranking: FC<IProps> = () => {
  return <div>ranking</div>
}

export default memo(Ranking)
