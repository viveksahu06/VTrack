import { Card, CardContent } from "@/components/ui/card";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import React from "react";
import Button from "./Button";
import { ScrollArea } from "@radix-ui/react-scroll-area/dist";

const ProjectList = () =>{
    return(
        <>
         <div className='relative px-5 lg:px-0 lg:gap justify-center py-5'>
                <section className='filterSection'>
                    <Card className="p-5 sticky top-10">
                        <div className='flex justify-between lg:w-[20rem]'>
                            <p className='text-xl tracking-wider'>filters</p>
                            
                            <Button variant="ghost" size="icon">
                        
                                <MixerHorizontalIcon />
                            </Button>
                        </div>
                        <CardContent className="mt-5">

                            <ScrollArea className ="space-y-7 h-[70vh]">

                                <div>
                                    <h1 className ='pb-3 text-gray-400'>

                                    </h1>
                                </div>

                            </ScrollArea>

                        </CardContent>

                    </Card>
                </section>
                <section className='projectListSection w-full lg:w-[48rem]'></section>
            </div>
        </>
    )
}

export default ProjectList