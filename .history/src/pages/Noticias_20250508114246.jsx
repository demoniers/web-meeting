import { useEffect, useState } from "react";

export default function Noticias() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-green-400 text-3xl font-bold">Últimas Noticias</h1>
      {news.length > 0 ? (
        <div className="mt-4 space-y-4">
          {news.map((article) => (
            <div key={article.id} className="border p-4">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p>{article.content}</p>
              <small className="text-gray-400">{new Date(article.date).toLocaleDateString()}</small>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 mt-4">No hay noticias disponibles.</p>
      )}
    </div>
  );
}
