import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BroomFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="m20.5749 6.8288-2.5397 4.5633.3497.1932c1.4419.7965 1.9645 2.6119 1.1641 4.0516a.745.745 0 0 1-1.0115.2898L8.132 10.1722a.7456.7456 0 0 1-.2907-1.015c.7992-1.436 2.6095-1.955 4.048-1.1602l.3902.2155 2.6057-4.5675c.884-1.5496 2.8543-2.1002 4.4175-1.2372 1.576.8701 2.1468 2.8494 1.2722 4.421M7.3657 12.0298c-.4498.3653-.905.613-1.375.7669-.7737.2534-1.6763.282-2.798.044-.6814-.1447-1.3006.4352-1.1969 1.124.5743 3.814 4.0812 6.801 7.4779 7.7259 1.7242.4696 3.5754.4544 5.1088-.3928 1.3196-.7292 2.2678-1.9984 2.7048-3.7811z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BroomFilledIcon);
export default ForwardRef;
