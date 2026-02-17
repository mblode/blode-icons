import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Basket1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M2 2c-.5523 0-1 .4477-1 1s.4477 1 1 1h.7293a.5.5 0 0 1 .4932.4178l1.3733 8.2398C4.9173 14.5863 6.586 16 8.5414 16h8.4857c1.9148 0 3.561-1.357 3.9265-3.2365l.9307-4.7863C22.1844 6.4339 21.0024 5 19.4302 5H5.3472l-.152-.911C4.9945 2.8835 3.9515 2 2.7294 2zM8 17c-1.1046 0-2 .8954-2 2s.8954 2 2 2 2-.8954 2-2-.8954-2-2-2M17 17c-1.1046 0-2 .8954-2 2s.8954 2 2 2 2-.8954 2-2-.8954-2-2-2" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Basket1FilledIcon);
export default createLucideIcon('Basket1FilledIcon', ForwardRef);
