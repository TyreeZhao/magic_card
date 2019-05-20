import React, { useEffect } from "react";
import "./App.css";

const MagicCard = props => {
  const poster = React.createRef();
  const innerPoster = React.createRef();

  const { children } = props;

  useEffect(() => {
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  });

  const mousemove = e => {
    const { left, top, width, height } = poster.current.getBoundingClientRect();
    var innerLeft = e.pageX - left < 0 ? 0 : e.pageX - left;
    var innerTop = e.pageY - top < 0 ? 0 : e.pageY - top;
    var offsetX = 0;
    var offsetY = 0;
    var transformPoster = "";
    var childrenTransform = "";
    var offsetPoster = -10;
    var offsetLayer = -17;

    // if (innerLeft > 0 && innerTop > 0 && e.pageX < right && e.pageY < bottom) {
    offsetX = 0.5 - innerLeft / width;
    offsetY = 0.5 - innerTop / height;

    transformPoster =
      "scale(1.05, 1.05)" +
      "translateY(" +
      (-offsetX * offsetPoster) / 2 +
      "px) rotateX(" + // 逆时针
      offsetY * offsetPoster + // 顺时针
      "deg) rotateY(" +
      offsetX * -offsetPoster * 2 +
      "deg)";

    childrenTransform =
      "translateX(" +
      -offsetX * offsetLayer +
      "px) translateY(" +
      -offsetY * offsetLayer +
      "px)";
    // } else {
    //   transformPoster = "";
    //   childrenTransform = "";
    // }
    poster.current.style.transform = transformPoster;
    innerPoster.current.style.transform = childrenTransform;
  };
  return (
    <div ref={poster} className={`poster ${props.className}`}>
      <div ref={innerPoster}>{children}</div>
    </div>
  );
};

const Home = props => {
  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <MagicCard className={"magic"}>
        <div>123</div>
      </MagicCard>
    </div>
  );
};
export default Home;
