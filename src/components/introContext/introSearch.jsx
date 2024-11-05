import React, { useState } from "react";

function IntroSearch() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div>
      <div className="title">검색 기능 소개</div>
      <div className="context">
        <ul>
          <li>
            검색 기능은 사용자가 직접 업로드하거나 실시간으로 촬영한 이미지를
            통해 영양제 정보를 손쉽게 확인할 수 있는 기능입니다.
          </li>
          <li>
            PaddleOCR을 사용하여 이미지에서 텍스트를 추출하고, 이를 바탕으로 LLM
            모델이 영양제의 특성과 효능, 주의사항 등의 정보를 분석해 제공합니다.
          </li>
          <li>
            이를 통해 사용자는 원하는 영양제에 대한 정보를 텍스트 입력 없이
            이미지로 빠르게 검색하고, 필요한 정보를 간편하게 얻을 수 있습니다.
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
                OCR(Optical Character Recognition)
                <ul>
                  <li>
                    <a
                      href="https://github.com/PaddlePaddle/PaddleOCR"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#0073e6", textDecoration: "underline" }}
                    >
                      PaddleOCR
                    </a>
                  </li>
                  <li>
                    사용자가 업로드하거나 실시간으로 촬영한 사진에서 텍스트를
                    정확하게 추출하여 영양제 이름과 성분을 인식합니다.
                  </li>
                  <li>
                    이 기능을 통해 사용자는 영양제 성분을 쉽게 확인하고, 검색
                    기능을 더욱 편리하게 사용할 수 있습니다.
                  </li>
                </ul>
              </li>
              <li>
                LLM(Large Language Model)
                <ul>
                  <li>
                    이미지에서 추출된 텍스트 정보를 바탕으로 영양제의 효능과
                    주의사항 등 상세 정보를 분석하고 사용자에게 제공합니다.
                  </li>
                  <li>
                    이를 통해 사용자는 챗봇과의 대화 없이도 맞춤형 영양제 정보를
                    손쉽게 얻을 수 있습니다.
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

export default IntroSearch;
