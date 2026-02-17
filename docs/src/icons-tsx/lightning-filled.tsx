import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LightningFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9.0644 2a1.5 1.5 0 0 0-1.3416.8292l-4.5 9C2.724 12.8265 3.4494 14 4.5644 14h3.0654l-2.0067 6.1874c-.472 1.4553 1.282 2.6005 2.4244 1.5829L21.69 9.6202C22.7193 8.7032 22.0708 7 20.6922 7h-3.9206l1.637-2.7283C19.0084 3.272 18.2883 2 17.1223 2z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(LightningFilledIcon);
export default ForwardRef;
