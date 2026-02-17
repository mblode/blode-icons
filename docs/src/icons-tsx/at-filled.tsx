import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AtFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 4c-4.4183 0-8 3.5817-8 8s3.5817 8 8 8c1.5465 0 2.9876-.4378 4.2098-1.1958.4693-.2911 1.0858-.1465 1.3769.3228.2911.4694.1465 1.0858-.3228 1.3769C15.7343 21.4525 13.9296 22 12 22 6.4772 22 2 17.5228 2 12S6.4772 2 12 2s10 4.4772 10 10c0 1.1044-.2706 2.3102-.949 3.2429-.7161.9846-1.849 1.6002-3.3314 1.4655-1.2034-.1094-2.2381-.7117-2.9293-1.5856-.9408 1.2095-2.3886 1.9394-3.9853 1.715-2.5294-.3555-4.0397-2.9103-3.6817-5.4574s2.514-4.5866 5.0434-4.2311c.9057.1273 1.6807.5365 2.2861 1.1265.1151-.5027.599-.8408 1.1183-.7654.5466.0794.9253.5868.8459 1.1333l-.515 3.5456-.0001.0012c-.1792 1.2587.7324 2.411 1.9987 2.5261.7502.0682 1.2123-.2093 1.533-.6501C19.792 13.5737 20 12.8218 20 12c0-4.4183-3.5817-8-8-8m-.1117 5.1298c-1.1954-.168-2.5441.819-2.7844 2.529s.784 3.0305 1.9795 3.1985 2.5441-.819 2.7844-2.529-.784-3.0305-1.9795-3.1985" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(AtFilledIcon);
export default createLucideIcon('AtFilledIcon', ForwardRef);
