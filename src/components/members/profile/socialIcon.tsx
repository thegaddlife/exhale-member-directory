import { FaRss, FaInstagram } from 'react-icons/fa'
import { IconParams } from '@/interfaces/IconParams'
import { VoxerIcon } from '../icon/svgIcon'

export const ExhaleIcon = (props: IconParams): JSX.Element => {
  return (
    <>
      {props.name === 'Instagram' && <FaInstagram className="w-8 h-8" />}
      {props.name === 'Website' && <FaRss className="w-8 h-8" />}
      {props.name === 'Voxer' && <VoxerIcon />}
    </>
  )
}
