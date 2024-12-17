import { useEffect, useState } from "react";
import type { programsType } from "../types/programsType";

export default function Programs() {
  const [series, setSeries] = useState<programsType[] | null>(null);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(`${API_URL}/api/programs`)
      .then((response) => response.json())
      .then((data) => setSeries(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <section className="series">
        {series?.map((s: programsType) => (
          <article className="seriesCard" key={s.id}>
            <img src={s.poster} alt={s.title} />
            <h2>Titre : {s.title}</h2>
            <h2>Synopsis: {s.synopsis}</h2>
            <h2>Country: {s.country}</h2>
            <h2>Year: {s.year}</h2>
          </article>
        ))}
      </section>
    </>
  );
}
