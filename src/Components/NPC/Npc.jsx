import { Cactoro } from "./Cactoro";

export default function Npc() {
  return (
    <>
      <Cactoro position-z={-20}></Cactoro>
      <Cactoro position-z={-10}></Cactoro>
    </>
  );
}
