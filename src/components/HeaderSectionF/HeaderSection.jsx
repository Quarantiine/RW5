import BookRegistration from "./BookRegistration";

function HeaderSection() {
  return (
    <>
      <div className="bg-[url(https://ld-wp73.template-help.com/wordpress/prod_803/v1/wp-content/uploads/2020/03/slider_picture2.jpg)] w-full h-[670px] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col text-white active:cursor-grabbing text-center">
        <h3 className="text-xl font-[Times-new-romen] tracking-[10px]">
          COMFORTABLE APARTMENTS
        </h3>
        <h1 className="header-title text-5xl px-5 sm:text-8xl">
          ENJOY YOUR STAY WHILE ON A BUSINESS TRIP
        </h1>
      </div>
      <BookRegistration />
    </>
  );
}
export default HeaderSection;
