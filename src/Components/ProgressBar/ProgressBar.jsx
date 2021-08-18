import React from "react";
import {
  ContainerProgress,
  ContainerProgressDone,
} from "../Details/Details.styled";
import { useState } from "react";

const ProgressBar = ({ done }) => {
  const [style, setStyle] = useState({ opacity: 0, width: 0 });

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(newStyle);
  }, 1000);

  return (
    <div>
      <ContainerProgress className="progress">
        <ContainerProgressDone className="progressDone" style={style}>
          {done}
        </ContainerProgressDone>
      </ContainerProgress>
    </div>
  );
};
export { ProgressBar };
