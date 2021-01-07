const planetImgSize = 0.2838847;

export default function ZoomCone(params) {

  let paddingLeft = 28.38847 * 0.5;
  let leftofOrigin = (0.0260417 * params.winWidth) + (planetImgSize * params.winHeight / 2);
  let topofOrigin = 0.0533618 * params.winHeight;

  let planet_x = (params.pos_x * params.imgWidth) + params.winWidth - params.imgWidth;
  let planet_y = params.pos_y * params.winHeight;

  let lenToPlanetx = planet_x - leftofOrigin;
  let lenToPlanety = planet_y - topofOrigin;

  return (
    <svg
      className="zoomcone"
      style={{
        left: 0,
        position: "absolute",
        overflow: "visible",
        marginLeft: "2.60417vw",
        paddingLeft: `${paddingLeft}vh`
      }}
    >
      <linearGradient
        id="grad"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
      >
        <stop
          offset="0%"
          style={{
            stopColor: "rgb(255 255 255)",
            stopOpacity: "0.1"
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "rgb(255 255 255)",
            stopOpacity: "0.07"
          }}
        />
      </linearGradient>
      <path
        d={`M0 ${planetImgSize * params.winHeight * 0.1} L${lenToPlanetx} ${lenToPlanety} L${lenToPlanetx} ${lenToPlanety+10} L0 ${planetImgSize * params.winHeight * 0.9} Z`}
        style={{
          marginLeft: 0,
          fill: "url(#grad)"
        }}
      />
    </svg>
  );
}
