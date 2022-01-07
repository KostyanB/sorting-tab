import React from 'react';

const Course = ({ modalData }) => {
  const {
    timestamp,
    rates: { RUB: rub, EUR: euro },
  } = modalData;
  const date = new Date((timestamp - 18000) * 1000)
    .toLocaleString()
    .split(',')[0];

  return (
    <>
      <p>{date}г.</p>
      <p>Доллар стоил {rub.toFixed(2)} рублей</p>
      <p>Евро стоил {(rub / euro).toFixed(2)} рублей</p>
    </>
  );
};
export default Course;
