import Image from "next/image";
import React from "react";
import Link from "next/link";

import logo from "@/assets/pages-logos/icon-pascoa-ouro.png";
import ovosDesk01 from "@/assets/pascoa-de-ouro/ovos-desk-01.webp";
import ovosMob01 from "@/assets/pascoa-de-ouro/ovos-mob-01.webp";

import image1 from "@/assets/pascoa-de-ouro/vendas.webp";
import image2 from "@/assets/pascoa-de-ouro/marketing.webp";
import image3 from "@/assets/pascoa-de-ouro/gestao.webp";
import image4 from "@/assets/pascoa-de-ouro/fotografia.webp";

import depo01 from "@/assets/pascoa-de-ouro/depoimento-01.webp";
import depo02 from "@/assets/pascoa-de-ouro/depoimento-02.webp";
import depo03 from "@/assets/pascoa-de-ouro/depoimento-03.webp";
import depo04 from "@/assets/pascoa-de-ouro/depoimento-04.webp";
import depo05 from "@/assets/pascoa-de-ouro/depoimento-05.webp";
import depo06 from "@/assets/pascoa-de-ouro/depoimento-06.webp";
import depo07 from "@/assets/pascoa-de-ouro/depoimento-07.webp";
import depo08 from "@/assets/pascoa-de-ouro/depoimento-08.webp";

import woman01 from "@/assets/pascoa-de-ouro/woman-01.webp";
import woman02 from "@/assets/pascoa-de-ouro/woman-02.webp";
import woman03 from "@/assets/pascoa-de-ouro/woman-03.webp";

import bonus01 from "@/assets/pascoa-de-ouro/bonus-01.webp";
import bonus02 from "@/assets/pascoa-de-ouro/bonus-02.webp";
import bonus03 from "@/assets/pascoa-de-ouro/bonus-03.webp";
import bonus04 from "@/assets/pascoa-de-ouro/bonus-04.webp";
import bonus05 from "@/assets/pascoa-de-ouro/bonus-05.webp";
import bonus06 from "@/assets/pascoa-de-ouro/bonus-06.webp";
import bonus07 from "@/assets/pascoa-de-ouro/bonus-07.webp";
import bonus08 from "@/assets/pascoa-de-ouro/bonus-08.webp";
import bonus09 from "@/assets/pascoa-de-ouro/bonus-09.webp";
import bonus10 from "@/assets/pascoa-de-ouro/bonus-10.webp";

import suport from "@/assets/pascoa-de-ouro/suport.webp";

const PascoaDeOuro = () => {
  return (
    <div className="font-roboto">
      <div className="relative">
        <div className="bg-gradient-to-t from-brow500 to-brow900 text-center gap-8 text-white flex items-center justify-center flex-col px-4 py-10">
          <Image
            alt=""
            src={logo}
            className="max-w-[130px] max-h-[130px] h-full w-full"
          />

          <p className="text-yellow200 text-[25px] md:text-[30px] font-bold leading-[35px]">
            Transforme a Páscoa de 2024 em Sua Mina de Ouro!
          </p>
          <p className="font-poppins text-[18px] md:text-[20px] font-semibold leading-[30px] max-w-[1120px] w-full block">
            Descubra como os ovos de Páscoa caseiros podem se tornar{" "}
            <span className=" text-yellow200">
              sua fonte de renda extra nesta páscoa.
            </span>
          </p>

          <p className="font-poppins text-[18px] md:text-[20px] font-semibold leading-[30px] max-w-[720px] w-full block">
            <span className="text-yellow200">Assista ao vídeo abaixo</span> e
            veja como eu fiz isso acontecer e como você também pode através do
            método páscoa de ouro!
          </p>

          <div className="max-w-[390px] min-h-[220px] md:max-w-[720px] md:min-h-[405px] h-full w-full bg-gray-900 rounded-md"></div>

          <p className="font-poppins text-[18px] md:text-[20px] font-semibold leading-[30px] max-w-[900px] w-full block">
            Este é o momento de investir em uma habilidade que pode transformar
            suas Páscoas em uma verdadeira fonte de renda.{" "}
            <span className="text-yellow200">
              Toque no botão abaixo e inicie sua preparação para a páscoa desse
              ano!
            </span>
          </p>

          <Link
            href={"#"}
            className="bg-green500 rounded-3xl p-4 font-poppins text-[20px] md:text-[20px] font-semibold leading-[30px]"
          >
            Toque aqui para se inscrever no método páscoa de ouro
          </Link>
        </div>
      </div>

      <div className="bg-yellow200 text-center pt-[3rem] md:pt-10 pb-10 flex items-center justify-center flex-col px-4">
        <p className="text-brow900 text-[25px] md:text-[30px] font-bold leading-[35px] max-w-[720px] w-full">
          Mais do que Apenas um Curso de Ovos de Páscoa
        </p>

        <hr className="w-2/3 md:w-1/5 m-auto border border-brow900 mt-8 border-opacity-60" />

        <div>
          <Image
            alt=""
            src={ovosDesk01}
            className="hidden md:block mt-8 rounded-xl"
          />
          <Image
            alt=""
            src={ovosMob01}
            className="block md:hidden mt-4 rounded-xl"
          />
        </div>

        <p className="text-brow900 font-poppins text-[18px] md:text-[20px] font-semibold leading-[30px] max-w-[920px] w-full block mt-10">
          Este não é apenas um curso sobre como fazer ovos de Páscoa, mas é uma
          jornada que vai te ensinar a criar produtos que encantam e vendem.
        </p>

        <hr className="w-2/3 md:w-1/5 m-auto border border-brow900 mt-8 border-opacity-60" />

        <div>
          <Image
            alt=""
            src={ovosDesk01}
            className="hidden md:block mt-8 rounded-xl"
          />
          <Image
            alt=""
            src={ovosMob01}
            className="block md:hidden mt-4 rounded-xl"
          />
        </div>
      </div>

      <div className="bg-brow900">
        <svg
          className="abtolute bottom-0"
          id="wave"
          style={{ transform: "rotate(180deg)", transition: "0.3s" }}
          viewBox="0 0 1440 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(82.284, 21.306, 0, 1)" offset="0%"></stop>
              <stop stopColor="rgba(250, 199, 87, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,10L10,20C20,30,40,50,60,60C80,70,100,70,120,61.7C140,53,160,37,180,25C200,13,220,7,240,5C260,3,280,7,300,11.7C320,17,340,23,360,25C380,27,400,23,420,23.3C440,23,460,27,480,25C500,23,520,17,540,26.7C560,37,580,63,600,73.3C620,83,640,77,660,75C680,73,700,77,720,78.3C740,80,760,80,780,66.7C800,53,820,27,840,25C860,23,880,47,900,56.7C920,67,940,63,960,61.7C980,60,1000,60,1020,65C1040,70,1060,80,1080,76.7C1100,73,1120,57,1140,43.3C1160,30,1180,20,1200,25C1220,30,1240,50,1260,60C1280,70,1300,70,1320,70C1340,70,1360,70,1380,68.3C1400,67,1420,63,1430,61.7L1440,60L1440,100L1430,100C1420,100,1400,100,1380,100C1360,100,1340,100,1320,100C1300,100,1280,100,1260,100C1240,100,1220,100,1200,100C1180,100,1160,100,1140,100C1120,100,1100,100,1080,100C1060,100,1040,100,1020,100C1000,100,980,100,960,100C940,100,920,100,900,100C880,100,860,100,840,100C820,100,800,100,780,100C760,100,740,100,720,100C700,100,680,100,660,100C640,100,620,100,600,100C580,100,560,100,540,100C520,100,500,100,480,100C460,100,440,100,420,100C400,100,380,100,360,100C340,100,320,100,300,100C280,100,260,100,240,100C220,100,200,100,180,100C160,100,140,100,120,100C100,100,80,100,60,100C40,100,20,100,10,100L0,100Z"
          ></path>
          <defs>
            <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(141, 58, 29, 1)" offset="0%"></stop>
              <stop stopColor="rgba(250, 199, 87, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 50px)", opacity: "0.9" }}
            fill="url(#sw-gradient-1)"
            d="M0,40L10,48.3C20,57,40,73,60,81.7C80,90,100,90,120,86.7C140,83,160,77,180,66.7C200,57,220,43,240,31.7C260,20,280,10,300,10C320,10,340,20,360,26.7C380,33,400,37,420,40C440,43,460,47,480,50C500,53,520,57,540,55C560,53,580,47,600,41.7C620,37,640,33,660,33.3C680,33,700,37,720,40C740,43,760,47,780,55C800,63,820,77,840,70C860,63,880,37,900,30C920,23,940,37,960,46.7C980,57,1000,63,1020,55C1040,47,1060,23,1080,13.3C1100,3,1120,7,1140,8.3C1160,10,1180,10,1200,15C1220,20,1240,30,1260,43.3C1280,57,1300,73,1320,81.7C1340,90,1360,90,1380,83.3C1400,77,1420,63,1430,56.7L1440,50L1440,100L1430,100C1420,100,1400,100,1380,100C1360,100,1340,100,1320,100C1300,100,1280,100,1260,100C1240,100,1220,100,1200,100C1180,100,1160,100,1140,100C1120,100,1100,100,1080,100C1060,100,1040,100,1020,100C1000,100,980,100,960,100C940,100,920,100,900,100C880,100,860,100,840,100C820,100,800,100,780,100C760,100,740,100,720,100C700,100,680,100,660,100C640,100,620,100,600,100C580,100,560,100,540,100C520,100,500,100,480,100C460,100,440,100,420,100C400,100,380,100,360,100C340,100,320,100,300,100C280,100,260,100,240,100C220,100,200,100,180,100C160,100,140,100,120,100C100,100,80,100,60,100C40,100,20,100,10,100L0,100Z"
          ></path>
        </svg>
      </div>

      <div className="bg-gradient-to-t from-brow500 via-brow900 to-brow900 flex items-center justify-center flex-col gap-10 text-center pt-10 pb-1 px-4 md:pb-10">
        <p className="text-yellow200 text-[22px] md:text-[30px] font-extrabold leading-[30px] max-w-[920px] w-full ">
          Você não só aprenderá a arte de fazer ovos de Páscoa deliciosos e
          criativos, mas também:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-[20px]">
          <div>
            <Image
              alt=""
              src={image1}
              className="md:max-w-[130px] max-w-[345px] max-h-[345px] md:max-h-[130px] w-full h-full m-auto"
            />
            <p className="text-white font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px]">
              <span className="text-yellow200">Vendas Simplificadas:</span>{" "}
              Embora não seja um curso de vendas, você vai descobrir como vender
              seus ovos de Páscoa de maneira eficiente, aumentando seu retorno
              sobre o investimento com estratégias simples e eficazes.
            </p>
          </div>
          <div>
            <Image
              alt=""
              src={image2}
              className="md:max-w-[130px] max-w-[345px] max-h-[345px] md:max-h-[130px] w-full h-full m-auto"
            />
            <p className="text-white font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px]">
              <span className="text-yellow200">Marketing de Encantamento:</span>{" "}
              Não é um curso de marketing, mas você aprenderá a promover seus
              produtos de uma maneira que cria uma conexão genuína com seus
              clientes, garantindo que eles voltem por mais.
            </p>
          </div>
          <div>
            <Image
              alt=""
              src={image3}
              className="md:max-w-[130px] max-w-[345px] max-h-[345px] md:max-h-[130px] w-full h-full m-auto"
            />
            <p className="text-white font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px]">
              <span className="text-yellow200"> Gestão Descomplicada:</span>{" "}
              Este curso não é focado em gestão de negócios, mas você vai
              adquirir habilidades essenciais para gerenciar seu negócio de ovos
              de Páscoa de forma eficiente e sem complicações.
            </p>
          </div>
          <div>
            <Image
              alt=""
              src={image4}
              className="md:max-w-[130px] max-w-[345px] max-h-[345px] md:max-h-[130px] w-full h-full m-auto"
            />
            <p className="text-white font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px]">
              <span className="text-yellow200">Fotografia e Apresentação:</span>{" "}
              Não é um curso de fotografia, mas ensinamos como tirar fotos
              incríveis dos seus produtos, tornando-os irresistíveis nas redes
              sociais e impulsionando suas vendas.
            </p>
          </div>
        </div>

        <Link
          href={"#"}
          className="bg-green500 text-white rounded-3xl p-4 font-poppins text-[20px] md:text-[20px] font-semibold leading-[30px]"
        >
          Eu quero aprender tudo isso!
        </Link>
      </div>

      <div className="bg-yellow200">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150 block md:hidden"
        >
          <path
            d="M 0,600 L 0,150 C 112.00956937799043,135.55023923444975 224.01913875598086,121.10047846889952 313,139 C 401.98086124401914,156.89952153110048 467.93301435406704,207.1483253588517 560,224 C 652.066985645933,240.8516746411483 770.2488038277513,224.30622009569376 880,191 C 989.7511961722487,157.69377990430624 1091.071770334928,107.62679425837321 1183,98 C 1274.928229665072,88.37320574162679 1357.4641148325359,119.1866028708134 1440,150 L 1440,600 L 0,600 Z"
            stroke="none"
            strokeWidth="0"
            fill="#8d3a1d"
            fillOpacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 300)"
          ></path>
          <path
            d="M 0,600 L 0,350 C 109.01435406698565,334.2105263157895 218.0287081339713,318.4210526315789 318,308 C 417.9712918660287,297.5789473684211 508.8995215311004,292.52631578947376 599,290 C 689.1004784688996,287.47368421052624 778.373205741627,287.4736842105263 868,293 C 957.626794258373,298.5263157894737 1047.6076555023922,309.57894736842104 1143,320 C 1238.3923444976078,330.42105263157896 1339.196172248804,340.2105263157895 1440,350 L 1440,600 L 0,600 Z"
            stroke="none"
            strokeWidth="0"
            fill="#8d3a1d"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-1"
            transform="rotate(-180 720 300)"
          ></path>
        </svg>
      </div>

      <div className="bg-yellow200 text-center pt-[1rem] md:pt-10 pb-4 flex items-center justify-center flex-col px-4">
        <p className="text-brow900 text-[25px] md:text-[30px] font-extrabold leading-[35px] max-w-[720px] w-full ">
          Veja os Resultados Reais de Quem Já Transformou a Páscoa em Ouro!
        </p>

        <hr className="w-2/3 md:w-1/5 m-auto border border-brow900 mt-8 border-opacity-60" />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-4 my-6">
          <Image
            alt=""
            src={depo01}
            className="max-w-[345px] max-h-[345px] md:max-w-[260px] md:max-h-[xl0px] rounded-xl"
          />
          <Image
            alt=""
            src={depo02}
            className="max-w-[345px] max-h-[345px] md:max-w-[260px] md:max-h-[xl0px] rounded-xl"
          />
          <Image
            alt=""
            src={depo03}
            className="max-w-[345px] max-h-[345px] md:max-w-[260px] md:max-h-[xl0px] rounded-xl"
          />
          <Image
            alt=""
            src={depo04}
            className="max-w-[345px] max-h-[345px] md:max-w-[260px] md:max-h-[xl0px] rounded-xl"
          />
        </div>

        <p className="text-brow900 font-poppins text-[18px] md:text-[20px] font-semibold leading-[30px]">
          A verdadeira prova do sucesso do curso “Páscoa de Ouro” está nas
          histórias de sucesso das minhas alunas. Elas começaram exatamente onde
          você está agora e transformaram suas vidas com o poder dos ovos de
          Páscoa artesanais.
        </p>

        <hr className="w-2/3 md:w-1/5 m-auto border border-brow900 mt-8 border-opacity-60" />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 grid-cols-1  gap-4 my-6">
          <Image
            alt=""
            src={depo05}
            className="max-w-[345px] max-h-[345px] md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover"
          />
          <Image
            alt=""
            src={depo06}
            className="max-w-[345px] max-h-[345px] md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover"
          />
          <Image
            alt=""
            src={depo07}
            className="max-w-[345px] max-h-[345px] md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover"
          />
          <Image
            alt=""
            src={depo08}
            className="max-w-[345px] max-h-[345px] md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover"
          />
        </div>

        <Link
          href={"#"}
          className="bg-green500 text-white rounded-3xl p-4 font-poppins text-[20px] md:text-[20px] font-semibold leading-[30px] mt-4"
        >
          Toque aqui e seja minha aluna também!
        </Link>
      </div>

      <div className="bg-brow900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FAC757"
            fillOpacity="1"
            d="M0,96L20,96C40,96,80,96,120,122.7C160,149,200,203,240,229.3C280,256,320,256,360,213.3C400,171,440,85,480,80C520,75,560,149,600,149.3C640,149,680,75,720,90.7C760,107,800,213,840,261.3C880,309,920,299,960,245.3C1000,192,1040,96,1080,58.7C1120,21,1160,43,1200,58.7C1240,75,1280,85,1320,122.7C1360,160,1400,224,1420,256L1440,288L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="bg-gradient-to-t from-brow500 via-brow900 to-brow900 flex items-center justify-center flex-col gap-10 text-center pt-10 pb-10 px-4 md:pb-10">
        <p className="text-yellow200 text-[22px] md:text-[30px] font-extrabold leading-[30px] max-w-[920px] w-full ">
          Por que aprender a produzir e vender ovos de páscoa?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          <div>
            <Image
              alt=""
              src={woman01}
              className=" max-w-[240px] max-h-[240px]  w-full h-full m-auto rounded-md mb-4"
            />
            <div className="max-w-[22rem] m-auto">
              <span className="text-yellow200 font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px] mb-2 block">
                A Páscoa Acontece Todo Ano
              </span>
              <p className="text-white font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px]">
                Assim como as festas de fim de ano, a Páscoa é uma data
                comemorativa que ocorre anualmente. Isso significa uma
                oportunidade de negócio recorrente e previsível todos os anos.
                Ao aprender a fazer e vender ovos de Páscoa artesanais, você
                está investindo em um negócio com demanda garantida a cada ano.
              </p>
            </div>
          </div>
          <div>
            <Image
              alt=""
              src={woman02}
              className=" max-w-[240px] max-h-[240px]  w-full h-full m-auto rounded-md mb-4"
            />
            <div className="max-w-[22rem] m-auto">
              <span className="text-yellow200 font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px] mb-2 block">
                Ovos de Páscoa: Uma Tradição inquebrável.
              </span>
              <p className="text-white font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px]">
                Ovos de Páscoa são uma tradição querida e esperada por muitos.
                Não é uma moda passageira, mas um hábito enraizado em nossa
                cultura. Ao se especializar na produção de ovos de Páscoa, você
                se insere em um mercado tradicional e estável, com clientes que
                retornam ano após ano.
              </p>
            </div>
          </div>
          <div>
            <Image
              alt=""
              src={woman03}
              className=" max-w-[240px] max-h-[240px]  w-full h-full m-auto rounded-md mb-4"
            />
            <div className="max-w-[22rem] m-auto">
              <span className="text-yellow200 font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px] mb-2 block">
                O artesanal é cada vez mais valorizado
              </span>
              <p className="text-white font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px]">
                Produtos artesanais, especialmente os comestíveis, têm uma
                percepção de maior valor e qualidade em comparação com os
                industrializados. Ao oferecer ovos de Páscoa artesanais, você
                não apenas atende a uma demanda, mas também pode cobrar um preço
                premium por produtos de qualidade superior.
              </p>
            </div>
          </div>
        </div>

        <Link
          href={"#"}
          className="bg-green500 text-white rounded-3xl p-4 font-poppins text-[20px] md:text-[20px] font-semibold leading-[30px]"
        >
          Eu quero aprender a produzir e vender ovos de páscoa!
        </Link>
      </div>

      <div className="bg-yellow200 flex items-center justify-center flex-col text-center pt-8 px-4">
        <p className="text-brow900 text-[25px] md:text-[30px] font-bold leading-[35px] max-w-[720px] w-full font-poppins">
          Sua Jornada Será Acompanhada por 6 Meses
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center justify-center">
          <p className="text-brow900 text-[16px] md:text-[16px] font-semibold leading-[30px] max-w-[500px] w-full block mt-10 font-roboto m-auto ">
            Sabemos que dúvidas e desafios podem surgir no caminho para o
            sucesso. Por isso, no curso “Páscoa de Ouro”, você não está sozinha.
            Oferecemos suporte exclusivo por 6 meses para garantir que todas as
            suas questões sejam respondidas e que você tenha a orientação
            necessária para prosperar.
            <br />
            <br />
            Acompanhamento Personalizado: Durante seis meses, nossa equipe
            estará à disposição para ajudar você a superar qualquer obstáculo.
            Seja uma dúvida sobre receitas, técnicas de decoração, estratégias
            de marketing ou gestão do seu negócio, estamos aqui para ajudar.
          </p>

          <Image alt="" src={suport} className="max-w-[400px] w-full m-auto" />
        </div>
      </div>

      <div className="bg-brow900">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150 block md:hidden"
        >
          <path
            d="M 0,600 L 0,150 C 112.00956937799043,135.55023923444975 224.01913875598086,121.10047846889952 313,139 C 401.98086124401914,156.89952153110048 467.93301435406704,207.1483253588517 560,224 C 652.066985645933,240.8516746411483 770.2488038277513,224.30622009569376 880,191 C 989.7511961722487,157.69377990430624 1091.071770334928,107.62679425837321 1183,98 C 1274.928229665072,88.37320574162679 1357.4641148325359,119.1866028708134 1440,150 L 1440,600 L 0,600 Z"
            stroke="none"
            strokeWidth="0"
            fill="#FAC757"
            fillOpacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 300)"
          ></path>
          <path
            d="M 0,600 L 0,350 C 109.01435406698565,334.2105263157895 218.0287081339713,318.4210526315789 318,308 C 417.9712918660287,297.5789473684211 508.8995215311004,292.52631578947376 599,290 C 689.1004784688996,287.47368421052624 778.373205741627,287.4736842105263 868,293 C 957.626794258373,298.5263157894737 1047.6076555023922,309.57894736842104 1143,320 C 1238.3923444976078,330.42105263157896 1339.196172248804,340.2105263157895 1440,350 L 1440,600 L 0,600 Z"
            stroke="none"
            strokeWidth="0"
            fill="#FAC757"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-1"
            transform="rotate(-180 720 300)"
          ></path>
        </svg>
      </div>

      <div className="bg-gradient-to-t from-brow500 via-brow900 to-brow900 flex items-center justify-center flex-col gap-10 text-center pt-10 pb-10 px-4 md:pb-10">
        <p className="text-yellow200 text-[22px] md:text-[30px] font-extrabold leading-[30px] max-w-[920px] w-full ">
          Transforme a Páscoa em uma Experiência Inesquecível com Estes Bônus
          Exclusivos!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] items-start justify-start">
          <div>
            <Image
              alt=""
              src={bonus01}
              className="max-w-[240px] max-h-[240px] w-full h-full m-auto rounded-md mb-4"
            />
            <div className="max-w-[18rem] m-auto">
              <span className="text-yellow200 font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px] mb-2 block">
                Bônus 1: Workshop "A melhor páscoa da sua vida" Gravado
              </span>
              <p className="text-white font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px]">
                Tenha acesso às gravações completas do nosso workshop, e reviva
                as aulas sempre que precisar.
              </p>
            </div>
          </div>

          <div>
            <Image
              alt=""
              src={bonus02}
              className="max-w-[240px] max-h-[240px]  w-full h-full m-auto rounded-md mb-4"
            />
            <div className="max-w-[18rem] m-auto">
              <span className="text-yellow200 font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px] mb-2 block">
                Bônus 2: Barra de Chocolate Recheada
              </span>
              <p className="text-white font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px]">
                Aprenda a fazer barras de chocolate recheadas que são
                verdadeiras obras de arte e deliciosas!
              </p>
            </div>
          </div>

          <div>
            <Image
              alt=""
              src={bonus03}
              className=" max-w-[240px] max-h-[240px] w-full h-full m-auto rounded-md mb-4"
            />
            <div className="max-w-[18rem] m-auto">
              <span className="text-yellow200 font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px] mb-2 block">
                Bônus 3: Colomba Pascal Tradicional
              </span>
              <p className="text-white font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px]">
                Descubra os segredos para criar a Colomba Pascal perfeita, um
                clássico que nunca sai de moda.
              </p>
            </div>
          </div>

          <div>
            <Image
              alt=""
              src={bonus04}
              className=" max-w-[240px] max-h-[240px] w-full h-full m-auto rounded-md mb-4"
            />
            <div className="max-w-[18rem] m-auto">
              <span className="text-yellow200 font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px] mb-2 block">
                Bônus 4: Coelho de Chocolate Recheado
              </span>
              <p className="text-white font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px]">
                Encante seus clientes com coelhos de chocolate recheados, um
                item que garante sorrisos e vendas.
              </p>
            </div>
          </div>

          <div>
            <Image
              alt=""
              src={bonus05}
              className=" max-w-[240px] max-h-[240px] w-full h-full m-auto rounded-md mb-4"
            />
            <div className="max-w-[18rem] m-auto">
              <span className="text-yellow200 font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px] mb-2 block">
                Bônus 5: Corações de Chocolate Lapidados Cintilantes
              </span>
              <p className="text-white font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px]">
                Surpreenda com corações de chocolate que brilham não só no
                sabor, mas também na aparência.
              </p>
            </div>
          </div>

          <div>
            <Image
              alt=""
              src={bonus06}
              className=" max-w-[240px] max-h-[240px] w-full h-full m-auto rounded-md mb-4"
            />
            <div className="max-w-[18rem] m-auto">
              <span className="text-yellow200 font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px] mb-2 block">
                Bônus 6: Esferas de Chocolate com Brilho
              </span>
              <p className="text-white font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px]">
                Domine a arte de fazer esferas de chocolate que capturam olhares
                e paladares com seu brilho único.
              </p>
            </div>
          </div>

          <div>
            <Image
              alt=""
              src={bonus07}
              className=" max-w-[240px] max-h-[240px] w-full h-full m-auto rounded-md mb-4"
            />
            <div className="max-w-[18rem] m-auto">
              <span className="text-yellow200 font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px] mb-2 block">
                Bônus 7: Escultura de Chocolate
              </span>
              <p className="text-white font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px]">
                Eleve seu nível com técnicas de escultura em chocolate,
                adicionando um toque de sofisticação aos seus produtos.
              </p>
            </div>
          </div>

          <div>
            <Image
              alt=""
              src={bonus08}
              className=" max-w-[240px] max-h-[240px] w-full h-full m-auto rounded-md mb-4"
            />
            <div className="max-w-[18rem] m-auto">
              <span className="text-yellow200 font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px] mb-2 block">
                Bônus 8: Bolo Caseirinho Especial de Páscoa
              </span>
              <p className="text-white font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px]">
                Delicie-se com a receita exclusiva do Bolo Caseirinho, perfeito
                para a época de Páscoa.
              </p>
            </div>
          </div>

          <div>
            <Image
              alt=""
              src={bonus09}
              className=" max-w-[240px] max-h-[240px] w-full h-full m-auto rounded-md mb-4"
            />
            <div className="max-w-[18rem] m-auto">
              <span className="text-yellow200 font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px] mb-2 block">
                Bônus 09: Tags Personalizadas
              </span>
              <p className="text-white font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px]">
                Receba designs exclusivos de tags para personalizar seus
                produtos e torná-los ainda mais especiais.
              </p>
            </div>
          </div>

          <div>
            <Image
              alt=""
              src={bonus10}
              className=" max-w-[240px] max-h-[240px] w-full h-full m-auto rounded-md mb-4"
            />
            <div className="max-w-[18rem] m-auto">
              <span className="text-yellow200 font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px] mb-2 block">
                Bônus 10: Planilha de Precificação
              </span>
              <p className="text-white font-poppins text-[18px] md:text-[16px] font-semibold leading-[30px]">
                Gerencie seu negócio com mais eficiência com uma planilha
                desenvolvida para ajudar na precificação dos seus produtos.
              </p>
            </div>
          </div>
        </div>

        <Link
          href={"#"}
          className="bg-green500 text-white rounded-3xl p-4 font-poppins text-[20px] md:text-[20px] font-semibold leading-[30px]"
        >
          Toque aqui para se inscrever e garantir todos os bônus
        </Link>
      </div>
    </div>
  );
};

export default PascoaDeOuro;
