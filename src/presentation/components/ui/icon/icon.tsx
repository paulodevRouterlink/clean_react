import { FC, HTMLAttributes } from 'react'
import { HiHandThumbDown, HiHandThumbUp } from 'react-icons/hi2'
import Styled from './icon.module.scss'
import { IconName } from './types'

type IconProps = HTMLAttributes<HTMLDivElement> & {
  icon: IconName
}

const Icon: FC<IconProps> = ({ icon, ...rest }) => {
  const iconColor =
    icon === IconName.thumbDown
      ? Styled.icon_wrapper__red
      : Styled.icon_wrapper__green

  return (
    <div
      {...rest}
      className={[Styled.icon_wrapper, iconColor, rest.className].join(' ')}
    >
      {icon === 'HiHandThumbUp' ? (
        <HiHandThumbUp data-testid="icon" className={Styled.icon} />
      ) : (
        <HiHandThumbDown data-testid="icon" className={Styled.icon} />
      )}
    </div>
  )
}

export { Icon }
