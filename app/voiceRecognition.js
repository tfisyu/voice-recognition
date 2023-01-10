const elNome = document.querySelector('#nomeFalado')

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
recognition.lang = 'pt-Br'
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    let nome = e.results[0][0].transcript
    validResult(nome)
    exibeNome(nome)
}

function exibeNome(nome){
    elNome.innerHTML = `
        <div>você disse</div>
        <span class="box">${nome}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())

const showNames = document.querySelector('.nomes')
const hiddenNames = document.querySelector('.hidden')
const seta = document.querySelector('.fa-angle-down')


showNames.onclick = () => {
    if(hiddenNames.classList.contains('hidden')){
        hiddenNames.classList.remove('hidden')
        seta.classList.replace('fa-angle-down', 'fa-angle-up')
    }else{
        hiddenNames.classList.add('hidden')
        seta.classList.replace( 'fa-angle-up', 'fa-angle-down')
    }
}