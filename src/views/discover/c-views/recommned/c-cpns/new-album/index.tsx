import React, { ElementRef, FC, memo, ReactNode, useRef } from 'react'
import { NewAlbumWrapper } from '@/views/discover/c-views/recommned/c-cpns/new-album/style'
import { Carousel } from 'antd'
import { useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}
// inner data Carousel
const NewAlbum: FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  const { newAlbums } = useAppSelector((state) => ({
    newAlbums: state.recommend.newAlbums
  }))

  // event handler
  function handlePrevClick() {
    bannerRef.current?.prev()
  }

  function handleNextClick() {
    bannerRef.current?.next
  }
  return <NewAlbumWrapper>hello</NewAlbumWrapper>
}

export default memo(NewAlbum)
