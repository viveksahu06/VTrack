import { Card, CardContent } from "@/components/ui/card";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import React from "react";
import Button from "./Button";

const ProjectList = () =>{
    return(
        <>
         <div className='relative px-5 lg:px-0 lg:gap justify-center py-5'>
                <section className='filterSection'>
                    <Card className="p-5 sticky top-10">
                        <div className='flex justify-between lg:w-[20rem]'>
                            <p className='text-xl tracking-wider'>filters</p>
                            {/* Make sure Button is imported and implemented correctly */}
                            {/* Here, assuming Button component accepts variant and size props */}
                            <Button variant="ghost" size="icon">
                                {/* Make sure MixerHorizontalIcon is imported correctly */}
                                <MixerHorizontalIcon />
                            </Button>
                        </div>
                        <CardContent className="mt-5"></CardContent>
                    </Card>
                </section>
                <section className='projectListSection w-full lg:w-[48rem]'></section>
            </div>
        </>
    )
}

export default ProjectList