import "./App.css";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Container, Row, Col } from "react-bootstrap";
import CardPalette from "./CardPalette";

function App() {
  const [colorPallets, setColorPallets] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const colorsPerPage = 150;
  const pagesVisited = pageNumber * colorsPerPage;
  const displayColorPalettes = colorPallets
    .slice(pagesVisited, pagesVisited + colorsPerPage)
    .map((element, index) => (
      <Col id={index} xs={3} sm={2} lg={1}>
        <CardPalette element={element} />
      </Col>
    ));

  const pageCount = Math.ceil(colorPallets.length / colorsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    generateColorPallete();
  }, [0]);

  function rgbToHex(value) {
    let hex = value.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function generateColorPallete() {
    let palleteObj = {};
    let counter = 1;
    let resultArr = [...colorPallets];
    let red = 0,
      green = 0,
      blue = 0;
    // i=r, j=g, k=b
    for (let i = 0, j = 0, k = 0; i <= 255; k++) {
      counter++;
      if (i >= 255) {
        red = 255;
      } else {
        red = i;
      }

      if (j >= 255) {
        green = 255;
      } else {
        green = j;
      }

      if (k >= 255) {
        blue = 255;
      } else {
        blue = k;
      }
      palleteObj = {
        rgbVal: `${red}:${green}:${blue}`,
        hexVal: `#${rgbToHex(red)}${rgbToHex(green)}${rgbToHex(blue)}`,
      };
      if (k < 255) {
        if (counter % 3 === 0) {
          j++;
        }
      } else {
        j++;
      }

      if (j < 255) {
        if (counter % 4 === 0) {
          i++;
        }
      } else {
        i++;
      }
      resultArr.push(palleteObj);
      setColorPallets(resultArr);
    }

    console.log("Total colos", resultArr.length);
  }

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h1 style={{ color: "#970C10", fontWeight: 300, marginTop: "1em" }}>
              Color Palette Generator
            </h1>
            <h3
              style={{
                color: "#153250",
                fontWeight: 300,
                marginTop: ".5em",
                marginBottom: ".5em",
              }}
            >
              Please click on the Color to get more details!
            </h3>
          </Col>
        </Row>
        <Row className=" pt-3">
          {displayColorPalettes}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            style={{ marginTop: "1em" }}
          />
        </Row>
      </Container>
    </div>
  );
}

export default App;
