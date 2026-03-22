const produtosAmazon = [
    { id: 'vela_mar', titulo: 'Vela Aromática Mar', icone: '🕯️', texto: 'Para purificar o ambiente e acalmar os pensamentos.', link: 'https://amzn.to/4sn48Ln' },
    { id: 'livro_meditacao', titulo: 'O método de meditação para quem não gosta de meditar', icone: '🧘‍♀️', texto: 'Encontre o silêncio de forma leve e descomplicada.', link: 'https://amzn.to/40JmRF1' },
    { id: 'kit_chakras', titulo: 'Kit 7 Pedras Chakras 100% Naturais', icone: '✨', texto: 'Para alinhar e proteger sua energia sutil.', link: 'https://amzn.to/4bvBIYk' },
    { id: 'praticando_agora', titulo: 'Praticando o Poder do Agora', icone: '📖', texto: 'Exercícios vivos para ancorar a mente no presente.', link: 'https://amzn.to/4t6zPZE' },
    { id: 'poder_agora', titulo: 'O Poder do Agora - Eckhart Tolle', icone: '📚', texto: 'Desperte a serenidade libertando-se da mente.', link: 'https://amzn.to/4bZIzL6' },
    { id: 'camisa_roda', titulo: 'Camiseta O Tarot: A Roda da Fortuna', icone: '👕', texto: 'Vista a energia de movimento e sorte a seu favor.', link: 'https://amzn.to/4uOYTWE' },
    { id: 'camisa_sacerdotisa', titulo: 'Camiseta O Tarot: A Sacerdotisa', icone: '👕', texto: 'Conecte-se com sua intuição e sabedoria interior.', link: 'https://amzn.to/4srDGjJ' },
    { id: 'camisa_mundo', titulo: 'Camiseta O Tarot: O Mundo', icone: '👕', texto: 'Celebre a conclusão e o sucesso em seus ciclos.', link: 'https://amzn.to/4lKHlH3' },
    { id: 'chaveiro_gato', titulo: 'Chaveiro Wicca Gato Preto Estrelas e Lua', icone: '🐱', texto: 'Um talismã de proteção, mistério e confiança.', link: 'https://amzn.to/4bAg85a' }
];

const mapeamentoProdutos = {
    'A Roda da Fortunajpg.jpg': 'camisa_roda',
    'A Sacerdotisa.jpg': 'camisa_sacerdotisa',
    'O Mundo.jpg': 'camisa_mundo',
    'Rainha de Paus.jpg': 'chaveiro_gato',
    'Temperança.jpg': 'vela_mar',
    'Cavaleiro de Espadas.jpg': 'livro_meditacao',
    'O Dependurado.jpg': 'praticando_agora',
    'Pajem de Espadas.jpg': 'livro_meditacao',
    'A Lua.jpg': 'vela_mar',
    'Pajem  de Paus.jpg': 'kit_chakras',
    'A Imperatriz.jpg': 'vela_mar',
    'O Louco.jpg': 'kit_chakras',
    'Os Enamoradosjpg.jpg': 'poder_agora',
    'O Sol.jpg': 'poder_agora',
    'O Julgamento.jpg': 'praticando_agora',
    'Rainha de Copas.jpg': 'poder_agora',
    'A Torre.jpg': 'livro_meditacao',
    'O Diabo.jpg': 'poder_agora',
    'Rainha de Ouros.jpg': 'kit_chakras',
    'Cavaleiro de Copas.jpg': 'vela_mar',
    'Cavaleiro de Paus.jpg': 'praticando_agora',
    'Rainha de Espadas.jpg': 'livro_meditacao',
    'Rei de Copas.jpg': 'kit_chakras',
    'O Mago.jpg': 'vela_mar',
    'Pajem de Copas.jpg': 'kit_chakras',
    'Pajem de Ouros.jpg': 'praticando_agora',
    'O Hierofante.jpg': 'kit_chakras',
    'A Estrela.jpg': 'poder_agora'
};

const dadosTarot = {
    'Ansiedade': {
        imagem: 'Temperança.jpg',
        texto: "Você pode estar sentindo que precisa resolver tudo agora, ou que algo terrível vai acontecer se você soltar o controle. A Temperança convida você a encontrar o 'caminho do meio': nem a apatia, nem o desespero. Nada na natureza floresce na pressa. Ninguém tem o controle de tudo.\nVocê não precisa ter todas as respostas hoje; você só precisa encontrar o equilíbrio entre o emocional e o racional para atravessar o dia de hoje.\nO que você está tentando apressar ou forçar que, na verdade, precisa de tempo e paciência para fluir?"
    },
    'Apatia': {
        imagem: 'A Estrela.jpg',
        texto: "A apatia pode parecer um lugar seguro, onde nada dói... mas também onde nada floresce. \nA Estrela surge no céu da sua noite escura não para forçar uma alegria que você não sente, mas para lembrá-la de que a cura é um processo contínuo e silencioso. A Estrela veio te revigorar com a luz das forças superiores, convidando-a gentilmente para se reconectar com a sua fé na vida — não através de grandes gestos, mas através da beleza sutil. A vida está sempre se renovando e a luz ainda está aí, esperando seus olhos se acostumarem com ela novamente.\nQual é a pequena coisa — por menor que seja, como uma música, um sabor ou um lugar — que ainda é capaz de despertar sua curiosidade ou apreço hoje?"
    },
    'Baixa autoestima': {
        imagem: 'Rainha de Ouros.jpg',
        texto: "Muitas vezes, a baixa autoestima é apenas a sua mente ignorando a sua história e o seu valor. Você pode estar sentindo que não sabe o suficiente, que não é interessante ou que, a qualquer momento, todos vão descobrir que você não é capaz. \nA Rainha de Ouros surge sentada firmemente em seu trono, com a segurança de quem sabe o que faz, para te pedir que olhe para os fatos, não para os medos. Você tem recursos internos, experiências e uma visão única que são valiosos. Saia da teoria da dúvida e apoie-se na realidade do que você já realizou. Habite seu corpo com carinho, você merece cuidado.\nSe você olhasse para a sua trajetória como se fosse a de outra pessoa, quais são as 3 conquistas ou habilidades que você admiraria nela?"
    },
    'Bloqueio criativo': {
        imagem: 'A Imperatriz.jpg',
        texto: "A Imperatriz surge para lembrá-la de que a criatividade não é uma máquina que se liga com um botão, mas um jardim que precisa respeitar seus ciclos. Se as ideias não vêm, pare de forçar a colheita. A Imperatriz cria através do prazer e da abundância. Vá fazer algo que não tenha utilidade alguma, apenas beleza: ouça uma música, caminhe, dance, contemple a natureza, coma algo gostoso... com a mente presente no seu corpo, nos seus sentidos e no seu prazer. Quando você se enche de vida, a arte transborda naturalmente. A ideia já está aí, ela só precisa de um solo fértil para nascer.\n\nO que você pode fazer hoje para se divertir ou relaxar sem nenhuma intenção de ser produtiva?"
    },
    'Cansaço': {
        imagem: 'O Mundo.jpg',
        texto: "Você está cansada não porque é fraca, mas porque tem carregado uma carga imensa por muito tempo. O Mundo vem do final da jornada dos Arcanos Maiores para celebrar: o ciclo se completou. Neste momento, você pode estar sentindo que, se parar, tudo vai desmoronar. Mas agora não é hora de se esforçar mais um pouco, nem de começar nada novo.\nOlhe para a sua jornada com satisfação. O mundo continua a girar sem que você precise empurrá-lo hoje. \nO que você não quer soltar?"
    },
    'Ciúme': {
        imagem: 'Cavaleiro de Copas.jpg',
        texto: "O ciúme é, muitas vezes, a sua imaginação criando a partir das suas próprias inseguranças. \nO Cavaleiro de Copas, um mestre do sentir, aparece para te pedir que olhe para a sua taça: ela está cheia de medo ou de amor? \nO ciúme que você sente é um reflexo da realidade ou um reflexo de uma ferida antiga que tem medo de se abrir novamente? \nAcolha a sua vulnerabilidade, mas não acredite em todos os filmes que a sua insegurança projeta."
    },
    'Confusão': {
        imagem: 'A Lua.jpg',
        texto: "A Lua ilumina as suas emoções para você sair do racional. A névoa no caminho encobre a realidade, mas lutar contra ela só traz ansiedade. \nÀs vezes, a resposta não vem do pensamento, mas de um sonho, de um sentimento ou de um insight em um momento silencioso. A neblina eventualmente se dissipa, mas até lá, confie no seu instinto para dar apenas o próximo passo.\nSe você escutasse a sua intuição (não o seu desejo), o que ela estaria te dizendo?"
    },
    'Culpa': {
        imagem: 'O Julgamento.jpg',
        texto: "O Julgamento toca sua trombeta para te dizer: a sentença acabou. O Julgamento convida você a olhar para o seu 'erro' não como uma culpa eterna, mas como uma lição aprendida. \nSe você já compreendeu onde errou e mudou sua atitude, continuar sofrendo não é nobreza, é estagnação. Repare o que puder ser reparado, aprenda o que deve ser aprendido e perdoe a sua versão antiga que não sabia o que você sabe hoje. Resgate sua energia essencial e desperte para um tempo de mais leveza.\nSe uma amiga querida tivesse cometido o mesmo erro que vocêe estivesse verdadeiramente arrependida, você a condenaria para sempre ou lhe ofereceria o perdão?"
    },
    'Dependência emocional': {
        imagem: 'Rainha de Espadas.jpg',
        texto: "A Rainha de Espadas veio te trazer clareza e racionalidade e te pergunta: O que te impede de reconhecer sua autossuficiência?\nAmar não significa desaparecer atrás do outro e estabelecer limites é um ato de amor próprio. É hora de usar a sua voz, de dizer 'não' ao que lhe fere e se desprender da aprovação de terceiros. Cuide-se! Você pode e você merece.\nA complexidade que envolve esse questionamento pode precisar de amparo psicológico."
    },
    'Desânimo': {
        imagem: 'O Louco.jpg',
        texto: "Para quem está desanimada, a vida parece um roteiro repetitivo e cansativo. \nO Louco aparece para dizer que o roteiro pode ser rasgado a qualquer momento. Ele é a energia da curiosidade que traz ânimo e te convida a recuperar o olhar de principiante. Permita-se fazer algo pequeno, bobo ou inédito hoje, sem esperar resultado algum. Solte a bagagem pesada do 'tem que dar certo' e abrace a liberdade do 'vamos ver no que dá'.\nSe alivie do peso do passado. Continue... ou recomece. Confie no seu poder de renovação e reenergização. Esteja aberta para surpresas. Como será essa aventura?"
    },
    'Desconexão espiritual': {
        imagem: 'O Hierofante.jpg',
        texto: "Se você está desconectada, talvez esteja procurando Deus (o Mestre Interior, ou o Universo) fora, no barulho, enquanto o Hierofante aponta para o templo que existe dentro.\nO Hierofante convida você a parar de procurar fora e começar a escutar dentro. Você é o seu próprio sacerdote. As chaves para religar essa conexão já estão aos seus pés.\nA sabedoria que você busca não desapareceu; ela apenas está esperando que você se sente em silêncio para ouvi-la novamente.\nExplore práticas espirituais: meditar, contemplar a natureza, praticar ioga... E observe quais delas mais desperta e alimenta a sua sabedoria espiritual.\nQual é a Sua Verdade?"
    },
    'Desespero': {
        imagem: 'O Diabo.jpg',
        texto: "O Diabo aparece quando nos sentimos acorrentados pelas circunstâncias ou pelos nossos próprios medos. Mas olhe com atenção para a simbologia: as correntes estão frouxas. Ele traz uma mensagem radical de libertação: o medo te impede de agir. \nEmbora a dor seja real, a impotência é muitas vezes uma mentira que a nossa sombra nos conta. Nós temos mais poder de escolha e de ação do que conseguimos ver no momento da crise. Lembre-se de que você não é a sua sombra; você é a consciência que observa a sombra.\nQual é o pensamento específico que está te convencendo de que você não tem escolha agora? Entenda seus medos e recupere sua paz e seu poder."
    },
    'Dificuldade em se expressar': {
        imagem: 'Pajem de Copas.jpg',
        texto: "Você pode estar sentindo que suas palavras estão presas ou que, se você falar, ninguém vai entender a profundidade do que sente. \nO Pajem de Copas aparece para te dizer que você não precisa ter um discurso pronto, lógico ou maduro agora. Seus sentimentos são preciosos, mesmo que pareçam estranhos ou tímidos. \nA dificuldade de se expressar muitas vezes vem da autocrítica e do medo do julgamento. O Pajem de Copas te convida a aceitar o seu jeito único e sensível de ver o mundo. Não é preciso gritar para ser ouvida; às vezes, um sussurro honesto é o ato de maior coragem.\nSe você tivesse a certeza de que não seria julgada e que sua sensibilidade seria acolhida, o que você diria agora?"
    },
    'Dúvida': {
        imagem: 'Pajem de Espadas.jpg',
        texto: "O Pajem de Espadas aparece no meio da ventania dos teus pensamentos para que você se informe mais. A dúvida pode gerar ansiedade e para sair dessa dinâmica é necessário usar sua capacidade de questionar e analisar. \nO que é que realmente te preocupa? \nO que é fato e o que é suposição? \nQual é a informação específica que te falta para que você possa transformar esta dúvida em uma decisão?"
    },
    'Emoção contida': {
        imagem: 'Rei de Copas.jpg',
        texto: "O Rei de Copas surge com a sua maturidade emocional para te mostrar que você tem carregado um oceano inteiro dentro do peito, com medo de transbordar. A emoção contida, disfarçada de força, pode tornar-se uma pressão insuportável. \nEste Arcano vem para te lembra que a tua sensibilidade não é uma fraqueza que precisa de ser escondida atrás de um muro de compostura. A verdadeira força deste Rei não está em represar a água, mas em deixá-la correr. Não precisa ser a rocha inabalável o tempo todo. É seguro pousar a taça.\nQual é o seu receio em mostrar verdadeiramente o que está sentindo agora?"
    },
    'Estresse': {
        imagem: 'O Carro.jpg',
        texto: "Às vezes, o estresse não é a velocidade da vida, é a nossa resistência em fluir com ela, é tentar impor ordem ao caos à força. \nO Carro surge em alta velocidade para te dizer: você está no comando, mas não precisa esmagar o volante. O estresse excessivo vem da crença de que você precisa controlar cada pedra no caminho. O Carro reconhece o seu esforço heroico para manter tudo funcionando e convida você a focar apenas na direção, não nos obstáculos. \nA vida tem o seu próprio motor. Você pode aliviar a força das mãos e ainda assim chegar onde precisa, direcionando sua energia com foco.\nO que você poderia deixar fluir um pouco mais?"
    },
    'Excesso de racionalidade': {
        imagem: 'A Sacerdotisa.jpg',
        texto: "A Sacerdotisa surge no silêncio do templo para te dizer: pare de tentar entender e comece a sentir. O excesso de racionalidade é muitas vezes um escudo para não lidar com a profundidade das emoções. \nA Sacerdotisa convida você a confiar no que não pode ser explicado. Você quer uma resposta clara, mas a vida agora te oferece um mistério. \nSilencie a mente. A sabedoria mora no mistério e na escuta interior.\nQual foi a sensação imediata que você teve sobre isso?"
    },
    'Falta de confiança': {
        imagem: 'Rainha de Paus.jpg',
        texto: "A Rainha de Paus chega com sua energia ígnea e vibrante para te dizer que a confiança não é a ausência de medo, é a ousadia de ser quem se é. E que o magnetismo nasce quando aceitamos quem somos, sem filtros. \nA Rainha não espera ser perfeita para aparecer; ela aparece e a confiança surge no processo. Ela convida você a se reconectar com a sua chama interior. Você tem uma energia única, uma voz que merece ser ouvida e uma presença que importa. Endireite a coluna, respire fundo e lembre-se: você não precisa da aprovação de ninguém para brilhar, apenas da sua própria permissão.\nSe você não tivesse medo de parecer 'demais' ou de incomodar, o que você faria agora?"
    },
    'Falta de entusiasmo': {
        imagem: 'Pajem  de Paus.jpg',
        texto: "A falta de entusiasmo muitas vezes é o fogo interno abafado pela rotina ou pelo cansaço. \nO Pajem de Paus segura o bastão e observa as folhas brotando com surpresa. Lembrando que a inspiração é um convite que você aceita, não algo que você espera passivamente. Ele ensina que você não precisa de um grande propósito para começar o dia; você só precisa de um pequeno interesse que desperte seu olhar. Ele convida você a ser um eterno aprendiz da própria vida.\nQual é a pequena novidade que você tem evitado tentar, mas que te traria mais brilho e movimento?"
    },
    'Falta de propósito': {
        imagem: 'Pajem de Ouros.jpg',
        texto: "A falta de propósito costuma ser sentida como um vazio ou uma desconexão com o que se faz, você pode estar sentindo que a sua vida precisa de um sentido maior. \nO Pajem de Ouros aparece segurando uma única moeda com as duas mãos, olhando para ela com total atenção. Ele não está preocupado com o castelo ou com a colheita final; ele está fascinado pelo potencial daquela semente. Ele ensina que o propósito nasce do ato de dedicar atenção e cuidado a algo real, por menor que seja. Ele retira a pressão de ter uma \"missão de vida\" gigante e convida você a olhar para o que está bem à sua frente, nas suas mãos. O sentido da vida não é encontrado; ele é construído, tijolo por tijolo, semente por semente.\n O que aconteceria se, em vez de procurar uma grande missão, você se dedicasse a cultivar um pequeno interesse, um novo aprendizado ou um cuidado prático?"
    },
    'Frustração': {
        imagem: 'A Torre.jpg',
        texto: "A frustração é a resistência em aceitar que uma estrutura desmoronou. \nA Torre aparece para mostrar que esse colapso, embora desconfortável, é um ato de libertação. O raio que atinge a torre é a verdade cortando a ilusão. Às vezes, o 'erro' ou o 'fracasso' é apenas o espaço sendo aberto para que algo muito mais autêntico possa ser construído. \nDeixe os escombros caírem; o que é verdadeiro em você permanecerá de pé.\nO que você estava tentando sustentar com tanto esforço que, agora que caiu, pode finalmente abrir caminho para um recomeço?"
    },
    'Idealização': {
        imagem: 'Cavaleiro de Paus.jpg',
        texto: "O Cavaleiro de Paus vem com o entusiasmo, mas também o alerta sobre a velocidade com que criamos cenários em nossa mente.\nNeste momento, você pode estar se apaixonando pelo o que você deseja de uma situação (ou de alguém) e ignorando a realidade dela. A idealização é um fogo bonito, mas que queima rápido e pode gerar frustração se a vida real não seguir o roteiro perfeito que você criou.\nVocê está apaixonada pelo que esta situação é agora, ou pelo que você espera que ela se torne no futuro?"
    },
    'Impaciência': {
        imagem: 'O Dependurado.jpg',
        texto: "A impaciência é o desejo de estar no futuro porque o presente parece parado ou insatisfatório. \nO Dependurado te sugere que, já que não dá para andar, você pode mudar o olhar... esse momento de 'estagnação' é, na verdade, uma incubadora de sabedoria. \nEm vez de lutar para se soltar, o que acontece se você simplesmente relaxar e observar a situação por um ângulo diferente? \nA resposta que você busca não está na velocidade, mas na rendição ao agora. \nComo você escolhe investir a energia que está gastando com a impaciência?"
    },
    'Impulsividade': {
        imagem: 'Cavaleiro de Espadas.jpg',
        texto: "O Cavaleiro de Espadas veio pra te dizer que a velocidade só é útil quando se sabe para onde se está indo e que nem tudo o que é rápido é eficaz. \nEle convida você a puxar as rédeas por um instante. Ter a espada na mão é um poder; saber o momento exato de usá-la é sabedoria.\nO que você ganharia se escolhesse esperar apenas dez minutos antes de dar essa resposta ou tomar essa decisão agora?\nEssa pressa que você sente é uma necessidade real da situação ou é apenas uma forma da sua mente tentar escapar de um desconforto?"
    },
    'Insegurança': {
        imagem: 'O Mago.jpg',
        texto: "A insegurança é a crença de que você é insuficiente ou que não possui o que é necessário para enfrentar a vida. \nO Mago surge para espelhar a sua própria capacidade de manifestação. Ele ensina que a insegurança é apenas um esquecimento temporário de quem você é. \nVocê pode estar duvidando da sua capacidade e sentindo que o desafio à sua frente é maior do que as suas forças. Mas O Mago vem te lembrar que você já possui tudo o que precisa. Olhe para a sua história: a criatividade, a emoção, a mente e a ação estão em você. Não espere se sentir pronta para agir; comece a agir e a segurança virá do seu movimento.\nQual é a habilidade ou recurso que você já tem hoje, mas que a sua insegurança está encobrindo?"
    },
    'Instabilidade': {
        imagem: 'O Imperador.jpg',
        texto: "Você pode estar sentindo que o chão sob os seus pés está se movendo e que nada na sua vida parece seguro ou previsível agora.\nO Imperador ensina que a liberdade precisa de uma base segura para existir. E que a segurança não é sorte, é disciplina. Ele lembra que, quando o mundo externo fica caótico, a segurança precisa ser construída de dentro para fora. A instabilidade muitas vezes é a falta de limites claros ou de um plano concreto. \nO Imperador convida você a retomar o controle, é hora de ditar as regras. Organize o seu espaço, defina uma rotina simples ou estabeleça um limite firme. A estrutura não é uma prisão; ela é a base que mantém você de pé.\nQual é o primeiro passo concreto e prático que você pode dar agora para colocar um alicerce firme debaixo dessa situação instável?"
    },
    'Irritação': {
        imagem: 'Rei de Espadas.jpg',
        texto: "Você pode estar sentindo o sangue ferver e a paciência desaparecer diante da estupidez ou da ineficiência ao seu redor. \nA irritação é uma névoa quente que cega, mas o Rei de Espadas surge com o vento frio da razão para dissipar esse calor. Este Arcano convida você a não levar nada para o lado pessoal. \nO Rei não reage; ele decide. Se algo está te irritando, isso é um problema que você pode resolver ou é algo que você precisa ignorar? \nA raiva gasta a sua energia mental. Seja cirúrgica. Fale o que precisa ser dito com clareza, estabeleça o limite necessário e, em seguida, desconecte-se emocionalmente da situação.\nO que nessa situação é um fato real que precisa ser resolvido e o que é apenas a sua mente cansada reagindo com exagero?\nQual limite claro você precisa comunicar agora, sem gritar, para que essa situação pare de invadir a sua paz?"
    },
    'Melancolia': {
        imagem: 'O Eremita.jpg',
        texto: "Diferente da tristeza aguda, que dói, a melancolia é um estado de recolhimento, um \"inverno da alma\". O mundo externo perde a cor e a atenção se volta para dentro.\nO Eremita valida esse movimento, não há nada de errado em se recolher. A melancolia não é um defeito a ser consertado às pressas, mas um convite para visitar o seu próprio mundo interior e encontrar respostas onde ninguém mais pode ir: dentro de si mesmo. \nEle lembra que você não precisa estar radiante e social o tempo todo. Não tente forçar uma alegria que não existe agora. Em vez disso, aceite o convite do Eremita: faça amizade com o seu silêncio e descubra a riqueza que existe na sua própria companhia.\nSe essa melancolia fosse um lugar seguro, como uma caverna ou um templo, o que você encontraria guardado lá dentro?"
    },
    'Medo': {
        imagem: 'A Força.jpg',
        texto: "Quando você tem medo, seu \"leão interno\" ruge para tentar protegê-la de uma ameaça. \nA Força ensina que tentar brigar com o medo (dizendo \"eu não posso sentir isso\") só deixa esse leão mais agressivo. Tentar suprimir o medo à força só o torna maior. \nA Força convida você a fazer o oposto: aproxime-se do seu medo como quem se aproxima de um animal ferido. Ele não está rugindo por maldade, mas por instinto de defesa. Converse com essa parte de si mesma. Diga a ela que você está no comando e que é seguro avançar. Quando você para de lutar contra o medo e o acolhe, ele deixa de ser um inimigo e se torna o combustível da sua superação.\nQual é o passo minúsculo que você consegue dar hoje apenas para mostrar a si mesma que o medo não é o dono da situação?\n\nO que esse medo está tentando proteger em você que é tão valioso e importante?"
    },
    'Medo da escassez': {
        imagem: 'Rei de Ouros.jpg',
        texto: "O medo da escassez é uma sombra que tenta te convencer de que a fonte vai secar e de que você não será capaz de lidar com o amanhã. \nO Rei de Ouros lembra que a prosperidade não é apenas sobre o saldo bancário, mas sobre uma postura interna de valor. Quando você vive com o medo, você bloqueia a sua criatividade e a sua capacidade de ver oportunidades. O Rei convida você a olhar para o que já conquistou com gratidão, e não com medo de perder. Ele lembra que a verdadeira segurança não vem de acumular por pânico, mas de confiar na sua própria competência para plantar e colher sempre que necessário. Ele convida você a sair da vibração de \"sobrevivência\" e entrar na vibração de \"gestão\".\nO que você já possui hoje (seja material, talento ou afeto) que é valioso e abundante, mas que o medo da falta está impedindo você de desfrutar?"
    },
    'Medo de se expor': {
        imagem: 'Rei de Paus.jpg',
        texto: "O medo de se expor muitas vezes vem da crença de que, se formos vistos, seremos julgados ou atacados. \nO Rei de Paus ensina que, quando você se esconde, você não está sendo humilde; você está privando o mundo da sua contribuição única. O antídoto para o medo da exposição é mudar o foco: pare de pensar em \"como vão me olhar\" e comece a pensar em \"o que eu tenho para entregar\". \nA autoconfiança que não nasce da perfeição, mas da autenticidade. O medo de se expor é natural, mas ele não pode dirigir as suas escolhas. O Rei de Paus convida você a assumir a sua voz e a sua verdade. Você não precisa agradar a todos, mas precisa ser fiel a quem você é. Lembre-se: aquilo que você tem a dizer ou mostrar pode ser exatamente o que alguém precisa ouvir hoje. Ocupe o seu espaço.\nSe você soubesse que é impossível ser rejeitada por ser quem é, qual seria a primeira coisa que você mostraria ao mundo hoje?"
    },
    'Procrastinação': {
        imagem: 'Cavaleiro de Ouros.jpg',
        texto: "A procrastinação muitas vezes nasce do perfeccionismo (\"só vou começar quando tiver tempo/inspiração\") ou do desespero (\"é coisa demais para fazer\"). \nO Cavaleiro ensina a quebra da paralisia pelo movimento mínimo. A melhor forma de vencer a inércia não é com grandes saltos de motivação, mas com pequenos passos de disciplina.\nO Cavaleiro de Ouros chega devagar, sem pressa, para te dizer: a vontade não vem antes da ação, ela vem depois que você começa. A procrastinação é o medo disfarçado de preguiça. \nEste Arcano convida você a sair do mundo mental (onde tudo é difícil e cansativo) e vir para o mundo prático. Esqueça o resultado final grandioso. Foque apenas na tarefa minúscula que está bem na sua frente. O segredo deste Cavaleiro é simples: ele nunca para, e por isso ele sempre chega.\nQual é a pequena tarefa que você pode fazer agora em 2 minutos, apenas para quebrar a inércia de estar parada?"
    },
    'Raiva': {
        imagem: 'A Justiça.jpg',
        texto: "Você pode estar sentindo uma indignação queimando no peito, uma vontade de gritar ou de revidar porque algo lhe pareceu profundamente errado. \nA Justiça aparece com sua espada erguida não para te dizer para 'se acalmar', mas para te perguntar: o que exatamente está fora de lugar? \nA raiva é o sistema de alarme da sua alma sinalizando que um limite foi cruzado ou que um valor foi desrespeitado. Este Arcano convida você a não desperdiçar essa energia poderosa em explosões que só trazem mais caos. Use a sua raiva com inteligência. Pegue a espada da Justiça e corte o que precisa ser cortado — seja uma relação tóxica, um comportamento abusivo ou uma expectativa irreal. A raiva bem direcionada não destrói; ela restaura o equilíbrio e coloca as coisas no seu devido lugar.\nQual limite importante para você foi invadido nesta situação e que a sua raiva está tentando desesperadamente proteger agora?\nSe você tirasse a emoção do momento e olhasse apenas para os fatos crus, qual é a verdade sobre essa situação que você precisa aceitar para seguir em frente?"
    },
    'Resistência à mudança': {
        imagem: 'A Morte.jpg',
        texto: "O Arcano A Morte é o pesadelo de quem tenta controlar a vida, mas é a libertadora de quem aceita fluir. Para a resistência à mudança, ela traz uma mensagem biológica e inegável: nada estático sobrevive.\nA resistência é a tentativa dolorosa de manter vivo algo que já cumpriu o seu ciclo. A Morte ensina que o fim não é um erro, mas a condição necessária para o novo começo.\nVocê pode estar segurando com todas as forças algo que a vida está tentando levar embora, e essa resistência está te causando dor. A resistência à mudança é o medo de enfrentar o vazio entre o que foi e o que será. A Morte convida você a honrar o que foi vivido e abrir as mãos para receber o futuro.\nO que você está tentando manter vivo artificialmente na sua vida pelo medo de descobrir quem você será sem isso?"
    },
    'Sensação de estagnação': {
        imagem: 'A Roda da Fortunajpg.jpg',
        texto: "A Roda da Fortuna é o lembrete cósmico de que \"isso também passará\". Para a sensação de estagnação, este Arcano traz uma mensagem de esperança dinâmica: a única constante do Universo é o movimento.\nSe você está parado agora, é apenas porque A Roda está completando uma volta. A estagnação não é um estado permanente, é apenas o intervalo antes da próxima virada. Quando sentimos que estamos estagnados, é como se estivéssemos fixos num ponto da roda. Mas o Arcano diz: \"Olhe mais de perto, as engrenagens estão se movendo\".\nSe hoje você sente que está na parte de baixo da roda, sem movimento, saiba que a própria natureza da roda é girar. A física da vida impede que qualquer coisa fique parada para sempre.\nQual porta ou oportunidade você tem mantido fechada por descrença, orgulho ou teimosia, mas que poderia ser exatamente por onde A Roda quer trazer o novo para você?"
    },
    'Solidão': {
        imagem: 'Os Enamoradosjpg.jpg',
        texto: "A solidão pode parecer um deserto frio, no qual você procura desesperadamente por alguém que venha preencher o seu vazio. \nMas Os Enamorados surgem, sob a bênção do anjo, para te propor uma mudança de perspectiva: e se o amor da sua vida for, antes de tudo, você mesma? Este Arcano não nega o desejo de parceria, mas lembra que nenhuma relação externa pode curar uma desconexão interna. A solidão muitas vezes é o sintoma de que você se abandonou em algum lugar do caminho. \nOs Enamorados convidam você a fazer as pazes com o seu próprio reflexo. Antes de buscar o 'outro', busque a si mesma. Trate-se com o carinho, a paciência e o romance que você espera receber de fora. Quando você se preenche de si, a presença do outro se torna um transbordar, sem a necessidade de preencher.\n\nComo você trataria a si mesma hoje — que lugares visitaria, que comida faria, que palavras diria — se decidisse ser o grande amor da sua própria vida por um dia?\nQual parte da sua personalidade você rejeitou ou escondeu para tentar agradar os outros, e que agora precisa ser reintegrada para que você se sinta inteira de novo?\nSe a solidão fosse um convite para um encontro exclusivo com a sua própria alma, o que você descobriria sobre si mesma que a correria do dia a dia esconde?"
    },
    'Tristeza': {
        imagem: 'O Sol.jpg',
        texto: "Quando a tristeza se instala, ela parece uma noite eterna que nos faz esquecer como é a luz do dia. Mas O Sol brilha te trazendo uma verdade absoluta: nenhuma escuridão dura para sempre. \nO Sol não pede que você ignore a sua dor ou force um sorriso falso. Ele apenas pede que você se lembre de que a vida é cíclica. Assim como o astro rei não deixa de existir quando está nublado, a sua alegria e vitalidade também não desapareceram — elas apenas estão aguardando o momento de romper as nuvens. Este Arcano é um abraço quente do Universo, lembrando que você foi feita para o calor, para a luz e para a vida. Se deixe aquecer.\nQual parte luminosa da sua história a tristeza está encobrindo, mas que continua viva aí dentro?"
    },
    'Vergonha': {
        imagem: 'Rainha de Copas.jpg',
        texto: "A vergonha é uma emoção que nos faz querer desaparecer e nos diz que há algo de errado conosco. Ela cresce no segredo e no julgamento. \nA Rainha de Copas vem te dizer: \"Traga isso para a luz, é humano\". Ela ensina que a cura para a vergonha não é a perfeição, mas a autoaceitação. Ela é o abraço seguro onde você pode confessar seus \"erros\" e descobrir que ainda é digna de amor. Ela representa a capacidade de olhar para as nossas partes \"inaceitáveis\" com ternura.\nA Rainha de Copas convida você a olhar para essa parte de si mesma que está ferida e envergonhada, com a gentileza de uma mãe que cuida de um filho machucado. \nÉ seguro ser imperfeita. É seguro sentir o que você sente. A sua vulnerabilidade não é o seu defeito; é a porta por onde o amor pode finalmente entrar.\nSe uma pessoa que você ama profundamente lhe contasse que sente essa mesma vergonha, o que você diria para acolhê-la? \nE por que você não diz isso a si mesma?"
    }
};

// Função para quando o usuário clicar em uma emoção na lista
function selecionar(emocao) {
    // Salva a emoção escolhida na memória do navegador
    localStorage.setItem('emocaoEscolhida', emocao);
    // Redireciona para a página de leitura
    window.location.href = 'tiragem.html';
}

// Função para carregar a leitura quando a tiragem.html abrir
function carregarLeitura() {
    const emocaoEscolhida = localStorage.getItem('emocaoEscolhida');

    // Se o usuário entrou direto na tiragem sem escolher, manda ele voltar
    if (!emocaoEscolhida || !dadosTarot[emocaoEscolhida]) {
        window.location.href = 'emocoes.html';
        return;
    }

    const leitura = dadosTarot[emocaoEscolhida];

    // Puxando os elementos da tela
    const imagemElemento = document.getElementById('imagem-carta-real');
    const placeholder = document.getElementById('placeholder-carta');
    const textoElemento = document.getElementById('texto-carta');

    // Mudar a imagem passando o nome exato do arquivo (dentro da pasta imagens)
    imagemElemento.src = 'imagens/' + leitura.imagem;

    // Mostra a imagem real e esconde o placeholder
    imagemElemento.onload = function () {
        imagemElemento.style.display = 'block';
        placeholder.style.display = 'none';
    };

    // Formatar o texto para pular uma linha antes da pergunta final
    let textoFormatado = leitura.texto;

    // Substitui quebras de linha existentes ( \n ) por duas quebras HTML para dar o espaço visual
    textoFormatado = textoFormatado.replace(/\n+/g, '<br><br>');

    // Se o texto não tinha \n antes da pergunta final, forçamos a quebra:
    // Regex procura: (Ponto final ou exclamação) + (Espaço) + (Frase que termina em ?) no final do texto
    textoFormatado = textoFormatado.replace(/([.!?])\s+([A-ZÉÓÁÍÚ][^.!?]*\?)$/, '$1<br><br>$2');

    // Colocar o texto usando innerHTML para o HTML ler os <br>
    textoElemento.innerHTML = textoFormatado;

    // ----------- INJEÇÃO DA RECOMENDAÇÃO AMAZON -----------
    const containerAmazon = document.getElementById('container-amazon');
    if (containerAmazon) {
        // Encontra qual é o ID do produto para esta carta, se não achar usa 'vela_mar' como padrão seguro
        const produtoId = mapeamentoProdutos[leitura.imagem] || 'vela_mar'; 
        const produto = produtosAmazon.find(p => p.id === produtoId);
        
        if (produto) {
            containerAmazon.innerHTML = `
                <div class="cartao-amazon">
                    <p class="amazon-disclaimer">✨ Para o seu momento ✨</p>
                    <div class="amazon-conteudo">
                        <div class="amazon-icone">${produto.icone}</div>
                        <div class="amazon-textos">
                            <h4>${produto.titulo}</h4>
                            <p>${produto.texto}</p>
                            <a href="${produto.link}" target="_blank" class="botao-amazon">Ver na Amazon</a>
                        </div>
                    </div>
                </div>
            `;
            containerAmazon.style.display = 'block';
        }
    }
}
