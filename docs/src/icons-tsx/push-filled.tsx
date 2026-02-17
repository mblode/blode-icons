import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PushFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12.632 3.4424c2.1011-1.1907 4.8166-1.6987 8.4392-1.44a1 1 0 0 1 .9263.9262c.2587 3.6227-.2493 6.3382-1.44 8.4393-1.0883 1.9206-2.6895 3.226-4.5575 4.2387v1.0135a4 4 0 0 1-1.3968 3.037l-2.4524 2.102a.9998.9998 0 0 1-1.5984-.4398l-.0024-.0069-.0095-.0276a19.9779 19.9779 0 0 0-.1995-.5425 24 24 0 0 0-.6005-1.4253c-.5261-1.1421-1.2157-2.3781-1.9476-3.11s-1.9679-1.4215-3.11-1.9476a24 24 0 0 0-1.4253-.6005 20 20 0 0 0-.4292-.1596 12 12 0 0 0-.1133-.04l-.0276-.0095-.006-.002a1.002 1.002 0 0 1-.6456-.6825 1 1 0 0 1 .2048-.9162l2.102-2.4524A4 4 0 0 1 7.3799 8h1.0134c1.0128-1.868 2.3181-3.4692 4.2388-4.5575m2.868 7.0575c1.1046 0 2-.8955 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M5.2071 16.7928c.3905.3905.3905 1.0237 0 1.4142l-2.5 2.5c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l2.5-2.5c.3905-.3905 1.0237-.3905 1.4142 0M7.2071 20.207c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0l-1.5 1.5c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PushFilledIcon);
export default createLucideIcon('PushFilledIcon', ForwardRef);
