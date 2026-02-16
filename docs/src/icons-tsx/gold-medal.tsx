import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GoldMedalIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={10} r={7.5} stroke="currentColor" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16.5V22l4-1 4 1v-5.5" /><path fill="currentColor" d="M12.0391 6c.5522 0 1 .4477 1 1v6.0352c0 .5328-.432.9648-.9649.9648s-.9648-.432-.9648-.9648v-5.194a.0366.0366 0 0 0-.0557-.0311l-.6927.4235c-.4763.2911-1.0876-.0516-1.0876-.6098 0-.247.1276-.4766.3374-.607l1.1503-.7153A2 2 0 0 1 11.8172 6z" /></svg>;
const ForwardRef = forwardRef(GoldMedalIcon);
export default ForwardRef;
