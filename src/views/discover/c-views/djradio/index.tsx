import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const Djradio: FC<IProps> = () => {
  return <div>djradio</div>
}

export default memo(Djradio)
