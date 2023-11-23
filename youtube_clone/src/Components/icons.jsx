import React from 'react'



export const Like=(props)=>(
    <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
>
    <path
        d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
        stroke="white"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
    />
</svg>
);


export const Dislike = (props) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.126 14.1433C15.8432 15.8174 12.7265 18.6032 10.2988 22.5008C9.94757 23.0647 9.15833 23.1757 8.68854 22.7059L8.09952 22.1169C7.81298 21.8304 7.7277 21.3992 7.88355 21.0252L10.126 15.6433L3.00031 15.6433C1.75991 15.6433 0.81864 14.5259 1.02939 13.3035L2.83974 2.80353C3.00513 1.84423 3.8372 1.14334 4.81066 1.14334H14.126L18.126 3.64334"
      stroke="white"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.126 16.1434H23.126V2.14337H18.126V16.1434Z"
      stroke="white"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const Share = (props) => (
    <svg
      fill="#fff"

      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21.707,11.293l-8-8A.99991.99991,0,0,0,12,4V7.54492A11.01525,11.01525,0,0,0,2,18.5V20a1,1,0,0,0,1.78418.62061,11.45625,11.45625,0,0,1,7.88672-4.04932c.0498-.00635.1748-.01611.3291-.02588V20a.99991.99991,0,0,0,1.707.707l8-8A.99962.99962,0,0,0,21.707,11.293ZM14,17.58594V15.5a.99974.99974,0,0,0-1-1c-.25488,0-1.2959.04932-1.56152.085A14.00507,14.00507,0,0,0,4.05176,17.5332,9.01266,9.01266,0,0,1,13,9.5a.99974.99974,0,0,0,1-1V6.41406L19.58594,12Z" />
    </svg>
  );


 export  const Menu = (props) => (
    <svg
    width="25px"
    height="25px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
>
    <circle cx={6.5} cy={12} r={1.5} fill="white" />
    <circle cx={12} cy={12} r={1.5} fill="white" />
    <circle cx={17.5} cy={12} r={1.5} fill="white" />
</svg>
  );

  export const Sort =(props)=>(
    <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    id="align-left-2"
    data-name="Flat Line"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-line"
    {...props}
>
    <path
        id="primary"
        d="M3,12H17M3,6H21M3,18H13"
        style={{
            fill: "none",
            stroke: "white",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
        }}
    />
</svg>
  )
  


