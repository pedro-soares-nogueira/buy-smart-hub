"use client";
import Image from "next/image";
import Link from "next/link";
import { Eye, SpeakerSimpleHigh } from "phosphor-react";
import React, { useEffect, useState } from "react";

import avatar01 from "@/assets/testimonials/avatar-01.png";
import comment01 from "@/assets/testimonials/coment-01.png";
import avatar02 from "@/assets/testimonials/avatar-2.png";
import comment02 from "@/assets/testimonials/comment-2.png";
import avatar03 from "@/assets/testimonials/avatar-03.jpeg";
import avatar04 from "@/assets/testimonials/avatar-04.jpg";
import comment04 from "@/assets/testimonials/comment-4.jpg";

import avatar05 from "@/assets/testimonials/avatar05.jpg";
import avatar06 from "@/assets/testimonials/avatar06.jpg";
import avatar07 from "@/assets/testimonials/avatar07.jpg";

import logo from "@/assets/logo-icons/icon-banana.png";

import security from "@/assets/security.png";
import Script from "next/script";
import Head from "next/head";

import Video from "next-video";
import vsl from "/videos/vsl-truque-da-banana.mp4";

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const TruqueBanana = () => {
  let dataAtual = new Date();

  let ano = dataAtual.getFullYear();
  let mesIndex = dataAtual.getMonth(); // Obtém o índice do mês
  let mesExtenso = meses[mesIndex];
  let dia = dataAtual.getDate();

  let dataFormatada = dia + " de " + mesExtenso + " de " + ano;

  const [contador, setContador] = useState(346);

  useEffect(() => {
    const interval = setInterval(() => {
      setContador((prevContador) => prevContador + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <>
        <Script
          id="fbp"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1884200962033418');
            fbq('track', 'PageView');
          `,
          }}
        ></Script>
      </>

      <Head>
        <title>Troque da banana</title>
        <meta name={"og:title"} title={"og:title"} content="Troque da banana" />
        <meta
          name={"description"}
          title={"description"}
          content="Truque completo"
        />
        <meta
          name={"og:description"}
          title={"og:description"}
          content="Truque completo"
        />
        <link rel="icon" href="/icon-banana.png" />

        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            alt=""
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=1884200962033418&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>
      <div className="space-y-16">
        <div className="bg-[#FF0000] text-center px-4 py-4 text-white font-semibold text-base md:text-lg">
          Devido à grande procura, o vídeo ficará disponível até o dia:{" "}
          {dataFormatada}
        </div>

        <div className="flex flex-col items-center justify-center gap-6 px-4">
          <p className="flex flex-col md:flex-row text-center items-center justify-center gap-4 text-lg font-bold">
            <span className="relative">
              <SpeakerSimpleHigh
                size={32}
                className="animate-ping text-blue-800"
              />
              <SpeakerSimpleHigh
                size={32}
                weight="fill"
                className="text-blue-800 absolute inset-0"
              />
            </span>
            Veja o que as pessoas estão dizendo sobre o novo truque!
          </p>
          <Video
            src={vsl}
            className="max-w-[60rem] w-full h-[220px] sm:h-[440px] md:h-[35rem]"
          />
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 ">
            <Eye size={32} className="mr-3" />
            <p className="text-lg font-bold text-center">
              {contador} pessoas
              <span className="text-yellow-600"> assistindo</span> nesse momento
            </p>
          </div>
        </div>

        <div>
          <div className="bg-[#FFEE1B] h-7"></div>
          <div className="bg-[#001501] text-white h-[17rem] flex items-center justify-center flex-col px-4">
            <p className="text-xl md:text-2xl font-bold max-w-[54rem] text-center leading-7 md:leading-9">
              Possui apenas <span className="text-[#FFEE1B]">4 vagas</span> para
              fazer a consulta com a Andreia. Clique no botão abaixo para
              garantir a sua!
            </p>

            <Link
              href={"https://kiwify.app/hSszoUy?afid=EOLlgPZB"}
              className="max-w-[28rem] bg-[#3B9109] block w-full rounded-full p-4 text-center font-bold animate-bounce mt-10"
              style={{
                borderStyle: "solid",
                borderWidth: "0px 5px 5px 5px",
                borderColor: "#00FF52",
                borderRadius: "133px 133px 133px 133px",
                boxShadow: "0px 0px 10px 0px #2CFF00",
              }}
            >
              FAZER CONSULTA GRATUITA
            </Link>
          </div>
        </div>

        <Image alt="" src={security} className="mx-auto px-4" />

        <div className="max-w-[60rem] m-auto px-4">
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex gap-4">
              <Image alt="" src={avatar01} className="w-14 h-14 object-cover" />
              <div className="flex flex-col items-start gap-2 justify-start">
                <p className="text-gray-800 font-semibold">Daniele López </p>
                <p className="text-gray-600">
                  Ainda bem que eu vi esse vídeo até o final e fiz a consulta da
                  Andreia.... Feliiiz demais!!! Obrigada, achava que o truque n
                  ia funcionar pq já tinha feito de td pra emagrecer, mas msmo
                  assim quis tentar e olha agora, é meu primeiro mês e já pedi 8
                  quilos😍😍😍
                </p>
                <Image alt="" src={comment01} />
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex gap-4">
              <Image alt="" src={avatar02} className="w-14 h-14 object-cover" />
              <div className="flex flex-col items-start gap-2 justify-start">
                <p className="text-gray-800 font-semibold">Julia García </p>
                <p className="text-gray-600">
                  Meu marido me disse que eu pareço outra e que estou ainda mais
                  bonita!!! Amando esse desafio!!! Obrigada pelo Truque 😀
                </p>
                <Image alt="" src={comment02} />
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex gap-4">
              <Image alt="" src={avatar03} className="w-14 h-14 object-cover" />
              <div className="flex flex-col items-start gap-2 justify-start">
                <p className="text-gray-800 font-semibold">Josefa Martin </p>
                <p className="text-gray-600">
                  Tava querendo muito emagrecer, mas vc sabe né? Nunca quis
                  fazer academia ou cortas minhas comidas preferidas!!! Então
                  não sabia o que fazer… Usei o método todo dia pela manhã a
                  mais de uma semana e já perdi 4 quilos!!! 🙂
                </p>
                {/* <Image alt="" src={comment01} /> */}
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex gap-4">
              <Image alt="" src={avatar04} className="w-14 h-14 object-cover" />
              <div className="flex flex-col items-start gap-2 justify-start">
                <p className="text-gray-800 font-semibold">Cristina Ruiz </p>
                <p className="text-gray-600">
                  Eu realmente precisava dessa Consulta, achei o botão pra
                  aumentar minha autoestima 😀 não sabia mais o que fazer, no
                  começo achei que n ia ter mais jeito, mas deu certo!!! estou
                  SUPER FELIZ!, assistam até o final que libera a consulta
                  gratuita pra vocs!!!!
                </p>
                <Image alt="" src={comment04} />
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex gap-4">
              <Image alt="" src={avatar05} className="w-14 h-14 object-cover" />
              <div className="flex flex-col items-start gap-2 justify-start">
                <p className="text-gray-800 font-semibold">Maria Carolina </p>
                <p className="text-gray-600">
                  Eu já tentei de tudo, será que funciona?
                </p>
                {/* <Image alt="" src={comment01} /> */}
                <div className="border-l border-gray-400 pl-4 space-y-6">
                  <div className="flex gap-4">
                    <Image
                      alt=""
                      src={avatar06}
                      className="w-14 h-14 object-cover"
                    />
                    <div>
                      <p className="text-gray-800 font-semibold text-sm">
                        Daniela:{" "}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Eu também já tinha tentado de tudo, estava desanimada. O
                        truque foi minha última tentativa e deu certo demais.
                        Pode testar vc vai ver como funciona.​
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Image
                      alt=""
                      src={avatar07}
                      className="w-14 h-14 object-cover"
                    />
                    <div>
                      <p className="text-gray-800 font-semibold text-sm">
                        Rose:{" "}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Maria eu já fiz de tudo também. Depois que Fiz o truque
                        e descobri o que fazer e hoje já perdi 9 quilos.​
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Image
                      alt=""
                      src={avatar05}
                      className="w-14 h-14 object-cover"
                    />
                    <div>
                      <p className="text-gray-800 font-semibold text-sm">
                        Maria:{" "}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Brigada meninas, vou tentar 🙂
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-gray-100 py-10 px-4">
          <p className="text-center text-sm text-gray-700 block max-w-[75rem] m-auto">
            AVISO LEGAL: É importante consultar seu médico antes de iniciar
            qualquer atividade física ou plano nutricional. O conteúdo
            disponível nesse site não deve ser interpretado como uma promessa ou
            garantia de resultados. Os resultados variam para cada pessoa. Seu
            nível de sucesso em alcançar os resultados divulgados com o uso
            dessas informações depende da sua dedicação, conhecimento e
            disciplina em seguir todas as sugestões. Como esses fatores diferem
            entre cada indivíduo, não podemos garantir o sucesso ou o nível de
            resultado, nem somos responsáveis por qualquer uma de suas ações.
            Todas e quaisquer declarações prospectivas contidas neste site
            destinam-se a expressar a nossa opinião sobre os resultados
            potenciais que algumas pessoas podem alcançar. Este produto não
            substitui o parecer profissional. Sempre consulte um profissional
            especializado para tratar de assuntos relativos à saúde. O código de
            defesa consumidor (Art. 49) garante 7 dias para solicitar reembolso
            em caso de insatisfação com o produto.
          </p>
          <p className="text-center text-sm mt-4 block text-gray-700 max-w-[75rem] m-auto font-bold">
            Todos os direitos reservados © 2022
          </p>
        </footer>
      </div>
    </>
  );
};

export default TruqueBanana;
