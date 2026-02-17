import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CodeAnalyzeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4H8.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C4 6.2798 4 7.1198 4 8.8v6.4c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C6.2798 20 7.1198 20 8.8 20h6.4c1.6802 0 2.5202 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 17.7202 20 16.8802 20 15.2V12" /><path fill="currentColor" d="M18.9847 2.4329a.4878.4878 0 0 0-.9693-.001c-.1774 1.538-1.0455 2.4061-2.5835 2.5835a.4878.4878 0 0 0 .001.9693c1.5162.1718 2.4445 1.0315 2.5812 2.5707a.4879.4879 0 0 0 .9719-.0011c.1313-1.5175 1.0508-2.437 2.5683-2.5683a.4878.4878 0 0 0 .0011-.9719c-1.5392-.1367-2.399-1.065-2.5707-2.5812" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 8h4M8 12h2M13 12h3M8 16h5" /></svg>;
const ForwardRef = forwardRef(CodeAnalyzeIcon);
export default ForwardRef;
