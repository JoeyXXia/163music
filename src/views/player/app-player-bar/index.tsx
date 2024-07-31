import React, { FC, memo, ReactNode, useEffect, useRef, useState } from 'react'
import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PLayerBarWrapper
} from '@/views/player/app-player-bar/style'
import { Link } from 'react-router-dom'
import { Slider } from 'antd'
import { shallowEqualApp, useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'
import { getSongPlayUrl } from '@/utils/handle-player'

interface IProps {
  children?: ReactNode
}
const AppPlayerBar: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong
    }),
    shallowEqualApp
  )

  useEffect(() => {
    audioRef.current!.src = getSongPlayUrl(currentSong.id)

    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch(() => {
        setIsPlaying(false)
      })
    setDuration(currentSong.dt)
  }, [currentSong])

  //player process
  function handleTimeUpdate() {
    const currentTime = audioRef.current!.currentTime * 1000

    if (!isSliding) {
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }
  }

  function handlePlayBtnClick() {
    setIsPlaying(!isPlaying)
  }
  function handleChangeMusic() {}

  function handleChangePlayMode() {}

  function handleSliderChanging(value: number) {
    // setIsSliding(true)

    setProgress(value)

    // const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
  }

  function handleSliderChanged(value: number) {
    // const currentTime = (value / 100) * duration

    audioRef.current!.currentTime = currentTime / 1000

    setCurrentTime(currentTime)
    setProgress(value)
    // setIsSliding(false)
  }

  //music progress
  function handTimeUpdate() {}

  return (
    <PLayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => handleChangeMusic}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => handleChangeMusic}
          ></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img
              src={getImageSize(currentSong?.al?.picUrl, 50)}
              alt=""
              className="image"
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong.ar[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                step={0.5}
                value={progress}
                tooltip={{ formatter: null }}
                onChange={handleSliderChanging}
                onAfterChange={handleSliderChanged}
              />
              <div className="time">
                <span className="current">{currentTime}</span>
                <span className="divider"></span>
                <span className="duration">{duration}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playMode={1}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button
              className="btn sprite_playbar loop"
              onClick={handleChangePlayMode}
            ></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handTimeUpdate} />
    </PLayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
