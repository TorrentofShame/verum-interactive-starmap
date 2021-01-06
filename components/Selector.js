export default function Selector(params) {

  return (<>
    <svg
      className={`${params.planet_name}-tip`}
      width={`${params.size}`}
      height={`${params.size}`}
      style={{
        overflow: "visible",
        visibility: params.isvisible
      }}
    >
      <rect
        x="0"
        y="0"
        width={`${params.size}`}
        height={`${params.size}`}
        style={{
          fillOpacity: 0,
          strokeWidth: 0.0032*params.winH,
          stroke: "grey"
        }}
      />
      <path
        d={`M${params.size} 0 L${params.size*2} -${params.size*0.75} L${params.size*3.75} -${params.size*0.75}`}
        stroke="grey"
        strokeWidth={`${0.0032*params.winH}`}
        fill="none"
      />
    </svg>
    <span
      style={{
        visibility: params.isvisible,
        fontSize: `${params.size-6}px`,
        top: `-${params.size*1.775}px`,
        left: `${params.size*2}px`
      }}
      className={`${params.planet_name}-tip`}
    >{params.planet_name}</span>
  </>);
}
