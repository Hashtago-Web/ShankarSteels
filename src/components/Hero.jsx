// function Hero() {
//     return (
//         <div className="obejct-fit">
//             <img
//                 src="Hero_Image.png"
//                 alt="Hero Image"
//                 className="h-[265px] sm:h-full sm:w-full"    
//             />

//         </div>
//     )
// }

// export default Hero


function Hero() {
    return (
        <div className="relative -z-1 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
            style={{ backgroundImage: "url('Hero_Image.png')" }}
        > 
            
            <div className="absolute inset-0 bg-black/40"></div>
        </div>
    )
}

export default Hero