// JavaScript goes here.
function nextQuestion(current) {
    document.getElementById(`question${current}`).style.display = 'none';
    document.getElementById(`question${current + 1}`).style.display = 'block';
}

function prevQuestion(current) {
    document.getElementById(`question${current}`).style.display = 'none';
    document.getElementById(`question${current - 1}`).style.display = 'block';
}

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let answers = document.querySelectorAll('input[type="radio"]:checked');
    let counts = {};

    answers.forEach(answer => {
        counts[answer.value] = (counts[answer.value] || 0) + 1;
    });

    let result = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    let resultText;
    let resultImageUrl;

    switch(result) {
        case 'Jotaro':
            resultText = "You are Jotaro Kujo! Strong, silent, and determined. SOO SWAGGY!!";
            resultImageUrl = "https://media.tenor.com/eL8nPe8fje8AAAAM/jojos-bizarre-adventure-jotaro-kujo.gif"; // Replace with actual image URL
            break;
        case 'Joseph':
            resultText = "You are Joseph Joestar! Clever, witty, and always full of surprises. OOOH MAI GOOOOOD";
            resultImageUrl="https://i.pinimg.com/originals/19/1a/ce/191acee2f29e6a53cc06d7ee170483f5.gif"; // Replace with actual image URL
            break;
        case 'Dio':
            resultText = "You are Dio Brando! Ambitious, ruthless, and charismatic.WRYYYYYYYY, MUDA MUDA MUDA!!!!!";
            resultImageUrl = "https://i.pinimg.com/originals/0e/b7/98/0eb79898902ebd45e7248bc7c20be53c.gif"; // Replace with actual image URL
            break;
        case 'Giorno':
            resultText = "You are Giorno Giovanna! Noble, strategic, and caring. I MUST SHARPEN MY RESOLVE!";
            resultImageUrl = "https://media1.tenor.com/m/pzrj8n1mbtkAAAAd/golden-experience.gif" ; // Replace with actual image URL
            break;
        default:
            resultText = "Hmm... something went wrong!";
            resultImageUrl = "https://media.tenor.com/pzrj8n1mbtkAAAAM/golden-experience.gif";
    }

    document.getElementById('result').textContent = resultText;
    if (resultImageUrl) {
        document.getElementById('resultImage').innerHTML = `<img src="${resultImageUrl}" alt="${result}">`;
    } else {
        document.getElementById('resultImage').innerHTML = "";
    }
});