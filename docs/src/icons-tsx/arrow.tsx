import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 4.5815C14.0736 4.2065 13.0609 4 12 4c-4.4183 0-8 3.5817-8 8 0 3.1631 1.8358 5.8975 4.5 7.1958M9 15v5H4" /><path fill="currentColor" d="M13 21c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1M21 11c0-.5523-.4477-1-1-1s-1 .4477-1 1 .4477 1 1 1 1-.4477 1-1M19.9295 14.2679c.4783.2762.6421.8878.366 1.3661s-.8877.6421-1.366.366-.6422-.8877-.3661-1.366.8878-.6422 1.3661-.3661M17.3676 19.2942c.4783-.2761.6422-.8877.366-1.366s-.8877-.6422-1.366-.3661-.6422.8878-.366 1.3661.8877.6421 1.366.366M18.9269 8c-.4782.2761-1.0898.1122-1.366-.366-.2761-.4783-.1122-1.09.366-1.366.4783-.2762 1.0899-.1123 1.3661.366s.1122 1.0898-.3661 1.366" /></svg>;
const ForwardRef = forwardRef(ArrowIcon);
export default ForwardRef;
