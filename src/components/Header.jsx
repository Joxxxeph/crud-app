import { IconMoon, IconSun, IconUserPlus } from "@tabler/icons-react";

const Header = ( {handleOpenModal, handleChangeTheme, theme} )=> {
  return (
    <header className="relative flex justify-between p-4 max-w-[1800px] mx-auto animate-fade-in2" >
      <h1 className="text-xl font-bold text-white">CRUD User</h1>
      <div className="flex gap-4 sm:gap-8 justify-center items-center">
        <button className="text-white" onClick={handleChangeTheme}>
          {theme === "light" ? <IconMoon /> : <IconSun />}
        </button>
        <button
          onClick={handleOpenModal}
          className="flex justify-center items-center bg-blue-500 text-white p-2 px-4 font-semibold
          rounded-sm hover:bg-blue-600 transition-colors duration-500 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Add <IconUserPlus />
        </button>
      </div>
    </header>
  );
}
export default Header;