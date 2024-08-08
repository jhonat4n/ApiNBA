import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Detalhes() {
  const { id } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    fetch("/nba.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedTeam = data.find((team) => team.id === parseInt(id));
        setTeam(selectedTeam);
      });
  }, [id]);

  if (!team) {
    return <div>Carregando...</div>;
  }

  return (
    <main className="w-full h-screen flex justify-center items-center flex-col">
      <Link to="/" className="font-bold mb-2">← Voltar</Link>
      <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <img alt="" src={team.img} className="h-56 w-full object-cover" />
        <hr />
        <div className="p-4 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">{team.name}</h3>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {team.description}
          </p>
        </div>
      </article>
    </main>
  );
}
