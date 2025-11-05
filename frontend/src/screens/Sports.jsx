import React, { useState } from "react";

const tournaments = [
  {
    teamName: "Team 1",
    sport: "Cricket",
    membersRequire: 20,
    teamMembers: [
        { name: "Naimish", role: "Captain" },
        { name: "Aman", role: "Coach" },
        { name: "Rohit", role: "Coach" },
        { name: "Vikram", role: "Coach" },
        { name: "Mohit", role: "Coach" }
    ],
    captain: "Naimish",
    date: "2023-04-01",
    time: "12:00 PM",
    location: "Bangalore",
    status: "Active",
    id: 1,
  },
  {
    teamName: "Team 2",
    sport: "Football",
    membersRequire: 11,
    members: 9,
    captain: "Aman",
    date: "2023-04-02",
    time: "06:00 PM",
    location: "Mumbai",
    status: "Active",
    id: 2,
  },
  {
    teamName: "Team 3",
    sport: "Basketball",
    membersRequire: 10,
    members: 8,
    captain: "Rohit",
    date: "2023-04-03",
    time: "08:00 PM",
    location: "Chennai",
    status: "Active",
    id: 3,
  },
  {
    teamName: "Team 4",
    sport: "Cricket",
    membersRequire: 20,
    members: 15,
    captain: "Naimish",
    date: "2023-04-01",
    time: "12:00 PM",
    location: "Bangalore",
    status: "Active",
    id: 4,
  },
  {
    teamName: "Team 5",
    sport: "Tennis",
    membersRequire: 4,
    teamMembers: [
      { name: "Naimish", role: "Captain" },
    ],
    captain: "Vikram",
    date: "2023-04-04",
    time: "04:00 PM",
    location: "Delhi",
    status: "Active",
    id: 5,
  },
];

function Sports() {
  const [close, setClose] = useState(false);
  const [query, setQuery] = useState("");
  const [showMembers, setShowMembers] = useState(null);
  const q = query.trim().toLowerCase();
  const filtered = tournaments.filter((t) => {
    if (!q) return true;
    return t.sport.toLowerCase().includes(q) || t.teamName.toLowerCase().trim().includes(q);
  });

  return (
    <div
      className={`h-screen overflow-auto w-full transition-all duration-300 grid ${
        close ? "grid-cols-[50px_1fr]" : "grid-cols-[300px_1fr]"
      }`}
    >
      <div className="border-r border-gray-400 bg-gray-200">
        <button
          onClick={() => setClose((prev) => !prev)}
          className="cursor-pointer text-3xl p-3"
        >
          <i className="ri-menu-2-line"></i>
        </button>
        <div className="px-5 overflow-clip">
            <h1 className="whitespace-nowrap text-xl font-semibold">Team Members: {showMembers ? tournaments.find(t=>t.id===showMembers).teamMembers?.length : 0}</h1>
            <div className="mt-5 overflow-y-auto max-h-[50vh] scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100">
                {showMembers ? tournaments.find(t=>t.id===showMembers).teamMembers?.map((m,idx)=>(
                    <div key={idx} className="flex justify-between items-center gap-5 px-3 py-1 hover:bg-gray-300 transition-all duration-300 rounded-2xl cursor-pointer">
                        <p className="text-md font-semibold">{m.name}</p>
                        <p className="text-sm text-gray-600">{m.role}</p>
                    </div>
                )) : null}
            </div>
        </div>
      </div>

      <div className="p-5">
        <div className="grid justify-center grid-cols-1 md:grid-cols-[80%_1fr] gap-5">
          <div className="flex justify-between border border-gray-400 rounded-full items-center">
            {/* Controlled input */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Tournaments by sport (e.g. Cricket) or by Team Name"
              className="py-2 px-4 rounded-full outline-none w-full"
            />
            <button
              onClick={() => setQuery("")}
              className="cursor-pointer flex justify-center items-center hover:bg-gray-300 rounded-full w-10 h-10 px-10 transition-all duration-400"
            >
              <i className="ri-search-line text-xl"></i>
            </button>
          </div>

          <button className="bg-blue-500 rounded-full px-5 py-2 cursor-pointer text-white whitespace-nowrap hover:bg-blue-600">
            Create Tournament
          </button>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            {filtered.map((t, idx) => {
              return (
                <div
                  key={t.id ?? idx}
                  className="bg-white border border-gray-400 rounded-lg p-5 hover:scale-[1.01] shadow-xl transition-all duration-300 cursor-pointer" onClick={()=>setShowMembers(t.id)}
                >
                  <div className="flex justify-between items-center">
                    <div className="leading-[0.2]">
                      <p className="text-xl font-semibold">{t.teamName}</p>
                      <p className="text-sm text-gray-600">{t.sport}</p>
                    </div>
                    <p className="text-white font-semibold bg-black rounded-full px-3">
                      {t.status}
                    </p>
                  </div>

                  <div className="mt-3 space-y-1">
                    <p>
                      <i className="ri-group-line"></i> {t.teamMembers ? t.teamMembers?.length : 0}/
                      {t.membersRequire} members
                    </p>
                    <p>
                      <i className="ri-trophy-line"></i> Captain: {t.captain}
                    </p>
                    <p>
                      <i className="ri-calendar-line"></i> Date: {t.date}
                    </p>
                    <p>
                      <i className="ri-time-line"></i> Time: {t.time}
                    </p>
                    <p>
                      <i className="ri-map-pin-line"></i> Location: {t.location}
                    </p>
                  </div>

                  <button className="bg-black text-white w-full py-2 rounded-full mt-3 hover:bg-black/80 cursor-pointer">
                    Join Team
                  </button>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div className="col-span-full text-center text-gray-500">
                No tournaments found for "
                <span className="font-semibold">{query}</span>"
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sports;
