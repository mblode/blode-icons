import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CherryFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M13.0495 4.369C13.3521 2.4595 15.0055 1 17 1h1c1.1045 0 2 .8954 2 2v1c0 2.2091-1.7909 4-4 4h-.3486c.5133.997.9183 2.0656 1.1971 3.2094 1.0668-.2053 2.1654-.1167 3.1078.4554C21.3052 12.4835 22 14.0825 22 16.25c0 3.3799-2.7549 5.75-6 5.75-1.5442 0-2.9773-.5367-4.0555-1.4634-1.4682 1.3459-3.5884 1.8297-5.648 1.2778-1.9049-.5104-3.1465-1.6997-3.7827-3.1372-.6225-1.4067-.6467-3.0016-.2481-4.369.3947-1.354 1.2518-2.6304 2.551-3.2339.9997-.4644 2.1241-.4691 3.2692.0199a1 1 0 0 1 .0563-.1082c1.4947-2.4944 1.7045-4.8468.8953-7.7144a1 1 0 0 1 1.5627-1.0714c.8837.6632 1.7056 1.385 2.4493 2.1687m-2.9674 7.2566c.5186.0525 1.0223.1747 1.4881.3809a3.64 3.64 0 0 1 .4734-.3417c.8282-.5027 1.777-.6321 2.7188-.5168-.6157-2.1182-1.7518-3.9486-3.2823-5.5265.1332 2.0641-.2942 4.0187-1.398 6.0041" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(CherryFilledIcon);
export default createLucideIcon('CherryFilledIcon', ForwardRef);
