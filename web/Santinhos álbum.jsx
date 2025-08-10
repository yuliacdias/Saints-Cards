import React, { useState } from "react";

// Santinhos — Álbum Interativo (single-file React component)
// Requisitos: Tailwind CSS disponível no projeto

const saintsData = [
  { slug: 'sao-pedro', name: 'São Pedro', patron: 'Apóstolos; pescadores',
    img: 'https://via.placeholder.com/240?text=São+Pedro',
    history: 'Discípulo de Jesus; considerado o primeiro Papa pela tradição; martirizado em Roma.',
    prayer: 'São Pedro, guia-nos na fé e na fidelidade a Cristo.' },

  { slug: 'sao-paulo', name: 'São Paulo', patron: 'Missionários; teólogos',
    img: 'https://via.placeholder.com/240?text=São+Paulo',
    history: 'Apóstolo dos gentios; autor de várias cartas do Novo Testamento; grande evangelizador.',
    prayer: 'São Paulo, inflama em nós ardor missionário.' },

  { slug: 'sao-joao', name: 'São João Evangelista', patron: 'Escritores; teólogos',
    img: 'https://via.placeholder.com/240?text=São+João',
    history: 'Autor do Evangelho segundo João e do Apocalipse; apóstolo amado por Jesus.',
    prayer: 'São João, ensina-nos a amar com ternura evangélica.' },

  { slug: 'sao-tiago', name: 'São Tiago Maior', patron: 'Peregrinos; Espanha',
    img: 'https://via.placeholder.com/240?text=São+Tiago',
    history: 'Apóstolo e mártir; sua tradição está ligada ao Caminho de Santiago.',
    prayer: 'São Tiago, protege nossos caminhos e peregrinações.' },

  { slug: 'sao-tomas', name: 'São Tomás', patron: 'Construtores; doutores da fé',
    img: 'https://via.placeholder.com/240?text=São+Tomás',
    history: 'Apóstolo conhecido por pedir sinais; evangelizou na Índia.',
    prayer: 'São Tomás, concede-nos fé que busca a razão.' },

  { slug: 'nossa-senhora', name: 'Nossa Senhora', patron: 'Mães; Igreja',
    img: 'https://via.placeholder.com/240?text=Nossa+Senhora',
    history: 'Mãe de Jesus; modelo supremo de obediência e amor a Deus.',
    prayer: 'Mãe Santíssima, intercede por nós junto a teu Filho.' },

  { slug: 'sao-jose', name: 'São José', patron: 'Trabalhadores; família',
    img: 'https://via.placeholder.com/240?text=São+José',
    history: 'Esposo da Virgem Maria e guardião de Jesus; exemplo de trabalho e coragem silenciosa.',
    prayer: 'São José, protege as famílias e abençoa nosso trabalho.' },

  { slug: 'santo-antonio', name: 'Santo Antônio de Pádua', patron: 'Coisas perdidas; pregadores',
    img: 'https://via.placeholder.com/240?text=Santo+Antônio',
    history: 'Franciscano conhecido pela pregação e milagres; devoção popular universal.',
    prayer: 'Santo Antônio, ajuda-nos a encontrar o que perdemos.' },

  { slug: 'sao-francisco', name: 'São Francisco de Assis', patron: 'Animais; ecologia',
    img: 'https://via.placeholder.com/240?text=São+Francisco',
    history: 'Fundador dos Franciscanos; viveu pobreza radical e amor à criação.',
    prayer: 'São Francisco, ensina-nos a cuidar da criação.' },

  { slug: 'santa-clara', name: 'Santa Clara', patron: 'Televisão; pobres',
    img: 'https://via.placeholder.com/240?text=Santa+Clara',
    history: 'Seguidora de Francisco; fundadora das Clarissas; vida de oração e pobreza.',
    prayer: 'Santa Clara, dá-nos simplicidade e confiança em Deus.' },

  { slug: 'teresinha', name: 'Santa Teresinha do Menino Jesus', patron: 'Missões; floristas',
    img: 'https://via.placeholder.com/240?text=Terezinha',
    history: 'Promoveu a "pequena via" da santidade; doutora da Igreja.',
    prayer: 'Santa Teresinha, ensina-nos a santidade nas pequenas coisas.' },

  { slug: 'santo-agostinho', name: 'Santo Agostinho', patron: 'Teólogos; filósofos',
    img: 'https://via.placeholder.com/240?text=Agostinho',
    history: 'Bispo de Hipona; autor das "Confissões"; grande pensador cristão.',
    prayer: 'Santo Agostinho, guia nossos pensamentos à verdade.' },

  { slug: 'santa-monica', name: 'Santa Mônica', patron: 'Mães; esposas',
    img: 'https://via.placeholder.com/240?text=Santa+Mônica',
    history: 'Mãe de Agostinho; exemplo de perseverança na oração pela conversão dos filhos.',
    prayer: 'Santa Mônica, intercede por mães e famílias aflitas.' },

  { slug: 'sao-bento', name: 'São Bento', patron: 'Monásticos; Europa',
    img: 'https://via.placeholder.com/240?text=São+Bento',
    history: 'Fundador do monaquismo ocidental; autor da Regra: ora et labora.',
    prayer: 'São Bento, protege-nos com tua sabedoria e oração.' },

  { slug: 'santa-escolastica', name: 'Santa Escolástica', patron: 'Monjas; educação',
    img: 'https://via.placeholder.com/240?text=Escolástica',
    history: 'Irmã de Bento; viveu em profunda amizade e oração contemplativa.',
    prayer: 'Santa Escolástica, obtém-nos amor à vida contemplativa.' },

  { slug: 'santo-dominico', name: 'Santo Domingo', patron: 'Pregação; rosário',
    img: 'https://via.placeholder.com/240?text=Domingos',
    history: 'Fundador dos Dominicanos; dedicado ao estudo e à pregação do Evangelho.',
    prayer: 'Santo Domingo, inspira-nos a proclamar o Evangelho.' },

  { slug: 'santa-catarina-de-siena', name: 'Santa Catarina de Sena', patron: 'Doentes; enfermeiros',
    img: 'https://via.placeholder.com/240?text=Catarina+de+Siena',
    history: 'Mística e doutora da Igreja; teve grande atuação pastoral e política na Itália.',
    prayer: 'Santa Catarina, dá-nos coragem para servir os sofredores.' },

  { slug: 'santa-teresa-de-avila', name: 'Santa Teresa d\'Ávila', patron: 'Místicas; escritoras',
    img: 'https://via.placeholder.com/240?text=Teresa+de+Ávila',
    history: 'Reformadora carmelita; doutora da Igreja; mestra de oração contemplativa.',
    prayer: 'Santa Teresa, guia-nos no caminho da oração profunda.' },

  { slug: 'santo-inacio', name: 'Santo Inácio de Loyola', patron: 'Exercícios espirituais; jesuítas',
    img: 'https://via.placeholder.com/240?text=Inácio+de+Loyola',
    history: 'Fundador da Companhia de Jesus; autor dos Exercícios Espirituais.',
    prayer: 'Santo Inácio, ajuda-nos a encontrar Deus em todas as coisas.' },

  { slug: 'sao-joao-bosco', name: 'São João Bosco', patron: 'Juventude; educação',
    img: 'https://via.placeholder.com/240?text=João+Bosco',
    history: 'Fundador dos Salesianos; dedicado à educação e proteção de jovens em risco.',
    prayer: 'São João Bosco, protege e guia nossos jovens.' },

  { slug: 'padre-pio', name: 'Santo Pio de Pietrelcina (Padre Pio)', patron: 'Sofredores; sacramentos',
    img: 'https://via.placeholder.com/240?text=Padre+Pio',
    history: 'Capuchinho conhecido pelos estigmas, vida de oração e ministério de confissão.',
    prayer: 'Padre Pio, intercede pelos enfermos e pelos que confessam.' },

  { slug: 'sao-sebastiao', name: 'São Sebastião', patron: 'Atletas; soldados',
    img: 'https://via.placeholder.com/240?text=São+Sebastião',
    history: 'Mártir romano frequentemente invocado contra epidemias e perigos.',
    prayer: 'São Sebastião, dá-nos coragem diante da provação.' },

  { slug: 'santa-lucia', name: 'Santa Lúcia', patron: 'Visão; oftalmologia',
    img: 'https://via.placeholder.com/240?text=Santa+Lúcia',
    history: 'Mártir invocada pela proteção da vista e pela luz espiritual.',
    prayer: 'Santa Lúcia, ilumina nossa visão material e espiritual.' },

  { slug: 'santa-ines', name: 'Santa Inês', patron: 'Jovens; castidade',
    img: 'https://via.placeholder.com/240?text=Santa+Inês',
    history: 'Jovem mártir que simboliza pureza e firmeza na fé.',
    prayer: 'Santa Inês, fortalece nossos votos de pureza e firmeza.' },

  { slug: 'santa-cecilia', name: 'Santa Cecília', patron: 'Músicos; poetas',
    img: 'https://via.placeholder.com/240?text=Santa+Cecília',
    history: 'Virgem e mártir associada à música sacra e litúrgica.',
    prayer: 'Santa Cecília, inspira-nos a louvar a Deus com música.' },

  { slug: 'sao-cristovao', name: 'São Cristóvão', patron: 'Viajantes; motoristas',
    img: 'https://via.placeholder.com/240?text=São+Cristóvão',
    history: 'Tradicional protetor de viajantes; imagem popular em estradas e veículos.',
    prayer: 'São Cristóvão, protege-nos em nossas viagens.' },

  { slug: 'santa-barbara', name: 'Santa Bárbara', patron: 'Mineiros; explosões',
    img: 'https://via.placeholder.com/240?text=Santa+Bárbara',
    history: 'Mártir invocada contra morte súbita e perigos relacionados a explosões.',
    prayer: 'Santa Bárbara, protege-nos contra perigos repentinos.' },

  { slug: 'sao-nicolau', name: 'São Nicolau', patron: 'Crianças; marinheiros',
    img: 'https://via.placeholder.com/240?text=São+Nicolau',
    history: 'Bispo generoso que ajudou os pobres; figura histórica que inspirou o Papai Noel.',
    prayer: 'São Nicolau, inspira gestos de caridade em nossos corações.' },

  { slug: 'sao-jorge', name: 'São Jorge', patron: 'Soldados; agricultores',
    img: 'https://via.placeholder.com/240?text=São+Jorge',
    history: 'Mártir famoso pela imagem simbólica da luta contra o mal; devoção popular.',
    prayer: 'São Jorge, defende-nos contra as forças do mal.' },

  { slug: 'sao-martinho', name: 'São Martinho de Tours', patron: 'Soldados; caridade',
    img: 'https://via.placeholder.com/240?text=São+Martinho',
    history: 'Conhecido por dividir seu manto com um pobre; tornou-se bispo e modelo de caridade.',
    prayer: 'São Martinho, ensina-nos a partilha e compaixão.' },

  { slug: 'santa-elizabeth', name: 'Santa Isabel de Hungria', patron: 'Caridade; hospitais',
    img: 'https://via.placeholder.com/240?text=Santa+Elizabeth',
    history: 'Princesa que dedicou sua vida aos pobres e enfermos; grande exemplo de serviço.',
    prayer: 'Santa Isabel, interpõe-te pelos pobres e doentes.' },

  { slug: 'sao-vicente', name: 'São Vicente de Paulo', patron: 'Caridade; assistência social',
    img: 'https://via.placeholder.com/240?text=São+Vicente',
    history: 'Fundador de instituições de caridade; dedicado ao serviço dos pobres.',
    prayer: 'São Vicente, inflama-nos com caridade eficaz.' },

  { slug: 'sao-jeronimo', name: 'São Jerônimo', patron: 'Tradutores; estudiosos',
    img: 'https://via.placeholder.com/240?text=São+Jerônimo',
    history: 'Tradutor da Vulgata; grande estudioso das Escrituras.',
    prayer: 'São Jerônimo, guia-nos no estudo e amor pela Palavra.' },

  { slug: 'santo-ambrosio', name: 'Santo Ambrósio', patron: 'Bispos; pregadores',
    img: 'https://via.placeholder.com/240?text=Ambrósio',
    history: 'Bispo de Milão e grande pregador do século IV.',
    prayer: 'Santo Ambrósio, dá-nos zelo pela verdade do Evangelho.' },

  { slug: 'sao-gregorio', name: 'São Gregório Magno', patron: 'Papas; músicos',
    img: 'https://via.placeholder.com/240?text=Gregório',
    history: 'Papa reformador e promotor do canto gregoriano.',
    prayer: 'São Gregório, ajuda a Igreja a cantar a glória de Deus.' },

  { slug: 'santa-rosa', name: 'Santa Rosa de Lima', patron: 'América Latina; floristas',
    img: 'https://via.placeholder.com/240?text=Rosa+de+Lima',
    history: 'Primeira santa do continente americano; vida de penitência e amor a Deus.',
    prayer: 'Santa Rosa, ensina-nos entrega amorosa a Deus.' },

  { slug: 'sao-martim-de-porres', name: 'São Martim de Porres', patron: 'Barbeiros; justiça racial',
    img: 'https://via.placeholder.com/240?text=Martim+de+Porres',
    history: 'Dominicano peruano conhecido por caridade e cuidado dos pobres.',
    prayer: 'São Martim, guia-nos na fraternidade e serviço aos pobres.' },

  { slug: 'sao-juan-diego', name: 'São Juan Diego', patron: 'Indígenas; mensageiros',
    img: 'https://via.placeholder.com/240?text=Juan+Diego',
    history: 'Vidente de Guadalupe; figura central na evangelização das Américas.',
    prayer: 'São Juan Diego, ajuda-nos a testemunhar com humildade.' },

  { slug: 'kateri-tekakwitha', name: 'Santa Kateri Tekakwitha', patron: 'Ambientalistas; povos indígenas',
    img: 'https://via.placeholder.com/240?text=Kateri',
    history: 'Primeira santa indígena da América do Norte; vivida devoção e penitência.',
    prayer: 'Santa Kateri, protege os povos originários e a criação.' },

  { slug: 'santa-rita', name: 'Santa Rita de Cássia', patron: 'Casos impossíveis; mães',
    img: 'https://via.placeholder.com/240?text=Santa+Rita',
    history: 'Conhecida por unir sofrimento a oração; intercessora em causas difíceis.',
    prayer: 'Santa Rita, intercede nos casos que parecem impossíveis.' },

  { slug: 'santa-dymphna', name: 'Santa Dymphna', patron: 'Doença mental; nervos',
    img: 'https://via.placeholder.com/240?text=Dymphna',
    history: 'Mártir invocada para auxílio em transtornos mentais e emocionais.',
    prayer: 'Santa Dymphna, conforta os que sofrem com enfermidades da mente.' },

  { slug: 'santa-filomena', name: 'Santa Filomena', patron: 'Juventude; curas',
    img: 'https://via.placeholder.com/240?text=Filomena',
    history: 'Jovem mártir com forte devoção popular e relatos de graças.',
    prayer: 'Santa Filomena, protege a juventude e suplica por curas.' },

  { slug: 'sao-bras', name: 'São Brás', patron: 'Doenças da garganta',
    img: 'https://via.placeholder.com/240?text=São+Brás',
    history: 'Bispo e mártir conhecido pela bênção das gargantas contra males.',
    prayer: 'São Brás, protege nossa voz e saúde da garganta.' },

  { slug: 'santa-ana', name: 'Santa Ana', patron: 'Avós; gestantes',
    img: 'https://via.placeholder.com/240?text=Santa+Ana',
    history: 'Mãe da Virgem Maria; modelo de confiança em Deus na espera.',
    prayer: 'Santa Ana, acompanha as famílias e avós.' },

  { slug: 'sao-joaquim', name: 'São Joaquim', patron: 'Pais; família',
    img: 'https://via.placeholder.com/240?text=São+Joaquim',
    history: 'Pai da Virgem Maria; exemplo de fidelidade familiar.',
    prayer: 'São Joaquim, fortalece os pais na educação cristã.' },

  { slug: 'margaret-mary', name: 'Santa Margarida Maria Alacoque', patron: 'Devoção ao Sagrado Coração',
    img: 'https://via.placeholder.com/240?text=Margarida+Maria',
    history: 'Promotora da devoção ao Sagrado Coração de Jesus após revelações particulares.',
    prayer: 'Santa Margarida Maria, inflama-nos no amor ao Sagrado Coração.' },

  { slug: 'josephine-bakhita', name: 'Santa Josefina Bakhita', patron: 'Vítimas de tráfico; Sudão',
    img: 'https://via.placeholder.com/240?text=Josefina+Bakhita',
    history: 'Foi escravizada e libertada; tornou-se religiosa e símbolo de esperança.',
    prayer: 'Santa Bakhita, protege as vítimas e dá-lhes dignidade.' },

  { slug: 'maximilian-kolbe', name: 'São Maximiliano Kolbe', patron: 'Prisioneiros; imprensa',
    img: 'https://via.placeholder.com/240?text=Maximilian+Kolbe',
    history: 'Franciscano que deu a vida por outro prisioneiro em Auschwitz.',
    prayer: 'São Maximiliano, ensina-nos o dom do sacrifício por amor.' },

  { slug: 'edith-stein', name: 'Santa Edith Stein (Teresa Benedicta da Cruz)', patron: 'Filósofos; vítimas do Holocausto',
    img: 'https://via.placeholder.com/240?text=Edith+Stein',
    history: 'Filósofa judia convertida; carmelita martirizada em Auschwitz.',
    prayer: 'Santa Edith, pela união de fé e razão, protege os perseguidos.' },

  { slug: 'oscar-romero', name: 'São Óscar Romero', patron: 'Bispos; defensores dos pobres',
    img: 'https://via.placeholder.com/240?text=Óscar+Romero',
    history: 'Arcebispo salvadorenho assassinado por denunciar injustiças e violência.',
    prayer: 'São Óscar, dá voz aos que não têm voz e protege os pobres.' },

  { slug: 'sao-aloisio', name: 'São Aloísio Gonzaga', patron: 'Juventude; estudantes',
    img: 'https://via.placeholder.com/240?text=Aloísio+Gonzaga',
    history: 'Jovem jesuíta conhecido por pureza e serviço aos doentes.',
    prayer: 'São Aloísio, guia os jovens no seguimento de Cristo.' },

  { slug: 'catherine-laboure', name: 'Santa Catarina Labouré', patron: 'Medalha Milagrosa; caridade',
    img: 'https://via.placeholder.com/240?text=Catarina+Labouré',
    history: 'Recebeu a aparição da Medalha Milagrosa em Paris; grande devoção mariana.',
    prayer: 'Santa Catarina, apresenta-nos ao Imaculado Coração de Maria.' }
];

export default function SantinhosAlbum() {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (slug) => {
    setFlipped(prev => ({ ...prev, [slug]: !prev[slug] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 p-6">
      <header className="max-w-6xl mx-auto mb-6">
        <h1 className="text-3xl font-extrabold text-center">Santinhos — Álbum Interativo</h1>
        <p className="text-center text-sm mt-2">Clique em uma figurinha para virar e ver a biografia resumida, o que é padroeiro e uma oração breve.</p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {saintsData.map(s => (
          <article key={s.slug} className="relative perspective-1000">
            <button onClick={() => toggleFlip(s.slug)} aria-label={`Virar ${s.name}`} className="focus:outline-none">
              <div className={`relative w-48 h-64 mx-auto transform-style transition-transform duration-700 ${flipped[s.slug] ? 'rotate-y-180' : ''}`}>
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-lg flex flex-col items-center p-3">
                  <img src={s.img} alt={s.name} className="w-36 h-36 object-cover rounded-full border-2 border-gray-200" />
                  <h3 className="mt-3 font-semibold text-center">{s.name}</h3>
                  <p className="text-xs text-center mt-1 text-gray-500">{s.patron}</p>
                  <div className="mt-2 text-xs text-gray-400">(Clique para virar)</div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden bg-gradient-to-b from-sky-50 to-white rounded-2xl shadow-inner p-3 overflow-auto">
                  <h3 className="font-semibold text-sm">Padroeiro de:</h3>
                  <p className="text-xs mb-2">{s.patron}</p>
                  <h4 className="font-semibold text-sm">Breve história</h4>
                  <p className="text-xs mb-2">{s.history}</p>
                  <h4 className="font-semibold text-sm">Oração</h4>
                  <p className="text-xs italic">{s.prayer}</p>
                </div>
              </div>
            </button>
          </article>
        ))}
      </main>

      <footer className="max-w-6xl mx-auto text-center mt-8 text-xs text-gray-500">
        <p>Imagens: substitua os placeholders por imagens de domínio público (Wikimedia Commons) ou por ilustrações próprias em /public/images/.</p>
      </footer>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
}
