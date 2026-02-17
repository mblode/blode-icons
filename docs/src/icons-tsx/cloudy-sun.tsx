import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CloudySunIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 2.5V2m-4.9511 2.5502-.3536-.3535m10.2519.3535.3536-.3535M23 9.5h-.5M18.4649 12A3.98 3.98 0 0 0 19 10c0-2.2091-1.7909-4-4-4-1.8638 0-3.4299 1.2748-3.874 3m5.374 3c-.3699 0-.7294.0446-1.0733.1288-.5523.1351-1.167-.0735-1.4907-.5409-.7017-1.0132-1.7073-1.7999-2.885-2.2282A5.99 5.99 0 0 0 9 9c-3.3137 0-6 2.6863-6 6s2.6863 6 6 6h7.5c2.4853 0 4.5-2.0147 4.5-4.5 0-1.869-1.1394-3.4718-2.7614-4.1518A4.49 4.49 0 0 0 16.5 12" /></svg>;
const ForwardRef = forwardRef(CloudySunIcon);
export default ForwardRef;
