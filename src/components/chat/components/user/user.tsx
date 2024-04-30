import Image from 'next/image';
import React from 'react';
import { userProps } from './types';

import styles from './styles.module.scss';
import createScn from '@/utils/scn';

import stringTruncateHandler from '@/utils/stringTruncateHandler';

const scn = createScn(styles);

export const User = ({ image, name, message, time }: userProps) => {
  return (
    <div className={`${scn('user')}`}>
      {/* Photo */}
      <div className={`${scn('user__frame')}`}>
        <Image src={image} width={50} height={50} alt='user' className={`${scn('user__photo')}`} />
      </div>
      {/* Content */}
      <div className={`${scn('user__content')}`}>
        <div className={`${scn('user__details')}`}>
          {/* Name */}
          <small className={`${scn('user__name')}`}>{stringTruncateHandler(name, 20)}</small>
          {/* Message */}
          <p className={`${scn('user__message')}`}>{stringTruncateHandler(message, 30)}</p>
        </div>
        <div className={`${scn('user__info')}`}>
          <small className={`${scn('user__time')}`}>{time}</small>
          {/* <small className={`${scn('user__messages')}`}>{messagesCount}</small> */}
        </div>
      </div>
    </div>
  );
};
