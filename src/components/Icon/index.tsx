import type { iconName } from "@/types/icnonName";
import type { FC } from "react";

interface Props {
  className?: string;
  iconId: iconName;
  color?: string;
}

const Icon: FC<Props> = ({ className = '', iconId, color }) => {
  return (
    <svg
      style={{ color }}
      width={24}
      height={24}
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <use xlinkHref={`/svg/sprite.svg#${iconId}`} />
    </svg>
  );
};

export default Icon;
