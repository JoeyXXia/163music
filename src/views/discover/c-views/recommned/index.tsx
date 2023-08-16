import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const Recommend: FC<IProps> = () => {
  return <div>recommend</div>
}

export default memo(Recommend)
