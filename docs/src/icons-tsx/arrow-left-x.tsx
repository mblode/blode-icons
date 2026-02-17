import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowLeftXIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m11.2484 10 4.0016 4.0017M15.2517 10 11.25 14.0017m-7.4358-3.9059 3.2857-4A3 3 0 0 1 9.4181 5H18c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3H9.4181a3 3 0 0 1-2.3182-1.0958l-3.2857-4c-.909-1.1067-.909-2.7017 0-3.8084" /></svg>;
const ForwardRef = forwardRef(ArrowLeftXIcon);
export default ForwardRef;
