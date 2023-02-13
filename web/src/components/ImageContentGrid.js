/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageListElement from "./ImageListElement";
import { Grid } from "theme-ui";

const imageContentGridSx = {
  ".mainGrid": {
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    gridTemplateColumns: "1fr",
    gridGap: "1vh",
    justifyItems: "center",
    paddingInline: "2vw",
  },

  ".gridRow": {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr 1fr 1fr",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    paddingBottom: "1vh",
  },

  ".artItem": {
    borderRight: "1px solid rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
  },

  ".artItem:last-child": {
    borderRight: "none",
  },
};


export default function ImageContentGrid(props) {

  const perChunk = 3 // items per row

  const resultArray = (props.items).reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index/perChunk)

    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])

  return (
    <div sx={imageContentGridSx}>
      <div className = "mainGrid">
        {(resultArray).map((row) => {
          return (
            <div className="gridRow">
            {(row).map((artItem, index) => {
              return (
                <div className="artItem" key={artItem.name}>
                  <ImageListElement item={artItem} key={index} />
                </div>
              );
            })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
