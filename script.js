//função que muda o src das imagens para uma com as informações
function info() {
    nome = document.getElementById('nome')
    nome = nome.value

    document.getElementById('username').innerText = nome
    
    document.getElementById('img1').src = "https://github-readme-stats.vercel.app/api?username=" + nome + "&show_icons=true&theme=dark&include_all_commits=true&count_private=true"
    
    document.getElementById('img2').src = "https://github-readme-stats.vercel.app/api/top-langs/?username=" + nome + "&layout=compact&langs_count=7&theme=dark"

    document.getElementById('img3').src = "https://github-readme-stats.vercel.app/api/wakatime?username=" + nome
}