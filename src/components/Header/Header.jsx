import { TbCoinFilled } from "react-icons/tb";
const Header = () => {
    return (
        <nav className="max-w-[1320px] mx-auto pt-10 pb-6">
            <div className="flex justify-between items-center">
                <img className="w-14 h-14" src="/src/assets/logo.png" alt="" />
                <div className="flex items-center gap-10">
                    <ul className="flex items-center gap-10 text-[#13131370]">
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>
                    <button className="flex items-center gap-1 font-semibold text-[#131313]"><span>0</span> Coins <TbCoinFilled /></button>
                </div>
            </div>
        </nav>
    );
};

export default Header;