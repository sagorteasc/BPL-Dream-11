import { TbCoinFilled } from "react-icons/tb";
const Header = () => {
    return (
        <nav className="pt-10 pb-6">
            <div className="flex flex-col gap-3 justify-between items-center md:flex-row md:gap-0">
                <img className="w-24 h-24" src="/src/assets/logo.png" alt="" />
                <div className="flex items-center gap-3 flex-wrap md:gap-7 lg:gap-10">
                    <ul className="text-[#13131370] flex items-center gap-3 md:gap-7 lg:gap-10">
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