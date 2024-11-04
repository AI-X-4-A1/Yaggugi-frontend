import React from "react";

function IntroApp() {
  return (
    <div>
      <div className="title">약국이 소개</div>
      <div className="context">
        <ul>
          <li>
            약국이는 인공지능을 활용하여 사용자 맞춤형 영양제 정보를 제공하고
            섭취 일정을 체계적으로 관리할 수 있는 건강 관리 앱입니다.
          </li>
          <li>
            Python과 PyTorch 기반으로 구축된 AI 모델을 통해 영양제의 성분과
            효능을 분석하고, 사용자의 건강 상태와 필요에 맞는 최적의 영양제
            조합을 추천합니다.
          </li>
          <li>
            React와 Bootstrap을 사용하여 직관적이고 반응형인 UI를 설계해, 누구나
            손쉽게 접근할 수 있는 사용자 경험을 제공합니다.
          </li>
        </ul>
      </div>
      <div className="title">주요 기능</div>
      <ul>
        <li>영양제 조합 및 추천</li>
        <ul>
          <li>LLM모델</li>
          <li>TTS모델</li>
        </ul>
        <li>검색 기능</li>
        <ul>
          <li>OCR모델</li>
        </ul>
        <li>영양제 플래너 기능</li>
        <ul>
          <li>ASR모델</li>
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
