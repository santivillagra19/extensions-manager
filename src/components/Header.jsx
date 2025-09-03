import Logo from "../assets/images/logo.svg"
import IconSun from "../assets/images/icon-sun.svg"
import IconMoon from "../assets/images/icon-moon.svg"
import LogoDark from "../assets/images/logo-dark.svg"
import { useEffect, useState } from "react"


export function Header() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    const handleClick = () => setIsDark(!isDark);

    return (
        <div
            className="bg-[--neutral-0] dark:bg-[--neutral-800] flex justify-between items-center
            gap-x-4 h-[66px] px-3 py-2 rounded-[10px] mb-6">
            <img src={isDark ? LogoDark : Logo} alt="logo-header" className="w-[180px] h-auto" />

            <button onClick={handleClick}
                className="bg-[--neutral-100] w-[50px] h-[50px] p-2 rounded-lg border-0 
                outline-none hover:bg-[--neutral-200] grid place-items-center cursor-pointer 
                transition-colors rounded-lg dark:bg-[--neutral-600] dark:hover:bg-[--neutral-700]">
                <img src={isDark ? IconSun : IconMoon} alt="icon-button" className="w-6 h-6" />
            </button>
        </div>
    )
}