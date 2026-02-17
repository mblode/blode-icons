import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Nfc2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.0005 8.0002c1.2142.9123 1.9995 2.3644 1.9995 4a4.99 4.99 0 0 1-.3189 1.761 5.013 5.013 0 0 1-1.6809 2.2392L7 13.3337m-2.0005 2.6665C3.7853 15.088 3 13.6358 3 12.0002c0-.6197.1128-1.2131.3189-1.7608a5.014 5.014 0 0 1 1.6806-2.2392L9 10.667m10.1805-5.3027C20.3358 7.3068 20.9994 9.576 20.9994 12c0 2.4242-.6636 4.6934-1.8189 6.6359M15.9531 7.7847c.6679 1.2575 1.0463 2.6923 1.0463 4.2154 0 1.5232-.3784 2.9579-1.0463 4.2155" /></svg>;
const ForwardRef = forwardRef(Nfc2Icon);
export default createLucideIcon('Nfc2Icon', ForwardRef);
