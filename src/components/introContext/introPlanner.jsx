import React, { useState } from "react";

function IntroPlanner() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div>
      <div className="title">검색 소개</div>
      <div className="context">
        <ul>
          <li>
            영양제 추천 기능은 챗봇을 통해 영양제에 대한 다양한 정보를 쉽게 얻을
            수 있는 기능입니다.
          </li>
          <li>
            챗봇과 대화하며 궁금한 내용을 질문하면, 필요한 정보를 텍스트로
            제공받고, 음성으로 답변을 들을 수도 있어 편리합니다.
          </li>
        </ul>
      </div>

      <div className="title">활용 모델 소개</div>
      <div
        className="accordion"
        onClick={toggleAccordion}
        style={{ cursor: "pointer" }}
      >
        <div className="accordion-title">
          {isAccordionOpen ? "▼" : "▶"} AI 기반 기술 소개
        </div>
        {isAccordionOpen && (
          <div className="context">
            <ul>
              <li>
                LLM(Large Language Model)
                <ul>
                  <li></li>
                  <li>
                    사용자가 챗봇에 입력한 질문에 대해 상황에 맞는 영양제를
                    추천해 줍니다.
                  </li>
                  <li>
                    챗봇과의 대화를 통해 개인에게 맞는 맞춤형 영양제 정보를
                    손쉽게 얻을 수 있습니다.
                  </li>
                </ul>
              </li>
              <li>
                TTS(Text-to-Speech)
                <ul>
                  <li>
                    {" "}
                    <a
                      href="https://pypi.org/project/gTTS/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#0073e6", textDecoration: "underline" }}
                    >
                      gTTS - Google Text-to-Speech
                    </a>
                  </li>
                  <li>
                    기술을 통해 추천된 영양제 정보를 음성으로 들을 수 있습니다.
                  </li>
                  <li>
                    이를 통해 사용자는 시각적 정보뿐만 아니라, 음성으로도 답변을
                    편리하게 확인할 수 있습니다.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default IntroPlanner;
