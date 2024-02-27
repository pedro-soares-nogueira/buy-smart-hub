"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";

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

import whois01 from "@/assets/pascoa-de-ouro/whois-01.webp";
import whois02 from "@/assets/pascoa-de-ouro/whois-02.webp";
import whois03 from "@/assets/pascoa-de-ouro/whois-03.webp";

import journey01 from "@/assets/pascoa-de-ouro/journey-01.webp";
import journey02 from "@/assets/pascoa-de-ouro/journey-02.webp";
import journey03 from "@/assets/pascoa-de-ouro/journey-03.webp";
import journey04 from "@/assets/pascoa-de-ouro/journey-04.webp";
import journey05 from "@/assets/pascoa-de-ouro/journey-05.webp";
import journey06 from "@/assets/pascoa-de-ouro/journey-06.webp";
import journey07 from "@/assets/pascoa-de-ouro/journey-07.webp";

import whydidi01 from "@/assets/pascoa-de-ouro/whydidi-01.webp";
import whydidi02 from "@/assets/pascoa-de-ouro/whydidi-02.webp";
import whydidi03 from "@/assets/pascoa-de-ouro/whydidi-03.webp";

import suport from "@/assets/pascoa-de-ouro/suport.webp";
import garantia from "@/assets/pascoa-de-ouro/garantia.png";
import owner from "@/assets/pascoa-de-ouro/owner-01.webp";

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
            className="max-w-[345px] w-full h-full max-h-[345px] md:max-w-[260px] md:max-h-[xl0px] rounded-xl"
          />
          <Image
            alt=""
            src={depo02}
            className="max-w-[345px] w-full h-full max-h-[345px] md:max-w-[260px] md:max-h-[xl0px] rounded-xl"
          />
          <Image
            alt=""
            src={depo03}
            className="max-w-[345px] w-full h-full max-h-[345px] md:max-w-[260px] md:max-h-[xl0px] rounded-xl"
          />
          <Image
            alt=""
            src={depo04}
            className="max-w-[345px] w-full h-full max-h-[345px] md:max-w-[260px] md:max-h-[xl0px] rounded-xl"
          />
        </div>

        <p className="text-brow900 font-poppins text-[18px] md:text-[20px] max-w-[900px] w-full font-semibold leading-[30px] my-8">
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
            className="max-w-[345px] max-h-[345px] w-full h-full  md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover"
          />
          <Image
            alt=""
            src={depo06}
            className="max-w-[345px] max-h-[345px] w-full h-full  md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover"
          />
          <Image
            alt=""
            src={depo07}
            className="max-w-[345px] max-h-[345px] w-full h-full  md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover"
          />
          <Image
            alt=""
            src={depo08}
            className="max-w-[345px] max-h-[345px] w-full h-full  md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover"
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

      <div className="bg-yellow200 block md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#8D3A1D"
            fillOpacity="1"
            d="M0,96L20,96C40,96,80,96,120,122.7C160,149,200,203,240,229.3C280,256,320,256,360,213.3C400,171,440,85,480,80C520,75,560,149,600,149.3C640,149,680,75,720,90.7C760,107,800,213,840,261.3C880,309,920,299,960,245.3C1000,192,1040,96,1080,58.7C1120,21,1160,43,1200,58.7C1240,75,1280,85,1320,122.7C1360,160,1400,224,1420,256L1440,288L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="bg-yellow200 flex items-center justify-center flex-col text-center py-8 px-4">
        <p className="text-brow900 text-[25px] md:text-[30px] font-bold leading-[35px] max-w-[720px] w-full font-poppins">
          Sua Jornada Será Acompanhada por 6 Meses
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-brow900 text-[16px] md:text-[18px] font-semibold leading-[30px] max-w-[520px] w-full block mt-10 font-roboto m-auto">
            Sabemos que dúvidas e desafios podem surgir no caminho para o
            sucesso. Por isso, no curso “Páscoa de Ouro”, você não está sozinha.
            Oferecemos suporte exclusivo por 6 meses para garantir que todas as
            suas questões sejam respondidas e que você tenha a orientação
            necessária para prosperar.
            <br />
            <br />
            <strong>Acompanhamento Personalizado:</strong> Durante seis meses,
            nossa equipe estará à disposição para ajudar você a superar qualquer
            obstáculo. Seja uma dúvida sobre receitas, técnicas de decoração,
            estratégias de marketing ou gestão do seu negócio, estamos aqui para
            ajudar.
          </p>

          <Image
            alt=""
            src={suport}
            className="max-w-[16rem] w-full m-auto md:max-w-[22rem]"
          />
        </div>
      </div>

      <div className="bg-gradient-to-t from-brow500 via-brow900 to-brow900 flex items-center justify-center flex-col gap-10 text-center pt-10 px-4 pb-10">
        <p className="text-yellow200 text-[22px] md:text-[30px] font-extrabold leading-[30px] max-w-[920px] w-full ">
          Transforme a Páscoa em uma Experiência Inesquecível com Estes Bônus
          Exclusivos!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[20px] gap-y-14">
          <div className="w-full md:max-w-[260px] space-y-3">
            <Image
              alt=""
              src={bonus01}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-yellow200 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              Bônus 1: Workshop "A melhor páscoa da sua vida" Gravado
            </span>
            <p className="text-white font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Tenha acesso às gravações completas do nosso workshop, e reviva as
              aulas sempre que precisar.
            </p>
          </div>

          <div className="w-full md:max-w-[260px] space-y-3">
            <Image
              alt=""
              src={bonus02}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-yellow200 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              Bônus 2: Barra de Chocolate Recheada
            </span>
            <p className="text-white font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Aprenda a fazer barras de chocolate recheadas que são verdadeiras
              obras de arte e deliciosas!
            </p>
          </div>

          <div className="w-full md:max-w-[260px] space-y-3">
            <Image
              alt=""
              src={bonus03}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-yellow200 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              Bônus 3: Colomba Pascal Tradicional
            </span>
            <p className="text-white font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Descubra os segredos para criar a Colomba Pascal perfeita, um
              clássico que nunca sai de moda.
            </p>
          </div>

          <div className="w-full md:max-w-[260px] space-y-3">
            <Image
              alt=""
              src={bonus04}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-yellow200 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              Bônus 4: Coelho de Chocolate Recheado
            </span>
            <p className="text-white font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Encante seus clientes com coelhos de chocolate recheados, um item
              que garante sorrisos e vendas.
            </p>
          </div>

          <div className="w-full md:max-w-[260px] space-y-3">
            <Image
              alt=""
              src={bonus05}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-yellow200 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              Bônus 5: Corações de Chocolate Lapidados Cintilantes
            </span>
            <p className="text-white font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Surpreenda com corações de chocolate que brilham não só no sabor,
              mas também na aparência.
            </p>
          </div>

          <div className="w-full md:max-w-[260px] space-y-3">
            <Image
              alt=""
              src={bonus06}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-yellow200 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              Bônus 6: Esferas de Chocolate com Brilho
            </span>
            <p className="text-white font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Domine a arte de fazer esferas de chocolate que capturam olhares e
              paladares com seu brilho único.
            </p>
          </div>

          <div className="w-full md:max-w-[260px] space-y-3">
            <Image
              alt=""
              src={bonus07}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-yellow200 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              Bônus 7: Escultura de Chocolate
            </span>
            <p className="text-white font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Eleve seu nível com técnicas de escultura em chocolate,
              adicionando um toque de sofisticação aos seus produtos.
            </p>
          </div>

          <div className="w-full md:max-w-[260px] space-y-3">
            <Image
              alt=""
              src={bonus08}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-yellow200 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              Bônus 8: Bolo Caseirinho Especial de Páscoa
            </span>
            <p className="text-white font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Delicie-se com a receita exclusiva do Bolo Caseirinho, perfeito
              para a época de Páscoa.
            </p>
          </div>

          <div className="w-full md:max-w-[260px] space-y-3">
            <Image
              alt=""
              src={bonus09}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-yellow200 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              Bônus 09: Tags Personalizadas
            </span>
            <p className="text-white font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Receba designs exclusivos de tags para personalizar seus produtos
              e torná-los ainda mais especiais.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="w-full md:max-w-[260px] space-y-3 m-auto">
              <Image
                alt=""
                src={bonus10}
                className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
              />
              <span className="text-yellow200 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
                Bônus 10: Planilha de Precificação
              </span>
              <p className="text-white font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
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

      <div className="bg-yellow200 flex items-center justify-center flex-col text-center py-8 px-4">
        <p className="text-brow900 text-[25px] md:text-[30px] font-bold leading-[35px] max-w-[720px] w-full font-poppins">
          Conheça Marrara Bortoloti: Da Confeitaria Caseira à Referência
          Nacional
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-10">
          <p className="text-brow900 text-[16px] md:text-[18px] font-semibold leading-[30px] max-w-[520px] w-full block mt-10 font-roboto m-auto">
            Marrara iniciou sua carreira na confeitaria em uma cozinha caseira,
            enfrentando os desafios com determinação e criatividade. Sua paixão
            e habilidade a levaram a conquistar um lugar de destaque no mercado,
            especialmente durante as temporadas de Páscoa.
            <br />
            <br />
            Ao longo dos anos, ela não só criou ovos de Páscoa artesanais que se
            tornaram um sucesso de vendas, mas também compartilhou seu
            conhecimento, ajudando a transformar a vida de outras pessoas. Seus
            cursos online já impactaram mais de 400 mil alunas ao redor do
            mundo.
            <br />
            <br />
            Hoje, Marrara é mais do que uma confeiteira; ela é uma educadora e
            empreendedora de renome. Seu nome se tornou sinônimo de qualidade,
            inovação e sucesso no mundo da confeitaria.
          </p>

          <Image
            alt=""
            src={owner}
            className="max-w-[22rem] rounded-md w-full m-auto md:max-w-[28rem]"
          />
        </div>
      </div>

      <div className="bg-gradient-to-t from-brow500 via-brow900 to-brow900 flex items-center justify-center flex-col gap-10 text-center pt-10 pb-1 px-4 pb-10">
        <p className="text-yellow200 text-[22px] md:text-[30px] font-extrabold leading-[30px] max-w-[920px] w-full ">
          Para quem é o método páscoa de ouro?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[20px] gap-y-14">
          <div className="w-full md:max-w-[350px] space-y-3">
            <Image
              alt=""
              src={whois01}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-yellow200 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              Para Você que Quer Iniciar um Negócio na Confeitaria
            </span>
            <p className="text-white font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Se você está sonhando em começar sua jornada no mundo da
              confeitaria, o “Páscoa de Ouro” é o ponto de partida perfeito.
              Este curso oferece a base que você precisa para iniciar seu
              negócio, ensinando habilidades práticas e fornecendo insights
              valiosos sobre o mercado de ovos de Páscoa artesanais. Transforme
              sua paixão em um negócio lucrativo e dê o primeiro passo para se
              tornar uma confeiteira de sucesso.
            </p>
          </div>

          <div className="w-full md:max-w-[350px] space-y-3">
            <Image
              alt=""
              src={whois02}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-yellow200 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              Para Você que Já é Confeiteira e Quer Faturar Alto na Páscoa
            </span>
            <p className="text-white font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Já tem experiência na confeitaria? o método “Páscoa de Ouro” é a
              oportunidade de elevar seu negócio a novos patamares. Aprenda
              técnicas exclusivas para criar ovos de Páscoa inovadores e
              irresistíveis, e descubra estratégias para maximizar suas vendas
              durante a temporada de Páscoa. Este curso é o impulso que você
              precisa para se destacar no mercado e aumentar significativamente
              seu faturamento.
            </p>
          </div>

          <div className="w-full md:max-w-[350px] space-y-3">
            <Image
              alt=""
              src={whois03}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-yellow200 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              Para Você que Quer faturar mais de 5 Mil Reais
            </span>
            <p className="text-white font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Se o seu objetivo é ganhar reconhecimento e alcançar um
              faturamento expressivo com a confeitaria, o método “Páscoa de
              Ouro” oferece as ferramentas e conhecimentos necessários. Com as
              técnicas e estratégias abordadas no curso, você será capaz de
              criar produtos de alto nível que atraem clientes e garantem um
              retorno financeiro impressionante. Prepare-se para ser uma
              confeiteira reconhecida e que fatura mais de 5 mil reais na
              Páscoa.
            </p>
          </div>
        </div>

        <Link
          href={"#"}
          className="bg-green500 text-white rounded-3xl p-4 font-poppins text-[20px] md:text-[20px] font-semibold leading-[30px]"
        >
          Esse curso é para mim! Quero me inscrever.
        </Link>
      </div>

      <div className="bg-yellow200 flex items-center justify-center flex-col gap-10 text-center pt-10 px-4 pb-10">
        <p className="text-brow900 text-[22px] md:text-[30px] font-extrabold leading-[30px] max-w-[920px] w-full ">
          Para quem é o método páscoa de ouro?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[20px] gap-y-14">
          <div className="w-full md:max-w-[350px] space-y-3">
            <Image
              alt=""
              src={journey01}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-brow900 font-poppins text-[28px] md:text-[18px] font-bold leading-[30px] mb-2 block">
              1 - Fundamentos Essenciais:
            </span>
            <p className="text-brow500 font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Você começará com o básico, entendendo os utensílios necessários e
              os diferentes tipos de chocolate, estabelecendo uma sólida base
              para sua jornada na confeitaria.
            </p>
          </div>

          <div className="w-full md:max-w-[350px] space-y-3">
            <Image
              alt=""
              src={journey02}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-brow900 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              2 - Produção de Alta Qualidade: ​
            </span>
            <p className="text-brow500 font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Aprenda na prática o processo de temperagem do chocolate,
              garantindo cascas de ovos perfeitas e brilhantes. Descubra
              técnicas para fabricar cascas de forma rápida e produtiva,
              incluindo métodos para colori-las de forma criativa e atraente.
            </p>
          </div>

          <div className="w-full md:max-w-[350px] space-y-3">
            <Image
              alt=""
              src={journey01}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-brow900 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              3 - Receitas e Decorações Inovadoras​
            </span>
            <p className="text-brow500 font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Tenha acesso a uma variedade de receitas e decorações, com vários
              modelos de ovos diferentes, que lhe permitirão construir um
              cardápio diversificado e cativante.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-[20px] gap-y-14">
          <div className="w-full md:max-w-[300px] space-y-3">
            <Image
              alt=""
              src={journey04}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[210px] md:max-h-[210px] rounded-xl object-cover m-auto"
            />
            <span className="text-brow900 font-poppins text-[28px] md:text-[18px] font-bold leading-[30px] mb-2 block">
              4 - Recheios Tendência de 2024
            </span>
            <p className="text-brow500 font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Fique por dentro dos recheios que serão tendência em 2024,
              garantindo que seus produtos sejam não só deliciosos, mas também
              modernos e procurados.
            </p>
          </div>

          <div className="w-full md:max-w-[300px] space-y-3">
            <Image
              alt=""
              src={journey05}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[210px] md:max-h-[210px] rounded-xl object-cover m-auto"
            />
            <span className="text-brow900 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              5 - Montagem Profissional
            </span>
            <p className="text-brow500 font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Domine a arte da montagem dos ovos recheados e ovos trufados,
              aprendendo a combinar sabores e texturas para criar ovos de Páscoa
              irresistíveis.
            </p>
          </div>

          <div className="w-full md:max-w-[300px] space-y-3">
            <Image
              alt=""
              src={journey06}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[210px] md:max-h-[210px] rounded-xl object-cover m-auto"
            />
            <span className="text-brow900 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              6 - Precificação Inteligente
            </span>
            <p className="text-brow500 font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Aprenda a precificar seus ovos de Páscoa de maneira estratégica,
              garantindo um bom lucro e evitando prejuízos.
            </p>
          </div>

          <div className="w-full md:max-w-[300px] space-y-3">
            <Image
              alt=""
              src={journey07}
              className="max-w-[345px] max-h-[260px] w-full h-full md:max-w-[210px] md:max-h-[210px] rounded-xl object-cover m-auto"
            />
            <span className="text-brow900 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              7 - Marketing e Vendas na internet:
            </span>
            <p className="text-brow500 font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Descubra como tirar fotos incríveis para suas redes sociais e como
              executar estratégias de marketing eficientes para atrair uma
              enxurrada de clientes nesta Páscoa.
            </p>
          </div>
        </div>

        <Link
          href={"#"}
          className="bg-green500 text-white rounded-3xl p-4 font-poppins text-[20px] md:text-[20px] font-semibold leading-[30px]"
        >
          Toque aqui para se inscrever e entrar nessa jornada!
        </Link>
      </div>

      <div className="bg-gradient-to-t from-brow500 via-brow900 to-brow900 flex items-center justify-center flex-col gap-10 text-center pt-10 pb-1 px-4 pb-10">
        <p className="text-yellow200 text-[22px] md:text-[30px] font-extrabold leading-[30px] max-w-[920px] w-full ">
          Por que criei esse curso?
        </p>

        <p className="text-yellow200 font-poppins text-[18px] md:text-[20px] max-w-[1100px] w-full font-semibold leading-[30px]">
          Para mim, Marrara Bortoloti, a confeitaria é muito mais do que um
          ofício; é uma expressão de amor, criatividade e transformação. A razão
          pela qual eu escolhi compartilhar meus conhecimentos através do curso
          “Páscoa de Ouro” vai além da simples transmissão de técnicas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[20px] gap-y-14">
          <div className="w-full md:max-w-[350px] space-y-3">
            <Image
              alt=""
              src={whydidi01}
              className="max-w-[280px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-yellow200 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              Compartilhando Paixão:
            </span>
            <p className="text-white font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Acredito firmemente que cada ovo de Páscoa que criamos é uma peça
              de arte, uma representação da nossa paixão. Ao ensinar, estou
              compartilhando essa paixão, inspirando outros a encontrar alegria
              e satisfação na arte da confeitaria.
            </p>
          </div>

          <div className="w-full md:max-w-[350px] space-y-3">
            <Image
              alt=""
              src={whydidi02}
              className="max-w-[280px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-yellow200 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              Empoderamento através do Conhecimento:
            </span>
            <p className="text-white font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Minha jornada começou com poucos recursos, mas muita determinação.
              Ao ensinar as habilidades e técnicas que aprendi, meu objetivo é
              empoderar outras pessoas, especialmente aquelas que sonham em
              iniciar seus próprios negócios, mas talvez não saibam por onde
              começar.
            </p>
          </div>

          <div className="w-full md:max-w-[350px] space-y-3">
            <Image
              alt=""
              src={whydidi03}
              className="max-w-[280px] max-h-[260px] w-full h-full md:max-w-[260px] md:max-h-[260px] rounded-xl object-cover m-auto"
            />
            <span className="text-yellow200 font-poppins text-[20px] md:text-[18px] font-semibold leading-[30px] mb-2 block">
              Criando Oportunidades
            </span>
            <p className="text-white font-poppins text-[16px] md:text-[16px] font-semibold leading-[30px]">
              Cada aluno que se capacita com o curso “Páscoa de Ouro” tem a
              chance de transformar sua vida. Seja como uma fonte de renda extra
              ou como um caminho para um novo empreendimento, os conhecimentos
              adquiridos abrem portas para oportunidades infinitas.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow200 flex items-center justify-center flex-col text-center py-8 px-4 space-y-8">
        <p className="text-brow900 text-[25px] md:text-[30px] font-bold leading-[35px] max-w-[720px] w-full font-poppins">
          OFERTA ESPECIAL POR TEMPO LIMITADO!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 md:mt-10 max-w-[1198px]">
          <div className="bg-[#790A0A] rounded-lg p-4 flex flex-col items-center justify-center gap-4">
            <Image
              alt=""
              src={logo}
              className="max-w-[130px] max-h-[130px] h-full w-full m-auto"
            />

            <div className="flex flex-col items-center justify-center gap-4 ">
              <p className="text-yellow200 font-extrabold text-[30px]">
                ACESSO POR 1 ANO
              </p>

              <p className="text-white text-[20px] font-bold">
                Com mais de 60% de desconto!
              </p>

              <p className="text-yellow200 font-extrabold text-[30px]">
                DE <span className="line-through"> R$ 497,00 </span> POR APENAS
                12x R$ 19,19
              </p>

              <p className="text-white text-[20px] font-bold">
                OU R$ 197,00 À VISTA
              </p>

              <Link
                href={"#"}
                className="bg-[#FF7600] text-white rounded-3xl p-4 font-poppins text-[20px] md:text-[20px] font-extrabold leading-[30px]"
              >
                TOQUE AQUI PARA SE INSCREVER NO MÉTODO PÁSCOA DE OURO
              </Link>
            </div>
          </div>

          <div className="bg-[#790A0A] rounded-lg p-8 ">
            <Image
              alt=""
              src={logo}
              className="max-w-[130px] max-h-[130px] h-full w-full m-auto"
            />

            <div className="flex flex-col items-center justify-center gap-4 ">
              <p className="text-yellow200 font-extrabold text-[30px]">
                ACESSO POR 1 ANO
              </p>

              <p className="text-white text-[20px] font-bold">
                Com mais de 60% de desconto!
              </p>

              <p className="text-yellow200 font-extrabold text-[30px]">
                DE <span className="line-through"> R$ 497,00 </span> POR APENAS
                12x R$ 19,19
              </p>

              <p className="text-white text-[20px] font-bold">
                OU R$ 197,00 À VISTA
              </p>

              <Link
                href={"#"}
                className="bg-[#FF7600] text-white rounded-3xl p-4 font-poppins text-[20px] md:text-[20px] font-extrabold leading-[30px]"
              >
                TOQUE AQUI PARA SE INSCREVER NO MÉTODO PÁSCOA DE OURO
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-t from-brow500 via-brow900 to-brow900 flex items-center justify-center flex-col text-center py-8 px-4">
        <p className="text-yellow200 text-[25px] md:text-[30px] font-bold leading-[35px] max-w-[720px] w-full font-poppins">
          Satisfação Garantida ou Seu Investimento de Volta
        </p>

        <p className="text-white my-10 font-poppins text-[18px] md:text-[20px] max-w-[1100px] w-full font-semibold leading-[30px]">
          Entendemos que tomar a decisão de investir em um curso é importante e
          queremos que você se sinta confiante ao se inscrever no “Páscoa de
          Ouro”. É por isso que oferecemos uma garantia incondicional de
          satisfação de 7 dias.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-10">
          <Image
            alt=""
            src={garantia}
            className="max-w-[22rem] rounded-md w-full m-auto md:max-w-[28rem]"
          />

          <p className="text-yellow200 text-[16px] md:text-[18px] font-semibold leading-[30px] max-w-[520px] w-full block mt-10 font-roboto m-auto">
            Se, por qualquer motivo, você não ficar totalmente satisfeito com o
            curso nos primeiros 7 dias, nós reembolsaremos seu investimento
            integralmente, sem questionamentos. Não há riscos envolvidos.
            <br />
            <br />
            Queremos que você tenha a oportunidade de explorar o conteúdo,
            participar das aulas, e verificar como o curso pode beneficiar você.
            Se, após esse período inicial, você não sentir que o curso atende às
            suas expectativas, basta nos informar e processaremos o reembolso.
          </p>
        </div>

        <Link
          href={"#"}
          className="bg-green500 text-white rounded-3xl p-4 font-poppins text-[20px] md:text-[20px] font-semibold leading-[30px]"
        >
          Quero testar por 7 dias sem riscos!
        </Link>
      </div>

      <div className="bg-yellow200 flex items-center justify-center flex-col text-center py-8 px-4 space-y-8">
        <p className="text-brow900 text-[25px] md:text-[30px] font-bold leading-[35px] max-w-[720px] w-full font-poppins">
          Dúvidas frequentes
        </p>

        <Accordion.Root type="single" className="max-w-[500px]">
          {/* ITEM */}
          <Accordion.Item
            value="1"
            className="datadata-[state=open]:mb-8 mt-[-10px] w-full"
          >
            <Accordion.Header>
              <Accordion.Trigger
                className="flex w-full items-center justify-between gap-10 rounded border bg-yellow200 px-6 py-2 text-start 
                          text-base font-semibold leading-snug text-brow900 data-[state=open]:border-yellow200 data-[state=closed]:border-yellow200 data-[state=open]:text-brow500"
              >
                Quanto tempo de acesso ao curso eu terei?
                <div className="p-3">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 7.96812L0 1.96812L1.4 0.568115L6 5.16812L10.6 0.568115L12 1.96812L6 7.96812Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="inline-flex w-full items-center text-start justify-start gap-2.5 rounded-bl rounded-br bg-transparent data-[state=open]:p-6">
              Você terá acesso vitalício ao curso “Páscoa de Ouro”. Isso
              significa que você pode aprender no seu próprio ritmo, revisitar
              as aulas quantas vezes desejar e acessar o conteúdo sempre que
              precisar. O conhecimento é seu para a vida toda.
            </Accordion.Content>
          </Accordion.Item>

          {/* ITEM */}
          <Accordion.Item
            value="2"
            className="datadata-[state=open]:mb-8 mt-[-10px] w-full"
          >
            <Accordion.Header>
              <Accordion.Trigger
                className="flex w-full items-center justify-between gap-10 rounded border bg-yellow200 px-6 py-2 text-start 
                          text-base font-semibold leading-snug text-brow900 data-[state=open]:border-yellow200 data-[state=closed]:border-yellow200 data-[state=open]:text-brow500"
              >
                Preciso de experiência prévia em confeitaria?
                <div className="p-3">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 7.96812L0 1.96812L1.4 0.568115L6 5.16812L10.6 0.568115L12 1.96812L6 7.96812Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="inline-flex w-full items-center  text-start justify-start gap-2.5 rounded-bl rounded-br bg-transparent data-[state=open]:p-6">
              Não é necessário ter experiência prévia em confeitaria para
              participar do curso. O conteúdo é elaborado de forma a atender
              tanto iniciantes quanto confeiteiros mais experientes. Você
              começará com os fundamentos e progredirá para técnicas avançadas.
            </Accordion.Content>
          </Accordion.Item>

          {/* ITEM */}
          <Accordion.Item
            value="3"
            className="datadata-[state=open]:mb-8 mt-[-10px] w-full"
          >
            <Accordion.Header>
              <Accordion.Trigger
                className="flex w-full items-center justify-between gap-10 rounded border bg-yellow200 px-6 py-2 text-start 
                          text-base font-semibold leading-snug text-brow900 data-[state=open]:border-yellow200 data-[state=closed]:border-yellow200 data-[state=open]:text-brow500"
              >
                Os ingredientes são difíceis de encontrar?
                <div className="p-3">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 7.96812L0 1.96812L1.4 0.568115L6 5.16812L10.6 0.568115L12 1.96812L6 7.96812Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="inline-flex w-full items-center  text-start justify-start gap-2.5 rounded-bl rounded-br bg-transparent data-[state=open]:p-6">
              As receitas e técnicas ensinadas no curso utilizam ingredientes
              comuns e acessíveis, que podem ser encontrados em supermercados
              convencionais. Não se preocupe, você não precisará caçar
              ingredientes raros.
            </Accordion.Content>
          </Accordion.Item>

          {/* ITEM */}
          <Accordion.Item
            value="4"
            className="datadata-[state=open]:mb-8 mt-[-10px] w-full"
          >
            <Accordion.Header>
              <Accordion.Trigger
                className="flex w-full items-center justify-between gap-10 rounded border bg-yellow200 px-6 py-2 text-start 
                          text-base font-semibold leading-snug text-brow900 data-[state=open]:border-yellow200 data-[state=closed]:border-yellow200 data-[state=open]:text-brow500"
              >
                Como o curso me ajuda a ganhar dinheiro?
                <div className="p-3">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 7.96812L0 1.96812L1.4 0.568115L6 5.16812L10.6 0.568115L12 1.96812L6 7.96812Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="inline-flex w-full items-center  text-start justify-start gap-2.5 rounded-bl rounded-br bg-transparent data-[state=open]:p-6">
              O curso “Páscoa de Ouro” vai além da confeitaria, abordando
              aspectos de precificação, marketing e vendas. Você aprenderá a
              transformar seu conhecimento em um negócio lucrativo, atraindo
              clientes e maximizando seus lucros.
            </Accordion.Content>
          </Accordion.Item>

          {/* ITEM */}
          <Accordion.Item
            value="5"
            className="datadata-[state=open]:mb-8 mt-[-10px] w-full"
          >
            <Accordion.Header>
              <Accordion.Trigger
                className="flex w-full items-center justify-between gap-10 rounded border bg-yellow200 px-6 py-2 text-start 
                          text-base font-semibold leading-snug text-brow900 data-[state=open]:border-yellow200 data-[state=closed]:border-yellow200 data-[state=open]:text-brow500"
              >
                Qual é a garantia de que o curso funcionará para mim?
                <div className="p-3">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 7.96812L0 1.96812L1.4 0.568115L6 5.16812L10.6 0.568115L12 1.96812L6 7.96812Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="inline-flex w-full items-center  text-start justify-start gap-2.5 rounded-bl rounded-br bg-transparent data-[state=open]:p-6">
              Estamos tão confiantes na qualidade do curso que oferecemos uma
              garantia de satisfação. Se, por algum motivo, você não ficar
              satisfeito com o curso dentro dos primeiros 7 dias, nós
              devolveremos seu investimento integralmente, sem questionamentos.
            </Accordion.Content>
          </Accordion.Item>

          {/* ITEM */}
          <Accordion.Item
            value="6"
            className="datadata-[state=open]:mb-8 mt-[-10px] w-full"
          >
            <Accordion.Header>
              <Accordion.Trigger
                className="flex w-full items-center justify-between gap-10 rounded border bg-yellow200 px-6 py-2 text-start 
                          text-base font-semibold leading-snug text-brow900 data-[state=open]:border-yellow200 data-[state=closed]:border-yellow200 data-[state=open]:text-brow500"
              >
                Como posso tirar dúvidas durante o curso?
                <div className="p-3">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 7.96812L0 1.96812L1.4 0.568115L6 5.16812L10.6 0.568115L12 1.96812L6 7.96812Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="inline-flex w-full items-center  text-start justify-start gap-2.5 rounded-bl rounded-br bg-transparent data-[state=open]:p-6">
              Durante o curso, você terá suporte completo. Você pode fazer
              perguntas diretamente nas aulas ou utilizar nossos canais de
              suporte para obter respostas às suas dúvidas. Estamos aqui para
              ajudá-lo a ter sucesso.
            </Accordion.Content>
          </Accordion.Item>

          {/* ITEM */}
          <Accordion.Item
            value="7"
            className="datadata-[state=open]:mb-8 mt-[-10px] w-full"
          >
            <Accordion.Header>
              <Accordion.Trigger
                className="flex w-full items-center justify-between gap-10 rounded border bg-yellow200 px-6 py-2 text-start 
                          text-base font-semibold leading-snug text-brow900 data-[state=open]:border-yellow200 data-[state=closed]:border-yellow200 data-[state=open]:text-brow500"
              >
                Quanto tempo leva para concluir o curso?
                <div className="p-3">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 7.96812L0 1.96812L1.4 0.568115L6 5.16812L10.6 0.568115L12 1.96812L6 7.96812Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="inline-flex w-full items-center  text-start justify-start gap-2.5 rounded-bl rounded-br bg-transparent data-[state=open]:p-6">
              O curso “Páscoa de Ouro” é flexível e pode ser concluído no seu
              próprio ritmo. O tempo de conclusão varia de pessoa para pessoa,
              mas a maioria dos alunos pode concluir o curso em algumas semanas,
              dedicando algumas horas por semana.
            </Accordion.Content>
          </Accordion.Item>

          {/* ITEM */}
          <Accordion.Item
            value="8"
            className="datadata-[state=open]:mb-8 mt-[-10px] w-full"
          >
            <Accordion.Header>
              <Accordion.Trigger
                className="flex w-full items-center justify-between gap-10 rounded border bg-yellow200 px-6 py-2 text-start 
                          text-base font-semibold leading-snug text-brow900 data-[state=open]:border-yellow200 data-[state=closed]:border-yellow200 data-[state=open]:text-brow500"
              >
                O curso é apenas para ovos de Páscoa?
                <div className="p-3">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 7.96812L0 1.96812L1.4 0.568115L6 5.16812L10.6 0.568115L12 1.96812L6 7.96812Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="inline-flex w-full items-center  text-start justify-start gap-2.5 rounded-bl rounded-br bg-transparent data-[state=open]:p-6">
              Embora o curso se concentre em ovos de Páscoa, as habilidades e
              técnicas que você aprenderá são transferíveis para outras áreas da
              confeitaria. Você poderá aplicar seu conhecimento em uma variedade
              de produtos doces, expandindo suas opções de negócios.
            </Accordion.Content>
          </Accordion.Item>

          {/* ITEM */}
          <Accordion.Item
            value="9"
            className="datadata-[state=open]:mb-8 mt-[-10px] w-full"
          >
            <Accordion.Header>
              <Accordion.Trigger
                className="flex w-full items-center justify-between gap-10 rounded border bg-yellow200 px-6 py-2 text-start 
                          text-base font-semibold leading-snug text-brow900 data-[state=open]:border-yellow200 data-[state=closed]:border-yellow200 data-[state=open]:text-brow500"
              >
                Como posso ter certeza de que este curso é para mim?
                <div className="p-3">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 7.96812L0 1.96812L1.4 0.568115L6 5.16812L10.6 0.568115L12 1.96812L6 7.96812Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="inline-flex w-full items-center  text-start justify-start gap-2.5 rounded-bl rounded-br bg-transparent data-[state=open]:p-6">
              O curso “Páscoa de Ouro” é para todos que desejam aprender
              confeitaria de qualidade e transformar essa habilidade em um
              negócio lucrativo. Se você tem paixão pela confeitaria e deseja
              alcançar o sucesso na Páscoa, este curso é definitivamente para
              você. Lembre-se, você tem a garantia de satisfação de 7 dias para
              experimentar sem riscos.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
};

export default PascoaDeOuro;
