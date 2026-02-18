import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShipFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9 3c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1v3h2c1.1046 0 2 .8954 2 2v2.6577l-6.0301-1.5075a4 4 0 0 0-1.9403 0L5 10.6576V8c0-1.1046.8954-2 2-2h2z" clipRule="evenodd" /><path fill="currentColor" d="m19.2205 18.5801 1.9966.4437c.5392.1198.8791.654.7593 1.1931s-.654.8791-1.1931.7593l-3.8492-.8554a2 2 0 0 0-.8677 0l-3.1985.7108a4 4 0 0 1-1.7354 0l-3.1984-.7108a2 2 0 0 0-.8677 0l-3.8493.8554c-.539.1198-1.0733-.2201-1.193-.7593-.1199-.5391.22-1.0733.7592-1.1931l1.9967-.4437c-1.357-2.2688-2.1495-5.2684 1.5567-6.195l4.6934-1.1733a4 4 0 0 1 1.9403 0l4.6933 1.1733c3.7062.9266 2.9138 3.9262 1.5568 6.195" /></svg>;
const ForwardRef = forwardRef(ShipFilledIcon);
export default createLucideIcon('ShipFilledIcon', ForwardRef);
