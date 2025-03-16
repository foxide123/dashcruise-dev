import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export enum CheckIconSize {
  small = "small",
  medium = "medium",
  big = "big"
}

interface CheckIconProps {
  size?: CheckIconSize;
  color?: string;
}

export default function CheckIcon({
  size = CheckIconSize.small,
  color = "text-carrot-500"
} : CheckIconProps) {

  //object lookup
  const iconSizeMap = {
    [CheckIconSize.small]: 24,
    [CheckIconSize.medium]: 48,
    [CheckIconSize.big]: 72
  };

  const iconWidth = iconSizeMap[size] ?? 24; //default to 24

  return (
    <FontAwesomeIcon icon={faCheck} className={`mr-5 ${color} w-[${iconWidth}px]`} />
  )
}