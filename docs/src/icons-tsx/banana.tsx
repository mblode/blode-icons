import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BananaIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="m14 10 2.0956-5.0293A1.577 1.577 0 0 1 17.5515 4c.8192 0 1.501.6268 1.5345 1.4453C19.1291 6.4987 19.1454 7.924 19 9c-.2156 1.5957-1 4-1 4" /><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M14.5 13.0001c-1.9535-.5091-3.7798-.9424-5.7078-.6575-.4792.0708-.9716-.1116-1.2403-.5146-.3165-.4749-.2379-1.1171.2392-1.4302 2.7725-1.8198 7.545-2.4143 6.7089 2.6023Zm0 0c1.7792 1.9303 2.5224 3.3021 1.9531 5.1085-.2741.8696.2588 1.8914 1.1706 1.8914.2444 0 .4859-.0765.6739-.2328 3.6386-3.025 1.494-8.2791-3.7976-6.7671Z" /><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M12 12.5c-1.7736 2.2169-4.0168 3.5486-6.8749 3.9219C4.4993 16.5036 4 17.0158 4 17.647c0 .4081.2097.7936.5721.9812 4.0196 2.0814 8.2046.1186 11.4279-2.5568" /></svg>;
const ForwardRef = forwardRef(BananaIcon);
export default createLucideIcon('BananaIcon', ForwardRef);
