import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BoxSparkleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="m12.969 3.2981.031-.062.031.062c.1452.2903.3806.5257.6709.6709l.062.031-.062.031a1.5 1.5 0 0 0-.6709.6709l-.031.062-.031-.062a1.5 1.5 0 0 0-.6709-.6709L12.2361 4l.062-.031a1.5 1.5 0 0 0 .6709-.6709ZM7.5 5.193a1.4 1.4 0 0 0 .307.307 1.4 1.4 0 0 0-.307.307 1.4 1.4 0 0 0-.307-.307 1.4 1.4 0 0 0 .307-.307Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10h14v9c0 1.1046-.8954 2-2 2H7c-1.1046 0-2-.8954-2-2zM10 14h4M18.9998 5l-2.7 4.5" /></svg>;
const ForwardRef = forwardRef(BoxSparkleIcon);
export default ForwardRef;
