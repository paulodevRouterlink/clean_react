import { FC, HTMLAttributes, useMemo } from 'react'
import { HiHandThumbDown, HiHandThumbUp } from 'react-icons/hi2'
import Styled from './icon.module.scss'
import { IconName } from './types'

type IconProps = HTMLAttributes<HTMLDivElement> & {
  icon: IconName
}

const Icon: FC<IconProps> = ({ icon, ...rest }) => {
  const IconHand = useMemo(() => {
    switch (icon) {
      case 'HiHandThumbUp':
        return <HiHandThumbUp className={Styled.icon} />

      case 'HiHandThumbDown':
        return <HiHandThumbDown className={Styled.icon} />
    }
  }, [icon])

  const iconColor =
    icon === IconName.thumbDown
      ? Styled.icon_wrapper__red
      : Styled.icon_wrapper__green

  return (
    <div
      {...rest}
      className={[Styled.icon_wrapper, iconColor, rest.className].join(' ')}
    >
      {IconHand}
    </div>
  )
}

export { Icon }
