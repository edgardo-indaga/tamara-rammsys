import { Header } from '@/app/components/Header/Header';
import Image from 'next/image';

export default function Home() {
    const Instagram = '/instagram-wh.svg';
    const Facebook = '/facebook-wh.svg';

    return (
        <>
            <Header />

            <div className="flex h-[140px] flex-col items-center justify-center bg-[#DE29BD] md:h-[200px]">
                <div className="container mx-auto flex justify-center">
                    <h1 className="font-degular-sans text-[50px] font-semibold text-[#ffffff] md:text-[120px] md:leading-[120px]">
                        VOTA U-281
                    </h1>
                </div>
                <div className="container mx-auto flex justify-center">
                    <a
                        href="https://www.facebook.com/share/tDdwHq6DM2casLWc/"
                        target={'_blank'}
                        className="mx-[5px] mt-[15px]"
                    >
                        <Image
                            src={Facebook}
                            alt={'Facebook'}
                            width={34}
                            height={34}
                            className="w-[30px] md:w-[34px]"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/tamara.rammsys"
                        target={'_blank'}
                        className="mx-[5px] mt-[15px]"
                    >
                        <Image
                            src={Instagram}
                            alt={'Instagram'}
                            width={34}
                            height={34}
                            className="w-[30px] md:w-[34px]"
                        />
                    </a>
                </div>
            </div>
        </>
    );
}
