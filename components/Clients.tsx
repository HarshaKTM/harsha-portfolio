import React from 'react';
import {InfiniteMovingCards} from "@/components/ui/InfiniteMovingCards";
import {companies, testimonials} from "@/data";

const Clients = () => {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading">
                Kind words from
                <span className="text-purple">satisfied clients </span>

            </h1>
            <div className="flex flex-col items-center ">
                <div className="relative overflow-hidden items-center antialiased flex flex-col rounded-md">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="slow"
                />
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
                        {companies.map(({id,img,name,nameImg})=>(
                            <div key={id} className="flex items-center space-x-2">
                                <img src={img} alt={name} className="md:w-5 w-10"/>
                                <img src={nameImg} alt={name} className="md:w-24 w-20"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;