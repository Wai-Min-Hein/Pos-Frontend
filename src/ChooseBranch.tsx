
const ChooseBranch = () => {

    const branches = [
        {
            id:1,
            branchName: "Aliean Coffee shop",
            address: "39/22, 2d Floor, Yan Shin Road, Yankin Township, Yangon, Myanmar"
        },
        {
            id:2,
            branchName: "Aliean Restaurant ",
            address: "39/22, 2d Floor, Yan Shin Road, Yankin Township, Yangon, Myanmar"
        },
        {
            id:3,
            branchName: "Aliean Bar",
            address: "39/22, 2d Floor, Yan Shin Road, Yankin Township, Yangon, Myanmar"
        },
        
    ]
  return (
    <div className="w-screen h-screen grid place-items-center bg-green-500">
      <div className="w-1/3 h-4/5 bg-white border-4 rounded-lg border-black overflow-y-auto ">
        <h6 className="text-center">Choose branch what you wanna manage</h6>
        {
            branches.map(branch => (
                    <div className="mt-6 cursor-pointer border-b py-1 px-4 border-black" key={branch.id}>
                        <h6>{branch.branchName}</h6>
                        <p className="text-sm">{branch.address}</p>
                    </div>
            ))
        }
      </div>
    </div>
  );
};

export default ChooseBranch;
