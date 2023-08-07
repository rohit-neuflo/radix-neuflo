'use client'
import React from "react";
import { Banner,BannerTrigger,BannerContent,BannerCancel } from "@/components/Banner";
import {Button} from "@/components/Button"
import { Lightbulb } from "@phosphor-icons/react";

export default function BannerPage(){

    // const action = [<EyeClosed size={16}/>]
    // const action = [<BannerCancel asChild>
    // <Button size="sm" variant="ghost">Discard</Button></BannerCancel>,
    // <Button size="sm" variant="secondary">Confirm</Button>]
    const action = [<Lightbulb size={16} weight="light"/>]
    return(
        <Banner>
            <BannerTrigger asChild>
               <Button>Banner</Button>
            </BannerTrigger>
            <BannerContent title="Merged Pull Request" description="Pull request #9999 merged after a successful build" actionType="icon" action={action}/>
        </Banner>
    )
}