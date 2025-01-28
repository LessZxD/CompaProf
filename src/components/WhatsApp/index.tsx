"use client"; // necessary if you're using the Next.js App Router and plan to use client-side hooks

import { FC } from "react";
import { whatsappLink } from "@/config/whatsapp";
import { ReactTyped } from "react-typed";
interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppButton: FC<WhatsAppButtonProps> = ({
}) => {
  // Construct the WhatsApp URL
  return (
    <div className="fixed bottom-8 left-8 z-[99] flex items-center space-x-1">
      <a
        href={whatsappLink}
        target="_blank" 
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-md transition duration-300 ease-in-out hover:bg-green-600"
      >
        {/* Use any icon you like; for example a WhatsApp SVG or an emoji */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.004 2c5.52 0 10 4.478 10 9.997 0 5.52-4.48 10.001-10 10.001a9.98 9.98 0 01-4.896-1.305l-5.143 1.346 1.353-5.039A9.958 9.958 0 012.004 12C2.004 6.478 6.484 2 12.004 2zm4.521 13.86c-.07-.113-.254-.183-.53-.32-.276-.137-1.634-.805-1.889-.897-.254-.094-.44-.137-.624.137-.182.273-.718.896-.88 1.078-.163.185-.324.206-.6.07-.276-.137-1.166-.43-2.22-1.375-.82-.73-1.371-1.63-1.533-1.906-.163-.273-.017-.421.123-.557.126-.123.278-.321.416-.481.138-.165.185-.277.28-.46.094-.187.047-.344-.024-.48-.07-.137-.624-1.496-.854-2.044-.226-.544-.455-.47-.624-.48-.163-.006-.348-.007-.534-.007-.185 0-.48.07-.732.344-.25.276-.96.94-.96 2.276 0 1.335.983 2.627 1.122 2.806.137.185 1.936 2.95 4.69 4.135.656.283 1.165.453 1.563.582.656.207 1.25.178 1.72.108.524-.08 1.634-.668 1.87-1.314.232-.647.232-1.203.162-1.32z" />
        </svg>
      </a>

      <ReactTyped
        strings={["Chat with us", "Need help?", "We're here to assist!"]}
        typeSpeed={50}
        backSpeed={30} 
        loop
        className="text-xs font-semibold"
      />

      {/* <p className="text-xs font-semibold">chat with us</p> */}
        {/* <p className="text-xs font-bold">
        chat with us
        </p> */}
    </div>
  );
};

export default WhatsAppButton;
