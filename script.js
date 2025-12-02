// Hero Terminal Typing
const terminal = document.getElementById('terminal-hero');
const text = `root@kali:~# whoami
Your Name
Offensive Security Engineer | OSCP | Burp Certified
Currently exploiting: banks, fintechs, and bad ideas
I don’t knock. I find the open windows.
Available for remote pentest contracts`;
let i = 0;
const type = () => {
    if (i < text.length) {
        terminal.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
        i++;
        setTimeout(type, 50);
    } else {
        terminal.innerHTML += '<span class="blink">|</span>';
    }
};
type();

// Secret Terminal — now works 100% on GitHub Pages
const trigger = document.getElementById('trigger');
const overlay = document.getElementById('secret-terminal');
let history = ['<span style="color:#f00">Root access granted.</span>', 'Type "help" for commands'];

function updateOutput() {
    overlay.querySelector('.output').innerHTML = history.map(l => <div>${l}</div>).join('');
}

trigger.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    overlay.querySelector('input').focus();
    updateOutput();
});

const outputDiv = document.createElement('div');
outputDiv.className = 'output';
const inputLine = document.createElement('div');
inputLine.className = 'input';
inputLine.innerHTML = '<span>> </span>';
const input = document.createElement('input');
inputLine.appendChild(input);
overlay.appendChild(outputDiv);
overlay.appendChild(inputLine);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.trim();
        history.push(> ${cmd});
        let resp = '';
        switch (cmd.toLowerCase()) {
            case 'help': resp = 'whoami | neofetch | nmap | sudo rm -rf / | rickroll | hire me | clear | exit'; break;
            case 'whoami': resp = 'Your Name — Ethical Hacker | OSCP'; break;
            case 'neofetch': resp = 'OS: Kali Linux<br>Shell: zsh<br>Uptime: 1337 days'; break;
            case 'nmap': resp = '1337 ports open — exploit(443) ready'; break;
            case 'sudo rm -rf /': resp = '<span style="color:#f00">Permission denied. Nice try 😈</span>'; break;
            case 'rickroll': window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); resp = 'Never gonna give you up…'; break;
            case 'hire me': resp = 'Opening Calendly…'; window.open('https://calendly.com/yourname', '_blank'); break;
            case 'clear': history = []; updateOutput(); input.value = ''; return;
            case 'exit': overlay.classList.add('hidden'); input.value = ''; return;
            default: resp = command not found: ${cmd};
        }
        history.push(resp);
        updateOutput();
        input.value = '';
    }
});

// Rest of the fun stuff (glitch, form, achievement) stays the same
document.querySelectorAll('.glitch').forEach(c => c.addEventListener('mouseenter', () => console.log('Exploiting…')));
document.querySelector('form').addEventListener('submit', e => { e.preventDefault(); alert('Message encrypted with AES-256. Reply <24h'); });
if (!localStorage.getItem('visited')) { alert('Achievement Unlocked: Found the portfolio +50 XP'); localStorage.setItem('visited', 'true'); }
