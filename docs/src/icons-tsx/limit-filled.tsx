import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LimitFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M17.6568 7.3432c-3.1242-3.1242-8.1895-3.1242-11.3137 0-3.0183 3.0182-3.1206 7.849-.3069 10.9895.3686.4113.3339 1.0435-.0774 1.4121s-1.0436.3338-1.4121-.0775c-3.5185-3.927-3.3912-9.965.3822-13.7384 3.9053-3.9052 10.2369-3.9052 14.1422 0 3.7733 3.7734 3.9007 9.8114.3822 13.7384-.3685.4113-1.0007.446-1.4121.0775s-.446-1.0008-.0775-1.4121c2.8138-3.1405 2.7114-7.9713-.3069-10.9895M8.2915 9.2929c.3906-.3905 1.0237-.3905 1.4142 0l3 3c.3906.3905.3906 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-3-3c-.3905-.3905-.3905-1.0237 0-1.4142" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(LimitFilledIcon);
export default createLucideIcon('LimitFilledIcon', ForwardRef);
