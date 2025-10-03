import { type FC, useEffect, useState } from "react";
import plug from "../../../../public/images/plug.png";
import plugX2 from "../../../../public/images/plug@x2.png";

interface Props {
  url: string;
  size?: number;
  className?: string;
}

const ImageElement: FC<Props> = ({ url, className, size }) => {
  const [showPoster, setShowPoster] = useState(false);

  useEffect(() => {
    setShowPoster(false);
    const img = new Image();
    img.src = url ? url : plug;
    img.onload = () => setShowPoster(true);
  }, [url]);

  return (
    <>
      {showPoster ? (
        <img className={className} src={url} />
      ) : (
        <img
          className={className}
          width={size}
          height={size}
          src={plug}
          srcSet={plugX2}
        />
      )}
    </>
  );
};

export default ImageElement;
