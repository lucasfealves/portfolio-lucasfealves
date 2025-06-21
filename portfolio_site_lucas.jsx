import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0a192f] text-white px-6 py-12">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Lucas Felipe Alves</h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Tech Lead Java | Software Engineer | +15 anos em sistemas Web e Cloud
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:lucas.fe.alves@outlook.com" aria-label="Email">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://github.com/lucasfealves" target="_blank" rel="noopener" aria-label="GitHub">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/lucasf-30646312" target="_blank" rel="noopener" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Sobre Mim */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-4">Sobre Mim</h2>
        <p className="text-gray-300 text-lg">
          Sou Tech Lead Java com mais de 15 anos de experiência no desenvolvimento de aplicações Web, APIs RESTful e soluções cloud-native. Atuo na GFT Technologies e já liderei times em projetos para o setor financeiro, logístico e educacional. Tenho experiência com tecnologias modernas como Quarkus, Angular, AWS, Azure, além de domínio de sistemas legados em JSF, J2EE e Primefaces.
        </p>
      </section>

      {/* Projetos em Destaque */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-8">Projetos em Destaque</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">[Nome do Projeto]</h3>
              <p className="text-gray-400 mb-2">Breve descrição do projeto. Problema, solução, tecnologias usadas.</p>
              <p className="text-sm text-gray-500">Java · Quarkus · AWS Lambda</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">[Nome do Projeto]</h3>
              <p className="text-gray-400 mb-2">Breve descrição do projeto. Problema, solução, tecnologias usadas.</p>
              <p className="text-sm text-gray-500">Angular · REST API · Docker</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6">Skills Técnicas</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-300 text-lg">
          <li>Java / Spring</li>
          <li>Quarkus</li>
          <li>Angular</li>
          <li>AWS / Azure</li>
          <li>Kafka / ELK</li>
          <li>JSF / Primefaces</li>
          <li>Docker / Openshift</li>
          <li>API REST</li>
          <li>Delphi / Flex (legado)</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Vamos conversar?</h2>
        <p className="text-gray-400 mb-6">Estou aberto a novos desafios, conexões e oportunidades.</p>
        <a href="mailto:lucas.fe.alves@outlook.com">
          <Button variant="secondary">Entrar em Contato</Button>
        </a>
      </section>
    </main>
  );
}
