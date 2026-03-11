const SelectedPlayer = ({ selectedPlayer }) => {
    const { image, name, role } = selectedPlayer

    return (
        <div>
            <div className="bg-[#13131310] rounded-2xl drop-shadow-md p-3 flex items-center gap-2 mb-4">
                <img className="w-20 h-20 rounded-full object-cover" src={image} alt="" />
                <div>
                    <h3 className="font-semibold text-2xl mb-1">{name}</h3>
                    <p className="text-[#13131360]">{role}</p>
                </div>
            </div>

        </div>
    );
};

export default SelectedPlayer;