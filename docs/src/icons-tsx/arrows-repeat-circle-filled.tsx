import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowsRepeatCircleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M10.2929 1.2929c.3905-.3905 1.0237-.3905 1.4142 0l3 3c.3905.3905.3905 1.0237 0 1.4142l-3 3c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L11.5858 6H10c-3.3137 0-6 2.6863-6 6 0 1.6352.6528 3.1159 1.7142 4.1991.3866.3944.3802 1.0276-.0143 1.4141-.3945.3866-1.0276.3801-1.4141-.0143C2.8728 16.157 2 14.1794 2 12c0-4.4183 3.5817-8 8-8h1.5858l-1.2929-1.2929c-.3905-.3905-.3905-1.0237 0-1.4142m8.0072 5.0939c.3945-.3866 1.0276-.3802 1.4141.0143C21.1272 7.843 22 9.8206 22 12c0 4.4183-3.5817 8-8 8h-1.5858l1.2929 1.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-3-3c-.3905-.3905-.3905-1.0237 0-1.4142l3-3c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142L12.4142 18H14c3.3137 0 6-2.6863 6-6 0-1.6352-.6528-3.1159-1.7142-4.199-.3866-.3945-.3802-1.0277.0143-1.4142" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowsRepeatCircleFilledIcon);
export default createLucideIcon('ArrowsRepeatCircleFilledIcon', ForwardRef);
