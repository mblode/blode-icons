import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PinFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10.2638 19.6777 8 17.414l-3.2929 3.2929c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4143l3.2929-3.2928L4.322 13.736c-2.398-2.3981-.9111-6.505 2.4663-6.812l3.0157-.2742a2 2 0 0 0 1.5798-1.0436l.8241-1.5304c1.2703-2.3592 4.4557-2.8267 6.3503-.932l2.2978 2.2977c1.8946 1.8947 1.4271 5.08-.932 6.3503l-1.5305.8241a2 2 0 0 0-1.0436 1.5799l-.2741 3.0157c-.3071 3.3774-4.414 4.8643-6.812 2.4662" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PinFilledIcon);
export default ForwardRef;
