import ZoomCone from "./ZoomCone";

export default function InfoPanel(params) {
  const p = params.planet;
  return (
    <div className="info-panel">
      <div>
      <img
        className="planet-img"
        alt=""
        src={`/assets/planets/${p.name}.png`}
      />
      <ZoomCone
        winHeight={params.winHeight}
        winWidth={params.winWidth}
        imgWidth={params.imgWidth}
        pos_x={params.planet.pos_x}
        pos_y={params.planet.pos_y}
      />
      </div>
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

