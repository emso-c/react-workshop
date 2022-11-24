import Button from "@components/atoms/Button";
import Text from "@components/atoms/Text";
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Text Text="Sabır Counter" />
      <div style={styles.container}>
        <Button
          down
          onClick={() => {
            setCount(count - 1);
          }}
        />
        <Text Text={count} />
        <Button
          up
          onClick={() => {
            setCount(count + 1);
          }}
        />
      </div>
      <Text Text={count < 0 ? "Sabrım kalmadı" : "Sabırlıyım"} />
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
    gap: "2rem",
  },
};

export default Counter;
