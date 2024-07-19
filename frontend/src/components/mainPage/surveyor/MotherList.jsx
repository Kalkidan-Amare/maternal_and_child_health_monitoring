import { Link, NavLink, useParams } from "react-router-dom"

let mothers=[
    {id:1, name:'aberash 1'},
    {id:2, name:'aberash 2'},
    {id:3, name:'aberash 3'},
    {id:4, name:'aberash 4'},
    {id:5, name:'aberash 5'},
    {id:6, name:'aberash 6'},
]
const MotherList=()=>{
    const params=useParams()

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center text-emerald-700">
            {params.type} care
          </h1>
          <div className="space-y-4">
            {mothers.map((val) => (
              <NavLink
                key={val.id}
                to={`/${params.type}/${val.id}/${val.name}`}
                className={({ isActive }) =>
                  `block bg-white p-4 rounded-lg shadow-md hover:bg-gray-50 transition duration-300 ease-in-out ${
                    isActive ? 'bg-emerald-100 text-emerald-800' : 'text-gray-800'
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
    )
}
export default MotherList