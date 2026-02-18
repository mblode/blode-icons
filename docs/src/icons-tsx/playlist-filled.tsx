import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PlaylistFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M21.998 5c0-.5523-.4477-1-1-1s-1 .4477-1 1v9.4714c-.6072-.3046-1.2999-.4714-2-.4714-2.0306 0-4 1.404-4 3.5s1.9694 3.5 4 3.5c2.0307 0 4-1.404 4-3.5zM3 5c-.5523 0-1 .4477-1 1s.4477 1 1 1h13c.5523 0 1-.4477 1-1s-.4477-1-1-1zM3 11c-.5523 0-1 .4477-1 1s.4477 1 1 1h8c.5523 0 1-.4477 1-1s-.4477-1-1-1zM3 17c-.5523 0-1 .4477-1 1s.4477 1 1 1h6c.5523 0 1-.4477 1-1s-.4477-1-1-1z" /></svg>;
const ForwardRef = forwardRef(PlaylistFilledIcon);
export default createLucideIcon('PlaylistFilledIcon', ForwardRef);
