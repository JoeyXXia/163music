import React, { FC, memo, ReactNode } from 'react'
import { UserLoginWrapper } from '@/views/discover/c-views/recommned/c-cpns/user-login/style'

interface IProps {
  children?: ReactNode
}
const UserLogin: FC<IProps> = () => {
  return (
    <UserLoginWrapper>
      <p className="dec">
        登录网易云音乐，可以享受无限收藏的乐趣， 并且无限同步到手机
      </p>
      <a href="#/loin" className="sprite_02">
        用户登录
      </a>
    </UserLoginWrapper>
  )
}

export default memo(UserLogin)
