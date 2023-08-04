'use client'
import React from "react";
import { Banner,BannerTrigger,BannerContent } from "@/components/Banner";
import {Button} from "@/components/Button"

export default function BannerPage(){

    const action = [<Button variant='ghost' size="sm">Discard</Button>,<Button variant='secondary' size="sm">Confirm</Button>]
    return(
        <Banner>
            <BannerTrigger asChild>
               <Button>Banner</Button>
            </BannerTrigger>
            <BannerContent title="Merge" description="Merge pull request" actionType="button" action={action}/>
        </Banner>
    )
}