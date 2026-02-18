import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Basket2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8.5013 4-2 5m0 0h11m-11 0h-2.5m11.5-5 2 5m0 0h2.5m.7857 1.1789-1.3378 7.3578C19.1898 18.9631 17.9474 20 16.4976 20H7.505c-1.4498 0-2.6922-1.0369-2.9516-2.4633l-1.3378-7.3578C3.104 9.565 3.5756 9 4.1996 9H19.803c.6239 0 1.0955.565.9839 1.1789" /></svg>;
const ForwardRef = forwardRef(Basket2Icon);
export default createLucideIcon('Basket2Icon', ForwardRef);
