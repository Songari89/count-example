import React, { useState } from "react";
import Movie from "./components/Movie";

export default function AppMovie() {
  const [showmovie, setShowmovie] = useState(false);
  return (
    <div>
      <button
        className="showbutton"
        onClick={() => setShowmovie((prev) => !prev)}
      >
        지난 투표 결과 보기{" "}
      </button>
      {showmovie && <Movie />}
    </div>
  );
}
