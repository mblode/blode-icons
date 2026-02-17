import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WindFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M11 5a.994.994 0 0 0-.7071.2929c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142A2.994 2.994 0 0 1 11 3c1.6569 0 3 1.3431 3 3s-1.3431 3-3 3H3c-.5523 0-1-.4477-1-1s.4477-1 1-1h8c.5523 0 1-.4477 1-1s-.4477-1-1-1m8 4a.994.994 0 0 0-.7071.2929c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142A2.994 2.994 0 0 1 19 7c1.6569 0 3 1.3431 3 3s-1.3431 3-3 3H3c-.5523 0-1-.4477-1-1s.4477-1 1-1h16c.5523 0 1-.4477 1-1s-.4477-1-1-1M2 16c0-.5523.4477-1 1-1h12c1.6569 0 3 1.3431 3 3s-1.3431 3-3 3a2.994 2.994 0 0 1-2.1213-.8787c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0A.994.994 0 0 0 15 19c.5523 0 1-.4477 1-1s-.4477-1-1-1H3c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(WindFilledIcon);
export default ForwardRef;
