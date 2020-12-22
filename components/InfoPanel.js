export default function InfoPanel(params) {
  const p = params.planet;
  return (
    <div className="info-panel">
      <img className="planet-img" alt="" src={p.img} />
      <div>
        <h1>{p.name}</h1>
        <em>{p.nebula}</em>
        <div style={{whiteSpace: "pre-wrap", lineHeight: "150%"}} >{p.desc}</div>
      </div>
      {p === "Rampart" &&
      <svg style="overflow: visible;">
        <path d="M-100 -88 L898 387 L895 408 L-150 130 Z" style="margin-left: 0;fill: rgb(255 255 255 / 10%);" />
      </svg>
      }

      {p === "Verum" &&
      <svg style="overflow: visible;">
        <path d="M-100 -70 L855 275 L863 295 L-150 130 Z" style="margin-left: 0;fill: rgb(255 255 255 / 10%);" />
      </svg>
      }
    </div>
  );
}

// TODO: Add the zoom cone (?) from each planet to its image in the info panel.

/*
 * Rampart
<svg style="overflow: visible;">
  <path d="M-100 -88 L898 387 L895 408 L-150 130 Z" style="margin-left: 0;fill: rgb(255 255 255 / 10%);"></path>
</svg>

Verum: M-100 -70 L855 275 L863 295 L-150 130 Z
*/
