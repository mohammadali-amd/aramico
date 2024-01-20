import Image from "next/image";
import Logo from "../public/aramico-Logo.png";
import { phone, email, location, fax, whatsapp } from "../images/icons";
import Divider from "./Divider";
import Link from "next/link";

const companies = [
  {
    title: "Alpha",
    description: "Alpha Alumina producer",
    url: "#",
  },
  {
    title: "ALTUS",
    description: "Electrofused products manufacturer",
    url: "#",
  },
  {
    title: "KHORASAN MG",
    description: "Magnesium Ingot producer",
    url: "#",
  },
  {
    title: "ITAD",
    description: "Copper Cathode producer",
    url: "#",
  },
  {
    title: "ALCAT",
    description: "Active Alumina producer",
    url: "#",
  },
  {
    title: "BASPART",
    description: "Granules and extruded polymeric compounds producer",
    url: "#",
  },
  {
    title: "YARAN",
    description: "Furnace and Kiln designer and manufacturer",
    url: "#",
  },
  {
    title: "AFA",
    description: "Magnesium Special Alloys developer",
    url: "#",
  },
  {
    title: "MSG",
    description: "Industrial Equipment manufacturer",
    url: "#",
  },
  {
    title: "ARAMED",
    description: "Medical Equipment designer and manufacturer",
    url: "#",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-20 text-black">
      <div className="grid md:grid-cols-3 gap-20 pt-16 md:pt-28 pb-16 mx-6 xl:mx-[200px]">
        {/* Contact Information */}
        <div>
          <div className="flex justify-center md:justify-start">
            <Image src={Logo} alt="Logo" className="w-56" />
          </div>
          <p className="mt-10 font-bold">a member of ARAMICO group</p>
          <ul className="grid gap-2 mt-8 text-text">
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
            {companies.map((company) => (
              <li key={company.title}>
                <div className="flex gap-2">
                  <span className="flex">
                    <Image src={location} alt="location" className="w-4" />
                  </span>
                  <Link href={company.url} className="font-bold">
                    {company.title}
                  </Link>
                </div>
                <p className="mt-2 text-text">{company.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
