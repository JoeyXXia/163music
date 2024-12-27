import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const RankingList: FC<IProps> = () => {
  return <div>ranking list</div>
}

export default memo(RankingList)
