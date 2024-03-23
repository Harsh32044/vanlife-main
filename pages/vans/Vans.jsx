import React from "react";
import VanComp from "../../components/VanComp";
import { useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null)
  const typeFilter = searchParams.get("type");

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      }
      catch (err) {
        setError(err)
      }
      finally{
        setLoading(false);
      }
    }

    loadVans();
  }, []);

  const filteredVan = typeFilter
    ? vans.filter((van) => van.type.toUpperCase() == typeFilter.toUpperCase())
    : vans;
  
  const vanElements  = <>
    {filteredVan.length > 0 ? (
            filteredVan.map((van) => (
              <VanComp
                key={van.id}
                vanItem={van}
                searchParams={searchParams}
                typeFilter={typeFilter}
              />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
    </>
  
  const handleFilterChange = (key, newValue) => {
    setSearchParams((prevParams) => {
      if (newValue === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, newValue);
      }
      return prevParams;
    });
  };

  if (loading) {
    return (
      <h1 aria-live="polite" style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
        Hang On! Loading...
      </h1>
    );
  }

  if (error) {
    return (
    <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", }} 
      aria-live="assertive"> There was an error: {error.message}
      </h1>
    )
  }

  return (
    <div className="vans-route">
      <div className="vans-container">
        <div className="vans-route-heading">Explore our van options</div>
        <div className="van-list-filter-buttons">
          <button
            onClick={() => handleFilterChange("type", "simple")}
            className={`van-type simple ${
              typeFilter != null && typeFilter.toLowerCase() == "simple"
                ? "selected"
                : null
            }`}
          >
            Simple
          </button>
          <button
            onClick={() => handleFilterChange("type", "luxury")}
            className={`van-type luxury ${
              typeFilter != null && typeFilter.toLowerCase() == "luxury"
                ? "selected"
                : null
            }`}
          >
            Luxury
          </button>
          <button
            onClick={() => handleFilterChange("type", "rugged")}
            className={`van-type rugged ${
              typeFilter != null && typeFilter.toLowerCase() == "rugged"
                ? "selected"
                : null
            }`}
          >
            Rugged
          </button>
          {typeFilter && (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="van-type clear-filters"
            >
              Clear Filter
            </button>
          )}
        </div>
        <div className="vans-grid">
          {vanElements}
        </div>
      </div>
    </div>
  );
}
