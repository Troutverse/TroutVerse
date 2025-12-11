"use client";

import { useEffect, useState } from 'react';

export default function BirthdayPage() {
  const [currentStage, setCurrentStage] = useState(0);
  const [stagesCompleted, setStagesCompleted] = useState([true, false, false, false, false, false]);
  const [ingredientsCollected, setIngredientsCollected] = useState(0);
  const [candlesPlaced, setCandlesPlaced] = useState(0);

  const channelNames = [
    '초대장', '재료 모으기', '촛불 꽂기', '촛불 끄기', '선물 찾기', '피날레'
  ];

  const channelTopics = [
    '생일 파티에 초대합니다!', '케이크 재료를 모아주세요', '케이크에 촛불을 꽂아주세요',
    '소원을 빌고 촛불을 끄세요', '특별한 선물을 찾아주세요', '생일 축하합니다! 🎉'
  ];

  const [giftOpened, setGiftOpened] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    if (currentStage === 5) {
      setTimeout(() => setGiftOpened(true), 500);
      setTimeout(() => {
        setShowHearts(true);
        startFinaleEffects();
      }, 1500);
    }
  }, [currentStage]);

  const goToStage = (stage: number) => {
    if (stage > currentStage + 1 && !stagesCompleted[stage]) return;
    setCurrentStage(stage);
    
    const newCompleted = [...stagesCompleted];
    for (let i = 0; i < stage; i++) {
      newCompleted[i] = true;
    }
    setStagesCompleted(newCompleted);
  };

  const startParty = () => {
    const newCompleted = [...stagesCompleted];
    newCompleted[0] = true;
    setStagesCompleted(newCompleted);
    setCurrentStage(1);
  };

  const collectIngredient = (index: number) => {
    const newCount = ingredientsCollected + 1;
    setIngredientsCollected(newCount);
    
    if (newCount >= 5) {
      const newCompleted = [...stagesCompleted];
      newCompleted[1] = true;
      setStagesCompleted(newCompleted);
      setTimeout(() => setCurrentStage(2), 1000);
    }
  };

  const placeCandle = (index: number) => {
    const newCount = candlesPlaced + 1;
    setCandlesPlaced(newCount);
    
    if (newCount >= 3) {
      const newCompleted = [...stagesCompleted];
      newCompleted[2] = true;
      setStagesCompleted(newCompleted);
      setTimeout(() => setCurrentStage(3), 1500);
    }
  };

  const blowCandles = () => {
    const newCompleted = [...stagesCompleted];
    newCompleted[3] = true;
    setStagesCompleted(newCompleted);
    setTimeout(() => setCurrentStage(4), 2000);
  };

  const checkGift = (isCorrect: boolean) => {
    if (isCorrect) {
      const newCompleted = [...stagesCompleted];
      newCompleted[4] = true;
      setStagesCompleted(newCompleted);
      setTimeout(() => setCurrentStage(5), 1000);
    }
  };

  const startFinaleEffects = () => {
    const newCompleted = [...stagesCompleted];
    newCompleted[5] = true;
    setStagesCompleted(newCompleted);

    const heartInterval = setInterval(() => {
      createHeart();
    }, 200);

    const fireworkInterval = setInterval(() => {
      createFirework();
    }, 800);

    setTimeout(() => {
      clearInterval(heartInterval);
      clearInterval(fireworkInterval);
      setInterval(() => createHeart(), 500);
      setInterval(() => createFirework(), 1500);
    }, 10000);
  };

  const createHeart = () => {
    if (typeof document === 'undefined') return;
    
    const heart = document.createElement('div');
    heart.className = 'heart-rain-effect';
    heart.textContent = ['❤️', '💕', '💖', '💗', '💝', '💓'][Math.floor(Math.random() * 6)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = 3 + Math.random() * 2 + 's';
    heart.style.fontSize = (20 + Math.random() * 20) + 'px';
    
    const stage5 = document.querySelector('#stage5');
    if (stage5) {
      stage5.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }
  };

  const createFirework = () => {
    if (typeof document === 'undefined') return;
    
    const colors = ['#ff6b9d', '#ffd93d', '#6bcf7f', '#6eb6ff', '#c084fc', '#f472b6'];
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.6);
    
    const stage5 = document.querySelector('#stage5');
    if (!stage5) return;
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'firework-particle';
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      
      const angle = (Math.PI * 2 * i) / 30;
      const velocity = 50 + Math.random() * 100;
      particle.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
      particle.style.setProperty('--ty', Math.sin(angle) * velocity + 'px');
      
      stage5.appendChild(particle);
      setTimeout(() => particle.remove(), 1000);
    }
  };

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Noto Sans KR', -apple-system, sans-serif;
          background: #2f3136;
          color: #dcddde;
          overflow: hidden;
        }

        .discord-container {
          display: flex;
          height: 100vh;
          width: 100vw;
        }

        .sidebar {
          width: 280px;
          background: #2f3136;
          border-right: 1px solid #202225;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .server-header {
          padding: 20px;
          background: #202225;
          border-bottom: 1px solid #18191c;
          font-weight: 700;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .server-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .channel-category {
          padding: 20px 10px 5px 15px;
          font-size: 12px;
          font-weight: 700;
          color: #96989d;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .channel-list {
          padding: 0 10px;
        }

        .channel-item {
          padding: 8px 10px;
          margin: 2px 0;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.15s ease;
          position: relative;
          color: #96989d;
        }

        .channel-item:hover {
          background: #3c3f45;
          color: #dcddde;
        }

        .channel-item.active {
          background: #404249;
          color: #fff;
        }

        .channel-item.completed::after {
          content: '✓';
          position: absolute;
          right: 10px;
          color: #3ba55d;
          font-weight: 700;
        }

        .channel-item.locked {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .channel-icon {
          font-size: 20px;
          width: 24px;
          text-align: center;
        }

        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #36393f;
        }

        .channel-header {
          height: 60px;
          background: #36393f;
          border-bottom: 1px solid #202225;
          padding: 0 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .channel-name {
          font-weight: 700;
          font-size: 18px;
          color: #fff;
        }

        .channel-topic {
          color: #96989d;
          font-size: 14px;
          margin-left: auto;
        }

        .game-area {
          flex: 1;
          position: relative;
          overflow: hidden;
        }

        .stage-content {
          position: absolute;
          width: 100%;
          height: 100%;
          display: none;
          opacity: 0;
          transition: opacity 0.3s ease;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          overflow-y: auto;
        }

        .stage-content.active {
          display: flex;
          opacity: 1;
        }

        .retro-button {
          background: #5865f2;
          color: white;
          border: none;
          padding: 12px 30px;
          font-size: 16px;
          font-weight: 700;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.15s ease;
          box-shadow: 0 4px 0 #3c45a5;
          position: relative;
          top: 0;
        }

        .retro-button:hover {
          background: #4752c4;
          top: 2px;
          box-shadow: 0 2px 0 #3c45a5;
        }

        .stage-title-main {
          font-size: 48px;
          font-weight: 900;
          color: #fff;
          text-align: center;
          margin-bottom: 30px;
          text-shadow: 0 0 20px rgba(88, 101, 242, 0.5);
        }

        .stage-subtitle {
          font-size: 20px;
          color: #96989d;
          text-align: center;
          margin-bottom: 40px;
        }

        .invitation-card {
          background: #2f3136;
          border-radius: 8px;
          padding: 60px 40px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          max-width: 500px;
          width: 100%;
          border: 2px solid #5865f2;
          animation: floatInvite 3s infinite ease-in-out;
        }

        @keyframes floatInvite {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .invitation-card h1 {
          font-size: 42px;
          margin-bottom: 20px;
          color: #fff;
        }

        .invitation-card p {
          font-size: 18px;
          line-height: 1.8;
          color: #dcddde;
          margin-bottom: 30px;
        }

        .progress-container {
          width: 90%;
          max-width: 500px;
          height: 30px;
          background: #202225;
          border-radius: 15px;
          overflow: hidden;
          margin: 20px 0;
          border: 2px solid #5865f2;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #5865f2, #7289da);
          transition: width 0.5s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 14px;
        }

        .ingredients-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 15px;
          max-width: 600px;
          width: 100%;
          padding: 0 10px;
        }

        .ingredient-item {
          background: #2f3136;
          border: 3px solid #5865f2;
          border-radius: 8px;
          padding: 30px;
          font-size: 60px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
          animation: ingredientBounce 2s infinite ease-in-out;
        }

        .ingredient-item:hover {
          transform: scale(1.15) rotate(5deg);
          border-color: #7289da;
          box-shadow: 0 0 30px rgba(88, 101, 242, 0.5);
        }

        .ingredient-item.collected {
          opacity: 0;
          transform: scale(1.5) rotate(360deg);
        }

        @keyframes ingredientBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .cake-display {
          margin: 40px 0;
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .discord-cake {
          width: 300px;
          height: 100px;
          background: linear-gradient(to bottom, #8B4513 0%, #654321 100%);
          border-radius: 150px 150px 20px 20px;
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          border: 3px solid #5865f2;
        }

        .discord-cake::before {
          content: '';
          position: absolute;
          top: -15px;
          left: 15px;
          right: 15px;
          height: 25px;
          background: #FFB6C1;
          border-radius: 50%;
          box-shadow: inset 0 -5px 10px rgba(0,0,0,0.2);
        }

        .candle-slot {
          position: absolute;
          top: -60px;
          width: 60px;
          height: 60px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          transition: all 0.3s ease;
        }

        .candle-slot:nth-child(2) { left: 30px; }
        .candle-slot:nth-child(3) { left: 120px; }
        .candle-slot:nth-child(4) { left: 210px; }

        .candle-slot:hover {
          transform: scale(1.2);
        }

        .candle-slot.placed {
          animation: candlePop 0.3s ease;
        }

        .candle-slot.lit {
          animation: flickerCandle 1s infinite;
        }

        @keyframes candlePop {
          0% { transform: scale(0); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }

        @keyframes flickerCandle {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.5); }
        }

        .blow-instruction {
          font-size: 24px;
          color: #dcddde;
          margin: 30px 0;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .gifts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 600px;
          width: 100%;
          padding: 0 10px;
        }

        .gift-box {
          background: #2f3136;
          border: 3px solid #5865f2;
          border-radius: 8px;
          padding: 40px;
          font-size: 60px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .gift-box:hover {
          transform: scale(1.1) rotate(5deg);
          border-color: #7289da;
          box-shadow: 0 0 30px rgba(88, 101, 242, 0.5);
        }

        .gift-box.wrong {
          animation: shake 0.5s;
          border-color: #ed4245;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        .finale-content {
          text-align: center;
          max-width: 700px;
          width: 100%;
          padding: 40px 20px;
          background: rgba(47, 49, 54, 0.9);
          border-radius: 8px;
          border: 3px solid #5865f2;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        .finale-content h1 {
          font-size: 56px;
          margin-bottom: 30px;
          color: #fff;
          animation: rainbow 3s infinite;
        }

        @keyframes rainbow {
          0% { color: #ff6b9d; }
          33% { color: #ffd93d; }
          66% { color: #6bcf7f; }
          100% { color: #ff6b9d; }
        }

        .finale-content p {
          font-size: 24px;
          line-height: 1.8;
          color: #dcddde;
        }

        .finale-content strong {
          font-size: 48px;
          display: block;
          margin-top: 30px;
          animation: heartbeat 1.5s infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .gift-container {
          position: relative;
          width: 200px;
          height: 200px;
          margin-bottom: 40px;
        }

        .gift-box-finale {
          width: 200px;
          height: 160px;
          background: linear-gradient(135deg, #ff6b9d, #c084fc);
          border-radius: 20px;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 40px rgba(255, 107, 157, 0.5);
          animation: giftFloat 2s infinite ease-in-out;
        }

        @keyframes giftFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .gift-box-finale:hover {
          transform: scale(1.05) translateY(-5px);
        }

        .gift-ribbon-h {
          position: absolute;
          width: 100%;
          height: 30px;
          background: #ffd93d;
          top: 50%;
          transform: translateY(-50%);
        }

        .gift-ribbon-v {
          position: absolute;
          width: 30px;
          height: 100%;
          background: #ffd93d;
          left: 50%;
          transform: translateX(-50%);
        }

        .gift-lid {
          position: absolute;
          width: 220px;
          height: 60px;
          background: linear-gradient(135deg, #ff8fab, #d09cff);
          border-radius: 20px;
          top: -20px;
          left: -10px;
          box-shadow: 0 5px 20px rgba(255, 107, 157, 0.3);
          transition: all 0.5s ease;
        }

        .gift-box-finale.opened .gift-lid {
          transform: translateY(-100px) rotateX(45deg);
          opacity: 0;
        }

        .gift-bow {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 60px;
          filter: drop-shadow(0 5px 10px rgba(0,0,0,0.3));
        }

        .heart-explosion {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
        }

        .heart-burst {
          position: absolute;
          font-size: 40px;
          animation: heartBurst 1.5s ease-out forwards;
        }

        @keyframes heartBurst {
          0% {
            transform: translate(0, 0) scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(1.5) rotate(360deg);
            opacity: 0;
          }
        }

        .heart-rain-effect {
          position: absolute;
          animation: heartFall 5s linear forwards;
          pointer-events: none;
          z-index: 100;
        }

        @keyframes heartFall {
          0% {
            top: -50px;
            opacity: 1;
            transform: translateX(0) rotate(0deg);
          }
          100% {
            top: 100%;
            opacity: 0;
            transform: translateX(var(--drift, 20px)) rotate(360deg);
          }
        }

        .firework-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: fireworkExplode 1s ease-out forwards;
          pointer-events: none;
          z-index: 99;
          box-shadow: 0 0 10px currentColor;
        }

        @keyframes fireworkExplode {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
          }
        }

        .sparkle-effect {
          position: absolute;
          pointer-events: none;
          animation: sparkle 1s ease-out forwards;
        }

        @keyframes sparkle {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0;
          }
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* 모바일 반응형 */
        @media (max-width: 768px) {
          .sidebar {
            width: 70px;
            min-width: 70px;
          }

          .channel-item span:not(.channel-icon) {
            display: none;
          }

          .server-header span {
            display: none;
          }

          .server-icon {
            width: 35px;
            height: 35px;
            font-size: 18px;
          }

          .channel-category {
            padding: 15px 5px 5px 5px;
            font-size: 10px;
            text-align: center;
          }

          .channel-list {
            padding: 0 5px;
          }

          .channel-item {
            justify-content: center;
            padding: 10px 5px;
          }

          .channel-icon {
            font-size: 24px;
            width: 100%;
          }

          .channel-header {
            padding: 0 15px;
            height: 50px;
          }

          .channel-name {
            font-size: 16px;
          }

          .channel-topic {
            display: none;
          }

          .stage-content {
            padding: 20px 15px;
          }

          .stage-title-main {
            font-size: 28px;
            margin-bottom: 20px;
          }

          .stage-subtitle {
            font-size: 16px;
            margin-bottom: 30px;
          }

          .invitation-card {
            padding: 40px 25px;
          }

          .invitation-card h1 {
            font-size: 32px;
          }

          .invitation-card p {
            font-size: 16px;
          }

          .ingredients-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .ingredient-item {
            padding: 20px;
            font-size: 48px;
          }

          .discord-cake {
            width: 250px;
            height: 80px;
          }

          .candle-slot {
            width: 50px;
            height: 50px;
            font-size: 32px;
            top: -50px;
          }

          .candle-slot:nth-child(2) { left: 20px; }
          .candle-slot:nth-child(3) { left: 100px; }
          .candle-slot:nth-child(4) { left: 180px; }

          .blow-instruction {
            font-size: 18px;
          }

          .gifts-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .gift-box {
            padding: 30px;
            font-size: 48px;
          }

          .gift-container {
            width: 150px;
            height: 150px;
          }

          .gift-box-finale {
            width: 150px;
            height: 120px;
          }

          .gift-lid {
            width: 165px;
            height: 50px;
            left: -7px;
          }

          .gift-bow {
            font-size: 45px;
          }

          .finale-content h1 {
            font-size: 36px;
          }

          .finale-content p {
            font-size: 18px;
          }

          .finale-content strong {
            font-size: 36px;
          }

          .retro-button {
            padding: 10px 25px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .stage-title-main {
            font-size: 24px;
          }

          .invitation-card h1 {
            font-size: 28px;
          }

          .invitation-card p {
            font-size: 14px;
          }

          .ingredient-item {
            font-size: 40px;
            padding: 15px;
          }

          .discord-cake {
            width: 200px;
            height: 70px;
          }

          .candle-slot {
            width: 40px;
            height: 40px;
            font-size: 28px;
            top: -45px;
          }

          .candle-slot:nth-child(2) { left: 15px; }
          .candle-slot:nth-child(3) { left: 80px; }
          .candle-slot:nth-child(4) { left: 145px; }

          .gift-box {
            padding: 25px;
            font-size: 40px;
          }

          .finale-content h1 {
            font-size: 28px;
          }

          .finale-content p {
            font-size: 16px;
          }

          .finale-content strong {
            font-size: 28px;
          }
        }
      `}</style>

      <div className="discord-container">
        <div className="sidebar">
          <div className="server-header">
            <div className="server-icon">🎂</div>
            <span>Birthday Quest</span>
          </div>
          
          <div className="channel-category">🎮 STAGES</div>
          
          <div className="channel-list">
            {channelNames.map((name, index) => (
              <div
                key={index}
                className={`channel-item ${currentStage === index ? 'active' : ''} ${
                  stagesCompleted[index] ? 'completed' : ''
                } ${index > currentStage + 1 && !stagesCompleted[index] ? 'locked' : ''}`}
                onClick={() => goToStage(index)}
              >
                <span className="channel-icon">
                  {['📩', '🥚', '🕯️', '💨', '🎁', '🎉'][index]}
                </span>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="main-content">
          <div className="channel-header">
            <span className="channel-icon">📍</span>
            <span className="channel-name">{channelNames[currentStage]}</span>
            <span className="channel-topic">{channelTopics[currentStage]}</span>
          </div>

          <div className="game-area">
            {/* Stage 0: 초대장 */}
            <div className={`stage-content ${currentStage === 0 ? 'active' : ''}`} style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
              <div className="invitation-card">
                <h1>🎂 생일 축하 초대장</h1>
                <p>
                  세상에서 가장 특별한 당신을 위한<br/>
                  특별한 생일 파티에 초대합니다! 🎉<br/><br/>
                  5개의 미션을 완료하고<br/>
                  최고의 생일 선물을 받아가세요! 💝
                </p>
                <button className="retro-button" onClick={startParty}>
                  🎮 파티 시작하기
                </button>
              </div>
            </div>

            {/* Stage 1: 재료 모으기 */}
            <div className={`stage-content ${currentStage === 1 ? 'active' : ''}`}>
              <h1 className="stage-title-main">🥚 재료 모으기</h1>
              <p className="stage-subtitle">케이크를 만들 재료를 모두 클릭하세요!</p>
              
              <div className="progress-container">
                <div 
                  className="progress-bar" 
                  style={{width: `${(ingredientsCollected / 5) * 100}%`}}
                >
                  {ingredientsCollected}/5
                </div>
              </div>
              
              <div className="ingredients-grid">
                {['🥚', '🥛', '🍓', '🍫', '🧈'].map((item, index) => (
                  ingredientsCollected <= index && (
                    <div
                      key={index}
                      className="ingredient-item"
                      onClick={() => collectIngredient(index)}
                      style={{animationDelay: `${index * 0.2}s`}}
                    >
                      {item}
                    </div>
                  )
                ))}
              </div>
            </div>

            {/* Stage 2: 촛불 꽂기 */}
            <div className={`stage-content ${currentStage === 2 ? 'active' : ''}`}>
              <h1 className="stage-title-main">🕯️ 촛불 꽂기</h1>
              <p className="stage-subtitle">케이크에 촛불 3개를 모두 꽂으세요!</p>
              
              <div className="cake-display">
                <div className="discord-cake">
                  {[0, 1, 2].map((index) => (
                    <div
                      key={index}
                      className={`candle-slot ${candlesPlaced > index ? 'placed lit' : ''}`}
                      onClick={() => candlesPlaced <= index && placeCandle(index)}
                    >
                      {candlesPlaced > index ? '🕯️' : '❓'}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage 3: 촛불 끄기 */}
            <div className={`stage-content ${currentStage === 3 ? 'active' : ''}`}>
              <h1 className="stage-title-main">💨 소원을 빌고 촛불을 끄세요</h1>
              
              <div className="cake-display">
                <div className="discord-cake">
                  <div className="candle-slot placed lit" style={{left: '30px'}}>🕯️</div>
                  <div className="candle-slot placed lit" style={{left: '120px'}}>🕯️</div>
                  <div className="candle-slot placed lit" style={{left: '210px'}}>🕯️</div>
                </div>
              </div>
              
              <p className="blow-instruction">⬇️ 아래 버튼을 클릭하세요 ⬇️</p>
              <button className="retro-button" onClick={blowCandles}>💨 후~ 불기!</button>
            </div>

            {/* Stage 4: 선물 찾기 */}
            <div className={`stage-content ${currentStage === 4 ? 'active' : ''}`}>
              <h1 className="stage-title-main">🎁 진짜 선물 찾기</h1>
              <p className="stage-subtitle">특별한 선물이 하나 숨어있어요!</p>
              
              <div className="gifts-grid">
                {['🎁', '📦', '🎀', '🎁', '📦', '💝'].map((gift, index) => (
                  <div
                    key={index}
                    className="gift-box"
                    onClick={() => checkGift(index === 5)}
                  >
                    {gift}
                  </div>
                ))}
              </div>
            </div>

            {/* Stage 5: 피날레 */}
            <div id="stage5" className={`stage-content ${currentStage === 5 ? 'active' : ''}`} style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
              {!giftOpened ? (
                <div className="gift-container">
                  <div 
                    className={`gift-box-finale ${giftOpened ? 'opened' : ''}`}
                    onClick={() => setGiftOpened(true)}
                  >
                    <div className="gift-lid">
                      <div className="gift-bow">🎀</div>
                    </div>
                    <div className="gift-ribbon-h"></div>
                    <div className="gift-ribbon-v"></div>
                  </div>
                  <p style={{
                    textAlign: 'center',
                    color: '#fff',
                    fontSize: '24px',
                    marginTop: '20px',
                    animation: 'pulse 2s infinite'
                  }}>
                    🎁 선물을 클릭하세요!
                  </p>
                </div>
              ) : (
                <>
                  {showHearts && (
                    <div className="heart-explosion">
                      {[...Array(12)].map((_, i) => {
                        const angle = (Math.PI * 2 * i) / 12;
                        const distance = 150;
                        return (
                          <div
                            key={i}
                            className="heart-burst"
                            style={{
                              '--tx': `${Math.cos(angle) * distance}px`,
                              '--ty': `${Math.sin(angle) * distance}px`,
                              animationDelay: `${i * 0.05}s`
                            } as React.CSSProperties}
                          >
                            {['❤️', '💕', '💖', '💗', '💝', '💓'][i % 6]}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  
                  <div className="finale-content" style={{
                    animation: 'fadeInScale 1s ease-out',
                    animationDelay: '1s',
                    animationFillMode: 'backwards'
                  }}>
                    <h1>🎉 생일 축하해요! 🎉</h1>
                    <p>
                      세상에서 가장 특별한 당신에게<br/>
                      가장 행복한 생일을 보내요!<br/>
                      언제나 당신 곁에 있을게요 💝
                    </p>
                    <strong>사랑해요! ❤️</strong>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}