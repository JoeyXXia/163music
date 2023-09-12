import xxRequest from '@/service'

export function getBanners() {
  return xxRequest.get({
    url: '/banner'
  })
}
export function getHotRecommend(limit = 30) {
  return xxRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return xxRequest.get({
    url: '/album/newest'
  })
}
export function getPlaylistDetail(id: number) {
  return xxRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
export function getArtistList(limit = 30) {
  return xxRequest.get({
    url: '/artist/list',
    params: {
      limit
    }
  })
}
