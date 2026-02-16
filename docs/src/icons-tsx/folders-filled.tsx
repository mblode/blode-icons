import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FoldersFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9 3C6.7909 3 5 4.7909 5 7c-2.2091 0-4 1.7909-4 4v6c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4 2.2091 0 4-1.7909 4-4V9c0-2.2091-1.7909-4-4-4h-4.1716a1 1 0 0 1-.7071-.2929l-.8284-.8284A3 3 0 0 0 11.1716 3zm10 12c1.1046 0 2-.8954 2-2V9c0-1.1046-.8954-2-2-2h-4.1716a3 3 0 0 1-2.1213-.8787l-.8284-.8284A1 1 0 0 0 11.1716 5H9c-1.1046 0-2 .8954-2 2h.1716a3 3 0 0 1 2.1213.8787l.8284.8284c.1876.1875.4419.2929.7071.2929H15c2.2091 0 4 1.7909 4 4z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FoldersFilledIcon);
export default ForwardRef;
