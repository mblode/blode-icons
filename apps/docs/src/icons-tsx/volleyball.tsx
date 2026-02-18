import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VolleyballIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c1.35-2.485 1.35-6.515 0-9m0 9c-2.827.0739-6.3166 2.088-7.7936 4.5M12 12c1.477 2.412 4.9671 4.4261 7.794 4.5M7.5037 13.4343c1.7024 2.7796 4.9008 5.2579 8.3122 6.7083M3.0444 11.153c2.988-2.1903 6.715-3.6814 9.9635-3.7658m2.4855 7.7912c1.5556-2.8639 2.106-6.8684 1.6636-10.549m1.207 1.0066c3.5147 3.5148 3.5147 9.2133 0 12.728-3.5148 3.5147-9.2133 3.5147-12.728 0-3.5147-3.5148-3.5147-9.2133 0-12.728 3.5148-3.5147 9.2133-3.5147 12.728 0" /></svg>;
const ForwardRef = forwardRef(VolleyballIcon);
export default createLucideIcon('VolleyballIcon', ForwardRef);
