import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PullRequestFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6 3C4.3431 3 3 4.3431 3 6c0 1.3062.8348 2.4175 2 2.8293v6.3414C3.8348 15.5825 3 16.6938 3 18c0 1.6569 1.3431 3 3 3s3-1.3431 3-3c0-1.3062-.8348-2.4175-2-2.8293V8.8293C8.1652 8.4175 9 7.3063 9 6c0-1.6569-1.3431-3-3-3M14.4142 5l.2929-.2929c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0l-2 2c-.3905.3905-.3905 1.0237 0 1.4142l2 2c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142L14.4142 7H15c1.1046 0 2 .8954 2 2v6.1707c-1.1652.4118-2 1.5231-2 2.8293 0 1.6569 1.3431 3 3 3s3-1.3431 3-3c0-1.3062-.8348-2.4175-2-2.8293V9c0-2.2091-1.7909-4-4-4z" /></svg>;
const ForwardRef = forwardRef(PullRequestFilledIcon);
export default createLucideIcon('PullRequestFilledIcon', ForwardRef);
