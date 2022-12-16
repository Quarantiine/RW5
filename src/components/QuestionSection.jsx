import React from "react";

const QuestionSection = () => {
	return (
		<div className="w-[70%] mx-auto h-fit mt-40 gap-10 flex flex-col text-black">
			<div className="flex flex-col justify-center items-center text-center gap-8">
				<h1 className="text-6xl font-serif">What the Frizz?</h1>
				<p className="text-xl">
					From trends to tresses, you’ll find straight-talking hair advice and silky secrets on our blog.
				</p>
			</div>
			<div className="flex lg:flex-row flex-col justify-center items-center w-full h-fit py-5 gap-16">
				<div className="flex flex-col gap-7 justify-center items-start overflow-hidden w-full sm:w-96 mx-auto rounded-xl">
					<img
						className="w-full sm:w-96 h-[400px] object-cover hover:scale-90 rounded-xl cursor-pointer"
						src="https://cdn.shopify.com/s/files/1/0010/9330/4381/articles/14305d7dbcb9c8df85d4157cf25d7c16_90d84774-0165-4aed-8e07-11ef57867800_x480.jpg?v=1632340279"
						alt="question section img"
					/>
					<p className="text-3xl font-serif">The Best Food To Eat For Healthier Hair</p>
				</div>
				<div className="flex flex-col gap-7 justify-center items-start overflow-hidden w-full sm:w-96 mx-auto rounded-xl">
					<img
						className="w-full sm:w-96 h-[500px] object-cover hover:scale-90 rounded-xl cursor-pointer"
						src="https://cdn.shopify.com/s/files/1/0010/9330/4381/articles/e317058560ebde7dc9d75ba2160a22d6_86651ae9-7979-49db-9a1a-30185863a1f0_x480.jpg?v=1632349781"
						alt="question section img"
					/>
					<p className="text-3xl font-serif">How To Revive Your Hair and Scalp With Hemp Oil</p>
				</div>
				<div className="flex flex-col gap-7 justify-center items-start overflow-hidden w-full sm:w-96 mx-auto rounded-xl">
					<img
						className="w-full sm:w-96 h-[400px] object-cover hover:scale-90 rounded-xl cursor-pointer"
						src="https://cdn.shopify.com/s/files/1/0010/9330/4381/articles/9416d328c546e691874161ce9d5e7eae_98d0bf3e-4ea8-46f7-bad3-87db25155e5a_x480.jpg?v=1632340912"
						alt="question section img"
					/>
					<p className="text-3xl font-serif">What Is Perfect Bonding Shampoo and What Are Its Benefits</p>
				</div>
			</div>
		</div>
	);
};

export default QuestionSection;
