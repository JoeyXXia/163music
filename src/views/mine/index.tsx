import React, { FC, memo, ReactNode } from 'react'
import { MineMusicWrapper } from '@/views/mine/style'

interface IProps {
  children?: ReactNode
}
const Mine: FC<IProps> = () => {
  return (
    <MineMusicWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <a href="/#" className="login">
            立即登录
          </a>
        </div>
      </div>
    </MineMusicWrapper>
  )
}

export default memo(Mine)
