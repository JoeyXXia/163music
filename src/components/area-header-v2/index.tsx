import React, { FC, memo, ReactNode } from 'react'
import { HeaderV2Wrapper } from './style'

interface IProps {
  children?: ReactNode
  title?: string
  moreText?: string
  moreLink?: string
}
const AreaHeaderV2: FC<IProps> = (props) => {
  const { title = '默认标题', moreText = '更多', moreLink = '/' } = props
  return (
    <HeaderV2Wrapper className="sprite_02">
      <h3 className="title">{title}</h3>
      {moreText && moreLink && <a href={moreLink}>{moreText}</a>}
    </HeaderV2Wrapper>
  )
}

export default memo(AreaHeaderV2)
