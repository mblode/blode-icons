import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HomeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.4776 2.261c1.4696-1.1941 3.5752-1.1941 5.0448 0l5 4.0625A4 4 0 0 1 21 9.4279V17c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4V9.428a4 4 0 0 1 1.4776-3.1045z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(HomeFilledIcon);
export default ForwardRef;
