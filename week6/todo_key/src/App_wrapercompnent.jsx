function App_wrapercomponent() {
  return (
    <div>
      {/* <Appwrap innerComponent={<TextComponent />} />
      <Appwrap innerComponent={<TextComponent />} /> */}
      <Appwrap>heyyy</Appwrap>
      <br />
      <br />
      <Appwrap>hii</Appwrap>
      <br />
      <br />
      <Appwrap>hello</Appwrap>
      <br />
      <br />
    </div>
  );
}

// function TextComponent() {
//   return <div>Hi !!!</div>;
// }

// function Appwrap({ innerComponent }) {
//   return (
//     <div style={{ border: "2px solid black", padding: 20 }}>
//       {innerComponent}
//     </div>
//   );
// }

function Appwrap({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: 20 }}>{children}</div>
  );
}

export default App_wrapercomponent;

// function cardWraper({ childern }) {
//     return (
//       <div style={{ border: "1px solid black ", padding: 10, margin: 10 }}>
//         {childern}
//       </div>
//     );
//   }
