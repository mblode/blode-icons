import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const OrganisationFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2C8.9624 2 6.5 4.4624 6.5 7.5c0 2.6961 1.9399 4.9391 4.5 5.4093v1.2356c-1.1289.336-2.019 1.2262-2.355 2.3551h-.79C7.4249 15.0543 6.0856 14 4.5 14 2.567 14 1 15.567 1 17.5S2.567 21 4.5 21c1.5855 0 2.9248-1.0543 3.355-2.5h.79C9.0751 19.9457 10.4144 21 12 21s2.9248-1.0543 3.3551-2.5h.7898c.4303 1.4457 1.7696 2.5 3.3551 2.5 1.933 0 3.5-1.567 3.5-3.5S21.433 14 19.5 14c-1.5855 0-2.9248 1.0543-3.3551 2.5h-.7898c-.336-1.1289-1.2262-2.0191-2.3551-2.3551v-1.2356c2.5601-.4702 4.5-2.7132 4.5-5.4093C17.5 4.4624 15.0376 2 12 2" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(OrganisationFilledIcon);
export default createLucideIcon('OrganisationFilledIcon', ForwardRef);
