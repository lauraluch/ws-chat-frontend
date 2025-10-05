export function treatErrorMessages(error?: string) {
  switch (error) {
    case "ROOM_NOT_FOUND":
      return "Sala não encontrada.";
    case "USERNAME_REQUIRED":
      return "Insira um nome de usuário válido.";
    default:
      return "Erro desconhecido, tente novamente mais tarde.";
  }
}
