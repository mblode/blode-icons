import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FilterDescendingFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7 3c.5523 0 1 .4477 1 1v13.5858l1.2929-1.2929c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142l-3 3c-.3905.3905-1.0237.3905-1.4142 0l-3-3c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0L6 17.5858V4c0-.5523.4477-1 1-1M17.5 13c.8111 0 1.527.5298 1.764 1.3055l1.1887 3.8902.496 1.4881c.1746.5239-.1085 1.0902-.6325 1.2649s-1.0902-.1085-1.2649-.6325l-.2721-.8162h-2.5584l-.2721.8162c-.1747.524-.741.8071-1.2649.6325-.524-.1747-.8071-.741-.6325-1.2649l.496-1.4881 1.1887-3.8902A1.844 1.844 0 0 1 17.5 13m0 2.3766L16.8512 17.5h1.2976zM14 4c0-.5523.4477-1 1-1h5a1 1 0 0 1 .7682 1.6402L17.135 9H20c.5523 0 1 .4477 1 1s-.4477 1-1 1h-5a1.0002 1.0002 0 0 1-.7682-1.6402L17.865 5H15c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FilterDescendingFilledIcon);
export default ForwardRef;
