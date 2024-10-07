import {Header} from "@/app/components/Header/Header";
import Image from "next/image";

export default function Home() {
    const Instagram = '/instagram.svg';
    const Facebook = '/facebook.svg';

    return (
        <>
            <Header/>
            <div className="container mx-auto bg-[#ffffff] md:h-[700px] flex flex-col">
                <div className="flex flex-col items-center justify-center md:h-[550px] h-[250px]">
                    <p className="text-[18px] px-[5px] md:text-[60px] md:leading-[70px] text-[#5F6060] font-semibold font-degular-sans">“Creo en un Puerto Varas innovador,</p>
                    <p className="text-[18px] px-[5px] md:text-[60px] md:leading-[70px] text-[#5F6060] font-semibold font-degular-sans">pionero, que avanza cada vez más en </p>
                    <p className="text-[18px] px-[5px] md:text-[60px] md:leading-[70px] text-[#5F6060] font-semibold font-degular-sans">justicia social, poniendo en el centro el</p>
                    <p className="text-[18px] px-[5px] md:text-[60px] md:leading-[70px] text-[#5F6060] font-semibold font-degular-sans">bienestar de las personas y su entorno”</p>
                </div>
                <div className="flex flex-col px-[10px] h-[100px]">
                    <p className="font-degular-sans flex text-[16px] md:text-[30px] font-semibold mb-[5px]">
                        Instagram:
                        <Image src={Instagram} alt={'Logo'} width={25} height={25} className="ml-[10px]"/>
                        <a href="https://www.instagram.com/tamara.rammsys" className="text-[#DE29BD] ml-[10px]" target="_blank">@tamara.rammsys</a>
                    </p>
                    <p className="font-degular-sans flex text-[16px] md:text-[30px] font-semibold">
                        Facebook:
                        <Image src={Facebook} alt={'Logo'} width={25} height={25} className="ml-[10px]"/>
                        <a href="https://www.facebook.com/share/tDdwHq6DM2casLWc/" className="text-[#DE29BD] ml-[10px]" target="_blank">Tamara Rammsy Sánchez</a>
                    </p>
                </div>
            </div>
            <div className="bg-[#DE29BD] md:h-[200px]">
                <div className="container mx-auto flex justify-center">
                    <h1 className="text-[#ffffff] text-[50px] md:text-[120px] font-degular-sans font-semibold">VOTA U-281</h1>
                </div>
            </div>
        </>);
}
