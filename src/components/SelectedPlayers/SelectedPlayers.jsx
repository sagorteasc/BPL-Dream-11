import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers, handleDeletePlayer }) => {
    return (
        <div>
            {
                selectedPlayers.map(selectedPlayer => <SelectedPlayer
                    key={selectedPlayer.playerId}
                    selectedPlayer={selectedPlayer}
                    handleDeletePlayer={handleDeletePlayer}
                ></SelectedPlayer>)
            }
        </div>
    );
};

export default SelectedPlayers;