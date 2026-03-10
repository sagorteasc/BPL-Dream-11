const Available = () => {
    return (
        <div>
            <div className="flex flex-col text-center mb-8 md:flex-row justify-between">
                <h3 className="font-bold text-xl md:text-[28px]">Available Players</h3>
                <div className="flex justify-between mt-3 md:mt-0">
                    <button className="font-bold px-5 py-3 border border-[#13131310] bg-[#E7FE29] text-black rounded-2xl md:rounded-none md:rounded-l-2xl">Available</button>
                    <button className="px-5 py-3 border border-[#13131310] text-[#13131360] rounded-2xl md:rounded-none md:rounded-r-2xl md:border-l-0">Selected (0)</button>
                </div>
            </div>
        </div>
    );
};

export default Available;