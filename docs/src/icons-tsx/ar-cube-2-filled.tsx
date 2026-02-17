import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArCube2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="m19.8465 17.5558-7.8459-4.4134-7.8468 4.4137c.2586.2619.5554.4901.8852.6756l5 2.8125a4 4 0 0 0 3.922 0l5-2.8125a4 4 0 0 0 .8855-.6759M20.8513 15.8263l-7.8507-4.4161V2.5691c.3314.0856.6544.2145.9604.3866l5 2.8125A4 4 0 0 1 21 9.2545v5.4909c0 .3706-.0513.7338-.1487 1.0809M11.0006 2.5688a4 4 0 0 0-.9616.3869l-5 2.8125A4 4 0 0 0 3 9.2545v5.4909c0 .3707.0513.734.1488 1.0813l7.8518-4.4165z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArCube2FilledIcon);
export default createLucideIcon('ArCube2FilledIcon', ForwardRef);
