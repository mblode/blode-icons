import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChevronTopSmallFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12.3536 11.7678a.5.5 0 0 0-.7072 0l-2.9393 2.9393c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l2.9393-2.9393c.9763-.9763 2.5593-.9763 3.5356 0l2.9393 2.9393c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ChevronTopSmallFilledIcon);
export default ForwardRef;
