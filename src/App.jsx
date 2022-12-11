import NavigationBar from "./components/NavigationBar";

function Body() {
  return (
    <>
      <div>
        <img
          className="w-full z-[-1] absolute top-0 h-[1000px] object-cover object-top"
          src="\images\hero-section-img.jpg"
          alt=""
        />
      </div>

      <div className="">
        <NavigationBar />
      </div>
    </>
  );
}
export default Body;
