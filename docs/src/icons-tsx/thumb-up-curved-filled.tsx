import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ThumbUpCurvedFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.1181 2.048c-.4364-.1059-.8677.1523-1.0408.5666C11 6.5 8 8.555 8 11.27v6.4553c0 1.1465.6636 2.2753 1.8356 2.7021 2.6508.9653 4.3979 1.1617 7.1239.9254 2.0909-.1812 3.6626-1.7842 4.0982-3.7201l.8447-3.7545c.5627-2.5008-1.3391-4.878-3.9024-4.878h-3c.4693-2.8158 1.615-6.1042-1.8819-6.9522M2 11.5c0-1.1046.8954-2 2-2h.5C5.8807 9.5 7 10.6193 7 12v6c0 1.3807-1.1193 2.5-2.5 2.5H4c-1.1046 0-2-.8954-2-2z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ThumbUpCurvedFilledIcon);
export default createLucideIcon('ThumbUpCurvedFilledIcon', ForwardRef);
