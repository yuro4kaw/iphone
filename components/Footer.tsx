import { footerLinks } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue cursor-pointer">
              Find an Apple Store
            </span>{" "}
            or{" "}
            <span className="underline text-blue cursor-pointer">
              {" "}
              other retailer near you.
            </span>
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 0800-012-34-56
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col gap-2 md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-1">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs ">
                <span className="cursor-pointer hover:text-white transition-all">
                  {link}{" "}
                </span>
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
