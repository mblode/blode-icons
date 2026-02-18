import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const YoutubeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M20.5954 4.4598c.946.253 1.6918.9988 1.9448 1.9448C23 8.1206 23 11.7 23 11.7s0 3.5794-.4598 5.2954a2.755 2.755 0 0 1-1.9448 1.9448C18.8794 19.4 12 19.4 12 19.4s-6.8794 0-8.5954-.4598a2.755 2.755 0 0 1-1.9448-1.9448C1 15.2794 1 11.7 1 11.7s0-3.5794.4598-5.2954c.253-.946.9988-1.6918 1.9448-1.9448C5.1206 4 12 4 12 4s6.8794 0 8.5954.4598M15.5156 11.7 9.8 15V8.4z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(YoutubeIcon);
export default createLucideIcon('YoutubeIcon', ForwardRef);
