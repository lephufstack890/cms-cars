import clsx from 'clsx';
import { CSSProperties, FC, useMemo } from 'react';

import { Image } from '@/components/molecules/Image';
import { getRandomAppColor } from '@/utils';

interface IProps {
  readonly avatar?: string;
  readonly className?: string;
  readonly imageClassName?: string;
  readonly imageHeight?: number;
  readonly imageStyle?: CSSProperties;
  readonly imageWidth?: number;
  readonly name?: string;
  readonly style?: CSSProperties;
}

const AtDefaultAvatar: FC<IProps> = (props) => {
  const color = useMemo(() => getRandomAppColor(), []);

  return (
    <div className={clsx('symbol symbol-circle', props.className)} style={props.style}>
      <a href="#">
        {(() => {
          if (props.avatar) {
            return (
              <div className="symbol-label">
                <Image
                  alt="avatar"
                  className={clsx('border', props.imageClassName)}
                  height={props.imageHeight}
                  src={props.avatar}
                  style={props.imageStyle}
                  width={props.imageWidth}
                  isImageRoundedCircle
                />
              </div>
            );
          }

          return (
            <div className={clsx('symbol-label fs-3', `bg-light-${color}`, `text-${color}`)}>
              {(props.name || '?').charAt(0)}
            </div>
          );
        })()}
      </a>
    </div>
  );
};

export { AtDefaultAvatar };
