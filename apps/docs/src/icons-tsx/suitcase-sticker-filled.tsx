import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SuitcaseStickerFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M13 2c2.2091 0 4 1.7909 4 4h1c2.2091 0 4 1.7909 4 4v7c0 2.2091-1.7909 4-4 4H6c-2.2091 0-4-1.7909-4-4v-7c0-2.2091 1.7909-4 4-4h1c0-2.2091 1.7909-4 4-4zM9 6c0-1.1046.8954-2 2-2h2c1.1046 0 2 .8954 2 2zm-2.1969 5.5214c-.519.1888-.7865.7627-.5976 1.2817l.3828 1.0517c.1888.5189.7627.7865 1.2817.5976l2.9855-1.0866c.5189-.1889.7865-.7627.5976-1.2817l-.3828-1.0517c-.1888-.519-.7627-.7866-1.2817-.5977zm11.163 3.3911C17.7695 16.0969 16.7402 17 15.5 17c-1.3807 0-2.5-1.1193-2.5-2.5 0-1.2402.9031-2.2695 2.0875-2.4661.2616-.0435.5179.0715.7054.259l1.9142 1.9142c.1875.1876.3025.4438.259.7054" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SuitcaseStickerFilledIcon);
export default createLucideIcon('SuitcaseStickerFilledIcon', ForwardRef);
