"use client"

import Link from "next/link";
import Image from "next/image";
import { cta_phone, cta_chat_message, cta_email_open, cta_messaging, cta_youtube } from '../images/icons';

const CTA = () => {
  const style= 'flex bg-primary text-white p-4 duration-300';
  return (
    <aside className="fixed gap-10 z-10">
        <div className='fixed right-0 top-[16rem] '>
            <Link href={'tel:02142167000'} className={`${style} hover:pr-44`}>
                <Image src={cta_phone} width={28} alt="phone number"/>
                <span className="absolute left-16 -right-28 text-lg">021-42167000</span>
            </Link>
        </div>

        <div className='fixed right-0 top-[22rem]'>
            <Link href={'mailto:info@arami-co.com'} className={`${style} hover:pr-48`}>
                <Image src={cta_email_open} width={28} alt="email address"/>
                <div className="absolute left-16 text-base -right-36">info@arami-co.com</div>
            </Link>
        </div>

        <div className='fixed right-0 top-[28rem]'>
            <Link href={'/'} className={`${style} hover:pr-28`}>
                <Image src={cta_messaging} width={28} alt="contact us"/>
                <div className="absolute left-16 text-base -right-36">Support</div>
            </Link>
        </div>

        <div className='fixed right-0 top-[34rem]'>
            <Link href={'/'} className={`${style} hover:pr-32`}>
                <Image src={cta_chat_message} width={28} alt="brochures"/>
                <div className="absolute left-16 text-base -right-36">Brochures</div>
            </Link>
        </div>

        <div className='fixed right-0 top-[40rem]'>
            <Link href={'/'} className={`${style} hover:pr-24`}>
                <Image src={cta_youtube} width={28} alt="media"/>
                <div className="absolute left-16 text-base -right-36">Media</div>
            </Link>
        </div>
    </aside>
  );
};

export default CTA;