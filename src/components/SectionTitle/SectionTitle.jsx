const SectionTitle = ({heading, subheading}) => {
    return (
            <div className="w-5/12 mx-auto text-center py-16">
                <p className="text-[#D99904] mb-4 text-xl">---{subheading}---</p>
                <h3 className="text-4xl text-[#151515] uppercase border-y-4 py-5">{heading}</h3>
            </div>
        // <div className="text-center">
        //     <p className="text-[#D99904] text-xl mb-4">---{subheading}---</p>
        //     <div className="border-2 w-[424px] mx-auto"></div>
        //     <h3 className="text-4xl text-[#151515] mt-5 mb-6 uppercase">{heading}</h3>
        //     <div className="border-2 w-[424px] mb-12 mx-auto"></div>
        // </div>
    );
};

export default SectionTitle;