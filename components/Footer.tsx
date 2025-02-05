import React from 'react';
import MagicButton from "@/components/ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa";
import {socialMedia} from "@/data";

const Footer = () => {
    return (
        <footer className="w-full pb-5 mb-[100px] md:mb-5" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vm]">
                    Ready to take <span className="text-blue-500">Your </span>digital presence to the next level?
                </h1>
                <p className="text-white-300 md:mt-10 my-5 text-center">Reach Out to me Your Goal . let&apos;I Can Help you</p>
            <a href="mailTo:harshakumara1998030944@gmail.com">
                <MagicButton title="Let's get in Touch" icon={<FaLocationArrow/>} position="right"></MagicButton>
            </a>
                <div>
                   <div className="flex flex-col md:flex-row mt-16 justify-between items-center">
                        <p className="md:text-base font-light md:font-normal">Copyright © 2025 Harsha</p>
                  <div className="flex items-center md:gap-3 gap-6">
                      {socialMedia.map((profile) => (
                          <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300">
                              <img src={profile.img}
                                   alt={profile.id}
                                   width={20} height={20} />
                          </div>
                      ))}

                  </div>
                   </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;