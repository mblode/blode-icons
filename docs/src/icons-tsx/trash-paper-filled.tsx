import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TrashPaperFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="m16.7583 21.5627-.7332.2402c-1.5637.5123-3.2763.0047-4.3154-1.2719l-.3321-.408-1.5736.8838a3.916 3.916 0 0 1-3.9092-.0413c-1.0549-.6221-1.7605-1.7003-1.9152-2.9163l-.2421-1.9038a.935.935 0 0 0-.413-.6649C2.4962 14.9378 2 14.012 2 13.0228v-.4274c0-1.4179.8016-2.7168 2.0733-3.3425l-.077-.605c-.274-2.1557 1.2102-4.1501 3.3604-4.4752l3.8997-.5897 1.4248-.9336a3.963 3.963 0 0 1 4.3477 0l.7888.517c.7947.5206 1.2705 1.4086 1.2705 2.3573 0 .316.1786.5989.4516.733l.4451.2187c2.0441 1.0045 2.6515 3.6383 1.2719 5.4462l-.8904 1.1667.554.9528c.9733 1.674.6175 3.8121-.8506 5.0747l-1.9564 1.6825a3.98 3.98 0 0 1-1.3551.7644" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(TrashPaperFilledIcon);
export default createLucideIcon('TrashPaperFilledIcon', ForwardRef);
