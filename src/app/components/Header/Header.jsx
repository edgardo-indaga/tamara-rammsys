import Image from "next/image";

export function Header() {
    const bannerHome = '/banner-home.jpg';
    const bannerHomeMobile = '/banner-home-mobile.jpg';
    const votaImg = '/vota-01.svg';
    const lemaImg = '/lema.svg';
    const lemaImg1 = '/lema-01.svg';
    return (
        <section className="relative h-[680px] md:h-screen">
            <Image
                src={bannerHome}
                alt={'Banner'}
                fill={true}
                priority={true}
                quality={100} // Maintain image quality
                className="object-cover object-top md:block hidden"
            />
            <Image
                src={bannerHomeMobile}
                alt={'Banner'}
                fill={true}
                priority={true}
                quality={100} // Maintain image quality
                className="object-cover object-top block md:hidden"
            />
            <div className="flex flex-col">
                <div className="flex justify-between h-[21vh]">
                    <Image src={lemaImg} alt={'lema'} width={300} height={130} className="z-20 ml-[5%] md:w-[300px] w-[150px]"/>
                    <Image src={votaImg} alt={'Vota text'} width={200} height={200} className="z-20 md:w-[200px] w-[150px]"/>
                </div>
                <div className="flex items-end md:h-[79vh] h-[64vh]">
                    <Image src={lemaImg1} alt={'Lema 01'} width={750} height={375} className="z-20 md:w-[750px] w-[350px]"/>
                </div>
            </div>

        </section>
    )
}