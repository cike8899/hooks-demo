import React from "react";
import immutagen from "immutagen";

const ImmutagenLib = () => {
  const gen = immutagen(function*() {
    yield 1;
    yield 2;
    return 3;
  })();
  console.info(gen);
  const ret1 = gen.next();
  const ret2 = gen.next();
  console.info(ret1.next === ret2.next);
  // console.info(gen.next());
  // console.info(gen.next());
  // console.info(gen.next());
  return <div>ImmutagenLib</div>;
};

export default ImmutagenLib;
