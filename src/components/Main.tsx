function Main({ onStartClick }: { onStartClick: () => void }) {
  return (
    <div className="w-full m-auto h-full flex flex-col items-center">
      <h1 className="text-[24px] font-medium text-center leading-[27px] mt-4">
        Exciting times! <br /> You are one of the first to join <br /> the{" "}
        <span className="text-[#F00] font-extrabold">Shop Smart Program!</span>
      </h1>
      <div
        className="w-[93%] rounded-[13px] py-[20px] mt-4 px-[16px]"
        style={{ boxShadow: "0 4px 10px 0 rgba(107, 107, 107, 0.45)" }}
      >
        <p className="text-black text-start text-[14px] leading-[22px] font-medium">
          Answer 3 simple questions about your shopping <br /> routine, and get
          a{" "}
          <span className="bg-[#FF0000] text-white p-1 rounded-[5px]">
            $250 McDonald's Gift Card
          </span>{" "}
          <br /> Don't miss out on this fantastic offer!
        </p>
        <p className="text-black text-start text-[14px] leading-[22px] mt-2 font-medium">
          Excited to get more from your shopping? <br /> Click on the  <span className="bg-[#FF0000] text-white p-1 rounded-[5px]">START</span> button
          below.
        </p>
        <p className="text-black text-start mt-2 text-[14px] leading-[22px] font-medium">
          You will have exactly <b>3 minutes</b>to secure your reward
        </p>
      </div>
      <img src="./images/image1.png" alt="image" className="mt-5"/>
      <p className="text-[#FF0000] text-[24px] font-black mt-2">Shop Smart Program!</p>
      
      <style>{`
        @keyframes gentle-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.02);
            opacity: 0.9;
          }
        }
        
        .pulse-button {
          animation: gentle-pulse 3s infinite ease-in-out;
          transition: all 0.2s ease;
        }
        
        .pulse-button:hover {
          transform: scale(1.02);
          background-color: #CC0000;
          animation-play-state: paused;
        }
        
        .pulse-button:active {
          transform: scale(0.98);
        }
      `}</style>
      
      <button 
        className="pulse-button text-[30px] font-semibold uppercase text-white bg-[#FF0000] w-[90%] h-[58px] border-2 border-white rounded-[14px] mt-6"
        style={{boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.25)'}}
        onClick={onStartClick}
      >
        START
      </button>
    </div>
  );
}

export default Main;