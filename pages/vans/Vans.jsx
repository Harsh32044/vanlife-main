import React from "react";
import VanComp from "../../components/VanComp";
import { useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export async function loader() {
  return await getVans()
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const vans = useLoaderData()


  const filteredVan = typeFilter
    ? vans.filter((van) => van.type.toUpperCase() == typeFilter.toUpperCase())
    : vans;
  
  const vanElements  = <>
  {
    filteredVan.map((van) => (
      <VanComp
        key={van.id}
        vanItem={van}
        searchParams={searchParams}
        typeFilter={typeFilter}
      />
    ))
  }
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
