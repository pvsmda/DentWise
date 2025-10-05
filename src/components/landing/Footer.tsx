import Image from "next/image";

function Footer() {
  return (
    <footer className="px-6 py-12 border-t bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Logo OdontoVoice"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-semibold text-lg">OdontoVoice</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Assistência dentária com IA que realmente ajuda.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-3">Produto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Perguntas frequentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Central de ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Contate-nos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Termos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Segurança
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} OdontoVoice. Criado para pessoas
            reais com dúvidas odontológicas reais.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
