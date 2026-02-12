import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Layout, ChevronRight, BookOpen, Code, Boxes, Zap, Moon, Sun } from 'lucide-react';

interface NavItem {
    title: string;
    path: string;
    icon: React.ReactNode;
}

const navItems: NavItem[] = [
    {
        title: 'Design Patterns',
        path: '/design-patterns',
        icon: <Boxes size={20} />,
    },
    {
        title: 'Machine Coding',
        path: '/machine-coding',
        icon: <Code size={20} />,
    },
    {
        title: 'SOLID Principles',
        path: '/solid',
        icon: <BookOpen size={20} />,
    },
    {
        title: 'Performance',
        path: '/performance',
        icon: <Zap size={20} />,
    },
];

const MainLayout: React.FC = () => {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark') ||
                localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-colors duration-300 shadow-xl shadow-black/5">
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400">
                        <Layout size={28} strokeWidth={2.5} />
                        <span className="text-xl font-bold tracking-tight">React Adv</span>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `
                flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 group
                ${isActive
                                    ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold shadow-sm'
                                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'}
              `}
                        >
                            <div className="flex items-center gap-3">
                                <span className="transition-transform duration-300 group-hover:scale-110">
                                    {item.icon}
                                </span>
                                <span className="text-sm">{item.title}</span>
                            </div>
                            <ChevronRight size={14} className={`transition-all duration-300 ${item.path === window.location.pathname ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-4">
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="flex items-center justify-between w-full px-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border border-transparent hover:border-gray-300 dark:hover:border-gray-600"
                    >
                        <span className="text-sm font-medium">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
                        {isDark ? <Moon size={18} className="text-indigo-400" /> : <Sun size={18} className="text-amber-500" />}
                    </button>

                    <div className="bg-indigo-600 dark:bg-indigo-700 rounded-2xl p-4 text-white shadow-lg shadow-indigo-600/20">
                        <p className="text-[10px] font-bold opacity-70 uppercase tracking-[0.1em] mb-1">Status</p>
                        <p className="text-sm font-semibold">Ready to Learn! 🚀</p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                <header className="h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 flex items-center px-8 justify-between z-10 transition-colors duration-300">
                    <h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        Module Viewer
                    </h2>
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-800/50">V0.1.0</span>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <div className="max-w-5xl mx-auto animate-in fade-in duration-700">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
