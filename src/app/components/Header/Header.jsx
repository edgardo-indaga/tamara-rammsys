import Image from "next/image";

export function Header() {
    const bannerHome = '/banner-home.jpg';
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
                className="object-cover object-top"
            />
            <div className="flex flex-col">
                <div className="flex justify-between h-[21vh]">
                    <Image src={lemaImg} alt={'lema'} width={285} height={130} className="z-20 ml-[5%]"/>
                    <Image src={votaImg} alt={'Vota text'} width={200} height={200} className="z-20"/>
                </div>
                <div className="flex items-end h-[79vh]">
                    <Image src={lemaImg1} alt={'Lema 01'} width={750} height={375} className="z-20"/>
                </div>
            </div>

        </section>
    )
}