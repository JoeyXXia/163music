import React, { FC, memo, ReactNode } from 'react'
import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PLayerBarWrapper
} from '@/views/player/app-player-bar/style'
import { Link } from 'react-router-dom'
import { Slider } from 'antd'

interface IProps {
  children?: ReactNode
}
const AppPlayerBar: FC<IProps> = () => {
  return (
    <PLayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play"></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img src="" alt="" className="image" />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name"></span>
              <span className="singer-name"></span>
            </div>
            <div className="progress">
              <Slider step={0.5} />
              <div className="time">
                <span className="current"></span>
                <span className="divider"></span>
                <span className="duration"></span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio />
    </PLayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
