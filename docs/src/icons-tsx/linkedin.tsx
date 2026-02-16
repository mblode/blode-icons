import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LinkedinIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M23 12c0 6.0754-4.9246 11-11 11S1 18.0754 1 12 5.9246 1 12 1s11 4.9246 11 11M5.813 18.1871V8.5635h2.7494v9.6236zm9.2805-9.6236c-1.919 0-2.2496.6995-2.4064 1.3741V8.5624H9.9376v9.6247h2.7495v-5.4989c0-.8913.484-1.3741 1.3764-1.3741.8687 0 1.3741.4727 1.3741 1.3741v5.5h2.7495v-4.8118c0-2.7506-.3577-4.813-3.0936-4.813M8.5624 6.4989a1.3751 1.3751 0 0 1-2.361.9978 1.3754 1.3754 0 0 1 .9862-2.3337 1.3753 1.3753 0 0 1 1.3748 1.3359" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(LinkedinIcon);
export default ForwardRef;
