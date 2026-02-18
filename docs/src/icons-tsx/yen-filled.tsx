import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const YenFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10-4.4772 10-10 10S2 17.5228 2 12m7.2526-4.6585c-.3637-.4156-.9955-.4578-1.4111-.094-.4156.3636-.4578.9954-.094 1.411L10.6711 12H10c-.5523 0-1 .4477-1 1s.4477 1 1 1h1v3c0 .5523.4477 1 1 1s1-.4477 1-1v-3h1c.5523 0 1-.4477 1-1s-.4477-1-1-1h-.6712l2.9238-3.3415c.3637-.4156.3215-1.0474-.0941-1.411-.4156-.3638-1.0474-.3216-1.4111.094L12 10.4814z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(YenFilledIcon);
export default createLucideIcon('YenFilledIcon', ForwardRef);
