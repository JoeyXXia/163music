import React, { FC, memo, ReactNode } from 'react'
import { PlayerLeft, PlayerRight, PlayerWrapper } from '@/views/player/style'
import PlayerInfo from '@/views/player/cpns/player-info'
import PlayerComment from '@/views/player/cpns/player-comment'
import PlayerSongs from '@/views/player/cpns/player-songs'
import PlayerRelevant from '@/views/player/cpns/player-relevant'

interface IProps {
  children?: ReactNode
}
const XXPlayer: FC<IProps> = () => {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <PlayerInfo />
          <PlayerComment />
        </PlayerLeft>
        <PlayerRight>
          <PlayerSongs />
          <PlayerRelevant />
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
}

export default memo(XXPlayer)
