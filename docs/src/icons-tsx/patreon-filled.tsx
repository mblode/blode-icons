import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PatreonFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M19.4489 11.9937c-1.3828 1.4516-3.1102 1.6683-4.982 2.0848-1.8688.4089-2.7762 1.8282-3.3893 3.5258-.4874 1.3677-.9595 3.3063-2.3618 4.0485-.8589.4586-1.9464.4868-2.7719-.0593-1.3127-.9098-1.8336-2.5431-2.1434-4.0355-.412-1.9568-.752-3.9643-.7936-5.9692-.0407-1.7018.077-3.5947.9367-5.1135 2.6846-4.7124 11.0876-6.005 15.181-2.42 2.3442 2.0424 2.5343 5.7143.3243 7.9384" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PatreonFilledIcon);
export default ForwardRef;
