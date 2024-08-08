import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="grid space-y-3 h-screen place-content-center bg-white px-4">
      <h1 className="uppercase tracking-widest text-gray-500">
        404 | Não encontrado
      </h1>
      <Link
        to={`/`}
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg"
      >
        ← Voltar
      </Link>
    </div>
  );
}

export default NotFound;
