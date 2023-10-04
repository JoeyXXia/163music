import React, { FC, memo, ReactNode } from 'react'
import { NewAlnumItemWrapper } from '@/components/new-album-item/sttyle'

interface IProps {
  children?: ReactNode
}
const NewAlbumItem: FC<IProps> = () => {
  return (
    <NewAlnumItemWrapper>
      <div>new album</div>
    </NewAlnumItemWrapper>
  )
}

export default memo(NewAlbumItem)
