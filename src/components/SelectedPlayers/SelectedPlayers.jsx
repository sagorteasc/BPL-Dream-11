import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";
import PropTypes from "prop-types";

const SelectedPlayers = ({ selectedPlayers, handleDeletePlayer, handleAddMorePlayer }) => {
    return (
        <div className="mb-20 md:mb-40">
            {
                selectedPlayers.map(selectedPlayer => <SelectedPlayer
                    key={selectedPlayer.playerId}
                    selectedPlayer={selectedPlayer}
                    handleDeletePlayer={handleDeletePlayer}
                ></SelectedPlayer>)
            }
            <div className='border border-[#131313] p-1 w-fit rounded-2xl'>
                <button
                    onClick={handleAddMorePlayer}
                    className="text-[#131313] bg-[#E7FE29] rounded-xl px-5 py-3">
                    Add More Player
                </button>
            </div>
        </div>
    );
};

SelectedPlayers.propTypes = {
    selectedPlayers: PropTypes.object.isRequired,
    handleDeletePlayer: PropTypes.func.isRequired,
    handleAddMorePlayer: PropTypes.func.isRequired
}

export default SelectedPlayers;