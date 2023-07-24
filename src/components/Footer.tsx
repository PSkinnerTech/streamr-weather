import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white px-6 py-4">
      <div className="container mx-auto grid grid-cols-3 gap-4">
        <div>
          <h2 className="font-bold mb-2">Patrick Skinner</h2>
          <ul className="space-y-1">
            <li>
              <a href="https://patrickskinner.tech">Website</a>
            </li>
            <li>
              <a href="https://twitter.com/PSkinnerTech">Twitter</a>
            </li>
            <li>
              <a href="https://youtube.com/@PSkinnerTech">Youtube</a>
            </li>
            <li>
              <a href="https://github.com/PSkinnerTech">Github</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-2">Project</h2>
          <ul className="space-y-1">
            <li>
              <a href="https://github.com/PSkinnerTech/streamr-weather">
                Project Github Repo
              </a>
            </li>
            <li>
              <a href="https://streamr.network">Streamr Network</a>
            </li>
            <li>
              <a href="https://streamr.network/hub/projects/0xc14edaef028d15867368e7185c553abb2eff7547328a8d6ab995d3c67ded3b5b/overview">
                DIMO Weather
              </a>
            </li>
            <li>
              <a href="https://www.mapbox.com/">Mapbox</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-2">Special Thanks</h2>
          <p>
            `I would like to give a special thanks to the Streamr Team and to
            Developer DAO for making this tutorial possible. 🫶`
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
