import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RemoveFromBasket2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.8031 9h-2.3018m2.3018 0c.6239 0 1.0955.565.9839 1.1789L20.4558 12m-.6527-3h.1982m-2.5 0h-11m11 0-2-5m-9 5H4.1995m2.3018 0 2-5M4.1995 9c-.6239 0-1.0955.565-.9839 1.1789l1.3378 7.3578C4.8128 18.9631 6.0552 20 7.505 20h2.4963M4.1995 9h-.1982M14.88 15.8787 17.0013 18m0 0 2.1214 2.1213M17.0013 18 14.88 20.1213M17.0013 18l2.1214-2.1213" /></svg>;
const ForwardRef = forwardRef(RemoveFromBasket2Icon);
export default createLucideIcon('RemoveFromBasket2Icon', ForwardRef);
