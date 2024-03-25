import { ReactNode } from "react";
import { TEXT_PROPS_TYPE } from "../text";

export interface PROPS_TYPE extends TEXT_PROPS_TYPE {
    link: string;
    prefix?:ReactNode;
    prefixTid?:string;
    prefixTvalue?:object;
    sufix?:ReactNode;
    sufixTid?:string;
    sufixTvalue?:object;
}