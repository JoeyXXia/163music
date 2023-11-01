import React, { ElementRef, FC, memo, ReactNode, useRef } from 'react'
import { NewAlbumWrapper } from '@/views/discover/c-views/recommned/c-cpns/new-album/style'
import { Carousel } from 'antd'
import { shallowEqualApp, useAppSelector } from '@/store'
import AreaHeaderV1 from '@/components/area-header-v1'
import NewAlbumItem from '@/components/new-album-item'

interface IProps {
  children?: ReactNode
}
// inner data Carousel
const NewAlbum: FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  const { newAlbums } = useAppSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbums
    }),
    shallowEqualApp
  )
  console.log(newAlbums)

  // event handler
  function handlePrevClick() {
    bannerRef.current?.prev()
  }

  function handleNextClick() {
    bannerRef.current?.next
  }
  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={handlePrevClick}
        ></button>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {newAlbums?.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <NewAlbumItem key={album} itemData={album} />
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={handleNextClick}
        ></button>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
