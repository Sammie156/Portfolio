import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border-2 border-black dark:border-white bg-white dark:bg-zinc-800 dark:shadow-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center gap-2 font-bold text-xs uppercase"
    >
        {theme == 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
