import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BetaFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7 8.5C7 5.4624 9.4624 3 12.5 3c3.0734 0 4.9528 2.1637 5.1595 4.4083.1029 1.1171-.2082 2.2823-1.0241 3.1733a4 4 0 0 1-.0861.0911c.4552.236.8551.5298 1.1956.8746.964.976 1.3616 2.2711 1.2575 3.5348C18.7923 17.6332 16.5784 20 13 20c-1.5367 0-2.9385-.5777-4-1.5278V19c0 1.6569-1.3431 3-3 3-.5523 0-1-.4477-1-1s.4477-1 1-1 1-.4477 1-1zM9 14c0 2.2091 1.7909 4 4 4 2.6037 0 3.8898-1.6332 4.0092-3.0821.0606-.7363-.1697-1.4412-.6872-1.9652C15.8072 12.4315 14.9173 12 13.5 12a1 1 0 0 1-.1381-.0095A7 7 0 0 1 13 12c-.5523 0-1-.4477-1-1s.4477-1 1-1c1.1156 0 1.7833-.3573 2.1603-.769.386-.4216.566-1.0064.5077-1.6393C15.5524 6.3363 14.5003 5 12.5 5 10.567 5 9 6.567 9 8.5z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BetaFilledIcon);
export default createLucideIcon('BetaFilledIcon', ForwardRef);
