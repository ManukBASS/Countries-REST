import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { ENDPOINT_GET as countryApi } from "../Util/countryApi";
import { Link } from 'react-router-dom';

const CountryInfo = () => {

  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { countryName } = useParams();

  const borders = country.map((country) => country.borders);

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`${countryApi}/name/${countryName}`);

        if (!res.ok) throw new Error("Country not found!");

        const data = await res.json();

        setCountry(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCountryByName();
  }, [countryName]);

  return (
    <div className="country__info__wrapper">
      <button>
        <Link to="/">Back</Link>
      </button>

      {isLoading && !error && <h4>Loading country info...</h4>}
      {error && !isLoading && { error }}

      {country?.map((country, index) => (
        <div className="country__info__container" key={index}>
          <div className="country__info-img">
            <img src={country.flags.png} alt="" />
          </div>

          <div className="country__info">
            <h3>{country.name.common}</h3>

            <div className="country__info-left">
              <h5>
                Population:{" "}
                <span>
                  {new Intl.NumberFormat().format(country.population)}
                </span>
              </h5>
              <h5>
                Region: <span>{country.region}</span>
              </h5>
              <h5>
                Sub Region: <span>{country.subregion}</span>
              </h5>
              <h5>
                Capital: <span>{country.capital}</span>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CountryInfo