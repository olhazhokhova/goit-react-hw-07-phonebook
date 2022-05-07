import React from 'react';
import { Oval } from 'react-loader-spinner';
import s from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={s.spinner}>
      <Oval heigth="60" width="60" color="#219be7" secondaryColor="lightGrey" />
    </div>
  );
};

export default Spinner;
