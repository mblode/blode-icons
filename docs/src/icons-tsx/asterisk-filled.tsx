import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AsteriskFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M11.9982 2c.5523 0 1 .4477 1 1v7.2675l6.2935-3.6335c.4783-.2762 1.0899-.1123 1.3661.366s.1122 1.0899-.3661 1.366l-6.2938 3.6338 6.2945 3.6342c.4783.2761.6422.8877.3661 1.366s-.8878.6422-1.3661.366l-6.2942-3.6339V21c0 .5523-.4477 1-1 1s-1-.4477-1-1v-7.2683l-6.295 3.6343c-.4782.2762-1.0898.1123-1.366-.366-.276-.4783-.1122-1.0899.366-1.366l6.2947-3.6342-6.294-3.6338C3.2258 8.09 3.062 7.4783 3.338 7c.2762-.4783.8878-.6422 1.366-.366l6.2943 3.6339V3c0-.5523.4477-1 1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(AsteriskFilledIcon);
export default createLucideIcon('AsteriskFilledIcon', ForwardRef);
