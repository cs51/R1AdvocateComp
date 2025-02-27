/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import Frame from "../components/Frame";
import rightArrow from "../assets/images/right-arrow.svg";

const shopSx = {
  ".shopBody": {
    marginTop: "0.4em",
    marginLeft: "22%",
    marginRight: "25%"
  },
  i: {
    textAlign: "center",
    display: "block"
  },

  "@media (max-width: 767px)": {
    ".shopBody": {
      margin: "0em 0em 0em 0em",
      marginTop: "1em",
    },
  },

};

export default function Shop() {
  return (
    <div sx={shopSx}>
      <Frame
        path={[
          {
            name: "Shop",
            slug: "/shop",
          },
        ]}
      >
        <div className="shopBody">
          <Themed.p>
          </Themed.p>
        </div>
      </Frame>
    </div>
  );
}
