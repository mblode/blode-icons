import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PetsIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M14 20.0427c-1-.9043-3-.9043-3.869 0-.9204.7887-2.0212 1.4385-3.1448.4756C3.7803 17.771 9.1747 11 12 11s8.2197 6.771 5.0138 9.5183c-1.1236.9629-2.0935.3131-3.0138-.4756ZM10.497 5.5665c.0517 1.3802-.5767 2.4693-1.4034 2.4326S7.5546 6.8138 7.503 5.4336s.5767-2.4694 1.4034-2.4327 1.539 1.1853 1.5906 2.5655ZM13.503 5.5665c-.0517 1.3802.5767 2.4693 1.4035 2.4326s1.5389-1.1853 1.5905-2.5655-.5767-2.4694-1.4035-2.4327-1.5389 1.1853-1.5905 2.5655ZM5.9355 9.0198c.2396 1.236-.2088 2.3411-1.0016 2.4682-.7928.1272-1.6297-.7718-1.8694-2.0078-.2396-1.236.2088-2.341 1.0016-2.4682s1.6297.7718 1.8694 2.0078ZM20.9355 9.4802c-.2397 1.236-1.0766 2.135-1.8694 2.0078s-1.2412-1.2322-1.0016-2.4682 1.0766-2.135 1.8694-2.0078 1.2412 1.2322 1.0016 2.4682Z" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PetsIcon);
export default createLucideIcon('PetsIcon', ForwardRef);
