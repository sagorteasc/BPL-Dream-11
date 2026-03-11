import PropTypes from "prop-types";

const Category = ({ isActive, handleIsActiveButton, selectedPlayers }) => {
    return (
        <div>
            <div className="flex flex-col text-center mb-8 md:flex-row justify-between">
                <h3 className="font-bold text-xl md:text-[28px]">

                    {
                        isActive.status === 'available' ? "Available Players" : `Selected Players (${selectedPlayers.length})`
                    }


                </h3>
                <div className="flex justify-between mt-3 md:mt-0">
                    <button
                        onClick={() => handleIsActiveButton('available')}

                        className={isActive.status === 'available' ?

                            "bg-[#E7FE29] text-black font-bold px-5 py-3 border border-[#13131310]  rounded-2xl md:rounded-none md:rounded-l-2xl"

                            : "text-[#13131360] px-5 py-3 border border-[#13131310]  rounded-2xl md:rounded-none md:rounded-l-2xl"} >

                        Available
                    </button>
                    <button
                        onClick={() => handleIsActiveButton('selected')}

                        className={isActive.status === 'selected' ?

                            "bg-[#E7FE29] text-black font-bold px-5 py-3 border border-[#13131310] rounded-2xl md:rounded-none md:rounded-r-2xl md:border-l-0"

                            : "text-[#13131360] px-5 py-3 border border-[#13131310] rounded-2xl md:rounded-none md:rounded-r-2xl md:border-l-0"}>

                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>
        </div>
    );
};

Category.propTypes = {
    handleAvaiblePlayers: PropTypes.func.isRequired,
    handleSelectedPlayers: PropTypes.func.isRequired,
    selectedPlayers: PropTypes.func.isRequired
}

export default Category;