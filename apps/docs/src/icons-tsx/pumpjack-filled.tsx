import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PumpjackFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M17.0228 4.6952C17.1695 3.7353 17.9987 3 18.9997 3c1.1046 0 2 .8954 2 2 0 .7403-.4022 1.3866-1 1.7324V19c.5523 0 1 .4477 1 1s-.4477 1-1 1h-16c-.5523 0-1-.4477-1-1s.4477-1 1-1H6.987l.7513-2h8.5225l.7513 2h.9875V6.7324a2 2 0 0 1-.2524-.173l-4.4435 1.699L15.5336 15H8.4658l1.8522-5.6-4.5119 1.7252c.4057.525.926.9346 1.5093 1.2087.4998.2349.7147.8305.4798 1.3304s-.8304.7146-1.3303.4798c-1.3133-.6171-2.4157-1.7021-3.0302-3.142-.7127-1.6701-.6262-3.482.086-5.005.2339-.5002.829-.7162 1.3294-.4822s.7162.8291.4822 1.3294c-.3515.7518-.4767 1.6042-.3316 2.4477z" /></svg>;
const ForwardRef = forwardRef(PumpjackFilledIcon);
export default createLucideIcon('PumpjackFilledIcon', ForwardRef);
