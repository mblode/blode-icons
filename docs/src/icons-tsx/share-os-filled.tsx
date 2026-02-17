import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShareOsFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11.2929 1.2929c.3905-.3905 1.0237-.3905 1.4142 0l4 4c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0L13 4.4142V13c0 .5523-.4477 1-1 1s-1-.4477-1-1V4.4142l-2.2929 2.293c-.3905.3904-1.0237.3904-1.4142 0-.3905-.3906-.3905-1.0238 0-1.4143z" /><path fill="currentColor" d="M8 9h1.5v4c0 1.3807 1.1193 2.5 2.5 2.5s2.5-1.1193 2.5-2.5V9H16c2.2091 0 4 1.7909 4 4v4c0 2.2091-1.7909 4-4 4H8c-2.2091 0-4-1.7909-4-4v-4c0-2.2091 1.7909-4 4-4" /></svg>;
const ForwardRef = forwardRef(ShareOsFilledIcon);
export default ForwardRef;
