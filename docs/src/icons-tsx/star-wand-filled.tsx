import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const StarWandFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} fill="none" viewBox="0 0 25 24" ref={ref} {...props}><path fill="currentColor" d="M5.9997 4.3196c-.2544-1.613 1.427-2.8346 2.8824-2.0942l3.9718 2.0206 3.9718-2.0206c1.4555-.7404 3.1369.4812 2.8825 2.0942l-.6943 4.4018 3.149 3.1531c1.1539 1.1554.5117 3.132-1.101 3.3885l-4.4009.6999-2.0257 3.9692c-.7422 1.4545-2.8205 1.4545-3.5628 0l-1.4785-2.897L6.1703 21.6c-.3313.4418-.9581.5314-1.4.2s-.5313-.9582-.2-1.4l3.4503-4.6003-3.3747-.5367c-1.6127-.2565-2.2549-2.2331-1.101-3.3885l3.149-3.153z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(StarWandFilledIcon);
export default createLucideIcon('StarWandFilledIcon', ForwardRef);
