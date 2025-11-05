import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
const menuItems = [
  {
    title: "Home",
    links: ["All", "Promotions", "Announcements"],
  },
  {
    title: "Opportunities",
    links: ["All", "Placement", "Internship", "Hackathon"],
  },
  {
    title: "Team-Up",
    links: ["Hackathon", "Games", "Outing"],
  },
  {
    title: "Order Food",
    links: ["Green Chilli", "Hungry Nites", "Cafeteria", "Healthy Hut", "Big Treat"],
  },
  {
    title: "Campus OLX",
    links: [],
  },
  {
    title: "Messages",
    links: [],
  },
  {
    title: "Notifications",
    links: [],
  },
  {
    title: "Profile",
    links: [],
  },
];

function Header() {
  const [active, setActive] = useState(null);

  return (
    <header className="flex justify-center w-full bg-linear-to-r from-white to-[#4F46E5] py-3 shadow-md">
      <nav className="flex gap-8 items-center">
        {menuItems.map((item, index) => (
          <div
            key={item.title}
            className="relative group"
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer font-semibold hover:text-[#2E2BB3] transition-all duration-300">
              <Link to={`/${item.title.toLowerCase().replace(/\s+/g, "-")}`}>
                {item.title}
              </Link>

              {item.links.length > 0 && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>

            {/* Dropdown */}
            {item.links.length > 0 && (
              <div
                className={`absolute left-0 mt-2 bg-white rounded-md shadow-lg border border-gray-200 py-2 transition-all duration-300 transform origin-top ${
                  active === index
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible"
                }`}
              >
                {item.links.map((link) => (
                  <Link
                    key={link}
                    to={`/${item.title.toLowerCase()}/${link
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#4F46E5] transition-all duration-200 whitespace-nowrap"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}

export default Header;
