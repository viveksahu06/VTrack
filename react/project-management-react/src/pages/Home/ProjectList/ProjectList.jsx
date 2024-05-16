import { Button } from './components/ui/button'
import { Card, CardContent } from "@/components/ui/card";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { ScrollArea } from "@radix-ui/react-scroll-area/dist";
import { Label } from "@radix-ui/react-label";
import React from "react";


const ProjectList = () =>{
    return(
        <>
         <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5'>
                <section className='filterSection'>
                    <Card className="p-5 sticky top-10">
                        <div className='flex justify-between lg:w-[20rem]'>
                            <p className='text-xl -tracking-wider'>filters</p>
                            
                            <Button variant="ghost" size="icon">
                        
                                <MixerHorizontalIcon />
                            </Button>
                        </div>
                        <CardContent className="mt-5">

                            <ScrollArea className ="space-y-7 h-[70vh]">

                                <div>
                                    <h1 className ='pb-3 text-gray-400 border-b'>
                                        category

                                    </h1>
                                    <div className ='pt-5'>
                                        <RadioGroup>
                                            <div>
                                                <RadioGroupItem value = 'all' id = "r1"/>
                                                <Label htmlFor="r1">all</Label>
                                            </div>
                                        </RadioGroup>

                                    </div>
                                </div>

                            </ScrollArea>

                        </CardContent>

                    </Card>
                </section>
                <section className='projectListSection w-full lg:w-[48rem]'>

                </section>
            </div>
        </>
    )
}

export default ProjectList