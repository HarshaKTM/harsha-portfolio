import React from 'react';
import {workExperience} from "@/data";
import {Button} from "@/components/ui/MovingBorders";
import MagicButton from "@/components/ui/MagicButton";

const Experience = () => {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading">
                My
                <span className="text-purple"> Experience And Certificate</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10  ">
                {workExperience.map(({id, title, desc, thumbnail, link} )=>(
                    <Button
                        key={id}
                        duration={Math.floor(Math.random()*10000+10000)}
                        borderRadius='1.75rem'
                        className='flex-1 text-white border-natural-200 dark:border-stone-800'
                        link={link}

                    >
                        <div className="flex lg:flex-row flex-col lg:item-center p-3 md:p-5 gap-2">
                            <img src={thumbnail}
                                alt={thumbnail}
                                className="lg:w-32 md:w-20 w-16" />
                            <div className="lg:ms-5">
                                <h1 className="text-2xl font-bold text-start test-xl">
                                    {title}
                                </h1>
                                <p className="text-white-100 text-start mt-3 font-semibold">
                                    {desc}
                                </p>
                             <a href={link}>
                                 <MagicButton key={id}
                                    className='mt-5 text-white text-start mt-3 font-semibold font-light '
                                    text='Learn More'
                                    icon='fas fa-info-circle'
                                /> </a>
                            </div>
                        </div>
                    </Button>
                ))}

            </div>
        </div>
                    );
                    };
export default Experience;