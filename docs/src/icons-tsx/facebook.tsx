import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FacebookIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M11.75 2c5.385 0 9.75 4.365 9.75 9.75 0 4.866-3.565 8.9-8.227 9.632v-6.814h2.272l.432-2.818h-2.704V9.921c0-.247.04-.493.132-.712a1.23 1.23 0 0 1 .698-.681 2.03 2.03 0 0 1 .76-.13h1.229V6s-1.116-.19-2.183-.19c-2.227 0-3.682 1.35-3.682 3.793v2.148H7.75v2.818h2.476v6.814C5.565 20.65 2 16.616 2 11.75 2 6.365 6.365 2 11.75 2" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(FacebookIcon);
export default ForwardRef;
