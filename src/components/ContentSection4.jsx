function ContentSection4() {
  return (
    <>
      <div
        className={`w-[70%] m-auto flex flex-col xl:flex-row justify-start items-start gap-5 xl:gap-20`}
      >
        <img
          className="w-[700px] hidden sm:block xl:hidden"
          src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/62f18b018529fe4907ff8dfa_625e5696ccf2e678acd969d9_Company-sale-platform.png"
          alt=""
        />
        <div className="flex flex-col gap-16">
          <h1 className="text-center xl:text-start text-6xl 2xl:text-7xl w-fit">
            Maximize potential, reduce your costs,{" "}
            <span className="text-[#c1ddbb] italic font-[Times-new-roman] text-7xl 2xl:text-8xl">
              grow revenue
            </span>
            .
          </h1>
          <button className="m-auto xl:mr-auto border border-transparent hover:border-white bg-white p-6 text-black hover:bg-transparent hover:border hover:text-white">
            Learn More - For Companies
          </button>
          <div className="flex gap-10 justify-center xl:justify-start items-center w-full">
            <img
              src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61d300323355183981d7ddf9_6014484d0f964f46b320249f_Spark-Capital-logo.svg"
              alt=""
            />
            <img
              src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61d300b43355186a95d7df2d_deel-logo.svg"
              alt=""
            />
            <img
              src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61d30032d64180499cafa898_6014484d0f964f46b320249f_Spark-Capital-logo-4.svg"
              alt=""
            />
          </div>
        </div>
        <img
          className="w-[700px] hidden xl:block"
          src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/62f18b018529fe4907ff8dfa_625e5696ccf2e678acd969d9_Company-sale-platform.png"
          alt=""
        />
      </div>
    </>
  );
}
export default ContentSection4;
