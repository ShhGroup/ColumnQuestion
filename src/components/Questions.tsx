import { useState } from "react";
import finalButton from "../config/finalButton";

function Questions() {
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleAnswer = (questionNumber: any) => {
    setAnsweredQuestions((prev) => new Set([...prev, questionNumber]));
    if (questionNumber < 3) {
      setTimeout(() => {
        setCurrentQuestion(questionNumber + 1);
      }, 300);
    }
  };

  const isQuestionUnlocked = (questionNumber: any) => {
    return questionNumber === 1 || answeredQuestions.has(questionNumber - 1);
  };

  const isQuestionAnswered = (questionNumber: any) => {
    return answeredQuestions.has(questionNumber);
  };

  return (
    <section className="flex flex-col w-full items-center">
      {answeredQuestions.size < 3 && (
        <div className="w-full">
          <div className="w-[131px] h-[31px] bg-[#FF0000] mt-[19px] text-white rounded-[3px] ml-[11px] flex items-center pl-1 text-[20px] gap-[2px] font-bold">
            Question <span className="text-[30px]">{currentQuestion}</span>
            <span>/3</span>
          </div>
        </div>
      )}
      
      {answeredQuestions.size < 3 && (
        <div className="w-full flex flex-col items-center px-[11px] mt-4">
          {/* Question 1 */}
          <div
            className={`w-full transition-all duration-500 ${
              isQuestionAnswered(1)
                ? "opacity-0 max-h-0 overflow-hidden"
                : "opacity-100 max-h-96"
            }`}
          >
            <h3 className="text-[24px] font-black">Do you live in the USA?</h3>
            <p className="text-[#00000078] leading-[18px] text-start text-[14px] font-medium">
              We are looking for participants from the U.S.
            </p>
            <div className="mt-3 flex flex-col items-center gap-2.5">
              <button
                className="max-w-[396px] w-full h-[41px] font-semibold text-white text-[24px] rounded-[14px] border-2 border-white bg-[#FF0000] hover:bg-[#CC0000] transition-colors duration-200"
                style={{ boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.25)" }}
                onClick={() => handleAnswer(1)}
              >
                Yes
              </button>
              <button
                className="max-w-[396px] w-full h-[41px] font-semibold text-white text-[24px] rounded-[14px] border-2 border-white bg-[#FF0000] hover:bg-[#CC0000] transition-colors duration-200"
                style={{ boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.25)" }}
                onClick={() => handleAnswer(1)}
              >
                No
              </button>
            </div>
          </div>

          {/* Question 2 */}
          <div
            className={`w-full transition-all duration-500 ${
              !isQuestionUnlocked(2)
                ? "opacity-30 pointer-events-none mt-10"
                : isQuestionAnswered(2)
                ? "opacity-0 max-h-0 overflow-hidden"
                : "opacity-100 max-h-96"
            }`}
          >
            <h3 className="text-[20px] leading-[24px] font-black">
              How often do you eat at McDonald's?
            </h3>
            <div className="mt-3 flex flex-col items-center gap-2.5">
              <button
                className="max-w-[396px] w-full h-[41px] font-semibold text-white text-[24px] rounded-[14px] border-2 border-white bg-[#FF0000] hover:bg-[#CC0000] transition-colors duration-200 disabled:hover:bg-[#FF0000]"
                style={{ boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.25)" }}
                disabled={!isQuestionUnlocked(2)}
                onClick={() => handleAnswer(2)}
              >
                Daily
              </button>
              <button
                className="max-w-[396px] w-full h-[41px] font-semibold text-white text-[24px] rounded-[14px] border-2 border-white bg-[#FF0000] hover:bg-[#CC0000] transition-colors duration-200 disabled:hover:bg-[#FF0000]"
                style={{ boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.25)" }}
                disabled={!isQuestionUnlocked(2)}
                onClick={() => handleAnswer(2)}
              >
                Weekly
              </button>
              <button
                className="max-w-[396px] w-full h-[41px] font-semibold text-white text-[24px] rounded-[14px] border-2 border-white bg-[#FF0000] hover:bg-[#CC0000] transition-colors duration-200 disabled:hover:bg-[#FF0000]"
                style={{ boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.25)" }}
                disabled={!isQuestionUnlocked(2)}
                onClick={() => handleAnswer(2)}
              >
                Monthly
              </button>
              <button
                className="max-w-[396px] w-full h-[41px] font-semibold text-white text-[24px] rounded-[14px] border-2 border-white bg-[#FF0000] hover:bg-[#CC0000] transition-colors duration-200 disabled:hover:bg-[#FF0000]"
                style={{ boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.25)" }}
                disabled={!isQuestionUnlocked(2)}
                onClick={() => handleAnswer(2)}
              >
                Never
              </button>
            </div>
          </div>

          {/* Question 3 */}
          <div
            className={`w-full transition-all duration-500 ${
              !isQuestionUnlocked(3)
                ? "opacity-30 pointer-events-none mt-10"
                : isQuestionAnswered(3)
                ? "opacity-0 max-h-0 overflow-hidden"
                : "opacity-100 max-h-96"
            }`}
          >
            <h3 className="text-[20px] leading-[24px] font-black">
              How do you usually discover deals and promotions at McDonald's?
            </h3>
            <div className="mt-3 flex flex-col items-center gap-2.5">
              <button
                className="max-w-[396px] w-full h-[41px] font-semibold text-white text-[24px] rounded-[14px] border-2 border-white bg-[#FF0000] hover:bg-[#CC0000] transition-colors duration-200 disabled:hover:bg-[#FF0000]"
                style={{ boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.25)" }}
                disabled={!isQuestionUnlocked(3)}
                onClick={() => handleAnswer(3)}
              >
                Store flyers
              </button>
              <button
                className="max-w-[396px] w-full h-[41px] font-semibold text-white text-[24px] rounded-[14px] border-2 border-white bg-[#FF0000] hover:bg-[#CC0000] transition-colors duration-200 disabled:hover:bg-[#FF0000]"
                style={{ boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.25)" }}
                disabled={!isQuestionUnlocked(3)}
                onClick={() => handleAnswer(3)}
              >
                Social media
              </button>
              <button
                className="max-w-[396px] w-full h-[41px] font-semibold text-white text-[24px] rounded-[14px] border-2 border-white bg-[#FF0000] hover:bg-[#CC0000] transition-colors duration-200 disabled:hover:bg-[#FF0000]"
                style={{ boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.25)" }}
                disabled={!isQuestionUnlocked(3)}
                onClick={() => handleAnswer(3)}
              >
                Mobile app
              </button>
              <button
                className="max-w-[396px] w-full h-[41px] font-semibold text-white text-[24px] rounded-[14px] border-2 border-white bg-[#FF0000] hover:bg-[#CC0000] transition-colors duration-200 disabled:hover:bg-[#FF0000]"
                style={{ boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.25)" }}
                disabled={!isQuestionUnlocked(3)}
                onClick={() => handleAnswer(3)}
              >
                Friends/Family
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Completion message - Full width */}
      {answeredQuestions.size === 3 && (
        <div className="w-full flex flex-col items-center animate-fade-in ">
          {/* Red header - Full width */}
          <div className="w-full bg-[#FF0000] text-white text-center py-2">
            <h2 className="text-[32px] font-bold">Congratulations!</h2>
          </div>

          {/* Content area - Full width with padding */}
          <div className="w-full bg-white flex flex-col items-center pt-8">
            <img src="./images/image1.png" alt="McDonald's prizes" className="max-w-full h-auto mb-8"/>

            {/* Text */}
            <div className="text-center mb-8 max-w-md">
              <p className="text-black font-medium text-[14px] leading-[22px]">
                Click the button below to enter your delivery details
                <br />
                and claim your $250 gift card
              </p>
            </div>

            {/* START button */}
              <button
                className="max-w-[396px] mt-2 w-full h-[58px] uppercase font-semibold text-white text-[24px] rounded-[14px] border-2 border-white bg-[#FF0000] hover:bg-[#CC0000] transition-colors duration-200 disabled:hover:bg-[#FF0000]"
                style={{ boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.25)" }}
                onClick={()=>finalButton('CTAbutton')}
              >
                Start
              </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Questions;