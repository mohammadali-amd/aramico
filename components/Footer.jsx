import Image from "next/image";
import Logo from "../public/aramico-Logo.png";
import { phone, email, location, fax, whatsapp } from "../images/icons";
import Divider from "./Divider";

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-20">
      <div className="grid md:grid-cols-3 gap-20 pt-16 md:pt-28 pb-16 mx-6 md:mx-[200px]">
        {/* Contact Information */}
        <div>
          <div className="flex justify-center md:justify-start">
            <Image src={Logo} alt="Logo" className="w-56" />
          </div>
          <p className="mt-10 font-bold">a member of ARAMICO group</p>
          <ul className="grid gap-2 mt-8">
            <li className="flex gap-2">
              <span className="flex">
                <Image src={location} alt="location" className="w-4" />
              </span>
              <span>Unit 304, No.14, Salar St.,</span>
            </li>
            <li className="flex gap-2">
              <span>&nbsp; &nbsp; &nbsp; &nbsp;Mahmudiyeh, Tehran, Iran</span>
            </li>
            <li className="flex gap-2">
              <span className="flex">
                <Image src={phone} alt="phone" className="w-4" />
              </span>
              <span>021-42167000</span>
            </li>
            <li className="flex gap-2">
              <span className="flex">
                <Image src={whatsapp} alt="whatsapp" className="w-4" />
              </span>
              <span>+98-922-213-59-44</span>
            </li>
            <li className="flex gap-2">
              <span className="flex">
                <Image src={fax} alt="fax" className="w-4" />
              </span>
              <span>021-42167001</span>
            </li>
            <li className="flex gap-2">
              <span className="flex">
                <Image src={email} alt="email" className="w-4" />
              </span>
              <span>info@arami-co.com</span>
            </li>
          </ul>
        </div>

        {/* Our Group Companies */}
        <div className="md:col-span-2 md:ml-16">
          <div>
            <h3 className="text-lg font-bold">Our Group Companies</h3>
            <Divider mt={0} width={60} />
          </div>
          <ul className="grid md:grid-cols-3 gap-y-6">
            <li>
              <div className="flex gap-2">
                <span className="flex">
                  <Image src={location} alt="location" className="w-4" />
                </span>
                <span className="font-bold">ALPHA</span>
              </div>
              <p className="mt-2">Alpha Alumina producer</p>
            </li>
            <li>
              <div className="flex gap-2">
                <span className="flex">
                  <Image src={location} alt="location" className="w-4" />
                </span>
                <span className="font-bold">ALTUS</span>
              </div>
              <p className="mt-2 pr-10">Electrofused products manufacturer</p>
            </li>
            <li>
              <div className="flex gap-2">
                <span className="flex">
                  <Image src={location} alt="location" className="w-4" />
                </span>
                <span className="font-bold">KHORASAN MG</span>
              </div>
              <p className="mt-2">Magnesium Ingot producer</p>
            </li>
            <li>
              <div className="flex gap-2">
                <span className="flex">
                  <Image src={location} alt="location" className="w-4" />
                </span>
                <span className="font-bold">ITAD</span>
              </div>
              <p className="mt-2">Copper Cathode producer</p>
            </li>
            <li>
              <div className="flex gap-2">
                <span className="flex">
                  <Image src={location} alt="location" className="w-4" />
                </span>
                <span className="font-bold">ALCAT</span>
              </div>
              <p className="mt-2">Active Alumina producer</p>
            </li>
            <li>
              <div className="flex gap-2">
                <span className="flex">
                  <Image src={location} alt="location" className="w-4" />
                </span>
                <span className="font-bold">BASPART</span>
              </div>
              <p className="mt-2">
                Granules and extruded polymeric compounds producer
              </p>
            </li>
            <li>
              <div className="flex gap-2">
                <span className="flex">
                  <Image src={location} alt="location" className="w-4" />
                </span>
                <span className="font-bold">YARAN</span>
              </div>
              <p className="mt-2">Furnace and Kiln designer and manufacturer</p>
            </li>
            <li>
              <div className="flex gap-2">
                <span className="flex">
                  <Image src={location} alt="location" className="w-4" />
                </span>
                <span className="font-bold">AFA</span>
              </div>
              <p className="mt-2">Magnesium Special Alloys <br /> developer</p>
            </li>
            <li>
              <div className="flex gap-2">
                <span className="flex">
                  <Image src={location} alt="location" className="w-4" />
                </span>
                <span className="font-bold">MSG</span>
              </div>
              <p className="mt-2">Industrial Equipment manufacturer</p>
            </li>
            <li>
              <div className="flex gap-2">
                <span className="flex">
                  <Image src={location} alt="location" className="w-4" />
                </span>
                <span className="font-bold">ARAMED</span>
              </div>
              <p className="mt-2">
                Medical Equipment designer and manufacturer
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
