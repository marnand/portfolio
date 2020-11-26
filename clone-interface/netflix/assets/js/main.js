function videoUrl(video, title, content) {
    document.getElementById('slider').src = video
    document.getElementById('title').src = title
    switch (content) {
        case 'umbrella':
            content = 'Com a morte do pai, irmãos com poderes extraordinários se reencontram e descobrem surpreendentes segredos de família – além de uma ameaça iminente à humanidade.'
            break
        case 'after': 
            content = 'Desconsolado com a morte da mulher, Tony se transforma num cara insuportável na tentativa de espantar todos que querem ajudá-lo.'
            break
        case 'anne': 
            content = 'O mundo de Green Gables que Anne tanto adora se expande com novas pessoas e emocionantes histórias de amor, perdas e amadurecimento.'
            break
        case 'dark': 
            content = 'Quatro famílias iniciam uma desesperada busca por respostas quando uma criança desaparece e um complexo mistério envolvendo três gerações começa a se revelar.'
            break
        case 'desencanto': 
            content = 'Toda princesa tem seus deveres, mas ela quer mesmo é encher a cara. E com um elfo e um demônio como parceiros, levar o rei à loucura será uma tarefa fácil.'
            break
        case 'high': 
            content = 'Um documentário inédito de seis partes sobre a era de ouro dos videogames, onde designers e artistas por trás de alguns dos jogos mais bem-sucedidos dos anos 80 e 90 falarão de suas experiências na indústria em uma época competitiva, inovadora e divertida.'
            break
        case 'papel': 
            content = 'Um homem misterioso que atende pelo nome de El Profesor, está planejando o maior assalto do século. A fim de realizar o ambicioso plano ele recruta uma gangue de oito pessoas com certas habilidades que não tem nada a perder.'
            break
        case 'narcos': 
            content = 'Assista ao nascimento da guerra ao tráfico no México dos anos 80 na nova saga de "Narcos" e descubra a verdadeira história da ascensão do Cartel de Guadalajara.'
            break
        case 'ozark': 
            content = 'Um consultor financeiro se muda com a família para as montanhas do Missouri com o objetivo de lavar quinhentos milhões de dólares e acalmar um violento traficante.'
            break
        case 'midnight': 
            content = 'Um apresentador de transmissão-espacial visita mundos malucos em seu simulador de universo e explora questões existenciais sobre a vida, a morte e muito mais.'
            break
    }
    document.getElementById('content').innerHTML = content
}