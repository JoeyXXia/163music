import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const XXAppPlayList: FC<IProps> = () => {
  return <div>app-play-panel</div>
}

export default memo(XXAppPlayList)
