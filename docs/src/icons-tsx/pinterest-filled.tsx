import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PinterestFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2C6.4745 2 2 6.4778 2 12.0075c0 4.2374 2.6276 7.8588 6.3514 9.3163-.0901-.7964-.1652-1.9985.03-2.87.1802-.7814 1.1712-4.9737 1.1712-4.9737s-.3003-.6011-.3003-1.4876c0-1.3975.8108-2.4343 1.8018-2.4343.8558 0 1.2612.6462 1.2612 1.4125 0 .8565-.5405 2.1488-.8258 3.3358-.2403.9918.4955 1.8032 1.4865 1.8032 1.7717 0 3.1381-1.8783 3.1381-4.583 0-2.3892-1.7267-4.0721-4.1742-4.0721-2.8378 0-4.5195 2.1337-4.5195 4.3425 0 .8565.3304 1.7882.7508 2.284.075.1052.09.1804.075.2855-.075.3156-.2402.9918-.2702 1.127-.045.1803-.1502.2254-.3304.1352-1.2462-.586-2.027-2.4042-2.027-3.8767 0-3.1556 2.2973-6.0556 6.6066-6.0556 3.4685 0 6.1562 2.4793 6.1562 5.7701 0 3.441-2.1772 6.2209-5.1802 6.2209-1.006 0-1.967-.526-2.2973-1.142 0 0-.4955 1.9083-.6156 2.3741-.2252.8715-.8408 1.9534-1.2463 2.6296C9.973 21.8347 10.964 22 12 22c5.5255 0 10-4.4778 10-10.0075C22 6.4778 17.5255 2 12 2" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PinterestFilledIcon);
export default createLucideIcon('PinterestFilledIcon', ForwardRef);
