import type React from "react";
import { Card } from "../../commons/structure/Card";
import { Typography } from "../../commons/toolkit/Typography";
import { TextInput } from "../../commons/inputs/TextInput";
import { Button } from "../../commons/buttons/Button";
import { useState } from "react";
import type { ChatForm } from "./types";

export const InitialPage: React.FC = () => {
  const [form, setForm] = useState<ChatForm>({
    username: "",
    roomCode: "",
  });

  function handleFormChange(key: keyof ChatForm, value: string) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-4 ">
      <div style={{ maxWidth: 420 }}>
        <Card title="Chat de mensagens">
          <div className="flex flex-col gap-4">
            <Typography variant="p2" color={"var(--color-text-secondary)"}>
              Insira um nome de usuário e os dados da sala para continuar.
            </Typography>

            <TextInput
              title="Nome de usuário"
              placeholder="Insira um nome de usuário"
              value={form.username}
              onValueChange={(v) => handleFormChange("username", v)}
            />

            <TextInput
              title={"Código da sala"}
              placeholder="Insira o código de uma sala existente"
              value={form.roomCode}
              onValueChange={(v) => handleFormChange("roomCode", v)}
            />

            <div className="flex flex-row items-center gap-4">
              <Button
                variant="secondary"
                label="Criar uma sala"
                onClick={() => console.log()}
                width="100%"
              />

              <Button
                variant="primary"
                label="Entrar na sala"
                onClick={() => console.log()}
                width="100%"
                disabled={!form?.username?.length || !form?.roomCode?.length}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
