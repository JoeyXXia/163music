export function formatCount(count: number) {
  if (count > 10000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

export function getImageSize(
  imageUrl: string,
  width: number,
  height: number = width
) {
  return imageUrl + `?params${width}x${height}`
}

export function formatTime(time: number) {
  const timeSeconds = time / 1000

  const minute = Math.floor(timeSeconds / 60)
  const second = Math.floor(timeSeconds % 60)

  const formatMinute = String(minute).padStart(2, '0')
  const formatSecond = String(second).padStart(2, '0')
  return `${formatMinute}:${formatSecond}`
}
