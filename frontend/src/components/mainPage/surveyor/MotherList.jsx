import { Link, NavLink, useParams } from "react-router-dom";
import { useGet } from "@/components/hooks/useDjango";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
let motherlist = [
  { id: 1, name: "aberash 1" },
  { id: 2, name: "aberash 2" },
  { id: 3, name: "aberash 3" },
  { id: 4, name: "aberash 4" },
  { id: 5, name: "aberash 5" },
  { id: 6, name: "aberash 6" },
];
const MotherList = () => {
  const params = useParams();

  const [mothers, setMothers] = useState(null);

  const { data, error: queryError } = useGet(
    "fetchData",
    "mothers/mother_information"
  );

  function filterPregnant(arr) {
    if (params.type == "postnatal") {
      return arr.filter((item) => item.pregnant_or_lactating === "Lactating");
    } else if (params.type == "antenatal") {
      return arr.filter((item) => item.pregnant_or_lactating === "Pregnant");
    }
  }

  useEffect(() => {
    if (data) {
      console.log("GET request response:", data);
      setMothers(filterPregnant(data.data.results));
      setFilteredData(filterPregnant(data.data.results));
    }
    if (queryError) {
      console.error("GET request error:", queryError);
    }
  }, [data, queryError, params]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(mothers);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = mothers.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-emerald-700 capitalize">
          {params.type} follow ups
        </h1>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Search names..."
            value={searchTerm}
            onChange={handleSearch}
            className="focus:border-0"
          />
          {filteredData &&
            filteredData.map((val) => (
              <NavLink
                key={val.id}
                to={`/surveyor/${params.type}/${val.id}/${val.name}`}
                className={({ isActive }) =>
                  `block bg-white p-4 rounded-lg shadow-md hover:bg-gray-50 transition duration-300 ease-in-out ${
                    isActive
                      ? "bg-emerald-100 text-emerald-800"
                      : "text-gray-800"
                  }`
                }
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">{val.name}</span>
                  <span className="px-3 py-1 text-sm font-semibold text-emerald-600 bg-emerald-100 rounded-full">
                    View
                  </span>
                </div>
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};
export default MotherList;
