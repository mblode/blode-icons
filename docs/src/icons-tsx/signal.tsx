import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SignalIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="none"
    height={24}
    ref={ref}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <mask
        height={20}
        id="b"
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
        width={20}
        x={2}
        y={2}
      >
        <path d="M2.625 21.375h18.6153V2.6248H2.625z" fill="#fff" />
      </mask>
      <g mask="url(#b)">
        <mask
          height={181}
          id="c"
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
          width={102}
          x={-39}
          y={-13}
        >
          <path d="M-38.6523-12.8877H62.5179V167.061H-38.6523z" fill="#fff" />
        </mask>
        <g mask="url(#c)">
          <mask
            height={2}
            id="d"
            maskUnits="userSpaceOnUse"
            style={{
              maskType: "luminance",
            }}
            width={2}
            x={6}
            y={20}
          >
            <path
              d="m6.0879 20.1591.3338 1.0478a.24.24 0 0 0 .325.148l1.0043-.4381-.192-.4437-.7595.3315-.2526-.7931z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#d)">
            <mask
              height={20}
              id="e"
              maskUnits="userSpaceOnUse"
              style={{
                maskType: "luminance",
              }}
              width={20}
              x={2}
              y={2}
            >
              <path d="M2.625 21.375h18.6153V2.6248H2.625z" fill="#fff" />
            </mask>
            <g mask="url(#e)">
              <mask
                height={3}
                id="f"
                maskUnits="userSpaceOnUse"
                style={{
                  maskType: "luminance",
                }}
                width={3}
                x={5}
                y={19}
              >
                <path d="M5.998 21.375h1.7537v-1.4838H5.998z" fill="#fff" />
              </mask>
              <g mask="url(#f)">
                <mask
                  height={2}
                  id="g"
                  maskUnits="userSpaceOnUse"
                  style={{
                    maskType: "luminance",
                  }}
                  width={2}
                  x={6}
                  y={20}
                >
                  <path d="M7.753 20.0115v1.3635H6.0898v-1.3635z" fill="#fff" />
                </mask>
                <g mask="url(#g)">
                  <path
                    d="M6.0898 21.375H7.753v-1.3635H6.0898z"
                    fill="currentColor"
                  />
                </g>
                <mask
                  height={2}
                  id="h"
                  maskUnits="userSpaceOnUse"
                  style={{
                    maskType: "luminance",
                  }}
                  width={2}
                  x={6}
                  y={20}
                >
                  <path d="M7.753 20.0115v1.3635H6.0898v-1.3635z" fill="#fff" />
                </mask>
                <g mask="url(#h)">
                  <path
                    d="M5.998 21.375h1.8886v-1.4838H5.998z"
                    fill="currentColor"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <mask
          height={181}
          id="i"
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
          width={102}
          x={-39}
          y={-13}
        >
          <path d="M-38.6523-12.8877H62.5179V167.061H-38.6523z" fill="#fff" />
        </mask>
        <g mask="url(#i)">
          <mask
            height={19}
            id="j"
            maskUnits="userSpaceOnUse"
            style={{
              maskType: "luminance",
            }}
            width={20}
            x={2}
            y={2}
          >
            <path
              d="m10.6228 2.7111.0626.48a9.58 9.58 0 0 1 2.1091-.0427l.044-.482a10 10 0 0 0-.9067-.041c-.4387 0-.8787.0286-1.309.0857m3.0085.5521a9.2 9.2 0 0 1 2.0177.6148l.1912-.4441a9.67 9.67 0 0 0-2.1217-.6468zm-5.9772.3392.2103.4352a9.12 9.12 0 0 1 1.9897-.698l-.1062-.4727a9.63 9.63 0 0 0-2.0938.7355m8.7526.6493a8.82 8.82 0 0 1 1.7101 1.2326l.3257-.3571a9.3 9.3 0 0 0-1.804-1.2991zM5.1258 5.4071l.3414.3417a8.77 8.77 0 0 1 1.656-1.306L6.873 4.029a9.27 9.27 0 0 0-1.7473 1.378m13.5837.6796c.4726.5316.8732 1.1165 1.1905 1.739l.4282-.2214a8.72 8.72 0 0 0-1.2599-1.8401zM3.3548 7.9691l.4387.2c.2873-.6365.6605-1.2393 1.108-1.7914l-.3727-.3068c-.4747.585-.8698 1.2232-1.174 1.8982m16.8883.628a7.86 7.86 0 0 1 .4811 2.0508l.4789-.0465a8.3 8.3 0 0 0-.5107-2.1784zM2.6267 11.0046l.4806.0226a7.86 7.86 0 0 1 .3803-2.0713l-.4573-.1515a8.28 8.28 0 0 0-.4036 2.2002m17.8242 2.5705.4624.1353a8.32 8.32 0 0 0 .327-2.213l-.4814-.006a7.82 7.82 0 0 1-.308 2.0837M2.625 11.895c.0254.8213.1155 1.5436.2742 2.207l.4683-.113c-.151-.6315-.2365-1.3218-.261-2.1094zm16.5 4.3048.3824.2931a8.62 8.62 0 0 0 1.1106-1.9365l-.4451-.1839a8.15 8.15 0 0 1-1.0479 1.8273M3.1568 14.963c.2687.7342.6334 1.3733 1.116 1.9506l.369-.3106c-.4463-.535-.7844-1.1255-1.0327-1.8068zm13.8096 3.2399.2623.4057a9.18 9.18 0 0 0 1.7037-1.4322l-.3515-.3307a8.75 8.75 0 0 1-1.6145 1.3572m-12.07-.6387c.1566.1434.3238.2829.4985.4156l.423 1.3302.4587-.148-.4468-1.4032a.243.243 0 0 0-.0855-.1208 6.9 6.9 0 0 1-.5241-.4322zm9.3733 1.8239.1193.4689a9.62 9.62 0 0 0 2.0718-.7966l-.2229-.4296a9.09 9.09 0 0 1-1.9682.7573m-4.3868.0708-1.5282.6669.192.4445 1.45-.6335c.1641.0452.297.0793.4142.1058l.1066-.4723a10.4 10.4 0 0 1-.4747-.1225.24.24 0 0 0-.0643-.0089.24.24 0 0 0-.0956.02m2.0464.2236c-.2479 0-.4345-.0013-.5991-.0073l-.0178.4843c.1722.0059.3639.0072.6169.0072.5335 0 1.0687-.0431 1.5903-.1271l-.077-.4787a9.4 9.4 0 0 1-1.5133.1216"
              fill="#fff"
            />
          </mask>
          <g mask="url(#j)">
            <mask
              height={20}
              id="k"
              maskUnits="userSpaceOnUse"
              style={{
                maskType: "luminance",
              }}
              width={20}
              x={2}
              y={2}
            >
              <path d="M2.625 21.375h18.6153V2.6248H2.625z" fill="#fff" />
            </mask>
            <g mask="url(#k)">
              <mask
                height={19}
                id="l"
                maskUnits="userSpaceOnUse"
                style={{
                  maskType: "luminance",
                }}
                width={20}
                x={2}
                y={2}
              >
                <path d="M2.625 20.7012h18.6153V2.6254H2.625z" fill="#fff" />
              </mask>
              <g mask="url(#l)">
                <mask
                  height={19}
                  id="m"
                  maskUnits="userSpaceOnUse"
                  style={{
                    maskType: "luminance",
                  }}
                  width={20}
                  x={2}
                  y={2}
                >
                  <path d="M21.2403 2.6254v17.9449H2.625V2.6253z" fill="#fff" />
                </mask>
                <g mask="url(#m)">
                  <path
                    d="M2.625 20.5703h18.6153V2.6253H2.625z"
                    fill="currentColor"
                  />
                </g>
                <mask
                  height={19}
                  id="n"
                  maskUnits="userSpaceOnUse"
                  style={{
                    maskType: "luminance",
                  }}
                  width={20}
                  x={2}
                  y={2}
                >
                  <path d="M21.2403 2.6254v17.9449H2.625V2.6253z" fill="#fff" />
                </mask>
                <g mask="url(#n)">
                  <path
                    d="M2.625 20.7012h18.6153V2.6254H2.625z"
                    fill="currentColor"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <mask
          height={181}
          id="o"
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
          width={102}
          x={-39}
          y={-13}
        >
          <path d="M-38.6523-12.8877H62.5179V167.061H-38.6523z" fill="#fff" />
        </mask>
        <g mask="url(#o)">
          <mask
            height={16}
            id="p"
            maskUnits="userSpaceOnUse"
            style={{
              maskType: "luminance",
            }}
            width={16}
            x={4}
            y={4}
          >
            <path
              d="M7.603 19.2285a.2416.2416 0 0 1-.2399-.2235l-.1852-2.3939c-.7857-.5986-1.3966-1.3708-1.8167-2.2975-.4146-.913-.6249-1.9322-.6249-3.0274 0-3.7395 3.289-6.7823 7.3315-6.7823 4.0421 0 7.3315 3.0428 7.3315 6.7823 0 3.7399-3.2894 6.7827-7.3315 6.7827a7.88 7.88 0 0 1-1.9804-.2509l-2.3633 1.3777a.24.24 0 0 1-.121.0328"
              fill="#fff"
            />
          </mask>
          <g mask="url(#p)">
            <mask
              height={20}
              id="q"
              maskUnits="userSpaceOnUse"
              style={{
                maskType: "luminance",
              }}
              width={20}
              x={2}
              y={2}
            >
              <path d="M2.625 21.375h18.6153V2.6248H2.625z" fill="#fff" />
            </mask>
            <g mask="url(#q)">
              <path
                d="M4.0625 3.8288h16.0119v16.0735H4.0625z"
                fill="currentColor"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h24v24H0z" fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SignalIcon);
export default ForwardRef;
