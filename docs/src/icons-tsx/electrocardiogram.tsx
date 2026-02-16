import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ElectrocardiogramIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12.0003h1.6577c1.3766 0 2.5765-.9369 2.9104-2.2724L8.0248 3.901c.2528-1.0112 1.6906-1.0094 1.9409.0024l4.0586 16.4035c.251 1.0143 1.6935 1.0126 1.942-.0024l1.4738-6.0178c.3287-1.3423 1.5319-2.2864 2.9139-2.2864H22" /></svg>;
const ForwardRef = forwardRef(ElectrocardiogramIcon);
export default ForwardRef;
