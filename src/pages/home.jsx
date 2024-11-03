import React, { useState, useEffect } from "react";
import IntroApp from "../components/introContext/introApp";
import IntroSuggest from "../components/introContext/introSuggest";
import IntroSearch from "../components/introContext/introSearch";
import IntroPlanner from "../components/introContext/introPlanner";

function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue || initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (state) {
        localStorage.setItem(key, state);
      }
    } catch (error) {
      console.error(error);
    }
  }, [key, state]);

  return [state, setState];
}

function Main() {
  const CONTENT_KEYS = {
    INTRO_SUGGEST: "IntroSuggest",
    INTRO_SEARCH: "IntroSearch",
    INTRO_PLANNER: "IntroPlanner",
    INTRO_APP: "IntroApp",
  };

  const contentComponents = {
    [CONTENT_KEYS.INTRO_SUGGEST]: <IntroSuggest />,
    [CONTENT_KEYS.INTRO_SEARCH]: <IntroSearch />,
    [CONTENT_KEYS.INTRO_PLANNER]: <IntroPlanner />,
    [CONTENT_KEYS.INTRO_APP]: <IntroApp />,
  };

  const [content, setContent] = useLocalStorage(
    "currentContent",
    CONTENT_KEYS.INTRO_SUGGEST
  );

  const contentOptions = [
    { key: CONTENT_KEYS.INTRO_SUGGEST, label: "추천 기능" },
    { key: CONTENT_KEYS.INTRO_SEARCH, label: "검색 기능" },
    { key: CONTENT_KEYS.INTRO_PLANNER, label: "플래너 기능" },
    { key: CONTENT_KEYS.INTRO_APP, label: "약국이 소개" },
  ];

  return (
    <div className="main_container">
      <div className="main-context">
        <div className="container">
          {contentComponents[content] || <IntroSuggest />}
        </div>
      </div>
      <div className="main-section">
        <div className="intro-btn">
          {contentOptions.map(({ key, label }) => (
            <button
              key={key}
              className={`btn-style ${content === key ? "active" : ""}`}
              onClick={() => setContent(key)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="mascot-container">
          <img src="mascot_f.webp" alt="masf" className="main-mascot" />
        </div>
      </div>
    </div>
  );
}

export default Main;
