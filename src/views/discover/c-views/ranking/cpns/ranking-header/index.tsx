import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const RankingHeader: FC<IProps> = () => {
  return <div>ranking header</div>
}

export default memo(RankingHeader)
