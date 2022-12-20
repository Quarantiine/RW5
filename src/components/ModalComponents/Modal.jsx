import { useModalSlideContext, useModalSlideNumberCtx, useOpenCloseModalCtx } from "../../App";
import ModalSlide from "./ModalSlide";

const Modal = () => {
	const { modalSlideNumber, setModalSlideNumber } = useModalSlideNumberCtx();
	const { openCloseModal, setOpenCloseModel } = useOpenCloseModalCtx();
	const [SMSImages1, SMSImages2, SMSImages3, SMSImages4, SMSImages5, SMSImages6, SMSImages7, SMSImages8, SMSImages9] =
		useModalSlideContext();
	const modalSlideContent = [
		{
			text1: "Oily, balanced or dry hair? Luseta has got you covered! 😉",
			text2: "We made a cheat sheet for your hair needs with our special duo blends.",
			text3: "Swipe left to know more ✨",
			text4:
				"We're here for you in any hair problems you're in. Find the perfect hair care through our website. Link in bio.👆🏼",
			hashTags:
				"#haircare #instahair #beauty #hair #hairstyles #hairinspo #parabenfree #hairgoals #sulfatefree #glutenfree #stronghair #haircare #beauty #hairserum #deepconditioning #teatree #mint #castoroil #hemp #macadamia #arganoil",
			tags: "LUSETABEAUTY // INSTAGRAM // 15 DECEMBER 2022",
		},
		{
			text1:
				"Good things come in twos 🌟 Get these limited edition body wash gift sets and enjoy our best-selling blends 🥳",
			text2: "🌹 Rose Oil 🌱Tea Tree",
			text3: "Leave us some ❤️ in the comments if you want it for Christmas! Get it through our link in bio. 👆🏼",
			text4: null,
			hashTags:
				"#haircare #instahair #beauty #hair #hairstyles #hairinspo #parabenfree #hairgoals #sulfatefree #glutenfree #stronghair #haircare #beauty #hairserum #deepconditioning #christmas #teatree #roseoil",
			tags: "LUSETABEAUTY // INSTAGRAM // 14 DECEMBER 2022",
		},
		{
			text1: "Day 5 will make your hair feel more alive!✨",
			text2: "⭐️ Get a FREE Hair Serum when you spend $75. Use code:",
			text3: "⭐️ Get a FREE Hair Mask when you spend $100. Use code: SLEEK",
			text4:
				"Promo is valid until December 10 only so add to cart NOW to enjoy the #5DaysOfChristmasSale! 🛒 Link in bio. 👆🏼",
			hashTags:
				"#haircare #instahair #beauty #hair #hairstyles #hairinspo #parabenfree #hairgoals #sulfatefree #glutenfree #stronghair #haircare #beauty #keratin",
			tags: "LUSETABEAUTY // INSTAGRAM // 10 DECEMBER 2022",
		},
		{
			text1: "Day 3 sounds fun when you get something free!🥳",
			text2: "Get a FREE towel when you spend $65 at checkout 🎀",
			text3: "Use code: GLOW65 and enjoy the #5DaysOfChristmasSale",
			text4: "Promo is valid until December 8 only so SHOP NOW! 🛍 Link in bio. 👆🏼",
			hashTags:
				"#haircare #instahair #beauty #hair #hairstyles #hairinspo #parabenfree #hairgoals #sulfatefree #glutenfree #stronghair #haircare #beauty #holiday #sale #Christmas",
			tags: "LUSETABEAUTY // INSTAGRAM // 08 DECEMBER 2022",
		},
		{
			text1: "ExpGo crazy with our Jamaican Black Castor Oil Bundle 🤎",
			text2: "Powerful natural blend of castor oil that gives extra hydration to to dry and damaged curls 💦",
			text3:
				"Get luscious locks by giving your hair the nourishment it needs in time for Holiday parties! Shop through the link in our bio.👆🏼",
			text4: null,
			hashTags:
				"#haircare #instahair #beauty #hair #hairstyles #hairinspo #parabenfree #hairgoals #sulfatefree #glutenfree #stronghair #haircare #beauty #hairserum #deepconditioning #castoroil",
			tags: "LUSETABEAUTY // INSTAGRAM // 16 DECEMBER 2022",
		},
		{
			text1: "Experience the goodness of a natural blend with Biotin, Caffeine, and Niacin 💜",
			text2: "✔️Stimulates hair roots ✔️Improves hair growth ✔️Strengthens hair",
			text3: "Don't let your hair suffer from damage. Shop this now! Link in bio.👆🏼",
			text4: null,
			hashTags:
				"#haircare #instahair #beauty #hair #hairstyles #hairinspo #parabenfree #hairgoals #sulfatefree #glutenfree #stronghair #haircare #beauty #biotin",
			tags: "LUSETABEAUTY // INSTAGRAM // 13 DECEMBER 2022",
		},
		{
			text1:
				"Give yourself some holiday TLC by protecting your hair from the cold weather with Luseta Castor and Hemp Oil shampoo packed with essential vitamins 🌿",
			text2: "✨ Treats damaged and dry hair ✨ Makes hair smoother and shinier ✨ Penetrates nutrients to each strand",
			text3: "Shop through the link in our bio.👆🏼",
			text4: null,
			hashTags:
				"#haircare #instahair #beauty #hair #hairstyles #hairinspo #parabenfree #hairgoals #sulfatefree #glutenfree #stronghair #haircare #beauty #castoroil #hempoil",
			tags: "LUSETABEAUTY // INSTAGRAM // 17 DECEMBER 2022",
		},
		{
			text1:
				"Day 2 are for things that you value 💖 Get 20% OFF on your favorite Value Sets to get a full experience on our unique blends. You can even gift it too! 🎁",
			text2:
				"Use code: VALUE and enjoy the #5DaysOfChristmasSale Promo is valid until December 7 only so SHOP NOW! Link in bio. 👆🏼",
			text3: null,
			text4: null,
			hashTags:
				"#haircare #instahair #beauty #hair #hairstyles #hairinspo #parabenfree #hairgoals #sulfatefree #glutenfree #stronghair #haircare #beauty #holiday #sale #Christmas",
			tags: "LUSETABEAUTY // INSTAGRAM // 07 DECEMBER 2022",
		},
		{
			text1: "Dreaming of thicker tresses? ✨ Not anymore!",
			text2: "Our Day 1 of Christmas Sale will let you get fuller hair with 25% OFF on any Biotin collection.💜",
			text3: "Use the code: BIOTIN25 and enjoy the #5DaysOfChristmasSale",
			text4: "Promo is valid until December 6 only so SHOP NOW! Link in bio. 👆🏼",
			hashTags: null,
			tags: "LUSETABEAUTY // INSTAGRAM // 06 DECEMBER 2022",
		},
	];

	return (
		<>
			{openCloseModal && (
				<>
					<div onClick={() => setOpenCloseModel(false)} className="bg-[#746363B3] w-full h-full fixed z-[200]"></div>
					<div className="flex fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[201] w-[80%] lg:w-[60%] h-[95%] justify-center items-center bg-black">
						<div className="w-full h-full bg-white p-5">
							{modalSlideNumber === 0 && (
								<ModalSlide
									image={SMSImages1}
									text1={modalSlideContent[0].text1}
									text2={modalSlideContent[0].text2}
									text3={modalSlideContent[0].text3}
									text4={modalSlideContent[0].text4}
									hashTags={modalSlideContent[0].hashTags}
									tags={modalSlideContent[0].tags}
								/>
							)}
							{modalSlideNumber === 1 && (
								<ModalSlide
									image={SMSImages2}
									text1={modalSlideContent[1].text1}
									text2={modalSlideContent[1].text2}
									text3={modalSlideContent[1].text3}
									text4={modalSlideContent[1].text4}
									hashTags={modalSlideContent[1].hashTags}
									tags={modalSlideContent[1].tags}
								/>
							)}
							{modalSlideNumber === 2 && (
								<ModalSlide
									image={SMSImages3}
									text1={modalSlideContent[2].text1}
									text2={modalSlideContent[2].text2}
									text3={modalSlideContent[2].text3}
									text4={modalSlideContent[2].text4}
									hashTags={modalSlideContent[2].hashTags}
									tags={modalSlideContent[2].tags}
								/>
							)}
							{modalSlideNumber === 3 && (
								<ModalSlide
									image={SMSImages4}
									text1={modalSlideContent[3].text1}
									text2={modalSlideContent[3].text2}
									text3={modalSlideContent[3].text3}
									text4={modalSlideContent[3].text4}
									hashTags={modalSlideContent[3].hashTags}
									tags={modalSlideContent[3].tags}
								/>
							)}
							{modalSlideNumber === 4 && (
								<ModalSlide
									image={SMSImages5}
									text1={modalSlideContent[4].text1}
									text2={modalSlideContent[4].text2}
									text3={modalSlideContent[4].text3}
									text4={modalSlideContent[4].text4}
									hashTags={modalSlideContent[4].hashTags}
									tags={modalSlideContent[4].tags}
								/>
							)}
							{modalSlideNumber === 5 && (
								<ModalSlide
									image={SMSImages6}
									text1={modalSlideContent[5].text1}
									text2={modalSlideContent[5].text2}
									text3={modalSlideContent[5].text3}
									text4={modalSlideContent[5].text4}
									hashTags={modalSlideContent[5].hashTags}
									tags={modalSlideContent[5].tags}
								/>
							)}
							{modalSlideNumber === 6 && (
								<ModalSlide
									image={SMSImages7}
									text1={modalSlideContent[6].text1}
									text2={modalSlideContent[6].text2}
									text3={modalSlideContent[6].text3}
									text4={modalSlideContent[6].text4}
									hashTags={modalSlideContent[6].hashTags}
									tags={modalSlideContent[6].tags}
								/>
							)}
							{modalSlideNumber === 7 && (
								<ModalSlide
									image={SMSImages8}
									text1={modalSlideContent[7].text1}
									text2={modalSlideContent[7].text2}
									text3={modalSlideContent[7].text3}
									text4={modalSlideContent[7].text4}
									hashTags={modalSlideContent[7].hashTags}
									tags={modalSlideContent[7].tags}
								/>
							)}
							{modalSlideNumber === 8 && (
								<ModalSlide
									image={SMSImages9}
									text1={modalSlideContent[8].text1}
									text2={modalSlideContent[8].text2}
									text3={modalSlideContent[8].text3}
									text4={modalSlideContent[8].text4}
									hashTags={modalSlideContent[8].hashTags}
									tags={modalSlideContent[8].tags}
								/>
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
};
export default Modal;
