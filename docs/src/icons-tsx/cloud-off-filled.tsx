import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CloudOffFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M22.1022 17.8595A4.977 4.977 0 0 0 23 15c0-2.4397-1.7473-4.4713-4.0588-4.9116C18.4945 6.6531 15.5571 4 12 4c-1.0961 0-2.1332.2519-3.0565.7008zM3.7071 2.2929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l3.699 3.699a7 7 0 0 0-.3937.7586C2.9604 8.7964 1 11.1685 1 14c0 3.3137 2.6863 6 6 6h11q.2812-.0001.5551-.0306l1.7378 1.7378c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142l-2.0919-2.092-.0094-.0095L7.9938 6.5795l-.0095-.0094z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CloudOffFilledIcon);
export default createLucideIcon('CloudOffFilledIcon', ForwardRef);
