import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Images5Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.9996 7c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5 1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5M5.9377 12.9714c-.988 0-1.8265 1.0083-2.4726 2.2001-.5201.9595-.7801 1.4392-.7012 2.0753.0604.4865.4234 1.0961.8223 1.381.5216.3726 1.1883.3726 2.5217.3726h9.514c2.1723 0 3.2584 0 4.0361-.5487.612-.4318 1.1399-1.2991 1.2423-2.0412.1302-.9428-.2893-1.7539-1.1282-3.3762-1.1003-2.1275-2.2068-3.1142-3.2725-3.0259-2.9768.2466-4.2835 4.9109-6 4.9109-1.427 0-2.7586-1.9479-4.5619-1.9479" /></svg>;
const ForwardRef = forwardRef(Images5Icon);
export default ForwardRef;
