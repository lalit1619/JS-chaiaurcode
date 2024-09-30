//document is the JS object and document itself is a root node
//parent children relationship
//new line space is considered as a textNode

const rootNode=document.getRootNode();
const htmlElement=rootNode.childNodes[0];
console.log(htmlElement);
console.log(htmlElement.childNodes);
const bodyElement=htmlElement.childNodes[2];
console.log(bodyElement);
console.log(bodyElement.parentNode);
  // sibilings relationship

  const headNode=htmlElement.childNodes[0];
  console.log(headNode);
  console.log(headNode.nextSibling);
  console.log(headNode.nextSibling.nextSibling);

  console.log(bodyElement.previousSibling);
  console.log(bodyElement.previousSibling.previousSibling);

  //next element sibling will not provide text node as a sibling

  console.log(headNode.nextElementSibling);

