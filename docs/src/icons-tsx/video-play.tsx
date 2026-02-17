import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VideoPlayIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 56 56" ref={ref} {...props}><path fill="#fff" d="m35.376 28.4158-10.5986 7.0658a.5.5 0 0 1-.7774-.416V20.9341a.5.5 0 0 1 .7774-.416l10.5986 7.0657a.5.5 0 0 1 0 .832" /></svg>;
const ForwardRef = forwardRef(VideoPlayIcon);
export default createLucideIcon('VideoPlayIcon', ForwardRef);
