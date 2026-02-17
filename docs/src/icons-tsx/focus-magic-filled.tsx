import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FocusMagicFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5 7c0-1.1046.8954-2 2-2h1c.5523 0 1-.4477 1-1s-.4477-1-1-1H7C4.7909 3 3 4.7909 3 7v1c0 .5523.4477 1 1 1s1-.4477 1-1zM16 3c-.5523 0-1 .4477-1 1s.4477 1 1 1h1c1.1046 0 2 .8954 2 2v1c0 .5523.4477 1 1 1s1-.4477 1-1V7c0-2.2091-1.7909-4-4-4zM5 16c0-.5523-.4477-1-1-1s-1 .4477-1 1v1c0 2.2091 1.7909 4 4 4h1c.5523 0 1-.4477 1-1s-.4477-1-1-1H7c-1.1046 0-2-.8954-2-2zM21 16c0-.5523-.4477-1-1-1s-1 .4477-1 1v1c0 1.1046-.8954 2-2 2h-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h1c2.2091 0 4-1.7909 4-4zM12.4081 9.0662a.5.5 0 0 1-.2236.2236l-1.2898.645c-.3685.1842-.3685.7101 0 .8944l1.2898.6449a.5.5 0 0 1 .2236.2236l.645 1.2898c.1842.3686.7101.3686.8944 0l.6449-1.2898a.5.5 0 0 1 .2236-.2236l1.2898-.6449c.3686-.1843.3686-.7102 0-.8945l-1.2898-.6449a.5.5 0 0 1-.2236-.2236l-.6449-1.2898c-.1843-.3685-.7102-.3685-.8944 0zM8.7117 13.4592a.3.3 0 0 1-.1342.1342l-1.0406.5202c-.221.1106-.221.4261 0 .5367l1.0406.5203a.3.3 0 0 1 .1342.1341l.5202 1.0406c.1106.2211.4261.2211.5367 0l.5203-1.0406a.3.3 0 0 1 .1341-.1341l1.0406-.5203c.2211-.1106.2211-.4261 0-.5367l-1.0406-.5202a.3.3 0 0 1-.1341-.1342l-.5203-1.0406c-.1106-.2211-.4261-.2211-.5367 0z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FocusMagicFilledIcon);
export default createLucideIcon('FocusMagicFilledIcon', ForwardRef);
