import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego === characters) return <></>;

  return <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div
      className="card mb-3 animate__animated animate__fadeIn"
      style={{ maxWidth: "540px" }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={heroImageUrl} className="card-img" alt={superhero} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {/* {alter_ego !== characters && charactersByHero} */}
            <CharactersByHero alter_ego={alter_ego} characters={characters} />
            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>

            <Link to={`/hero/${id}`}>Más...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};