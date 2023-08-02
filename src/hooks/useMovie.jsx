import React, { useEffect, useState } from "react";

export default function useMovie({ next }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`data/${next? "pre" : ""}movie.json`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((e) => setError("에러 발생!"))
      .finally(() => setLoading(false));
  }, [next]);

  return [loading, error, movie];
}
