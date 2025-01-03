import React from 'react';
import { ChevronLeft, Users, Play, Menu, HelpCircle, Power, Plus } from 'lucide-react';

const ServerBrowser = () => {
  const maps = [
    { name: 'CONQUEST LARGE DAWNBREAKER', image: '/maps/1.png' },
    { name: 'CONQUEST LARGE PROPAGANDA', image: '/maps/2.png' },
    { name: 'CONQUEST LARGE OPERATION LOCKER', image: '/maps/3.png' },
    { name: 'CONQUEST LARGE LANCANG DAM', image: '/maps/4.png' },
    { name: 'CONQUEST LARGE SIEGE OF SHANGHAI', image: '/maps/5.png' },
    { name: 'CONQUEST LARGE GOLMUD RAILWAY', image: '/maps/6.png' }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="p-4 flex items-center gap-4 border-b border-gray-800">
        <ChevronLeft className="h-6 w-6" />
        <span className="text-sm">MULTIPLAYER / SERVER BROWSER /</span>
        <h1 className="text-xl font-bold">SERVER INFO</h1>
      </header>

      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-1">
          <div className="flex flex-col gap-2">
            {[Users, Play, Menu, HelpCircle, Power].map((Icon, i) => (
              <button key={i} className="p-2 hover:bg-gray-800 rounded">
                <Icon className="h-6 w-6" />
              </button>
            ))}
          </div>
        </div>

        <div className="col-span-11">
          <div className="mb-6">
            <div className="flex justify-between mb-4">
              <div>
                <div className="mb-2">3D SPOTTING <span className="text-green-500">ON</span></div>
                <div>ENEMY NAME TAGS <span className="text-green-500">ON</span></div>
              </div>
              <div className="flex gap-2">
                <button className="bg-gray-800 px-4 py-2 rounded flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  SQUAD
                </button>
                <button className="bg-gray-800 px-4 py-2 rounded">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>

          <div className="bg-gray-800 p-4 rounded">
            <h2 className="mb-4">! RC3-BASEMAPS</h2>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <button className="bg-gray-900 p-2 rounded">JOIN</button>
              <button className="bg-gray-900 p-2 rounded">SPECTATE</button>
              <button className="bg-gray-900 p-2 rounded">JOIN AS COMMANDER</button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="mb-2">SETTINGS</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>REGION</div>
                  <div>EUROPE - DE</div>
                  <div>PUNKBASTER</div>
                  <div>ON</div>
                  <div>FAIRFIGHT</div>
                  <div>ON</div>
                  <div>PASSWORD</div>
                  <div>OFF</div>
                  <div>PRESET</div>
                  <div>NORMAL</div>
                </div>
              </div>

              <div>
                <h3 className="mb-2">ADVANCED</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>MINIMAP</div>
                  <div>ON</div>
                  <div>VEHICLES</div>
                  <div>ON</div>
                  <div>TEAM BALANCE</div>
                  <div>ON</div>
                  <div>HUD</div>
                  <div>ON</div>
                  <div>KILL CAM</div>
                  <div>ON</div>
                </div>
              </div>

              <div>
                <h3 className="mb-2">RULES</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>TICKETS</div>
                  <div>400</div>
                  <div>VEHICLE SPAWN DELAY</div>
                  <div>25</div>
                  <div>BULLET DAMAGE</div>
                  <div>100</div>
                  <div>PLAYER HEALTH</div>
                  <div>100</div>
                  <div>PLAYER RESPAWN TIME</div>
                  <div>100</div>
                </div>
              </div>
            </div>
          </div>
            <h2 className="mb-4">MAP ROTATION</h2>
            <div className="grid grid-cols-4 gap-4">
              {maps.map((map, i) => (
                <div key={i} className="relative">
                  <img src={map.image} alt={map.name} className="w-full rounded" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50">
                    <div className="text-sm">{map.name}</div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServerBrowser;