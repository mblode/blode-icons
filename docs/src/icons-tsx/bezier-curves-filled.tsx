import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BezierCurvesFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7 3C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4V7c0-2.2091-1.7909-4-4-4zm8.9498 4c-1.3795.0004-2.374.729-3.104 1.6142-.6915.8385-1.2335 1.924-1.7118 2.8821l-.0287.0573c-.5133 1.028-.9622 1.9156-1.494 2.5603-.5071.6148-.9882.8862-1.5613.8862H8c-.5523 0-1 .4477-1 1s.4477 1 1 1h.05c1.3795 0 2.3741-.7286 3.1042-1.6136.6916-.8385 1.2336-1.9241 1.7119-2.8822l.0286-.0571c.5133-1.028.9622-1.9157 1.4941-2.5605.5071-.6149.9881-.8864 1.5612-.8866H16c.5523 0 1-.4478 1-1s-.4477-1-1-1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BezierCurvesFilledIcon);
export default createLucideIcon('BezierCurvesFilledIcon', ForwardRef);
