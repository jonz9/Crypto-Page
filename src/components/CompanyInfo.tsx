import Cryptocurrency from "../assets/Cryptocurrency.png";

const CompanyInfo = () => {
  return (
    <div className="py-10 px-20 w-full h-full text-primary-text bg-primary-color">
      <div className="my-10 flex flex-col border-t-2 border-slate-700 justify-items items-center">
        <div className="flex justify-items items-center py-20 gap-20">
          <img src={Cryptocurrency} alt="crypto" className="" />
          <div className="flex flex-col gap-8">
            <h2 className="text-primary-text font-main text-4xl font-bold tracking-wider">
              Build for Canada CA
            </h2>
            <ul className="flex flex-col gap-3">
              <li className="list-disc font-main font-thin ">
                <h3>Top up without fees with Interac e-Transfer</h3>
                <p>Add cash easily and quickly.</p>
              </li>
              <li className="list-disc font-main font-thin ">
                <h3>Instant sell & withdraw</h3>
                <p>Sell your crypto and cash out instantly to most banks.</p>
              </li>
              <li className="list-disc font-main font-thin ">
                <h3>Simple & secure onboarding flow</h3>
                <p>Create your account without hassle.</p>
              </li>
              <li className="list-disc font-main font-thin ">
                <h3>Trade 200+ assets securely</h3>
                <p>From Bitcoin to Ethereum to your favorite tokens.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
