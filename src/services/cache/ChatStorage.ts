export interface ChatStorageData {
  user?: {
    userId: string;
    socketId?: string;
    username: string;
  };
  chat?: {
    code?: string;
    ownerSocketId?: string;
  };
}

export class ChatStorage {
  private key = "::chat";

  // Salva dados
  save(data: ChatStorageData) {
    const current = this.load() || {};
    const newData = { ...current, ...data };
    localStorage.setItem(this.key, JSON.stringify(newData));
  }

  // Carrega dados
  load(): ChatStorageData | null {
    const raw = localStorage.getItem(this.key);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as ChatStorageData;
    } catch {
      return null;
    }
  }

  // Limpa dados
  clear() {
    localStorage.removeItem(this.key);
  }

  // Verifica se há user logado
  isUserLoggedIn(): boolean {
    const data = this.load();
    return !!(data?.user && data?.chat?.code);
  }

  // Recupera usuário
  getUser() {
    return this.load()?.user;
  }

  // Recupera chat
  getChat() {
    return this.load()?.chat;
  }
}
