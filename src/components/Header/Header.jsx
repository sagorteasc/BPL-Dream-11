import { TbCoinFilled } from "react-icons/tb";
const Header = ({ coins }) => {
    return (
        <nav className="py-5">
            <div className="flex gap-3 justify-between items-center">
                <img className="w-24 h-24" src="/src/assets/logo.png" alt="" />
                <div className="flex items-center gap-2 md:gap-7 lg:gap-10">
                    <ul className="text-[#13131370] hidden md:flex items-center gap-2 md:gap-7 lg:gap-10">
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>
                    <p className="flex items-center gap-1 font-semibold text-[#131313] border border-[#13131310] rounded-xl px-4 py-5 bg-slate-50"><span>{coins}</span> Coins <TbCoinFilled /></p>
                </div>
            </div>
        </nav>
    );
};

export default Header;