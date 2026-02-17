import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EraserFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="m12.3001 17.7148-5.8005-5.8006-1.6716 1.6716c-.781.7811-.781 2.0474 0 2.8284l2 2c.375.3751.8838.5858 1.4142.5858h1.9746a2 2 0 0 0 1.446-.6182zm.121-14.5505c1.5621-1.5621 4.0948-1.5621 5.6569 0l2.805 2.805c1.5371 1.537 1.5653 4.0203.0635 5.5918l-7.8378 8.2024A4 4 0 0 1 10.2168 21H8.2422a4 4 0 0 1-2.8284-1.1715l-2-2c-1.5621-1.5621-1.5621-4.0948 0-5.6569z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(EraserFilledIcon);
export default ForwardRef;
