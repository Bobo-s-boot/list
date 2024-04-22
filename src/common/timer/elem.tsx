import React from 'react';
import styled from 'styled-components';
import { COLOR_ENUM } from '../../theme/color';
import {
  SIZE_FONT_DATA,
  SIZE_FONT_ENUM,
  SIZE_FONT_WEIGHT_DATA,
  SIZE_FONT_WEIGHT_ENUM,
} from '../../theme/size';

interface ICountdown {
  minutes: number;
  seconds: number;
}
interface props {
  setVisible: Function;
  visible: Boolean | null;
  minutes: number;
  seconds: number;
}

export const Elem = ({ setVisible, visible, minutes, seconds }: props) => {
  const [time, setTime] = React.useState<ICountdown>({
    minutes,
    seconds,
  });

  const tick = () => {
    if (time.minutes === 0 && time.seconds === 0) {
      setVisible();
    } else if (time.seconds === 0) {
      setTime({
        minutes: time.minutes - 1,
        seconds: 59,
      });
    } else if (time.seconds === 0) {
      setTime({ minutes: time.minutes - 1, seconds: 59 });
    } else {
      setTime({
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };

  const reset = () =>
    setTime({
      minutes,
      seconds,
    });

  React.useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => clearInterval(timerId);
  });

  React.useEffect(() => {
    if (visible === false) {
      reset();
    }
  }, [visible]);

  return (
    <Timer>
      {`${time.minutes.toString().padStart(2, '0')} : ${time.seconds
        .toString()
        .padStart(2, '0')}`}
    </Timer>
  );
};

const Timer = styled.div`
  font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.DEFAULT]}px;
  color: #000;
  font-weight: ${SIZE_FONT_WEIGHT_DATA[SIZE_FONT_WEIGHT_ENUM.MEDIUM]};
  text-align: center;
`;
