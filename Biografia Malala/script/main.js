
function toggleBiografia() {
        var biografiaContainer = document.getElementById("biografiaContainer");
        var lerMaisBtn = document.getElementById("lerMaisBtn");

        if (biografiaContainer.style.maxHeight) {
            biografiaContainer.style.maxHeight = null;
            lerMaisBtn.innerHTML = "Ler Mais";
        } else {
            biografiaContainer.style.maxHeight = biografiaContainer.scrollHeight + "px";
            lerMaisBtn.innerHTML = "Mostrar Menos";
        }
    }
    

    var textoOriginal = `
        <h2>Malala e o Atentado</h2>
        <p>Em 2010, embora o governo tivesse anunciado a expulsão do Talibã da região do Vale do Swat, no Paquistão, a milícia continuava rondando a área. Malala, que já era conhecida por defender em entrevistas e palestras o direito das meninas à educação, passou a receber ameaças de morte.</p>
        <p>Com 15 anos, Malala estudava na província de Khyber Pakhtunkhwa, No dia 9 de outubro de 2012, enquanto voltava para casa, seu ônibus escolar foi parado por membros do Talibã que subiram a bordo e perguntaram: “Quem é Malala?”. Ninguém respondeu, mas um dos terroristas a reconheceu e disparou três tiros em sua cabeça.</p>            
        <h2>Exílio na Inglaterra</h2>
        <p>Malala foi socorrida e levada para um hospital, onde permaneceu em estado grave. Quando apresentou alguma melhora foi levada para Birmingham, na Inglaterra, para ser tratada em um hospital especializado no atendimento aos feridos de guerra.</p>        
        <p>Malala sobreviveu ao atentado, recuperou-se e não recuou de suas convicções. Tornou-se porta voz de uma causa – o direito à educação. Sua família mudou-se para Birmingham, onde vive exilada.</p>
    `;

    var novoTexto = `
    <h2>Mais informações</h2>    
    <p>Após o atentado, Malala demonstrou uma incrível resiliência e determinação. Sua jornada de ativismo pelo direito à educação continuou a inspirar milhões de pessoas ao redor do mundo. Além disso, ela fundou a Malala Fund, uma organização dedicada a garantir 12 anos de educação gratuita e segura para todas as meninas.</p>
    <p>Após o atentado, Malala demonstrou uma incrível resiliência e determinação. Sua jornada de ativismo pelo direito à educação continuou a inspirar milhões de pessoas ao redor do mundo. Além disso, ela fundou a Malala Fund, uma organização dedicada a garantir 12 anos de educação gratuita e segura para todas as meninas.</p>
    <p>Malala se tornou uma voz poderosa nas Nações Unidas, onde discursou em diversas ocasiões sobre a importância da educação. Seu trabalho incansável foi reconhecido internacionalmente, culminando na concessão do Prêmio Nobel da Paz em 2014, tornando-a a pessoa mais jovem a receber esse prestigioso prêmio.</p>
    <p>Atualmente, Malala continua a lutar por um mundo onde cada criança, independentemente do sexo, tenha acesso a uma educação de qualidade. Seu legado é uma fonte de inspiração para todos aqueles que buscam a justiça e a igualdade.</p>
    `;

    var isTextoOriginal = true;

    function alterarTexto() {
        var biografiaContainer = document.getElementById("biografiaContainer");

        // Alterna entre o texto original e o novo texto
        if (isTextoOriginal) {
            biografiaContainer.innerHTML = novoTexto;
            isTextoOriginal = false;
        } else {
            biografiaContainer.innerHTML = textoOriginal;
            isTextoOriginal = true;
        }
    }


