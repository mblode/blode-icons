import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const YenIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9.2526 7.3415c-.3637-.4156-.9955-.4578-1.4111-.094-.4156.3636-.4578.9954-.094 1.411zm7 1.317c.3637-.4156.3215-1.0474-.0941-1.411-.4156-.3638-1.0474-.3216-1.4111.094zM11 17c0 .5523.4477 1 1 1s1-.4477 1-1zm-1-5c-.5523 0-1 .4477-1 1s.4477 1 1 1zm4 2c.5523 0 1-.4477 1-1s-.4477-1-1-1zM7.7474 8.6585l3.5 4 1.5052-1.317-3.5-4zm5.0052 4 3.5-4-1.5052-1.317-3.5 4zM11 12v1h2v-1zm0 1v4h2v-4zm-1 1h2v-2h-2zm2 0h2v-2h-2zm8-2c0 4.4183-3.5817 8-8 8v2c5.5228 0 10-4.4772 10-10zm-8 8c-4.4183 0-8-3.5817-8-8H2c0 5.5228 4.4772 10 10 10zm-8-8c0-4.4183 3.5817-8 8-8V2C6.4772 2 2 6.4772 2 12zm8-8c4.4183 0 8 3.5817 8 8h2c0-5.5228-4.4772-10-10-10z" /></svg>;
const ForwardRef = forwardRef(YenIcon);
export default createLucideIcon('YenIcon', ForwardRef);
