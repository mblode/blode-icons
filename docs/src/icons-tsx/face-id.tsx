import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FaceIdIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H7C5.3431 4 4 5.3431 4 7v1m0 8v1c0 1.6569 1.3431 3 3 3h1m8-16h1c1.6569 0 3 1.3431 3 3v1m0 8v1c0 1.6569-1.3431 3-3 3h-1M12.5 8.75V11c0 .9319-.6374 1.715-1.5 1.937M8 9v1m8-1v1m-7 5.6973c.8825.5105 1.9071.8027 3 .8027s2.1175-.2922 3-.8027" /></svg>;
const ForwardRef = forwardRef(FaceIdIcon);
export default ForwardRef;
