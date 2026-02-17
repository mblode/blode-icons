import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LightbulbSimpleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4 10c0-4.4183 3.5817-8 8-8s8 3.5817 8 8c0 2.9113-1.5557 5.4582-3.8763 6.8565a8 8 0 0 1-.1237.0731V17H8v-.0704a8 8 0 0 1-.1237-.0731C5.5557 15.4582 4 12.9113 4 10M8 19c0 2.2091 1.7909 4 4 4s4-1.7909 4-4z" /></svg>;
const ForwardRef = forwardRef(LightbulbSimpleFilledIcon);
export default ForwardRef;
