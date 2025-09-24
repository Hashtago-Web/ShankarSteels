import React from "react";

function Vision() {
    return (
        <div className="flex flex-col min-h-screen px-5 md:px-16 lg:px-20 md:pt-12 pb-6 lg:pb-0 items-start">
            <section className="relative w-full">
                {/* Background Pipe (behind everything) */}
                <img
                    src="/Vision1.png"
                    alt="Pipe Shape"
                    className="hidden md:block absolute md:right-20 lg:right-24 2xl:right-60 md:h-[700px] lg:h-[1000px] top-0  object-contain z-0"
                />
                <img
                    src="/mobilw_pipe_1.png"
                    alt="Pipe Shape"
                    className="md:hidden absolute right-0 top-26 xxs:top-36 xs:top-43 xss:top-48 ss:top-50 sm:top-70 smb:top-80 object-contain z-0"
                />
                <img
                    src="/mobile_pipe_2.png"
                    alt="Pipe Shape"
                    className="md:hidden absolute left-0 top-75 xxs:top-90 xs:top-95 xss:top-100 ss:top-110 sm:top-110  smb:top-120 object-contain z-0"
                />

                {/* Title */}
                <h1 className="mt-0 md:mt-3 lg:mt-5 text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-center relative z-10">
                    VISION
                </h1>

                {/* Content */}
                <div className="flex flex-col-reverse md:flex-row mt-1 gap-2 md:gap-10 md:mt-32 justify-between  items-center relative z-10 ">
                    {/* Left - Text */}
                    <div className="md:w-1/2 md:text-left text-xs xxs:text-[13px] xs:text-[14px] sm:text-base lg:text-xl font-poppins font-serifs text-center leading-relaxed">
                        To be a leading global provider of innovative steel solutions, renowned for our exceptional quality, sustainability, and customer satisfaction. We strive to drive progress and contribute positively to society by delivering reliable, high-performance steel products that meet the evolving needs of our customers and the industry.
                    </div>

                    {/* Right - Image (on top of the pipe) */}
                    <div className="md:w-1/2 w-full relative z-10">
                        <img
                            src="/vision1.1.png"
                            alt="Vision"
                            className="w-full h-auto object-cover shadow-lg"
                        />
                    </div>

                </div>
                
            </section>
            {/* <div className="hidden md:block h-10 md:h-[440px] lg:h-[500px]" /> */}
            {/* Mission */}

            <section className="relative w-full md:mt-50 lg:mt-112 xl:mt-95 2xl:mt-65">
                {/* Background Pipe (behind everything) */}
                <img
                    src="/mission1.1.png"
                    alt="Pipe Shape"
                    className="hidden md:block absolute md:left-19 lg:left-24 2xl:left-60 top-5 mbb:top-11 mbB:top-10 lg:top-0 md:h-[700px] lg:h-[1000px]  object-contain z-0"
                />

                {/* Title */}
                <h1 className="mt-8 md:mt-8 mbb:mt-14 mbB:mt-12 lg:mt-6  text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-center relative z-10">
                    MISSION
                </h1>
                <img
                    src="/mobilw_pipe_1.png"
                    alt="Pipe Shape"
                    className="md:hidden absolute right-0 top-35 xxs:top-42 xs:top-50 xss:top-55 ss:top-60 sm:top-85 smb:top-95  object-contain z-0"
                />
                <img
                    src="/mobile_pipe_2.png"
                    alt="Pipe Shape"
                    className="md:hidden absolute left-0 top-90 xxs:top-95 xs:top-110 xss:top-120 ss:top-132 sm:top-140 smb:top-145 object-contain z-0"
                />

                {/* Content */}
                <div className="flex gap-2 md:gap-10 flex-col md:flex-row mt-1 md:mt-32  justify-between  items-center relative z-10">
                    {/* Right - Image (on top of the pipe) */}
                    <div className="md:w-1/2 relative z-10 w-full">
                        <img
                            src="/Mission1.png"
                            alt="Vision"
                            className="w-full h-auto object-cover shadow-lg"
                        />
                    </div>

                    {/* Left - Text */}
                    <div className="md:w-1/2 text-xs xxs:text-[13px] xs:text-[15px] sm:text-base lg:text-xl font-poppins font-serifs leading-relaxed">
                        <ul className="list-disc pl-5">
                            <li>
                                Delivering high-quality, reliable, and sustainable steel
                                products that meet the evolving needs of our customers.
                            </li>
                            <li>
                                Fostering a culture of innovation and continuous improvement to
                                drive excellence in all aspects of our business.
                            </li>
                            <li>
                                Building strong partnerships with our customers, suppliers, and
                                communities, based on mutual trust and respect.
                            </li>
                            <li>
                                Upholding the highest standards of safety, ethics, and
                                environmental responsibility in all our operations.
                            </li>
                            <li>
                                Empowering our employees to achieve their full potential through
                                continuous learning and development.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <div className="hidden md:block h-10 md:h-[220px] lg:h-[210px]" /> */}
            {/* VALUES */}

            <section className="relative w-full sm:mt-0 md:mt-10 mbb:mt-16  lg:mt-54 xl:mt-84 2xl:mt-63">
                {/* Background Pipe (behind everything) */}
                <img
                    src="/values1.png"
                    alt="Pipe Shape"
                    className="hidden md:block absolute md:right-18 lg:right-22 2xl:right-60 md:h-[700px] lg:h-[1000px] top-0  object-contain -z-1"
                />

                {/* Title */}
                <h1 className="mt-8 md:mt-4 text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-center relative z-10">
                    VALUES
                </h1>

                <img
                    src="/mobile_pipe_3.png"
                    alt="Pipe Shape"
                    className=" md:hidden absolute left-22 top-19 xxs:top-25 xs:top-38 xss:top-45 ss:top-50 sm:top-64 smb:top-72 object-contain z-0"
                />

                {/* Content */}
                <div className="flex flex-col-reverse md:flex-row md:mt-32 gap-2 md:gap-10 justify-between  items-center relative z-10">
                    {/* Right - Image (on top of the pipe) */}

                    {/* Left - Text */}
                    <div className="md:w-1/2 text-xs xxs:text-[13px] xs:text-[15px] sm:text-base lg:text-xl mt-2 md:mt-0  font-poppins font-serifs leading-relaxed">
                        <h1>
                            Our values of safety, trust, entrepreneurship, innovation,
                            excellence, integrity, respect and care form the core of our
                            business.
                        </h1>
                        <div className="md:pt-6 pt-4 flex justify-around md:space-x-32">
                            <ul className="md:space-y-4 space-y-2 text-xs xxs:text-[13px] xs:text-[15px] sm:text-base lg:text-xl">
                                <li className="flex gap-2 items-center">
                                    <img src="/right.png" className="size-5" />
                                    <span>Trust</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <img src="/right.png" className="size-5" />
                                    <span>Care</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <img src="/right.png" className="size-5" />
                                    <span>Integrity</span>
                                </li>
                            </ul>
                            <ul className="md:space-y-4 space-y-2 text-xs sm:text-base lg:text-xl">
                                <li className="flex gap-2 items-center">
                                    <img src="/right.png" className="size-5" />
                                    <span>Innovation</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <img src="/right.png" className="size-5" />
                                    <span>Excellence</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <img src="/right.png" className="size-5" />
                                    <span>Entrepreneurship</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full relative z-10 mt-1 md:mt-0">
                        <img
                            src="/values1.1png.png"
                            alt="Vision"
                            className="w-full h-auto object-cover shadow-lg"
                        />
                    </div>
                </div>
            </section>
            <div className="hidden md:block h-10 md:h-[270px] mbb:h-[252px] mbB:h-[240px] lg:h-[530px] xl:h-[460px] 2xl:h-[340px]" />
            {/* VALUES */}
        </div>
    );
}

export default Vision;