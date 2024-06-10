import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDay }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentDate = new Date();
      const timeUntilTargetMidnight = getTimeUntilNextMidnight(currentDate, targetDay);

      if (timeUntilTargetMidnight <= 0) {
        setTimeLeft(`¡Es medianoche del ${targetDay}! ¡Revelando la siguiente pista!`);
        clearInterval(timerInterval);
      } else {
        const days = Math.floor(timeUntilTargetMidnight / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeUntilTargetMidnight % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeUntilTargetMidnight % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeUntilTargetMidnight % (1000 * 60)) / 1000);

        setTimeLeft(`Se revelará en: ${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [targetDay]);

  const getTimeUntilNextMidnight = (date, targetDay) => {
    const nextMidnight = new Date(date);
    nextMidnight.setDate(nextMidnight.getDate() + ((targetDay - date.getDay() + 7) % 7));
    nextMidnight.setHours(0, 0, 0, 0);

    return nextMidnight - date;
  };

  return (
    <div>
      <h1>{timeLeft}</h1>
    </div>
  );
};

export default CountdownTimer;
