import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowShareRightFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11.9314 5.3692c0-1.769 2.1278-2.667 3.3953-1.433l7.0665 6.8807c.8064.7851.8064 2.0807 0 2.8659l-7.0665 6.8805c-1.2675 1.2341-3.3953.3361-3.3953-1.4329v-2.373c-3.418.0541-5.3255.3928-6.5122.9329-1.1965.5445-1.7335 1.3242-2.4064 2.6368-.558 1.0884-2.0905.5833-2.0791-.5152.0426-4.1311.6994-7.2466 2.6793-9.2872 1.8301-1.8863 4.5886-2.65 8.3184-2.7605z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowShareRightFilledIcon);
export default createLucideIcon('ArrowShareRightFilledIcon', ForwardRef);
