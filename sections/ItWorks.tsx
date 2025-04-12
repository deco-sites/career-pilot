import { useSection } from "deco/hooks/useSection.ts";

export interface Props {
  /**
   * @title Título da página
   * @default Política de Privacidade
   */
  title?: string;
}

export default function PrivacyPolicy({ title = "Política de Privacidade" }: Props) {
  return (
    <div
      id="privacy-policy"
      class="container py-10 px-4 max-w-4xl mx-auto flex flex-col gap-6 text-base leading-relaxed"
    >
      <h1 class="text-4xl font-bold">{title}</h1>

      <p>
        Este aplicativo utiliza a API do LinkedIn para acessar dados do seu perfil com seu
        consentimento, com o objetivo de melhorar sua presença na plataforma.
      </p>

      <h2 class="text-2xl font-semibold mt-6">🔍 Dados que coletamos</h2>
      <ul class="list-disc list-inside">
        <li>Seu nome e título profissional</li>
        <li>Informações públicas do seu perfil</li>
        <li>Histórico de atividades, conexões e postagens (se autorizado)</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-6">🧠 Como usamos esses dados</h2>
      <p>
        Os dados são processados por um agente de IA que sugere ações para melhorar seu
        perfil, publica conquistas, e gera conteúdo relevante, sempre com sua autorização.
      </p>

      <h2 class="text-2xl font-semibold mt-6">🔒 Armazenamento e segurança</h2>
      <p>
        Não armazenamos seus dados permanentemente em servidores. Todas as ações são
        feitas em tempo real com segurança e respeito à sua privacidade.
      </p>

      <h2 class="text-2xl font-semibold mt-6">🚫 Compartilhamento de dados</h2>
      <p>
        Não compartilhamos suas informações com terceiros sob nenhuma circunstância.
      </p>

      <h2 class="text-2xl font-semibold mt-6">❌ Revogação de acesso</h2>
      <p>
        Você pode revogar o acesso do aplicativo a qualquer momento nas configurações de
        privacidade da sua conta LinkedIn.
      </p>

      <h2 class="text-2xl font-semibold mt-6">📧 Contato</h2>
      <p>
        Em caso de dúvidas, entre em contato pelo e-mail: <strong>seuemail@email.com</strong>
      </p>

      <div class="mt-8 text-sm text-gray-500">
        Última atualização: {new Date().toLocaleDateString("pt-BR")}
      </div>
    </div>
  );
}