import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EarthFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10m-7.6161 5a1 1 0 0 0 .8944-.5528l.3303-.6605a1 1 0 0 0-.3367-1.2772l-1.9936-1.3397a1 1 0 0 0-.4941-.168l-1.2232-.0781a1 1 0 0 0-.7695.2896l-.2077.207a1 1 0 0 0-.1263 1.2631l1.2476 1.8713a1 1 0 0 0 .832.4453zM8.5401 9.9302c-.2806.5571-.9972.7241-1.4952.3486L5.4241 9.0564c-.3793-.286-.5106-.8033-.2637-1.2091C6.5641 5.5406 9.102 4 11.9995 4c.3254 0 .6461.0194.9613.0572.5487.0657.8747.6157.7403 1.1517l-.5543 2.2105a1 1 0 0 1-.726.7266l-2.9712.7474a1 1 0 0 0-.649.5199z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(EarthFilledIcon);
export default createLucideIcon('EarthFilledIcon', ForwardRef);
