import type React from "react";
import { TextInput } from "../../commons/inputs/TextInput";
import { Button } from "../../commons/buttons/Button";
import { useInitialPage } from "./hooks/useInitialPage";
import { Typography } from "../../commons/toolkit/Typography";

export const InitialPage: React.FC = () => {
  const { form, handleCreateChat, handleFormChange, handleEnterChat } =
    useInitialPage();

  return (
    <div className="flex flex-row w-full h-full items-center justify-center">
      <div className="flex flex-3 flex-col h-full custom-messages-bg"></div>

      <div className="flex flex-2 flex-col h-full items-center justify-center bg-general-white p-4">
        <div className="flex w-[80%] flex-col gap-4">
          <div className="flex flex-col gap-4 mb-2">
            <img src="/logo.png" alt="Logo" className="w-16 h-auto" />

            <Typography variant="h3">Chat de mensagens</Typography>
          </div>

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
              onClick={handleCreateChat}
              width="100%"
            />

            <Button
              variant="primary"
              label="Entrar na sala"
              onClick={handleEnterChat}
              width="100%"
              disabled={!form?.username?.length || !form?.roomCode?.length}
            />
          </div>
        </div>
      </div>
      {/* <div style={{ maxWidth: 420 }}>
        <Card
          title="Chat de mensagens"
          subtitle="Insira um nome de usuário e os dados da sala para continuar."
          gap="12px"
          icon={<img src="/logo.png" alt="Logo" className="w-14 h-auto" />}
        >
          <div className="flex flex-col gap-4">
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
                onClick={handleCreateChat}
                width="100%"
              />

              <Button
                variant="primary"
                label="Entrar na sala"
                onClick={handleEnterChat}
                width="100%"
                disabled={!form?.username?.length || !form?.roomCode?.length}
              />
            </div>
          </div>
        </Card>
      </div> */}
    </div>
  );
};
