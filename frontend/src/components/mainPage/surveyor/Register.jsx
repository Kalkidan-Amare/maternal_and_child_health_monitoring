import { NavLink, Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-emerald-700">Register</h1>
        <nav className="space-y-4">
          <NavLink 
            to="register-child" 
            className={({ isActive }) => 
              `block text-emerald-500 hover:text-emerald-700 ${isActive ? 'font-bold' : ''}`
            }
          >
            Register a child
          </NavLink>
          <NavLink 
            to="register-mother" 
            className={({ isActive }) => 
              `block text-emerald-500 hover:text-emerald-700 ${isActive ? 'font-bold' : ''}`
            }
          >
            Register a mother
          </NavLink>
        </nav>
        
        <h1 className="text-3xl font-bold mt-8 mb-6">Survey</h1>
        <nav className="space-y-4">
          <NavLink 
            to="mother-list/antenatal" 
            className={({ isActive }) => 
              `block text-emerald-500 hover:text-emerald-700 ${isActive ? 'font-bold' : ''}`
            }
          >
            Antenatal
          </NavLink>
          <NavLink 
            to="mother-list/postnatal" 
            className={({ isActive }) => 
              `block text-emerald-500 hover:text-emerald-700 ${isActive ? 'font-bold' : ''}`
            }
          >
            Postnatal
          </NavLink>
          <NavLink 
            to="child-list" 
            className={({ isActive }) => 
              `block text-emerald-500 hover:text-emerald-700 ${isActive ? 'font-bold' : ''}`
            }
          >
            Infant health
          </NavLink>
        </nav>
      </div>
    </div>
    </>
  );
};

export default Register;
