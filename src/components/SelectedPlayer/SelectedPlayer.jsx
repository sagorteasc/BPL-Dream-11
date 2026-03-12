import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";

const SelectedPlayer = ({ selectedPlayer, handleDeletePlayer }) => {
    const { image, name, role, playerId, biddingPrice } = selectedPlayer

    return (
        <div>
            <div className="bg-[#13131310] rounded-2xl drop-shadow-md p-3 flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <img className="w-20 h-20 rounded-full object-cover" src={image} alt="" />
                    <div>
                        <h3 className="font-semibold text-xl mb-1 md:text-2xl">{name}</h3>
                        <p className="text-[#13131360]">{role}</p>
                        <p className="text-[#13131360]">Price: {biddingPrice}</p>
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => handleDeletePlayer(playerId)}>
                        <MdDeleteForever className="w-10 h-10" />
                    </button>
                </div>
            </div>
        </div>
    );
};

SelectedPlayer.propTypes = {
    selectedPlayer: PropTypes.object.isRequired,
    handleDeletePlayer: PropTypes.func.isRequired
}

export default SelectedPlayer;