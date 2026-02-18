import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DishwasherFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7 3C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4V7c0-2.2091-1.7909-4-4-4zm5.3493 5.6422.001.001.0021.002.007.007.0254.0252c.0217.0218.0529.0534.0923.094.0787.0811.1901.1984.3232.3455.2659.2936.6212.7087.9776 1.1938.3555.4837.7189 1.0462.995 1.6344.2741.5838.4771 1.2241.4771 1.8549 0 1.6524-1.4506 3.2-3.25 3.2s-3.25-1.5476-3.25-3.2c0-.6308.203-1.2711.477-1.8549.2762-.5882.6396-1.1507.9951-1.6344.3564-.4851.7117-.9002.9776-1.1938.1331-.147.2445-.2644.3232-.3455.0394-.0406.0706-.0722.0923-.094l.0254-.0252.007-.007.0021-.002.001-.001a.5.5 0 0 1 .6986 0M5 6.25C5 5.5596 5.5596 5 6.25 5s1.25.5596 1.25 1.25S6.9404 7.5 6.25 7.5 5 6.9404 5 6.25" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(DishwasherFilledIcon);
export default createLucideIcon('DishwasherFilledIcon', ForwardRef);
