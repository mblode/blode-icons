import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const OpenQuote2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M17.0039 19h1c1.6569 0 3-1.3431 3-3v-2.2308c0-1.5294-1.2398-2.7692-2.7692-2.7692a.231.231 0 0 1-.2308-.2308V5s-4 1.5-4 6v5.001c0 1.6568 1.3432 2.999 3 2.999ZM6.004 19h1c1.6568 0 2.9999-1.3431 2.9999-3v-2.2308C10.0039 12.2398 8.7641 11 7.2347 11a.231.231 0 0 1-.2308-.2308V5s-4 1.5-4 6v5.001c0 1.6568 1.3432 2.999 3 2.999Z" /></svg>;
const ForwardRef = forwardRef(OpenQuote2Icon);
export default ForwardRef;
