import xxRequest from '@/service'

export function getSongDetail(ids: number) {
  return xxRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSongLyric(id: number) {
  return xxRequest.get({
    url: '/lyric',
    params: {
      id
    }
  })
}
