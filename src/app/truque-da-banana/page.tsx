"use client";
import Image from "next/image";
import Link from "next/link";
import { Eye, SpeakerSimpleHigh } from "phosphor-react";
import React, { useEffect, useState } from "react";

import avatar01 from "@/assets/avatar-01.png";
import comment01 from "@/assets/coment-01.png";
import avatar02 from "@/assets/avatar-2.png";
import comment02 from "@/assets/comment-2.png";
import avatar03 from "@/assets/avatar-03.jpeg";
import avatar04 from "@/assets/avatar-04.jpg";
import comment04 from "@/assets/comment-4.jpg";

import avatar05 from "@/assets/avatar05.jpg";
import avatar06 from "@/assets/avatar06.jpg";
import avatar07 from "@/assets/avatar07.jpg";

import security from "@/assets/security.png";

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
        <div className="space-y-16">
              <div className="bg-[#FF0000] text-center px-4 py-4 text-white font-semibold text-base md:text-lg">
                Devido à grande procura, o vídeo ficará disponível até o dia:{" "}
                {dataFormatada}
            </div>

            <div className="flex flex-col items-center justify-center gap-6 px-4">
                <p className="flex flex-col md:flex-row text-center items-center justify-center gap-4 text-lg font-bold">
                    <div className="relative">
                        <SpeakerSimpleHigh
                            size={32}
                            className="animate-ping text-blue-800"
                        />
                        <SpeakerSimpleHigh
                            size={32}
                            weight="fill"
                            className="text-blue-800 absolute inset-0"
                        />
                    </div>
                    Veja o que as pessoas estão dizendo sobre o novo truque!
                </p>
                <div className="bg-gray-400 w-full max-w-[60rem] h-[190px] md:h-[35rem] rounded flex items-center justify-center">
                    Vídeo
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 ">
                    <Eye size={32} className="mr-3" />
                    <p className="text-lg font-bold text-center">
                        {contador} pessoas
                        <span className="text-yellow-600">
                            {" "}
                            assistindo
                        </span>{" "}
                        nesse momento
                    </p>
                </div>
            </div>

            <div>
                <div className="bg-yellow-500 h-7"></div>
                <div className="bg-[#001501] text-white h-[17rem] flex items-center justify-center flex-col px-4">
                    <p className="text-xl md:text-2xl font-bold max-w-[54rem] text-center leading-7 md:leading-9">
                        Possui apenas 4 vagas para fazer a consulta com a
                        Andreia. Clique no botão abaixo para garantir a sua!
                    </p>

                    <Link
                        href={"#"}
                        className="max-w-[28rem] bg-green-500 block w-full rounded-full p-4 text-center font-bold animate-bounce mt-10  "
                    >
                        EU QUERO
                    </Link>
                </div>
            </div>

            <Image alt="" src={security} className="mx-auto px-4" />

            <div className="max-w-[60rem] m-auto px-4">
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <div className="flex gap-4">
                        <Image
                            alt=""
                            src={avatar01}
                            className="w-14 h-14 object-cover"
                        />
                        <div className="flex flex-col items-start gap-2 justify-start">
                            <p className="text-gray-800 font-semibold">
                                Daniele López{" "}
                            </p>
                            <p className="text-gray-600">
                                Ainda bem que eu vi esse vídeo até o final e fiz
                                a consulta da Andreia.... Feliiiz demais!!!
                                Obrigada, achava que o truque n ia funcionar pq
                                já tinha feito de td pra emagrecer, mas msmo
                                assim quis tentar e olha agora, é meu primeiro
                                mês e já pedi 8 quilos😍😍😍
                            </p>
                            <Image alt="" src={comment01} />
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <div className="flex gap-4">
                        <Image
                            alt=""
                            src={avatar02}
                            className="w-14 h-14 object-cover"
                        />
                        <div className="flex flex-col items-start gap-2 justify-start">
                            <p className="text-gray-800 font-semibold">
                                Julia García{" "}
                            </p>
                            <p className="text-gray-600">
                                Meu marido me disse que eu pareço outra e que
                                estou ainda mais bonita!!! Amando esse
                                desafio!!! Obrigada pelo Truque 😀
                            </p>
                            <Image alt="" src={comment02} />
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <div className="flex gap-4">
                        <Image
                            alt=""
                            src={avatar03}
                            className="w-14 h-14 object-cover"
                        />
                        <div className="flex flex-col items-start gap-2 justify-start">
                            <p className="text-gray-800 font-semibold">
                                Josefa Martin{" "}
                            </p>
                            <p className="text-gray-600">
                                Tava querendo muito emagrecer, mas vc sabe né?
                                Nunca quis fazer academia ou cortas minhas
                                comidas preferidas!!! Então não sabia o que
                                fazer… Usei o método todo dia pela manhã a mais
                                de uma semana e já perdi 4 quilos!!! 🙂
                            </p>
                            {/* <Image alt="" src={comment01} /> */}
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <div className="flex gap-4">
                        <Image
                            alt=""
                            src={avatar04}
                            className="w-14 h-14 object-cover"
                        />
                        <div className="flex flex-col items-start gap-2 justify-start">
                            <p className="text-gray-800 font-semibold">
                                Cristina Ruiz{" "}
                            </p>
                            <p className="text-gray-600">
                                Eu realmente precisava dessa Consulta, achei o
                                botão pra aumentar minha autoestima 😀 não sabia
                                mais o que fazer, no começo achei que n ia ter
                                mais jeito, mas deu certo!!! estou SUPER FELIZ!,
                                assistam até o final que libera a consulta
                                gratuita pra vocs!!!!
                            </p>
                            <Image alt="" src={comment04} />
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <div className="flex gap-4">
                        <Image
                            alt=""
                            src={avatar05}
                            className="w-14 h-14 object-cover"
                        />
                        <div className="flex flex-col items-start gap-2 justify-start">
                            <p className="text-gray-800 font-semibold">
                                Maria Carolina{" "}
                            </p>
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
                                            Eu também já tinha tentado de tudo,
                                            estava desanimada. O truque foi
                                            minha última tentativa e deu certo
                                            demais. Pode testar vc vai ver como
                                            funciona.​
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
                                            Maria eu já fiz de tudo também.
                                            Depois que Fiz o truque e descobri o
                                            que fazer e hoje já perdi 9 quilos.​
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
                    AVISO LEGAL: É importante consultar seu médico antes de
                    iniciar qualquer atividade física ou plano nutricional. O
                    conteúdo disponível nesse site não deve ser interpretado
                    como uma promessa ou garantia de resultados. Os resultados
                    variam para cada pessoa. Seu nível de sucesso em alcançar os
                    resultados divulgados com o uso dessas informações depende
                    da sua dedicação, conhecimento e disciplina em seguir todas
                    as sugestões. Como esses fatores diferem entre cada
                    indivíduo, não podemos garantir o sucesso ou o nível de
                    resultado, nem somos responsáveis por qualquer uma de suas
                    ações. Todas e quaisquer declarações prospectivas contidas
                    neste site destinam-se a expressar a nossa opinião sobre os
                    resultados potenciais que algumas pessoas podem alcançar.
                    Este produto não substitui o parecer profissional. Sempre
                    consulte um profissional especializado para tratar de
                    assuntos relativos à saúde. O código de defesa consumidor
                    (Art. 49) garante 7 dias para solicitar reembolso em caso de
                    insatisfação com o produto.
                </p>
                <p className="text-center text-sm mt-4 block text-gray-700 max-w-[75rem] m-auto font-bold">
                    Todos os direitos reservados © 2022
                </p>
            </footer>
        </div>
    );
};

export default TruqueBanana;
