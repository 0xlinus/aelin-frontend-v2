import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg``

export const Twitter: React.FC<{ className?: string }> = (props) => (
  <Wrapper
    className={`twitter ${props.className}`}
    fill="none"
    height="18"
    viewBox="0 0 22 18"
    width="22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1002_16840)">
      <path
        d="M6.94601 17.9263C15.1931 17.9263 19.7028 11.0585 19.7028 5.10328C19.7028 4.90821 19.6989 4.71402 19.6901 4.52071C20.5656 3.88455 21.3265 3.09066 21.9266 2.18694C21.1233 2.54588 20.2588 2.78752 19.3519 2.89647C20.2776 2.33851 20.9882 1.45587 21.3235 0.403656C20.4572 0.91988 19.4978 1.29508 18.4764 1.49761C17.6582 0.62157 16.4934 0.0737152 15.2036 0.0737152C12.7276 0.0737152 10.7197 2.09204 10.7197 4.58002C10.7197 4.93369 10.759 5.27769 10.836 5.60764C7.1095 5.41916 3.80524 3.62578 1.5941 0.898795C1.20904 1.56483 0.987007 2.33851 0.987007 3.16403C0.987007 4.72764 1.77854 6.10805 2.98223 6.91555C2.24664 6.89271 1.55563 6.68973 0.951602 6.35188C0.950942 6.37079 0.950944 6.38922 0.950944 6.40943C0.950944 8.59207 2.49643 10.4145 4.54804 10.8274C4.17128 10.9307 3.77486 10.986 3.36576 10.986C3.07729 10.986 2.79625 10.9575 2.52309 10.9048C3.0939 12.6955 4.74909 13.9986 6.71154 14.0351C5.17698 15.2441 3.24382 15.9642 1.14282 15.9642C0.781359 15.9642 0.424271 15.9435 0.0733032 15.9018C2.05761 17.1803 4.41386 17.9263 6.94624 17.9263"
        fill="#1DA1F2"
      />
    </g>
    <defs>
      <clipPath id="clip0_1002_16840">
        <rect fill="white" height="18" width="22" />
      </clipPath>
    </defs>
  </Wrapper>
)
