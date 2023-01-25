var svgParent = document.getElementById("svg");
const circAn = document.getElementById("circ");
const rectAn = document.getElementById("rect");
const lineAn = document.getElementById("line");

lineAn.addEventListener("click", () => {
  //create child line
  const newLine = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  newLine.setAttribute("id", "line");
  newLine.setAttribute("x1", "100");
  newLine.setAttribute("y1", "80");
  newLine.setAttribute("x2", "400");
  newLine.setAttribute("y2", "200");
  newLine.setAttribute("stroke", "black");
  //appended to parent
  svgParent.appendChild(newLine);
});

rectAn.addEventListener("click", () => {
  //create child line
  const newrect = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );
  newrect.setAttribute("id", "rect");
  newrect.setAttribute("width", "200");
  newrect.setAttribute("height", "100");
  newrect.setAttribute("fill", "black");
  //appended to parent
  svgParent.appendChild(newrect);
});

circAn.addEventListener("click", () => {
  //create child line
  const newcirc = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  newcirc.setAttribute("id", "circle");
  newcirc.setAttribute("cx", "500");
  newcirc.setAttribute("cy", "500");
  newcirc.setAttribute("r", "50");
  newcirc.setAttribute("fill", "black");
  //appended to parent
  svgParent.appendChild(newcirc);
});
