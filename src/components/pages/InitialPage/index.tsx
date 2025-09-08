import type React from "react";
import { Card } from "../../commons/structure/Card";
import { Typography } from "../../commons/toolkit/Typography";

export const InitialPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-center ">
      <Card title="Teste de card" width="360px">
        <Typography variant={"p1"} color={"#c7c7c7"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quam
          diam, cursus ac viverra sit amet, imperdiet id nulla. Maecenas
          convallis facilisis ligula nec dictum. Phasellus sagittis lorem dui,
          nec pellentesque mi lobortis ac. Aliquam consequat consequat tellus,
          commodo imperdiet turpis accumsan ut.
        </Typography>
      </Card>
    </div>
  );
};
