import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MoonStarFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="m16.2404 5.0176.8115-1.6232c.1843-.3685.7102-.3685.8945 0l.8116 1.6232a.5.5 0 0 0 .2236.2236l1.6231.8116c.3686.1843.3685.7102 0 .8944l-1.6231.8116a.5.5 0 0 0-.2237.2236l-.8115 1.6232c-.1843.3685-.7102.3685-.8945 0l-.8115-1.6232a.5.5 0 0 0-.2237-.2236l-1.6231-.8116c-.3685-.1842-.3685-.7101 0-.8944l1.6231-.8116a.5.5 0 0 0 .2237-.2236" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M12.0517 3.5997a1 1 0 0 0-.9079-1.5639C6.0214 2.4698 2 6.7638 2 11.998c0 5.5218 4.4763 9.9981 9.9981 9.9981 5.2343 0 9.5283-4.0215 9.9621-9.1441a1 1 0 0 0-1.5639-.9078c-.9661.6659-2.1361 1.0557-3.4002 1.0557-3.3137 0-6-2.6863-6-6 0-1.264.3897-2.434 1.0556-3.4" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MoonStarFilledIcon);
export default createLucideIcon('MoonStarFilledIcon', ForwardRef);
