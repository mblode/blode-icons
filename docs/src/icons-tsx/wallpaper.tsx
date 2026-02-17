import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WallpaperIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 18.6738c1.1486-.442 2.8351-1.3333 2.5-2.6738-.5423-2.1693-5 0-6-1.5-.7479-1.1218.4618-3.0826 1.1194-4M20.5 13.2406C18.4067 12.1389 14.5768 10 12 10c-2.6225 0-6.543 2.2155-8.6097 3.2983M6 5h12c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3V8c0-1.6569 1.3431-3 3-3" /></svg>;
const ForwardRef = forwardRef(WallpaperIcon);
export default createLucideIcon('WallpaperIcon', ForwardRef);
