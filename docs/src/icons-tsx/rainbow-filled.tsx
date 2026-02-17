import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RainbowFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M11.9982 8c-5.2159 0-9.5 3.994-9.9592 9.0898-.0496.55-.5357.9557-1.0857.9062-.55-.0496-.9558-.5357-.9062-1.0858C.5983 10.793 5.738 6 11.9982 6s11.3999 4.793 11.9511 10.9102c.0496.5501-.3561 1.0362-.9062 1.0858-.5501.0495-1.0362-.3562-1.0857-.9062C21.4982 11.994 17.214 8 11.9982 8m0 4c-3.0218 0-5.5234 2.2349-5.9392 5.1416-.0782.5467-.5848.9265-1.1315.8483s-.9266-.5848-.8483-1.1315C4.6338 12.9806 7.967 10 11.9981 10s7.3643 2.9806 7.919 6.8584c.0782.5467-.3016 1.0533-.8483 1.1315s-1.0533-.3016-1.1315-.8483C17.5216 14.2349 15.02 12 11.9982 12m0 4c-.8693 0-1.6114.5551-1.8865 1.3332-.184.5208-.7553.7937-1.276.6096s-.7937-.7553-.6096-1.276C8.7747 15.1145 10.255 14 11.9982 14s3.2235 1.1145 3.7721 2.6668c.1841.5207-.0889 1.092-.6096 1.276-.5207.1841-1.092-.0888-1.2761-.6096C13.6096 16.5551 12.8674 16 11.9982 16" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(RainbowFilledIcon);
export default ForwardRef;
