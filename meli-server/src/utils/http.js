export async function requisicaoComRetry(url, opcoes = {}, tentativas = 3) {
  const timeout = opcoes.timeout || 5000;

  for (let i = 0; i < tentativas; i++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const resposta = await fetch(url, {
        ...opcoes,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!resposta.ok) {
        throw new Error(`HTTP ${resposta.status}`);
      }

      return resposta;
    } catch (erro) {
      if (i === tentativas - 1) {
        throw erro;
      }
      await new Promise((resolve) => setTimeout(resolve, 300 * (i + 1)));
    }
  }
}
