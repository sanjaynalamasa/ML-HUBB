import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Brain, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Home,
  MessageSquare,
  Image as ImageIcon,
  FileText,
  Search,
  Shield,
  HelpCircle,
  History as HistoryIcon,
  LogOut,
  User
} from 'lucide-react';
import { History } from '../features/History';
import { useAuth } from '../../contexts/AuthContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedDarkMode = localStorage.getItem('darkMode');
      return storedDarkMode === null ? true : storedDarkMode === 'true';
    }
    return true;
  });
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { to: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
    { to: "/chat", label: "AI Chat", icon: <MessageSquare className="w-5 h-5" />, protected: true },
    { to: "/vision", label: "Vision", icon: <ImageIcon className="w-5 h-5" />, protected: true },
    { to: "/logs", label: "Logs", icon: <FileText className="w-5 h-5" />, protected: true },
    { to: "/analysis", label: "Analysis", icon: <Search className="w-5 h-5" />, protected: true },
    { to: "/moderation", label: "Moderation", icon: <Shield className="w-5 h-5" />, protected: true }
  ];

  const visibleNavItems = navItems.filter(item => !item.protected || isAuthenticated);

  return (
    <>
      <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="w-8 h-8" />
              <h1 className="text-2xl font-bold">ML Hub</h1>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8">
                {visibleNavItems.map((item) => (
                  <li key={item.to}>
                    <Link 
                      to={item.to}
                      className={`flex items-center space-x-2 hover:text-gray-300 transition-colors ${
                        location.pathname === item.to ? 'text-blue-400' : ''
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center space-x-4">
                {isAuthenticated && (
                  <button
                    onClick={() => setIsHistoryOpen(true)}
                    className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
                    aria-label="View History"
                  >
                    <HistoryIcon className="w-5 h-5" />
                  </button>
                )}
                
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? 
                    <Sun className="w-5 h-5" /> : 
                    <Moon className="w-5 h-5" />
                  }
                </button>

                {isAuthenticated ? (
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">
                      Welcome, {user?.firstName}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-4">
                    <Link
                      to="/login"
                      className="px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            <div className="md:hidden flex items-center space-x-4">
              {isAuthenticated && (
                <button
                  onClick={() => setIsHistoryOpen(true)}
                  className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="View History"
                >
                  <HistoryIcon className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? 
                  <Sun className="w-5 h-5" /> : 
                  <Moon className="w-5 h-5" />
                }
              </button>
              <button
                className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <nav className="py-4 border-t border-gray-700">
              <ul className="space-y-2">
                {visibleNavItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={`flex items-center space-x-3 py-2 px-4 rounded-lg transition-colors ${
                        location.pathname === item.to 
                          ? 'bg-blue-600 text-white' 
                          : 'hover:bg-gray-700'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
                
                {isAuthenticated ? (
                  <li>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-3 py-2 px-4 rounded-lg transition-colors hover:bg-gray-700 w-full text-left"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Logout</span>
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="flex items-center space-x-3 py-2 px-4 rounded-lg transition-colors hover:bg-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <User className="w-5 h-5" />
                        <span>Login</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        className="flex items-center space-x-3 py-2 px-4 rounded-lg transition-colors bg-blue-600 hover:bg-blue-700"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <User className="w-5 h-5" />
                        <span>Sign Up</span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {isAuthenticated && (
        <History isOpen={isHistoryOpen} onClose={() => setIsHistoryOpen(false)} />
      )}
    </>
  );
}