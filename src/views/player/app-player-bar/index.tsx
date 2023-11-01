import React, { FC, memo, ReactNode } from 'react'
import { PLayerBarWrapper } from '@/views/player/app-player-bar/style'

interface IProps {
  children?: ReactNode
}
const AppPlayerBar: FC<IProps> = () => {
  return (
    <PLayerBarWrapper>
      <div className="content">app player</div>
    </PLayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
