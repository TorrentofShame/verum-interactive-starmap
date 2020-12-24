export default function InfoPanel(params) {
  const p = params.planet;
  return (
    <div className="info-panel">
      <img
        className="planet-img"
        alt=""
        src={`/assets/planets/${p.name}.png`}
      />
      <div>
        <h1>{p.name}</h1>
        <em>{p.nebula}</em>
        <div
          style={{
            whiteSpace: "pre-wrap",
            lineHeight: "150%"
          }}
        >{p.desc}</div>
      </div>
    </div>
  );
}

// TODO: Add the zoom cone (?) from each planet to its image in the info panel.
/*
<svg className="zoomcone" style={{overflow: "visible"}}>
  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" style={{stopColor: "rgb(255 255 255)", stopOpacity: "0.1"}} />
    <stop offset="100%" style={{stopColor: "rgb(255 255 255)", stopOpacity: "0.05"}} />
  </linearGradient>
  <path
    d="M-100 -88 L898 387 L895 408 L-150 130 Z"
    style={{
      marginLeft: 0,
      fill: "url(#grad)"
    }}
  />
</svg>
 
*/

/*
 * Rampart
<svg style="overflow: visible;">
  <path d="M-100 -88 L898 387 L895 408 L-150 130 Z" style="margin-left: 0;fill: rgb(255 255 255 / 10%);"></path>
</svg>

Verum: M-100 -70 L855 275 L863 295 L-150 130 Z
*/
