import React, { useState } from "react";

function IntroSuggest() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div>
      <div className="title">영양제 추천 기능 소개</div>
      <div className="context">
        <ul>
          <li>
            영양제 추천 기능은 AI 챗봇을 통해 사용자가 궁금한 영양제 정보를 쉽고
            편리하게 얻을 수 있도록 돕습니다. 건강 관리에 대한 개인 맞춤형
            솔루션을 제공합니다.
          </li>
          <li>
            챗봇과 대화하며 영양제에 관한 다양한 질문을 할 수 있으며, 텍스트
            기반의 정보 제공뿐만 아니라 음성으로도 답변을 들어 더욱 손쉽게
            이해하고 활용할 수 있습니다.
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
                <strong>LLM (Large Language Model)</strong>
                <ul>
                  <li>
                    {" "}
                    <a
                      href="https://huggingface.co/LGAI-EXAONE/EXAONE-3.0-7.8B-Instruct"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#0073e6", textDecoration: "underline" }}
                    >
                      LGAI-EXAONE/EXAONE-3.0-7.8B-Instruct
                    </a>
                  </li>
                  <li>
                    이 모델은 사용자가 챗봇에 입력한 질문을 이해하고, 사용자의
                    건강 목표와 현재 상황에 가장 적합한 영양제를 추천할 수 있는
                    기능을 제공합니다.
                  </li>
                  <li>
                    챗봇과의 대화를 통해 복합적인 질문을 하더라도 모델이 상황에
                    맞는 답변을 제공합니다. 사용자는 이로써 개인화된 맞춤형
                    영양제 정보를 손쉽게 받아볼 수 있습니다.
                  </li>
                </ul>
              </li>
              <li>
                <strong>TTS (Text-to-Speech)</strong>
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
                    이 기술을 통해 추천된 영양제 정보를 음성으로 들을 수 있으며,
                    화면을 보지 않고도 정보를 쉽게 확인할 수 있어 편리함을
                    더합니다.
                  </li>
                  <li>
                    텍스트와 음성 정보를 동시에 제공하여 시각적 제한이 있거나 더
                    빠르고 직관적인 정보 접근을 원하는 사용자들에게 더 큰 편의를
                    제공합니다.
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

export default IntroSuggest;
