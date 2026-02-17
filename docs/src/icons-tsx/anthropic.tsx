import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AnthropicIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M17.0977 4h-3.5366l6.333 16h3.4543zM6.8992 4 .6484 20H4.185l1.3982-3.3641h6.5797l1.316 3.282h3.5366L10.6003 4H6.8992m-.329 9.6821 2.1384-5.6616 2.2206 5.6616h-4.359" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(AnthropicIcon);
export default createLucideIcon('AnthropicIcon', ForwardRef);
