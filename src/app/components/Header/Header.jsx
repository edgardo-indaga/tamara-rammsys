import Image from 'next/image';

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
                className="hidden object-cover object-center md:block"
            />
            <Image
                src={bannerHomeMobile}
                alt={'Banner'}
                fill={true}
                priority={true}
                quality={100} // Maintain image quality
                className="block object-cover object-top md:hidden"
            />
            <div className="flex flex-col">
                <div className="flex h-[21vh] justify-between">
                    <Image
                        src={lemaImg}
                        alt={'lema'}
                        width={300}
                        height={130}
                        className="z-20 ml-[5%] w-[150px] md:w-[300px]"
                    />
                    <Image
                        src={votaImg}
                        alt={'Vota text'}
                        width={200}
                        height={200}
                        className="z-20 w-[150px] md:w-[200px]"
                    />
                </div>
                <div className="flex h-[64vh] items-end md:h-[79vh]">
                    <Image
                        src={lemaImg1}
                        alt={'Lema 01'}
                        width={750}
                        height={375}
                        className="z-20 w-[350px] md:w-[750px]"
                    />
                </div>
            </div>
        </section>
    );
}
