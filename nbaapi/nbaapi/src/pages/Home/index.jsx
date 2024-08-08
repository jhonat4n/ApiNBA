import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [selectedtitulos, setSelectedtitulos] = useState("Todos");
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("/nba.json")
      .then((response) => response.json())
      .then((data) => setTeams(data));
  }, []);

  const handleChange = (event) => {
    setSelectedtitulos(event.target.value);
  };

  const filteredTeams =
    selectedtitulos === "Todos"
      ? teams
      : teams.filter(
          (team) => team.championships === parseInt(selectedtitulos)
        );

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">NBA 1996 - Times</h1>
        <div>
          <label htmlFor="titulos" className="mr-2 font-bold">
            Títulos:
          </label>
          <select
            className="border-b-2 border-black"
            id="titulos"
            onChange={handleChange}
            value={selectedtitulos}
          >
            <option value="Todos">Todos</option>
            <option value="0">0 titulos</option>
            <option value="1">1 titulo</option>
            <option value="2">2 titulos</option>
            <option value="3">3 titulos</option>
            <option value="5">5 titulos</option>
            <option value="6">6 titulos</option>
            <option value="12">12 titulos</option>
          </select>
        </div>
      </div>
      <hr className="my-4" />
      <main>
        <ul className="max-w-[1440px] flex flex-wrap items-center justify-center mx-auto gap-4">
          {filteredTeams.map((team) => (
            <li className="w-60 shadow-2xl rounded-xl" key={team.id}>
              <img
                className="h-52 w-full object-cover rounded-t-xl"
                src={team.img}
                alt={team.name}
              />
              <hr />
              <div className="px-4 pb-4">
                <h2 className="text-center py-2 font-bold">{team.name}</h2>
                <hr />
                <div className="py-2 space-y-1">
                <p>
                  <strong>Cidade:</strong> {team.city}
                </p>
                <p>
                  <strong>Arena:</strong> {team.arena}
                </p>
                <p>
                  <strong>Coach:</strong> {team.coach}
                </p>
                <p>
                  <strong>Títulos:</strong> {team.championships}
                </p>
                </div>
                <Link to={`/detalhes/${team.id}`} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg">
                  Ver Mais
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Home;
