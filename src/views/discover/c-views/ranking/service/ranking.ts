import xxRequest from '@/service'

export function getTopList() {
  return xxRequest.get({
    url: '/toplist'
  })
}

export function getRankingList(id: number) {
  return xxRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
