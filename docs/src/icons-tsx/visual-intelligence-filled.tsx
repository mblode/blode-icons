import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VisualIntelligenceFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} fill="none" viewBox="0 0 25 24" ref={ref} {...props}><path fill="currentColor" d="M18.4067 6.3429c-2.5779-2.578-6.4798-3.0298-9.521-1.3507-.4834.267-1.0918.0914-1.3587-.3921-.267-.4835-.0914-1.0918.392-1.3588 3.8003-2.0982 8.6772-1.5373 11.9019 1.6874s3.7856 8.1016 1.6874 11.9018c-.267.4835-.8753.6591-1.3588.3921s-.659-.8753-.3921-1.3587c1.6791-3.0412 1.2272-6.943-1.3507-9.521M5.3502 6.7769c.4835.2669.659.8752.3921 1.3587-1.679 3.0412-1.2272 6.9431 1.3507 9.521s6.4798 3.0298 9.521 1.3507c.4835-.2669 1.0918-.0914 1.3588.3921s.0913 1.0918-.3921 1.3588c-3.8003 2.0981-8.6772 1.5373-11.902-1.6874-3.2246-3.2247-3.7854-8.1016-1.6873-11.9019.267-.4834.8753-.659 1.3588-.392" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M12.75 7.5c1.6669 0 3.2233.8382 4.5581 2.2848 1.1533 1.25 1.1533 3.1804 0 4.4304C15.9733 15.6618 14.4169 16.5 12.75 16.5s-3.2233-.8382-4.558-2.2848c-1.1533-1.25-1.1533-3.1804 0-4.4304C9.5267 8.3382 11.0831 7.5 12.75 7.5m0 3.25c-.6904 0-1.25.5596-1.25 1.25s.5596 1.25 1.25 1.25S14 12.6904 14 12s-.5596-1.25-1.25-1.25" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(VisualIntelligenceFilledIcon);
export default createLucideIcon('VisualIntelligenceFilledIcon', ForwardRef);
