import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers }) => {
    return (
        <div>
            {
                selectedPlayers.map(selectedPlayer => <SelectedPlayer
                    key={selectedPlayer.playerId}
                    selectedPlayer={selectedPlayer}
                ></SelectedPlayer>)
            }
        </div>
    );
};

export default SelectedPlayers;