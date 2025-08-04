import { useState, useEffect } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 13,
    hours: 23,
    minutes: 59,
    seconds: 57
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
      <h3 className="text-lg font-semibold mb-4">Thời gian ưu đãi còn lại:</h3>
      <div className="grid grid-cols-4 gap-4">
        <div className="text-center">
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.days}</div>
            <div className="text-sm opacity-80">Ngày</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm opacity-80">Giờ</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm opacity-80">Phút</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm opacity-80">Giây</div>
          </div>
        </div>
      </div>
    </div>
  );
}
