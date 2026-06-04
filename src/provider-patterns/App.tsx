import { useTheme } from "./hook/useTheme"
export function App(){
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={`${theme ? "bg-gray-900 text-gray-50" :"bg-gray-100 text-gray-800"} h-2`}>
            <nav className="flex justify-between bg-slate-500 p-2">
                <h1>My App</h1>
                <button onClick={toggleTheme}>Click</button>
            </nav>
            <main>
                <p className="text-xl m-3">
                    {theme ? "Light Mode" : "Dark Mode"}
                </p>
            </main>
        </div>
    )
}