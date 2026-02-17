import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Trending1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 13.0111.9695-2.315c.358-.855 1.5785-.808 1.8703.0722l1.1808 3.5618c.307.9259 1.6137.9135 1.9032-.018l2.9857-9.6065c.3035-.9766 1.6948-.9264 1.9279.0696l3.3814 14.4496c.2287.9773 1.5841 1.0511 1.9164.1043L21 14.0166" /></svg>;
const ForwardRef = forwardRef(Trending1Icon);
export default createLucideIcon('Trending1Icon', ForwardRef);
