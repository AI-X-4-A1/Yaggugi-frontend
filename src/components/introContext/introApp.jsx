import React from "react";

function IntroApp() {
  return (
    <div>
      <div className="title">약국이 소개</div>
      <div className="context">
        <ul>
          <li>
            약국이는 인공지능 기술을 활용하여 개인 맞춤형 영양제 정보를
            제공하고, 사용자가 영양제 섭취를 체계적으로 관리할 수 있도록 돕는
            종합 건강 관리 앱입니다.
          </li>
          <li>
            Python과 PyTorch 기반의 AI 모델을 통해 각 영양제의 성분과 효능을
            깊이 있게 분석하고, 사용자 개개인의 건강 상태와 필요에 최적화된
            영양제 조합을 추천하여 건강 관리의 질을 높입니다.
          </li>
          <li>
            직관적이고 반응형인 사용자 인터페이스(UI)를 제공하기 위해 React와
            Bootstrap을 활용하여 누구나 쉽게 접근할 수 있는 사용자 경험을
            구현하였습니다. 특히, 모바일 환경에서도 최적의 사용성을 제공합니다.
          </li>
        </ul>
      </div>
      <div className="title">주요 기능</div>
      <ul>
        <li className="context">영양제 추천</li>
        <ul>
          <li className="context">
            <strong>LLM 모델:</strong> 사용자가 입력한 건강 정보를 바탕으로,
            사용자의 필요에 맞는 영양제를 추천해줍니다.
          </li>
          <li className="context">
            <strong>TTS 모델:</strong> 추천된 영양제 정보를 음성으로 제공하여,
            시각적인 확인 없이도 손쉽게 정보를 받아볼 수 있습니다.
          </li>
        </ul>
        <li className="context">검색 기능</li>
        <ul>
          <li className="context">
            <strong>OCR 모델:</strong> 업로드된 이미지나 실시간으로 촬영된
            사진에서 영양제의 이름과 성분을 정확하게 추출하여, 사용자가 원하는
            영양제 정보를 빠르게 검색할 수 있습니다.
          </li>
          <li className="context">
            <strong>LLM 모델:</strong> 이미지에서 추출된 텍스트 정보를 바탕으로,
            해당 영양제의 효능, 주의사항 등 상세 정보를 제공하여 사용자가
            영양제를 보다 깊이 있게 이해할 수 있도록 돕습니다.
          </li>
        </ul>
        <li className="context">플래너 기능</li>
        <ul>
          <li className="context">
            <strong>ASR 모델:</strong> 사용자가 음성 명령을 통해 섭취 일정을
            기록하거나 확인할 수 있도록 지원합니다.
          </li>
          <li className="context">
            <strong>LLM 모델:</strong> 사용자의 음성을 텍스트로 변환하여, 기록한
            영양제 섭취 상태를 자동으로 캘린더에 표시하고, 필요 시 감정 분석을
            통해 이모지로 상태를 나타냅니다.
          </li>
        </ul>
      </ul>
      <div className="title">버전 개요</div>
      <div className="badge">
        <img
          src="https://img.shields.io/badge/React-v18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white"
          alt="React Badge"
        />
        <img
          src="https://img.shields.io/badge/Bootstrap-v5.3.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"
          alt="Bootstrap Badge"
        />
        <img
          src="https://img.shields.io/badge/Python-v3.12.7-3776AB?style=for-the-badge&logo=python&logoColor=white"
          alt="Python Badge"
        />
        <img
          src="https://img.shields.io/badge/PyTorch-v2.5.1-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"
          alt="PyTorch Badge"
        />
        <img
          src="https://img.shields.io/badge/FastAPI-v0.115.4-009688?style=for-the-badge&logo=fastapi&logoColor=white"
          alt="FastAPI Badge"
        />
      </div>
    </div>
  );
}

export default IntroApp;
