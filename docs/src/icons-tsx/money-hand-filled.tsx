import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MoneyHandFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14.5634 13.5799c.0366-.3206-.1342-.6483-.4556-.6775l-.0175-.0015-4.8936-.3878a4.2 4.2 0 0 0-1.5971.1821L3.6978 13.932A1 1 0 0 0 3 14.8852v5.1347c0 .5522.4477 1 1 1h.8383l.0123.0038c.1093.0337.2663.081.4614.1367.3896.1112.9349.257 1.5595.3957 1.2192.2706 2.8537.5405 4.2279.41 1.4703-.1397 3.2882-.8303 4.8586-1.5425 1.6028-.727 3.0757-1.5372 3.8935-2.0047.73-.4173 1.1485-1.1627 1.1485-1.9469 0-1.5459-1.443-1.9162-3-1.472l-2.5.75c-1 1.25-1.5493 1.5657-3.1249 1.9028l-1.258.2692a.715.715 0 0 1-.2992-1.3981l1.2279-.2627c1.3557-.2901 2.3674-1.3676 2.5176-2.6813M18 7.5c0 1.933-1.567 3.5-3.5 3.5S11 9.433 11 7.5 12.567 4 14.5 4 18 5.567 18 7.5M9.2036 8.9876A5.5 5.5 0 0 1 9 7.5c0-2.0113 1.0796-3.7705 2.691-4.7296A3.486 3.486 0 0 0 9.5 2C7.567 2 6 3.567 6 5.5c0 1.8332 1.4093 3.3371 3.2036 3.4876" /></svg>;
const ForwardRef = forwardRef(MoneyHandFilledIcon);
export default createLucideIcon('MoneyHandFilledIcon', ForwardRef);
