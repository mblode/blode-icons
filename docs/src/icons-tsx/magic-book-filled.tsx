import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MagicBookFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} fill="none" viewBox="0 0 25 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8.75 2c-2.2091 0-4 1.7909-4 4v13c0 1.6569 1.3431 3 3 3h12c.5523 0 1-.4477 1-1V3c0-.5523-.4477-1-1-1zm-1 16h11v2h-11c-.5523 0-1-.4477-1-1s.4477-1 1-1m5.4081-10.8157a.5.5 0 0 1-.2236.2236l-1.2898.6449c-.3685.1843-.3685.7102 0 .8944l1.2898.645a.5.5 0 0 1 .2236.2235l.645 1.2899c.1842.3685.7101.3685.8944 0l.6449-1.2899a.5.5 0 0 1 .2236-.2236l1.2898-.6449c.3686-.1843.3686-.7102 0-.8944l-1.2898-.645a.5.5 0 0 1-.2236-.2235l-.6449-1.2899c-.1843-.3685-.7102-.3685-.8944 0zm-3.6964 4.3929a.3.3 0 0 1-.1342.1342l-1.0406.5203c-.221.1105-.221.4261 0 .5366l1.0406.5203a.3.3 0 0 1 .1342.1342l.5202 1.0405c.1106.2212.4261.2212.5367 0l.5203-1.0405a.3.3 0 0 1 .1341-.1342l1.0406-.5203c.2211-.1105.2211-.4261 0-.5366l-1.0406-.5203a.3.3 0 0 1-.1341-.1342l-.5203-1.0405c-.1106-.2212-.4261-.2212-.5367 0z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MagicBookFilledIcon);
export default createLucideIcon('MagicBookFilledIcon', ForwardRef);
