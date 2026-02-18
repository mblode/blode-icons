import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ColorPaletteFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 12c0-5.2998 4.5318-9.5 10-9.5S22 6.7002 22 12c0 1.8745-.5044 3.2203-1.6511 3.934-1.0477.6522-2.3518.571-3.3732.4382-.363-.0472-.7454-.1104-1.1041-.1696a61 61 0 0 0-.4706-.0766c-.5039-.0791-.944-.1348-1.3291-.1404-.7742-.0113-1.0319.1704-1.1775.4616-.0829.166-.1017.3932.0288.7799.1172.3472.3045.6862.5208 1.0777q.0581.1049.1186.2155c.1199.2193.2559.4764.3516.7298.0879.2324.2028.6125.1176 1.0287-.1046.5109-.4558.8519-.8657 1.0284-.354.1524-.7648.1928-1.1661.1928-5.4682 0-10-4.2002-10-9.5m8.5-2.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5S9 7.1716 9 8s.6716 1.5 1.5 1.5m-1.75 2.75c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5M15.5 11c.8284 0 1.5-.6716 1.5-1.5S16.3284 8 15.5 8 14 8.6716 14 9.5s.6716 1.5 1.5 1.5" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(ColorPaletteFilledIcon);
export default createLucideIcon('ColorPaletteFilledIcon', ForwardRef);
