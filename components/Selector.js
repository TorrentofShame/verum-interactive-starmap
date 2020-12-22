export default function Selector(params) {

  return (<>
    <svg className={`${params.planet_name}-tip`} width={`${params.size}`} height={`${params.size}`} style={{overflow: "visible", visibility: params.isvisible}}>
          <rect x="0" y="0" width={`${params.size}`} height={`${params.size}`} style={{"fillOpacity": 0, "strokeWidth": 3, "stroke": "grey"}} />
          <path d="M50 0 L100 -25 L275 -25" stroke="grey" strokeWidth="3" fill="none" />
    </svg>
    <span style={{visibility: params.isvisible}} className={`${params.planet_name}-tip`}>{params.planet_name}</span>
  </>);
}
