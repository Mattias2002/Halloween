import React from 'react';

function DataDescription() {
  return (
    <div className="data-description">
      <h2>About the Data</h2>
      <p>
        This website presents a comprehensive ranking of Halloween candies based on data from The Halloween Candy Power Ranking dataset.
        The dataset includes various attributes for each candy, such as whether it contains chocolate, fruit flavors, caramel, and more.
        It also provides a win percentage, which is the overall win percentage of the candy against other candies in matchups.
      </p>
      <p>
        The data was originally collected by FiveThirtyEight and published in their article
        <a href="https://fivethirtyeight.com/features/the-ultimate-halloween-candy-power-ranking/" target="_blank" rel="noopener noreferrer">"The Ultimate Halloween Candy Power Ranking"</a>.
        The win percentage is based on over 269,000 matchups between different candies.
      </p>
      <p>
        Explore the site to discover how your favorite candies stack up against the competition!
      </p>
    </div>
  );
}

export default DataDescription;
