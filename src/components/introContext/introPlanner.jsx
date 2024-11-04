import React, { useState } from "react";

function IntroPlanner() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div>
      <div className="title">플래너 소개</div>
      <div className="context">
        <ul>
          <li>
            오늘 챙겨야 할 영양제를 모두 섭취했는지 궁금하신가요? 이제 간단한
            음성 명령으로 쉽게 확인해보세요. 음성만으로도 섭취 여부를 체크하고,
            기록을 통해 건강 관리가 더욱 편리해집니다.
          </li>
          <li>
            건강 관리를 더욱 간편하게! RECORD 버튼을 눌러 섭취 완료를 말로
            남기고, STOP 버튼으로 음성을 마무리하세요. 자동으로 텍스트 변환 후
            이모티콘이 캘린더에 기록되어 매일의 섭취 상황을 생생하게 확인할 수
            있습니다.
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
                ARS (Automatic Speech Recognition)
                <ul>
                  <li>
                    {" "}
                    <a
                      href="https://huggingface.co/openai/whisper-large"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#0073e6", textDecoration: "underline" }}
                    >
                      openai / whisper-large
                    </a>
                  </li>
                  <li>
                    사용자의 음성 명령을 인식하여 편리하게 챗봇과 소통할 수 있는
                    기능을 제공합니다.
                  </li>
                  <li>
                    음성으로 질문을 입력하면, 챗봇이 상황에 맞는 최적의 영양제를
                    추천하여 건강 관리가 더욱 쉬워집니다.
                  </li>
                  <li>
                    맞춤형 영양제 정보가 필요한가요? 챗봇과의 자연스러운 대화를
                    통해 나에게 꼭 맞는 영양제 정보를 손쉽게 받아보세요.
                  </li>
                </ul>
              </li>
              <li>
                LLM (Large Language Model)
                <ul>
                  <li>llama3-8b-8192</li>
                  <li>
                    감정 분석 기능을 활용하여 사용자의 말 속에 담긴 감정을
                    파악하고, 그에 맞는 이모지를 선택해 캘린더에 자동으로
                    기록합니다.
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
