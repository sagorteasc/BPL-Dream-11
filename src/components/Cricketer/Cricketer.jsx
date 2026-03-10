import { CgProfile } from "react-icons/cg";
import { CiFlag1 } from "react-icons/ci";
import PropTypes from "prop-types";
const Cricketer = ({ cricketer }) => {
    const { image, name, country, role, battingType, bowlingType, biddingPrice } = cricketer;

    return (
        <div className="border border-[#13131310] drop-shadow-md p-6 space-y-2 rounded-2xl">
            <img className="w-full h-60 rounded-3xl" src={image} alt="" />
            <div className="space-y-2">
                <div className="flex items-center gap-1 font-semibold text-xl">
                    <CgProfile />
                    <h3>{name}</h3>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-1 text-gray-500">
                        <CiFlag1 />
                        <h4>{country}</h4>
                    </div>
                    <p className="bg-[#13131305] text-[10px] rounded-lg w-fit text-center p-2 md:text-base">{role}</p>
                </div>
                <hr className="text-gray-500 my-3" />
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{battingType}</h3>
                    <h5 className="text-[#13131370] text-xs md:text-base">{bowlingType}</h5>
                </div>
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Price: ${biddingPrice}</h3>
                    <button className="border border-[#13131310] text-sm px-4 py-2 rounded-lg">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

Cricketer.propTypes = {
    cricketer: PropTypes.object.isRequired,
    handleChoosePlayer: PropTypes.func.isRequired
}

export default Cricketer;