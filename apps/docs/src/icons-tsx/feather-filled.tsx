import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FeatherFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M19.659 6.151c.6047-1.1402.3605-2.333-.3762-3.1395-.7119-.7794-1.8439-1.1688-3.014-.9518-4.585.8504-7.6862 3.5015-9.612 7.001C4.75 12.5254 4 16.8033 4 21c0 .5523.4477 1 1 1s1-.4477 1-1c0-.6831.021-1.3639.0644-2.0385 6.0737-.03 9.2398-2.9657 10.7215-5.1213.9231-1.343.5737-2.8734-.321-3.9252.1659-.1371.3453-.291.533-.4607.8533-.7713 1.9199-1.9056 2.6611-3.3033" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(FeatherFilledIcon);
export default createLucideIcon('FeatherFilledIcon', ForwardRef);
