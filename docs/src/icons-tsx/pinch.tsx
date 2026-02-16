import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PinchIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.5 7.75c-.6667 1.7245-.6667 3.2755 0 5m13.4948-6.7094-4.3523 2.597L9.6323 5.039c-.5551-.9937-1.7846-1.3341-2.746-.7604-.9616.5737-1.291 1.8443-.7359 2.838l3.0154 5.3976-1.194-.188c-1.0975-.1727-2.1228.6068-2.29 1.7411L5.5 15.3013l5.4462 3.5501c2.2634 1.4755 5.1314 1.5334 7.4488.1506 3.4473-2.0569 4.6285-6.6125 2.6382-10.1752l-.9193-1.6455c-.8327-1.4906-2.6769-2.0013-4.1191-1.1407" /></svg>;
const ForwardRef = forwardRef(PinchIcon);
export default ForwardRef;
