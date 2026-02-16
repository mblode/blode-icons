import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Web3Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M2.999 12.1157c-1.2911.6952-2.0013 1.3228-1.8826 1.7657.2858 1.0669 5.2746.6572 11.1428-.9152s10.3934-3.712 10.1075-4.7788c-.1186-.4429-1.0475-.6314-2.5132-.5879M2.9989 12.1157c.01.732.11 1.4745.3081 2.214 1.2865 4.8011 6.2215 7.6504 11.0227 6.3639s7.6505-6.2215 6.364-11.0227a9.02 9.02 0 0 0-.8402-2.0714M2.9989 12.1157C2.9444 8.095 5.6092 4.3953 9.671 3.307c4.0619-1.0884 8.2194.7832 10.1826 4.2925" /></svg>;
const ForwardRef = forwardRef(Web3Icon);
export default ForwardRef;
