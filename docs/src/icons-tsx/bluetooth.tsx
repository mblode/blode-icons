import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BluetoothIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2222} d="m12.3194 12 4.5545-3.6435c.5132-.4106.5132-1.1912 0-1.6018l-4.277-3.4216c-.6715-.5372-1.6663-.059-1.6663.801v6.7548M12.3194 12l-1.3888 1.1111M12.3194 12l4.5545 3.6436c.5132.4106.5132 1.1912 0 1.6018l-4.277 3.4216c-.6715.5372-1.6663.0591-1.6663-.8009v-6.755M12.3194 12l-1.3888-1.1111m0 2.2222L5.375 17.5556m5.5556-4.4445v-2.2222m0 0L5.375 6.4445" /></svg>;
const ForwardRef = forwardRef(BluetoothIcon);
export default ForwardRef;
