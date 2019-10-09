import React, { useState, useEffect } from 'react';
import PortfolioItem from "../components/portfolioItem/PortfolioItem"

const Portfolio = () => {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        const fetchPortfolios = async () => {
          const res = await fetch('http://localhost:5000/api/v1/portfolios', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          });
          if (res.status === 200) {
              const data = await res.json();
              setPortfolios([...data.data.portfolios]);
          }
        };
        fetchPortfolios();
      }, []);

    if(!portfolios.length) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1> Portfolio Page</h1>
            {portfolios.map(({_id, ...props }) => (
              <PortfolioItem key={_id} {...props} />
            ))}
        </div>
    )};

export default Portfolio;