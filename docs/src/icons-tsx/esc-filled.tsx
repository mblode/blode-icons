import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EscFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 1c.5523 0 1 .4477 1 1v5c0 .5523-.4477 1-1 1s-1-.4477-1-1V2c0-.5523.4477-1 1-1M7.856 3.9463c.3058.46.1809 1.0807-.279 1.3864C5.4189 6.7677 4 9.2183 4 12c0 4.4183 3.5817 8 8 8s8-3.5817 8-8c0-2.7817-1.4189-5.2324-3.577-6.6673-.4599-.3057-.5848-.9265-.279-1.3864s.9265-.5848 1.3864-.279C20.2223 5.457 22 8.5207 22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12c0-3.4793 1.7777-6.5429 4.4696-8.3327.46-.3058 1.0807-.1809 1.3864.279" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(EscFilledIcon);
export default createLucideIcon('EscFilledIcon', ForwardRef);
