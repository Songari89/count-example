import React, { useEffect, useState } from "react";
import useMovie from "../hooks/useMovie";

export default function Movie() {
  const [checked, setChecked] = useState(false);
  const [loading, error, movie] = useMovie({ next: checked });
  const handleChange = () => setChecked((prev) => !prev);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p>(error)</p>;

  return (
    <div className="checkcontainer">
      <ul className="movielist">
        {movie.map((list) => (
          <li key={list}>
            <div className="moviewrap">
              <img src={list.image} />
              <p>
                {list.name} : {list.vote}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      ></input>
      <label className="label" htmlFor="checkbox">
        다음 투표를 미리 확인해보세요!
      </label>
    </div>
  );
}
