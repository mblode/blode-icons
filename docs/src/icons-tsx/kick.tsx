import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const KickIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M5 4h5.25v3.5556H12V5.7778h1.75V4H19v5.3333h-1.75v1.7778H15.5v1.7778h1.75v1.7778H19V20h-5.25v-1.7778H12v-1.7778h-1.75V20H5z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(KickIcon);
export default ForwardRef;
