import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PopcornIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.9831 7.9994c.1137-.846-.3869-1.6705-1.1733-1.989-.5033-.204-.8894-.5774-1.1009-1.0785-.3334-.7896-1.1854-1.258-2.0305-1.149-.5438.0696-1.0669-.0641-1.5064-.393-.6844-.5147-1.6603-.5147-2.3447 0-.4151.3122-.9414.4678-1.4591.401-.865-.1115-1.7336.325-2.0785 1.1434-.211.5004-.5972.874-1.0999 1.0772C5.4033 6.3295 4.9024 7.154 5.016 8M9.5197 8.5l.4615 12m4.5001-12-.4616 12M4.645 9.1272l1.1864 9.2543C6.0234 19.8786 7.2977 21 8.8071 21h6.3868c1.5093 0 2.7837-1.1214 2.9756-2.6185l1.1865-9.2543C19.4326 8.5292 18.9669 8 18.3641 8H5.6369c-.6028 0-1.0686.5293-.992 1.1272" /></svg>;
const ForwardRef = forwardRef(PopcornIcon);
export default createLucideIcon('PopcornIcon', ForwardRef);
