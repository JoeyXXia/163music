import React, { FC, memo, ReactNode } from 'react'
import { NewAlnumItemWrapper } from '@/components/new-album-item/sttyle'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}
const NewAlbumItem: FC<IProps> = (props) => {
  const { itemData } = props

  return (
    <NewAlnumItemWrapper>
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 140)} alt="" />
        <a href="" className="cover sprite_cover"></a>
      </div>
      <div className="bottom">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </NewAlnumItemWrapper>
  )
}

export default memo(NewAlbumItem)
