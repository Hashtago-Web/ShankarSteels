import Vision from "../components/Vision";
function About() {
    return (
        <div className="flex flex-col items-center min-h-screen ">
            <div
                className=" px-3 md:px-6 lg:px-10 md:pt-12 py-6 w-full bg-cover bg-center bg-no-repeat
          flex flex-col items-center md:items-start justify-center gap-2 font-poppins h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] "
                style={{ backgroundImage: "url('/about_hero_image.png')" }}
            >
                <div className="flex flex-col items-center md:items-start animate-[slideRight_1.3s_ease-in-out]">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mt-28 md:mt-60 ">
                        About Us
                    </h1>
                    <h1 className="text-md sm:text-xl md:text-2xl text-white md:text-start">
                        WHERE INNOVATION MEETS STRENGTH
                    </h1>
                </div>
            </div>

            <div
                className="flex flex-col items-center justify-end px-5 md:px-14 lg:px-32  pt-8 smb:pt-12 xl:pt-16 2xl:pt-17 w-full bg-right-bottom bg-no-repeat
         bg-[length:300px_auto] sm:bg-[length:300px_auto] md:bg-[length:400px_auto] lg:bg-[length:470px_auto]"
                style={{
                    backgroundImage: "url('About2back.png')",
                }}
            >
                <h1 className="mt-0 md:mt-5 text-xl sm:text-2xl md:text-4xl text-center ">
                    ABOUT <span className="text-blue-950">THE SHANKAR STEEL CORPORATION</span>{" "}
                </h1>
                <h1 className="mt-0 md:mt-5 text-xs sm:text-base md:text-lg lg:text-xl text-center">
                    The business was incorporated in the year 1972. Late Shri Santosh
                    Kishore Prasad(Father) started the business having a minimum and
                    marginal resources about business and marketing. His primary vision
                    was to cater the smallest consumer demand. He had extremely
                    hardworking and dynamic personality. We started a business with
                    hardware items and expended gradually with iron and steels, and his
                    heavenly abode the business is being managed by his next generation.
                    The prime moto of our business is to provide the best and top-end
                    solution in catering iron and steel products related to industrial
                    construction as well as consumers across India. The trend of our
                    business is that we procure material from primary as well as secondary
                    manufactures and cater the same to our consumers and clients as per
                    the demands. This includes manufacturing from having presence in
                    domestic as well as international markets. The current vision of our
                    company is to expand our business by catering our customers in best of
                    its class adding new products and services in the coming future.
                </h1>
                <img src="/About2.png" className="mt-3 md:mt-10 w-full lg:w-2/3" />
            </div>

            <div className="px-10 md:px-8 lg:px-32 sm:pt-12 lg:pt-20 md:pt-12 smb:pt-14 xl:pt-25 pb-8 smb:pb-12  flex flex-col sm:flex-row  justify-center w-full  md:space-x-20 gap-4">
                <div className="w-full md:w-1/2  ">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-8 sm:pt-0 text-center md:tracking-tighter sm:text-left">
                        Message From Chairman{" "}
                    </h1>
                    <div className="bg-[url('/Vector.png')] bg-no-repeat bg-top opacity-90 relative bg-[length:80px_auto] md:bg-[length:150px_auto] pt-2 sm:pt-6 md:pt-10">
                        <h1
                            className="
            lg:text-2xl md:text-lg   text-xs text-center sm:text-left sm:text-base
            sm:bg-[length:200px] md:bg-[length:250px] lg:bg-[length:300px]"
                        >
                            "At The Shankar Steel Corporation, we are committed to delivering
                            exceptional steel solutions that exceed our customers'
                            expectations. Driven by innovation and a deep sense of
                            responsibility, we strive to create a sustainable future through
                            our products and operations. Our unwavering focus on quality,
                            reliability, and customer satisfaction has made us a trusted
                            partner in the steel industry"
                        </h1>
                        <h2 className="flex-col items-center sm:hidden  text-center font-poppins">
                            <p className="lg:text-2xl md:text-xl ">-Mr.Prabash Prashad</p>
                            <p className="md:text-base text-xs text-blue-800">
                                Chairman of Shankar Steel
                            </p>
                        </h2>
                    </div>
                    <div className="flex flex-col items-center sm:items-end mt-2 md:mt-0">
                        <h2 className="flex-col items-center sm:block hidden">
                            <p className="lg:text-xl md:text-xl">-Mr.Prabash Prashad</p>
                            <p className="md:text-base text-xs ml-3 text-blue-800">
                                Chairman of Shankar Steel
                            </p>
                        </h2>
                    </div>
                </div>

                <div className="bg-slate-100 w-full  md:w-1/2  flex sm:items-end  lg:h-auto justify-center">
                    <img src="/leader.png" />
                </div>
            </div>

            <Vision />
        </div>
    );
}

export default About;