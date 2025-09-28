import type { iconName } from "@/types/icnonName";
import type { FC } from "react";

interface Props {
  className?: string;
  iconId: iconName;
  color?: string;
}

const Icon: FC<Props> = ({ className = "", iconId, color }) => {
  const size: number = iconId === "icon-close" ? 16 : 24;
  return (
    <svg
      style={{ color }}
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <use xlinkHref={`/svg/sprite.svg#${iconId}`} />
    </svg>
  );
};

export default Icon;
