import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const TopRanking: FC<IProps> = () => {
  return <div>top ranking</div>
}

export default memo(TopRanking)
